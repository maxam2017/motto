"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { formatNumber } from "@/utils/formatNumber";

import { LikeIcon } from "./like-icon";

interface LikeButtonProps {
  className?: string;
  likeCount: number;
  liked?: boolean;
}

export function LikeButton({
  className,
  likeCount,
  liked: propLiked,
}: LikeButtonProps) {
  const [liked, setLiked] = useState(propLiked);
  const likeCountString = formatNumber(likeCount);

  return (
    <>
      <Button
        className={className}
        variant="outline"
        data-liked={liked}
        onClick={() => setLiked((prev) => !prev)}
      >
        <LikeIcon className="w-8 h-8 -mx-1 group-hover:scale-105" />
        {liked ? "Liked" : "Like"}
      </Button>
      <div className="text-xs mt-3 text-gray-500">
        {liked
          ? `You and ${likeCountString} others liked this`
          : `
          ${likeCountString} ${likeCount === 1 ? "person" : "people"} liked this
        `}
      </div>
    </>
  );
}
