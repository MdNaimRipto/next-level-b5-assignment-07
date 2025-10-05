"use server";

import { apiConfig } from "@/configs/apiConfig";
import { IProjects } from "@/types/projects";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const uploadProject = async ({ payload }: { payload: IProjects }) => {
  const cookieStore = await cookies();
  const res = await fetch(apiConfig.baseUrl + apiConfig.projects.create, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: String(cookieStore.get("accessToken")?.value),
    },
    body: JSON.stringify(payload),
  });
  const result = await res.json();
  console.log(result);
  if (res.ok) {
    revalidateTag("PROJECTS");
    revalidatePath("/dashboard/projects");
  }
  return await result;
};

export const updateProject = async ({
  payload,
  projectId,
}: {
  payload: IProjects;
  projectId: string;
}) => {
  const cookieStore = await cookies();
  const res = await fetch(
    apiConfig.baseUrl + apiConfig.projects.update + `/${projectId}`,
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
    revalidateTag("PROJECTS");
    revalidatePath("/dashboard/projects");
  }
  return await result;
};

export const deleteProject = async ({ projectId }: { projectId: string }) => {
  const cookieStore = await cookies();
  const res = await fetch(
    apiConfig.baseUrl + apiConfig.projects.delete + `/${projectId}`,
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
    revalidateTag("PROJECTS");
    revalidatePath("/dashboard/projects");
  }
  return await result;
};

export const getAllProjects = async () => {
  const res = await fetch(apiConfig.baseUrl + apiConfig.projects.getAll, {
    next: {
      tags: ["PROJECTS"],
    },
  });
  return res.json();
};
