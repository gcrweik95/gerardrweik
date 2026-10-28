import React from "react";
import ResultsStoryCard from "@/components/resultsSection/resultsStoryCard";
import { ResultsStoriesMarquee } from "@/components/resultsSection/resultsStoriesMarquee";
import type { Testimonial } from "@/sanity/lib/types";

type ResultsStoriesStackProps = {
  testimonials: Testimonial[];
};

// Mobile-only: instead of one long vertical stack of all 5 story cards
// (too tall for a single 100dvh slide) or the desktop's single wide
// marquee, #third-next shows 2 small stacked sliders, each looping
// just 2 stories, moving in opposite directions. Cards keep the same
// (non-full-height) sizing as desktop — just arranged differently.
export function ResultsStoriesStack({ testimonials }: ResultsStoriesStackProps) {
  const sliderA = testimonials.slice(0, 2);
  const sliderB = testimonials.slice(2, 4);

  return (
    <div className="anime flex w-full flex-col gap-4">
      <ResultsStoriesMarquee direction="right" speed="slow" pauseOnHover>
        {sliderA.map((story, i) => (
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

      <ResultsStoriesMarquee direction="left" speed="slow" pauseOnHover>
        {sliderB.map((story, i) => (
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
  );
}
