import React from "react";

type ResultsStarRatingProps = {
  rating: number;
  maxRating?: number;
  className?: string;
};

export default function ResultsStarRating({
  rating,
  maxRating = 5,
  className = "",
}: ResultsStarRatingProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-[0.9em] w-[0.9em] ${
            i < rating ? "text-colorPrimary" : "text-colorSecondaryLight"
          }`}
          fill="currentColor"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.9l-5.2 2.6.99-5.78-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
