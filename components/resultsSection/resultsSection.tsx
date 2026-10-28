import React from "react";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
import { ResultsWrapper } from "@/components/resultsSection/resultsWrapper";
import type { Stat, Testimonial } from "@/sanity/lib/types";

type ResultsSectionProps = {
  stats: Stat[];
  testimonials: Testimonial[];
};

export function ResultsSection({ stats, testimonials }: ResultsSectionProps) {
  return (
    <section className="section section__4 third darkGradient overflow-hidden px-paddingX py-paddingY text-colorLight">
      <Bulge type="Light" />
      <Header color="Light"></Header>
      <ResultsWrapper stats={stats} testimonials={testimonials} />
    </section>
  );
}
