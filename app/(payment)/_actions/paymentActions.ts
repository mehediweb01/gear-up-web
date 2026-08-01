"use server";

import { cookies } from "next/headers";

export const getSinglePayment = async (paymentId: string) => {
  if (!paymentId) {
    return {
      success: false,
      message: "Payment ID is required",
    };
  }

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/${paymentId}`,
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 12,
      },
    },
  );

  const result = await res.json();

  return result;
};
