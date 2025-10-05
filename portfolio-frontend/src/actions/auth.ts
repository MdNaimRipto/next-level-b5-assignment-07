"use server";

import { apiConfig } from "@/configs/apiConfig";
import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const login = async (data: FieldValues) => {
  const res = await fetch(`${apiConfig.baseUrl}${apiConfig.admin.login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.error("Login Failed", await res.text());
  }

  const result = await res.json();

  if (res.ok) {
    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.data.accessToken, {
      maxAge: 3600000,
    });
    cookieStore.set("refreshToken", result.data.refreshToken, {
      maxAge: 3600000,
    });
    revalidateTag("AUTH");
  }
  return result;
};

export const getMe = async () => {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("accessToken");
  const res = await fetch(`${apiConfig.baseUrl}${apiConfig.admin.me}`, {
    headers: {
      "content-type": "application/json",
      authorization: String(authCookie?.value),
    },
    next: {
      tags: ["AUTH"],
    },
  });
  console.log({ res });
  return await res.json();
};

export const logout = async () => {
  const res = await fetch(`${apiConfig.baseUrl}${apiConfig.admin.logout}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res?.ok) {
    console.error("Logout Failed", await res.text());
  }

  await res.json();

  if (res.ok) {
    const cookieStore = await cookies();
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");
    revalidateTag("AUTH");
    // redirect("/");
  }
  return null;
};
