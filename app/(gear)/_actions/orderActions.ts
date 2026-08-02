"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TOrder } from "../_types/orderTypes";

export const createOrder = async (
  otherData: {
    gearId: string;
    user: {
      data: {
        name: string;
        email: string;
        role: string;
        status: string;
      };
    };
  },
  prevState: TOrder,
  formData: FormData,
) => {
  const quantity = formData.get("quantity");
  const startDate = formData.get("startDate");
  const rentalDays = formData.get("rentalDays");

  const { user, gearId } = otherData;

  if (!user || user?.data?.status !== "ACTIVE") {
     return {
       success: false,
       message: "Please login to place an order.",
     };
  }

  const payload = {
    gearId,
    quantity: Number(quantity),
    startDate,
    rentalDays: Number(rentalDays),
  };

  if (!quantity || !startDate || !rentalDays) {
    return { success: false, message: "All filed are required!" };
  }

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals/create`, {
    method: "POST",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-cache",
    next: {
      revalidate: 0,
    },
  });

  const result = await res.json();

  if (result.success) {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/payments/checkout`,
      {
        method: "POST",
        headers: {
          Cookie: `accessToken=${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: result.data.id,
        }),
      },
    );

    const payInfo = await res.json();

    if (payInfo.success) {
      return redirect(payInfo.data.paymentUrl);
    }
  }

  return result;
};
