// Internal Next.js route paths. These are structural, not content — they
// don't change when someone edits content in Sanity, so they stay hardcoded
// here rather than living in the CMS. Contact/social links, stats,
// testimonials, projects, and tech logos have all been migrated to Sanity
// (see sanity/lib/queries.ts and components/siteSettingsProvider.tsx).
export const links = {
  home: "/",
  about: "/about",
  work: "/work",
  results: "/results",
  contact: "/contact",
};
