"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ResultsStoriesMarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

// Adapted from the Aceternity UI "Infinite Moving Cards" pattern, reusing
// our own ResultsStoryCard markup/styles instead of its generic card shell.
export function ResultsStoriesMarquee({
  children,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: ResultsStoriesMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );

      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("sliderMask overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "anime flex w-max shrink-0 flex-nowrap gap-4 pb-2",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {React.Children.map(children, (child, i) => (
          <li className="flex shrink-0" key={i}>
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}
