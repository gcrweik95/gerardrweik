import React from "react";

type ResultsStatCardProps = {
  value: string;
  label: string;
};

export default function ResultsStatCard({ value, label }: ResultsStatCardProps) {
  return (
    <div className="mask relative rounded-3xl px-8 py-[0.9em] max-md:px-5 md:rounded-[3rem] md:py-[1em]">
      <p className="text-[length:var(--fontBig)] font-bold leading-none text-colorLight">
        {value}
      </p>
      <p className="mt-[0.6em] text-sm leading-5 tracking-normal text-colorSecondaryLight">
        {label}
      </p>
      <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-3xl bg-colorSecondaryDark opacity-80 md:rounded-[3rem]"></div>
    </div>
  );
}
