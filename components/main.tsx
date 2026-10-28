import React from "react";
import { HeroSection } from "@/components/heroSection/heroSection";
import { AboutSection } from "@/components/aboutSection/aboutSection";
import { ResultsSection } from "@/components/resultsSection/resultsSection";
import { ResultsStoriesSection } from "@/components/resultsSection/resultsStoriesSection";
import { ContactSection } from "@/components/contactSection/contactSection";
import type { Stat, Testimonial, TechLogo } from "@/sanity/lib/types";

type MainProps = {
  stats: Stat[];
  testimonials: Testimonial[];
  techLogos: TechLogo[];
};

export function Main({ stats, testimonials, techLogos }: MainProps) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ResultsSection stats={stats} testimonials={testimonials} />
      <ResultsStoriesSection testimonials={testimonials} />
      <ContactSection techLogos={techLogos} />
    </>
  );
}
