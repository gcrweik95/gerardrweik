import ResultsPageClient from "./resultsPageClient";
import { client } from "@/sanity/lib/client";
import { STATS_QUERY, TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import type { Stat, Testimonial } from "@/sanity/lib/types";
import { safeFetch } from "@/sanity/lib/safeFetch";
import { FALLBACK_STATS, FALLBACK_TESTIMONIALS } from "@/sanity/lib/fallbackContent";

export default async function ResultsPage() {
  const [stats, testimonials] = await Promise.all([
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
  ]);

  return <ResultsPageClient stats={stats} testimonials={testimonials} />;
}
