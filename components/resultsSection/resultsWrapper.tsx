import React from "react";
import Magentic from "@/components/ui/magentic";
import ResultsStatCard from "@/components/resultsSection/resultsStatCard";
import ResultsStoryCard from "@/components/resultsSection/resultsStoryCard";
import { ResultsStoriesMarquee } from "@/components/resultsSection/resultsStoriesMarquee";
import { links } from "@/data/data";
import type { Stat, Testimonial } from "@/sanity/lib/types";

type ResultsWrapperProps = {
  stats: Stat[];
  testimonials: Testimonial[];
};

export function ResultsWrapper({ stats, testimonials }: ResultsWrapperProps) {
  return (
    <main className="flex h-full w-full max-w-maxWidth grow flex-col justify-center gap-[0.9em] text-[5.8vw] text-colorLight md:text-[clamp(20px,_1vw_+_14px,_32px)]">
      <div className="anime relative flex shrink-0 flex-col gap-[1em] md:flex-row md:items-stretch md:gap-[2em]">
        <div className="flex flex-col gap-[0.5em] md:w-[66%]">
          <h2 className="mask text-[clamp(32px,_3.3vw_+_32px,_88px)] font-bold leading-[1.05] text-colorLight">
            Real Results<span className="yellow__it">.</span>
          </h2>
          <p className="leading-[1.5] text-colorSecondaryLight max-md:text-[0.9em] md:text-[0.5em]">
            Not slide decks. Not vanity metrics. This is what the people who
            hired me actually say happened to their business after we worked
            together.
          </p>
        </div>
        <Magentic
          href={links.results}
          scrambleParams={{
            text: "Read every story",
          }}
          className="mask group flex h-full items-center justify-center rounded-2xl bg-colorLight p-3 max-md:hidden md:relative md:min-h-full md:w-[33%] md:rounded-full"
        >
          <p className="shapka !flex text-[0.9em] text-colorDark md:text-[0.7em]">
            <span className="scrambleText whitespace-nowrap">
              Read every story
            </span>
            <svg
              className="ml-4 w-[0.7em] -rotate-45 text-colorDark"
              viewBox="0 0 14 14"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>arrow-up-right</title>
              <g id="Page-1" stroke="none" strokeWidth="2.5" fill="none" fillRule="evenodd">
                <g
                  id="Artboard"
                  transform="translate(-1019.000000, -279.000000)"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <g
                    id="arrow-up-right"
                    transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                  >
                    <polyline id="Path" points="2.76923077 0 12 0 12 9.23076923"></polyline>
                    <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                  </g>
                </g>
              </g>
            </svg>
          </p>
        </Magentic>
      </div>

      {/* Stat cards: shown on both breakpoints, but on mobile they're the
          section's only remaining content (no marquee) so they just flow
          in-place instead of sharing a flex-1 block with the marquee. */}
      <div className="anime grid shrink-0 grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {stats.map((stat, i) => (
          <ResultsStatCard key={i} value={stat.value} label={stat.label} />
        ))}
      </div>

      {/* Story cards marquee: desktop-only. On mobile the story cards move
          to the dedicated #third-next slide (ResultsStoriesSection) so they
          can render as a normal stacked, scrollable list instead of being
          cropped by this section's fixed 100dvh budget. */}
      <div className="hidden min-h-0 flex-1 flex-col justify-center md:flex">
        <ResultsStoriesMarquee direction="left" speed="slow" pauseOnHover>
          {testimonials.map((story, i) => (
            <ResultsStoryCard
              key={i}
              tag={story.tag}
              quote={story.quote}
              attribution={story.attribution}
              role={story.role}
              showTag={false}
            />
          ))}
        </ResultsStoriesMarquee>
      </div>
    </main>
  );
}
