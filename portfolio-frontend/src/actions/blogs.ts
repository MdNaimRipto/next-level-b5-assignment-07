"use server";

import { apiConfig } from "@/configs/apiConfig";
import { IBlogs } from "@/types/blogs";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const uploadBlog = async ({ payload }: { payload: IBlogs }) => {
  const cookieStore = await cookies();
  const res = await fetch(apiConfig.baseUrl + apiConfig.blogs.create, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: String(cookieStore.get("accessToken")?.value),
    },
    body: JSON.stringify(payload),
  });
  const result = await res.json();
  if (res.ok) {
    revalidateTag("BLOGS");
    revalidatePath("/dashboard/blogs");
  }
  return await result;
};

export const updateBlog = async ({
  payload,
  blogId,
}: {
  payload: IBlogs;
  blogId: string;
}) => {
  const cookieStore = await cookies();
  const res = await fetch(
    apiConfig.baseUrl + apiConfig.blogs.update + `/${blogId}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: String(cookieStore.get("accessToken")?.value),
      },
      body: JSON.stringify(payload),
    }
  );
  const result = await res.json();
  console.log(result);
  if (res.ok) {
    revalidateTag("BLOGS");
    revalidatePath("/dashboard/blogs");
  }
  return await result;
};

export const deleteBlog = async ({ blogId }: { blogId: string }) => {
  const cookieStore = await cookies();
  const res = await fetch(
    apiConfig.baseUrl + apiConfig.blogs.delete + `/${blogId}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: String(cookieStore.get("accessToken")?.value),
      },
    }
  );
  const result = await res.json();
  if (res.ok) {
    revalidateTag("BLOGS");
    revalidatePath("/dashboard/blogs");
  }
  return await result;
};

export const getAllBlogs = async () => {
  const res = await fetch(apiConfig.baseUrl + apiConfig.blogs.getAll, {
    next: {
      tags: ["BLOGS"],
    },
  });
  return res.json();
};
