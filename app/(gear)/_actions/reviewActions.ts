"use server";

import { cookies } from "next/headers";
import { TGear } from "../_types/gearTypes";

export const createReview = async (
  gearId: string,
  prevState: TGear,
  formData: FormData,
) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const rating = formData.get("rating");
  const comment = formData.get("comment");

  const payload = {
    rating: Number(rating),
    comment,
    gearId,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
    cache: "no-cache",
    next: {
      revalidate: 0,
    },
  });

  const result = await res.json();

  return result;
};
