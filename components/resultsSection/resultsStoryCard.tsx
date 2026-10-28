import React from "react";
import { cn } from "@/lib/utils";
import ResultsStarRating from "@/components/resultsSection/resultsStarRating";

type ResultsStoryCardProps = {
  tag: string;
  quote: string;
  attribution: string;
  role?: string;
  showTag?: boolean;
  // Optional star rating (1-5). Only rendered when provided — the
  // homepage marquee/mobile sliders don't pass this, so they stay
  // visually unchanged.
  rating?: number;
  // "slider" (default): fixed vw-based width for the homepage
  // marquee/mobile sliders, where cards sit in a horizontally
  // scrolling row. "grid": fills its grid cell (w-full) instead —
  // required inside a CSS grid, otherwise the fixed vw width makes
  // cards spill over neighboring cells.
  variant?: "slider" | "grid";
};

export default function ResultsStoryCard({
  tag,
  quote,
  attribution,
  role = "",
  showTag = true,
  rating,
  variant = "slider",
}: ResultsStoryCardProps) {
  return (
    <article
      className={cn(
        "mask relative flex h-full shrink-0 flex-col rounded-3xl px-10 py-[0.9em] max-md:px-5 md:rounded-[3rem] md:py-[0.7em]",
        variant === "slider" ? "w-[82vw] md:w-[30vw]" : "w-full",
      )}
    >
      {showTag && tag && (
        <div className="testimonialHeader flex items-center gap-[1em] md:block">
          <p className="max-w-fit justify-center rounded-[30px] bg-colorPrimary px-4 py-2 text-sm font-medium leading-5 tracking-normal text-colorDark md:mt-5">
            {tag}
          </p>
        </div>
      )}
      <p
        className={cn(
          "mt-[0.3em] grow text-[0.8em] tracking-tight max-md:max-w-full",
          variant === "slider" && "line-clamp-6",
        )}
      >
        "{quote}"
      </p>
      <div className="mt-[0.8em] flex flex-col items-end text-right">
        {typeof rating === "number" && (
          <ResultsStarRating rating={rating} className="mb-[0.3em]" />
        )}
        <p className="text-sm font-semibold leading-tight text-colorLight">
          {attribution}
        </p>
        {role && (
          <p className="text-sm leading-tight text-colorSecondaryLight">
            {role}
          </p>
        )}
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-colorSecondaryDark opacity-80"></div>
    </article>
  );
}
