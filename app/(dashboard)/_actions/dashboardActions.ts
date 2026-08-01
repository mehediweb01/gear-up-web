"use server";

import { cookies } from "next/headers";

export const getAllUsers = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/users`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const result = await res.json();

  return result;
};

export const changeUserStatus = async (userId: string, status: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/users/${userId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify({ status }),
    },
  );

  const result = await res.json();

  return result;
};

export const getUserOrders = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const result = await res.json();

  return result;
};

export const getSingleOrder = async (orderId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rentals/${orderId}`,
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
