"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

import { LikeIcon } from "./like-icon";

interface LikeButtonProps {
  className?: string;
  liked?: boolean;
  action?: () => Promise<void>;
}

export function LikeButton({
  className,
  liked,
  action = async () => {},
}: LikeButtonProps) {
  const [pending, setPending] = useState(false);

  return (
    <Button
      className={cn("w-[100px]", className)}
      variant="outline"
      data-liked={liked}
      disabled={pending}
      onClick={async () => {
        setPending(true);
        await action();
        setPending(false);
      }}
    >
      <LikeIcon className="w-8 h-8 -mx-1 group-hover:scale-105" />
      <span>{liked ? "Liked" : "Like"}</span>
    </Button>
  );
}
