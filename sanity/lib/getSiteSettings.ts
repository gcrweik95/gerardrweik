import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import type { SiteSettings } from "@/sanity/lib/types";
import { FALLBACK_SETTINGS } from "@/sanity/lib/fallbackContent";

/**
 * Fetches siteSettings from Sanity, falling back to the last-known static
 * values if Sanity is unreachable or the document hasn't been published yet.
 * This runs in the root layout, so a thrown error here would take down
 * every page — never let it throw.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const settings = await client.fetch<SiteSettings | null>(
      SITE_SETTINGS_QUERY,
      {},
      { next: { revalidate: 60, tags: ["siteSettings"] } },
    );
    return settings ?? FALLBACK_SETTINGS;
  } catch (error) {
    console.error("Failed to fetch siteSettings from Sanity:", error);
    return FALLBACK_SETTINGS;
  }
}
