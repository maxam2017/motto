"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const ONE_YEAR = 60 * 60 * 24 * 365;

export async function toggle() {
  "use server";

  const liked = cookies().get("liked")?.value === "true";

  if (liked) {
    cookies().set("liked", "false", { maxAge: ONE_YEAR });
  } else {
    cookies().set("liked", "true", { maxAge: ONE_YEAR });
  }

  revalidatePath("/");
}

export async function countLikes() {
  "use server";

  const liked = cookies().get("liked")?.value === "true";

  return liked ? 2 : 1;
}
