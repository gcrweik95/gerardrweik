import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_READ_TOKEN;

if (!projectId || !dataset) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET env vars.",
  );
}

export const client = createClient({
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
