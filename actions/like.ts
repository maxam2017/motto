"use server";

import { cookies } from "next/headers";

import { createRedisClient } from "@/utils/redis";

const ONE_YEAR = 60 * 60 * 24 * 365;

const redisClient = createRedisClient();

export async function toggle() {
  "use server";

  const liked = cookies().get("liked")?.value === "true";

  if (liked) {
    await redisClient.incrby("likes", -1);
    cookies().set("liked", "false", { maxAge: ONE_YEAR });
  } else {
    await redisClient.incrby("likes", 1);
    cookies().set("liked", "true", { maxAge: ONE_YEAR });
  }
}

export async function countLikes() {
  "use server";

  const likes: string | null = await redisClient.get("likes");

  if (likes === null) {
    await redisClient.set("likes", 0);
    return 0;
  }

  return parseInt(likes);
}
