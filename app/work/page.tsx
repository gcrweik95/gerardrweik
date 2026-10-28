import WorkPageClient from "./workPageClient";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import type { Project } from "@/sanity/lib/types";
import { safeFetch } from "@/sanity/lib/safeFetch";
import { FALLBACK_PROJECTS } from "@/sanity/lib/fallbackContent";

export default async function WorkPage() {
  const projects = await safeFetch(
    () =>
      client.fetch<Project[]>(PROJECTS_QUERY, {}, {
        next: { revalidate: 60, tags: ["project"] },
      }),
    FALLBACK_PROJECTS,
    "projects",
  );

  return <WorkPageClient projects={projects} />;
}
