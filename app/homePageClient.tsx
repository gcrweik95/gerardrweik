"use client";
import { Main } from "@/components/main";
import { Cursor } from "@/components/cursor";
import FullpageProvider from "@/components/fullpageProvider";
import { HeaderNavigation } from "@/components/headerNavigation";
import type { Stat, Testimonial, TechLogo } from "@/sanity/lib/types";

import "./index.css";

type HomePageClientProps = {
  stats: Stat[];
  testimonials: Testimonial[];
  techLogos: TechLogo[];
};

export default function HomePageClient({
  stats,
  testimonials,
  techLogos,
}: HomePageClientProps) {
  return (
    <>
      <Cursor />
      {/* <Intro /> */}
      <HeaderNavigation />
      <FullpageProvider>
        <Main stats={stats} testimonials={testimonials} techLogos={techLogos} />
      </FullpageProvider>
    </>
  );
}
