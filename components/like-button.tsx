"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

import { LikeIcon } from "./like-icon";

interface LikeButtonProps {
  className?: string;
  liked?: boolean;
}

export function LikeButton({ className, liked }: LikeButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn("w-[100px]", className)}
      variant="outline"
      data-liked={liked}
    >
      {pending ? (
        <Loader2 className="w-5 h-5 text-gray-500 animate-spin" />
      ) : (
        <>
          <LikeIcon className="w-8 h-8 -mx-1 group-hover:scale-105" />
          {liked ? "Liked" : "Like"}
        </>
      )}
    </Button>
  );
}
