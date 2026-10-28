import { defineQuery } from "next-sanity";

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]{
    email,
    whatsapp,
    resumeUrl,
    x,
    linkedin
  }
`);

export const STATS_QUERY = defineQuery(`
  *[_type == "stat"] | order(order asc){
    value,
    label
  }
`);

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(order asc){
    tag,
    quote,
    attribution,
    role,
    rating
  }
`);

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc){
    titleLine1,
    titleLine2,
    description,
    link,
    image{
      asset->{
        _id,
        url,
        metadata { lqip, dimensions { width, height } }
      },
      alt,
      hotspot,
      crop
    }
  }
`);

export const TECH_LOGOS_QUERY = defineQuery(`
  *[_type == "techLogo"] | order(order asc){
    name,
    logo{
      asset->{
        _id,
        url
      },
      alt
    }
  }
`);
