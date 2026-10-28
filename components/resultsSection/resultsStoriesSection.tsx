import React from "react";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
import Magentic from "@/components/ui/magentic";
import { ResultsStoriesStack } from "@/components/resultsSection/resultsStoriesStack";
import { links } from "@/data/data";

// Mobile-only fullpage.js slide. On desktop this section is hidden via
// the `.mobileOnlySection` CSS class (see app/globals.css), so it never
// counts as a visible section for fullpage.js and the existing anchors
// ("first".."twelfth") keep resolving exactly as they do today. On
// mobile it becomes a real, visible slide with its own explicit
// data-anchor="third-next", independent of the positional anchors
// array, holding the story cards that no longer fit inside #third.
export function ResultsStoriesSection({}) {
  return (
    <section
      data-anchor="third-next"
      className="section section__4b mobileOnlySection darkGradient overflow-hidden px-paddingX py-paddingY text-colorLight"
    >
      <Bulge type="Light" />
      <Header color="Light"></Header>
      <main className="flex h-full w-full max-w-maxWidth grow flex-col justify-center gap-[1.4em] text-[5.8vw] text-colorLight">
        <ResultsStoriesStack />

        <Magentic
          href={links.results}
          scrambleParams={{
            text: "Read every story",
          }}
          className="mask anime group flex w-full shrink-0 items-center justify-center rounded-2xl bg-colorLight p-3 px-6"
        >
          <p className="shapka !flex text-[0.9em] text-colorDark">
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
      </main>
    </section>
  );
}
