"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/contactSection/footer";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Cursor } from "@/components/cursor";
import ResultsStatCard from "@/components/resultsSection/resultsStatCard";
import ResultsStoryCard from "@/components/resultsSection/resultsStoryCard";
import type { Stat, Testimonial } from "@/sanity/lib/types";
import "../index.css";

type ResultsPageClientProps = {
  stats: Stat[];
  testimonials: Testimonial[];
};

export default function ResultsPageClient({
  stats,
  testimonials,
}: ResultsPageClientProps) {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <div className="darkGradient min-h-screen w-full px-paddingX pb-32 pt-paddingY text-colorLight">
        <Header color="Light" />

        <main className="mx-auto flex max-w-maxWidth flex-col gap-16 pt-16 text-[5.8vw] md:text-[clamp(20px,_1vw_+_14px,_32px)]">
          <div className="flex flex-col gap-[0.5em]">
            <h1 className="text-[5.96rem] leading-[1] text-colorLight max-[970px]:text-[2.356rem]">
              Real Results<span className="yellow__it">.</span>
            </h1>
            <p className="max-w-[46em] text-[1.736rem] leading-[1.5] text-colorLight max-[970px]:text-[0.744rem]">
              Every number and quote below comes from the people who actually
              hired me. No vanity metrics, no cherry-picked edits — just what
              happened to their business after we worked together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((stat, i) => (
              <ResultsStatCard key={i} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-[0.9em] font-bold text-colorLight">
              Straight From The People Who Hired Me
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {testimonials.map((story, i) => (
                <ResultsStoryCard
                  key={i}
                  tag={story.tag}
                  variant="grid"
                  quote={story.quote}
                  attribution={story.attribution}
                  role={story.role}
                  rating={story.rating}
                />
              ))}
            </div>
          </div>
        </main>

        <Footer className="relative mt-24" />
      </div>
    </>
  );
}
