import React from "react";
import { HeroSection } from "@/components/heroSection/heroSection";
import { AboutSection } from "@/components/aboutSection/aboutSection";
import { ResultsSection } from "@/components/resultsSection/resultsSection";
import { ResultsStoriesSection } from "@/components/resultsSection/resultsStoriesSection";
import { ContactSection } from "@/components/contactSection/contactSection";

export function Main() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ResultsSection />
      <ResultsStoriesSection />
      <ContactSection />
    </>
  );
}
