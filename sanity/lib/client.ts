import { createClient, type SanityClient } from "next-sanity";

/**
 * Lazily creates the real Sanity client on first use, instead of at module
 * import time. This matters because:
 *
 * 1. `createClient()` throws synchronously if `projectId`/`dataset` are
 *    missing or invalid. Throwing at import time crashes the Next.js build
 *    itself (every page imports this module), which is far worse than a
 *    page falling back to static content at request time.
 * 2. Every page already wraps its `client.fetch(...)` calls in
 *    `safeFetch()` (see sanity/lib/safeFetch.ts), which degrades to
 *    `fallbackContent.ts` on any error. Deferring the throw into `.fetch()`
 *    lets that existing safety net catch misconfiguration too, so a missing
 *    env var (e.g. not yet set in a new Vercel environment) degrades to
 *    stale content instead of failing the entire build/deploy.
 */
let realClient: SanityClient | null = null;

function getClient(): SanityClient {
  if (realClient) return realClient;

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_READ_TOKEN;

  if (!projectId || !dataset) {
    throw new Error(
      "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET env vars.",
    );
  }

  realClient = createClient({
    projectId,
    dataset,
    apiVersion: "2025-10-28",
    // Authenticated reads whenever a token is configured — currently the
    // dataset is public so this isn't strictly required for reads to work,
    // but wiring it in now means nothing silently breaks if the dataset ACL
    // is ever switched to private later.
    token,
    useCdn: true,
  });

  return realClient;
}

export const client = {
  fetch<T>(query: string, params?: Record<string, unknown>, options?: unknown): Promise<T> {
    return (getClient().fetch as (...args: unknown[]) => Promise<T>)(
      query,
      params,
      options,
    );
  },
};
