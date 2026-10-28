export type SiteSettings = {
  email: string;
  whatsapp: string;
  resumeUrl: string;
  x: string;
  linkedin: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Testimonial = {
  tag: string;
  quote: string;
  attribution: string;
  role: string;
  rating: number;
};

export type SanityImageAsset = {
  asset: {
    _id: string;
    url: string;
    metadata?: {
      lqip?: string;
      dimensions?: { width: number; height: number };
    };
  };
  alt: string;
  hotspot?: unknown;
  crop?: unknown;
};

export type Project = {
  titleLine1: string;
  titleLine2?: string | null;
  description: string;
  link: string;
  image: SanityImageAsset;
};

export type TechLogo = {
  name: string;
  logo: {
    asset: { _id: string; url: string };
    alt: string;
  };
};
