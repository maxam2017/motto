"use client";

import { toggle } from "@/actions/like";
import { Button } from "@/components/ui/button";
import { formatNumber } from "@/utils/formatNumber";

import { LikeIcon } from "./like-icon";

interface LikeButtonProps {
  className?: string;
  liked?: boolean;
}

export function LikeButton({ className, liked }: LikeButtonProps) {
  return (
    <Button className={className} variant="outline" data-liked={liked}>
      <LikeIcon className="w-8 h-8 -mx-1 group-hover:scale-105" />
      {liked ? "Liked" : "Like"}
    </Button>
  );
}
