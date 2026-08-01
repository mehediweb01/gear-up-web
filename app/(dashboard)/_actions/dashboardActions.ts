/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidatePath } from "next/cache";
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

export const incomingOrders = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rentals/provider`,
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );

  const result = await res.json();

  return result;
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rentals/${orderId}`,
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

  revalidatePath("/provider-dashboard");

  return result;
};

export const addGear = async (prevState: any, formData: FormData) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return { success: false, message: "You are not logged in!" };
  }

  const image = formData.get("image");
  const title = formData.get("title");
  const brand = formData.get("brand");
  const categoryId = formData.get("category");
  const pricePerDay = formData.get("pricePerDay");
  const description = formData.get("description");
  const stock = formData.get("stock");

  const payload = {
    title,
    brand,
    categoryId,
    pricePerDay: Number(pricePerDay),
    description,
    stock: Number(stock),
    image,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/gear/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  revalidatePath("/provider-dashboard");
  revalidatePath("/");

  return result;
};

export const getProviderGears = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/gear/provider/my-gears`,
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );

  const result = await res.json();

  return result;
};

export const deleteGear = async (gearId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/gear/${gearId}`, {
    method: "DELETE",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const result = await res.json();

  revalidatePath("/provider-dashboard");
  revalidatePath("/");

  return result;
};
