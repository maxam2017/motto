import { ScrollText } from "lucide-react";

import { LikeButton } from "../components/like-button";

export default function Page() {
  return (
    <>
      <header className="px-6 py-4 text-black">
        <h1 className="flex space-x-2 items-center font-bold text-lg">
          <ScrollText className="w-8 h-8" /> <span>Motto</span>
        </h1>
      </header>
      <div className="flex flex-col items-center justify-center pt-60 font-mono">
        <div className="text-2xl md:text-4xl !leading-snug tracking-tighter md:tracking-normal font-medium text-gray-800 pt-4 pl-8 pb-12 text-balance">
          &quot;Be kind and patient. <br />
          Try to understand those you don&apos;t understand.&quot;
        </div>
        <LikeButton
          className="flex items-center gap-2 group"
          likeCount={0}
          liked={false}
        />
      </div>
    </>
  );
}
