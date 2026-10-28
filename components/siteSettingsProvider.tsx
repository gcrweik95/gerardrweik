"use client";

import React, { createContext, useContext } from "react";
import type { SiteSettings } from "@/sanity/lib/types";
import { links as staticLinks } from "@/data/data";

type SiteSettingsContextValue = {
  home: string;
  about: string;
  work: string;
  results: string;
  contact: string;
  email: string;
  x: string;
  linkedin: string;
  whatsapp: string;
  resumeUrl: string;
};

const SiteSettingsContext = createContext<SiteSettingsContextValue | null>(
  null,
);

export function SiteSettingsProvider({
  settings,
  children,
}: {
  settings: SiteSettings;
  children: React.ReactNode;
}) {
  const value: SiteSettingsContextValue = {
    home: staticLinks.home,
    about: staticLinks.about,
    work: staticLinks.work,
    results: staticLinks.results,
    contact: staticLinks.contact,
    email: `mailto:${settings.email}`,
    x: settings.x,
    linkedin: settings.linkedin,
    whatsapp: settings.whatsapp,
    resumeUrl: settings.resumeUrl,
  };

  return (
    <SiteSettingsContext.Provider value={value}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error(
      "useSiteSettings must be used within a SiteSettingsProvider",
    );
  }
  return context;
}
