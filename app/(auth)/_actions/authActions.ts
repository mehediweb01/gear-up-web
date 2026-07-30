/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const loginAction = async (prevState: any, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password");

  const payload = {
    email,
    password,
  };

  if (!email || !password) {
    return { success: false, message: "Input filed are required!" };
  }

  if (!validateEmail(email)) {
    return { success: false, message: "Email is wrong!" };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    redirect("/");
  }

  return result;
};

export const registerAction = async (prevState: any, formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email") as string;
  const password = formData.get("password");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const role = formData.get("role");

  const payload = {
    name,
    email,
    password,
    phone,
    role,
    address,
  };

  if (!name || !email || !password || !phone || !address || !role) {
    return { success: false, message: "All filed are required!" };
  }

  if (!validateEmail(email)) {
    return { success: false, message: "Email is wrong!" };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    redirect("/login");
  }

  return result;
};
