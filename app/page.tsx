import HomePageClient from "./homePageClient";
import { client } from "@/sanity/lib/client";
import {
  STATS_QUERY,
  TESTIMONIALS_QUERY,
  TECH_LOGOS_QUERY,
} from "@/sanity/lib/queries";
import type { Stat, Testimonial, TechLogo } from "@/sanity/lib/types";
import { safeFetch } from "@/sanity/lib/safeFetch";
import {
  FALLBACK_STATS,
  FALLBACK_TESTIMONIALS,
  FALLBACK_TECH_LOGOS,
} from "@/sanity/lib/fallbackContent";

export default async function HomePage() {
  const [stats, testimonials, techLogos] = await Promise.all([
    safeFetch(
      () =>
        client.fetch<Stat[]>(STATS_QUERY, {}, {
          next: { revalidate: 60, tags: ["stat"] },
        }),
      FALLBACK_STATS,
      "stats",
    ),
    safeFetch(
      () =>
        client.fetch<Testimonial[]>(TESTIMONIALS_QUERY, {}, {
          next: { revalidate: 60, tags: ["testimonial"] },
        }),
      FALLBACK_TESTIMONIALS,
      "testimonials",
    ),
    safeFetch(
      () =>
        client.fetch<TechLogo[]>(TECH_LOGOS_QUERY, {}, {
          next: { revalidate: 60, tags: ["techLogo"] },
        }),
      FALLBACK_TECH_LOGOS,
      "techLogos",
    ),
  ]);

  return (
    <HomePageClient
      stats={stats}
      testimonials={testimonials}
      techLogos={techLogos}
    />
  );
}
