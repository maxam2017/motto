import { cookies } from "next/headers";

import { countLikes, toggle } from "@/actions/like";
import { formatNumber } from "@/utils/formatNumber";

import { LikeButton } from "../components/like-button";

export const runtime = "edge";

export default async function Page() {
  const liked = cookies().get("liked")?.value === "true";
  const likeCount = await countLikes();

  return (
    <main className="flex flex-col items-center justify-center flex-1 font-mono">
      <div className="text-2xl md:text-4xl !leading-snug tracking-tighter md:tracking-normal font-medium text-gray-800 pt-4 pl-8 pb-12 text-balance">
        &quot;Be kind and patient. <br />
        Try to understand those you don&apos;t understand.&quot;
      </div>
      <form className="flex flex-col items-center" action={toggle}>
        <LikeButton className="flex items-center gap-2 group" liked={liked} />
      </form>
      <span className="text-xs mt-3 text-gray-500">
        {liked
          ? `You and ${formatNumber(likeCount - 1)} others liked this`
          : `
          ${formatNumber(likeCount)} ${likeCount === 1 ? "person" : "people"} liked this
        `}
      </span>
    </main>
  );
}
