/**
 * Last-known-good static content, used only when Sanity is unreachable
 * (network error, outage, rate limit, etc.) at request time.
 *
 * This is a 1:1 snapshot of the real content currently published in Sanity
 * (see studio-portfolio-web-app/scripts/migrate-content.ts, the source of
 * truth this was copied from) — not placeholder/dummy data. Keeping it here
 * means a Sanity outage degrades to "stale but real" content instead of an
 * empty page or a crashed Server Component.
 *
 * This intentionally does NOT get updated when content is edited in Sanity
 * Studio — it's a safety net, not a cache. If it drifts far from reality
 * over time that's fine; it only ever serves traffic during an outage.
 */
import type { Project, SiteSettings, Stat, TechLogo, Testimonial } from "./types";

export const FALLBACK_SETTINGS: SiteSettings = {
  email: "gc.rweik95@gmail.com",
  whatsapp: "https://wa.me/+33699195463",
  resumeUrl: "/resume",
  x: "https://x.com/gerard_rweik",
  linkedin: "https://www.linkedin.com/in/gerard-rweik",
};

export const FALLBACK_STATS: Stat[] = [
  { value: "200+", label: "projects shipped, direct and outsourced" },
  { value: "$250K+", label: "generated on ecom websites for clients" },
  { value: "10", label: "years turning ideas into working businesses" },
  {
    value: "92%",
    label: "say yes without hesitation when asked to recommend me",
  },
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    tag: "Great experience from start to finish",
    quote:
      "Our previous site lacked quality and a good user experience, and working with Gerard let us launch something new, save time and cost, and get real clarity on our digital strategy. What surprised me most is how human he is while still being so business- and money-oriented. Both the experience and the delivery were great.",
    attribution: "CEO & Manager",
    role: "PhysYourShop, LB",
    rating: 5,
  },
  {
    tag: "Thoughtful, smart, insightful and effective.",
    quote:
      "That’s how I’d sum up Gerard. Our company website was choppy and almost unreadable for the volume of business it was meant to support. I appreciated his responsiveness and his insight on quality, and I came away with real clarity on our digital strategy. If you need help, start the conversation with him and learn how he can help you.",
    attribution: "Brad Smith",
    role: "Stellar Insight Inc., USA",
    rating: 5,
  },
  {
    tag: "The services you provide are very professional.",
    quote:
      "I was quite lost and didn’t know where to start. Gérard is a real professional: the quote comes quickly, deadlines are respected, and on top of that he makes a tutorial so you can manage things yourself. His dedication made me feel like a worthy client. Between us we fixed a critical technical problem, launched, improved performance, and took the business to a new level.",
    attribution: "Stephanie Noujaim",
    role: "Samarjane & Koomquat, LB",
    rating: 5,
  },
  {
    tag: "Website can become 10x better.",
    quote:
      "Our website was too generic. Gerard improved its performance and conversions, and he does it in a simple, straightforward way. Your website can become 10x better. If you have a Shopify site, he’s the guy you need.",
    attribution: "Mohamad Abdallah",
    role: "Ahla Shape, LB",
    rating: 5,
  },
  {
    tag: "I had an idea on paper.",
    quote:
      "I had an idea on paper, zero prior knowledge, and needed a professional, fully functional website. I expected someone to simply build it. Instead I got a partner who guided me through the whole process, offered valuable suggestions, and turned a rough idea into something far better than I’d imagined. He bridges the gap between an idea and a finished website through expert guidance and execution. If your idea feels stuck on paper, he’s the person who can bring it to life.",
    attribution: "Bob Abdelmalak",
    role: "The Rogue Aligner, CY",
    rating: 5,
  },
  {
    tag: "It’s not a strict contract, it’s team work.",
    quote:
      "I had built my own website and needed an experienced person to turn it into a functional platform. Gerard delivered on time, understood the task, and was fast to respond. He fixed a critical technical problem and improved performance and conversions. If your business needs a technical person to create, maintain or uplift your platform, Gerard is your go-to guy. The best thing is the flexibility and adaptation.",
    attribution: "Maria Bou Rouphael",
    role: "The Corner Hub, LB",
    rating: 5,
  },
  {
    tag: 'The "YES" is guaranteed and the "NO" is not negotiable.',
    quote:
      "We were hit by a serious breach on our application along with a DDoS attack, and our web team couldn’t remediate it properly. Gerard fixed the problem and improved performance. He’s responsible, knowledgeable and trustworthy, and he knows very well what he’s doing. His services come with a prevention warranty.",
    attribution: "Confidential",
    role: "Digital Agency, UAE",
    rating: 5,
  },
  {
    tag: "Any issue can be fixed.",
    quote:
      "When we started, the path to building the website wasn’t clear. What stood out was how quickly and efficiently Gerard resolved complex, unexpected technical issues. He fixed a critical problem, launched the site, improved performance and conversions, saved us time and cost, and gave us clarity on our digital strategy. A real problem solver.",
    attribution: "Manager & CEO",
    role: "Middle East Bookstore, CA",
    rating: 5,
  },
  {
    tag: "Speed and visibility on all.",
    quote:
      "We lacked guidance and visibility on how to build and customise our website. Gerard explains the process from A to Z, helps you choose the best solution for your business need, and is fast and transparent throughout. We launched our website and gained clarity on our digital strategy. I’d recommend him without hesitation.",
    attribution: "Confidential",
    role: "UTA International, LB",
    rating: 5,
  },
  {
    tag: "Straightforward and seamless the process was from start to finish.",
    quote:
      "Our internal team was fully committed elsewhere and we had a heavy workload, so we needed reliable help. Gerard provides dependable, hands-on support, and projects are delivered functionally, as expected, and without delays. I’d recommend him without hesitation.",
    attribution: "Thea Andraos",
    role: "Multiple Projects, LB",
    rating: 4,
  },
  {
    tag: "He builds WordPress websites that convert",
    quote:
      "We build WordPress sites for clients who need it, and we used to hire a separate WordPress developer. A project that takes Gerard 7 days could take them a month. And the process saves time and cost.",
    attribution: "Confidential",
    role: "Digital Agency, LB",
    rating: 5,
  },
  {
    tag: "He’s always there to answer questions",
    quote:
      "My former website wasn’t catchy or user-friendly, and it couldn’t handle the multiple pages and languages I needed. Gerard launched the new site and improved its performance and conversions. He’s always there to answer questions, reliable and true, and also very patient. You’ll get solutions to your problems and quick, to-the-point answers. Totally recommend.",
    attribution: "Sarah Shehata",
    role: "Tamarabooks, CA",
    rating: 5,
  },
  {
    tag: "Great Delivery!",
    quote:
      "We had no website yet, just a brand and a solution we wanted to bring to life, and we needed someone to do that. Gerard launched the site, improved performance and conversions, saved us time.",
    attribution: "Confidential",
    role: "Nureva Relief",
    rating: 5,
  },
  {
    tag: "Over-delivering is the best way to describe it.",
    quote:
      "Our website was basic, with few SKUs and poor organisation. Gerard handled the design, categorisation and optimisation, fixed a critical technical problem, improved conversions, and gave us clear guidance and objectives. He’s highly responsible and took the business to a new level. I’d recommend him without hesitation.",
    attribution: "Owner & CEO",
    role: "Urban Home, LB",
    rating: 5,
  },
];

// Local /public paths — no remote host involved, so next/image works with
// these without needing an entry in next.config.js's remotePatterns.
function localProjectImage(file: string, alt: string): Project["image"] {
  return {
    asset: { _id: `fallback-${file}`, url: `/img/projects/${file}` },
    alt,
  };
}

export const FALLBACK_PROJECTS: Project[] = [
  {
    titleLine1: "The Rogue",
    titleLine2: "Aligner",
    description: "WooCommerce Store",
    link: "https://roguealigner.com/",
    image: localProjectImage("17.avif", "The Rogue Aligner project screenshot"),
  },
  {
    titleLine1: "Duplexline",
    titleLine2: "",
    description: "Lead Capture Website",
    link: "https://www.duplexline.com/",
    image: localProjectImage("16.avif", "Duplexline project screenshot"),
  },
  {
    titleLine1: "Stellar Insights",
    titleLine2: "Inc.",
    description: "Lead Capture Website",
    link: "https://www.stellarinsightinc.com/",
    image: localProjectImage("15.avif", "Stellar Insights Inc. project screenshot"),
  },
  {
    titleLine1: "SamarJane",
    titleLine2: "",
    description: "Product Teaser Page",
    link: "https://samarjane.com/",
    image: localProjectImage("14.avif", "SamarJane project screenshot"),
  },
  {
    titleLine1: "PhysYour",
    titleLine2: "Shop",
    description: "Shopify Store",
    link: "https://physyourshop.com/",
    image: localProjectImage("1.avif", "PhysYourShop project screenshot"),
  },
  {
    titleLine1: "Urban",
    titleLine2: "Home",
    description: "Shopify Store",
    link: "https://urbanhome.live/",
    image: localProjectImage("13.avif", "Urban Home project screenshot"),
  },
  {
    titleLine1: "Ahla",
    titleLine2: "Shape",
    description: "Shopify Store",
    link: "https://ahlashape.com/",
    image: localProjectImage("12.avif", "Ahla Shape project screenshot"),
  },
  {
    titleLine1: "Nureva",
    titleLine2: "Relief",
    description: "WooCommerce Store",
    link: "https://getnureva.com/",
    image: localProjectImage("2.avif", "Nureva Relief project screenshot"),
  },
  {
    titleLine1: "Tamara",
    titleLine2: "Books",
    description: "WooCommerce Store",
    link: "https://tamara-books.com/",
    image: localProjectImage("3.avif", "Tamara Books project screenshot"),
  },
  {
    titleLine1: "The Corner",
    titleLine2: "Hub",
    description: "Shopify Store",
    link: "https://thecornerhub.com/",
    image: localProjectImage("4.avif", "The Corner Hub project screenshot"),
  },
  {
    titleLine1: "Metro",
    titleLine2: "Al Madina",
    description: "WooCommerce Store",
    link: "https://metromadina.com/",
    image: localProjectImage("6.avif", "Metro Al Madina project screenshot"),
  },
  {
    titleLine1: "KoomQuat",
    titleLine2: "Shop",
    description: "Shopify Store",
    link: "https://koomquat.com/",
    image: localProjectImage("7.avif", "KoomQuat Shop project screenshot"),
  },
  {
    titleLine1: "UTA",
    titleLine2: "International",
    description: "Laravel Website",
    link: "https://uta.com.lb/",
    image: localProjectImage("8.avif", "UTA International project screenshot"),
  },
  {
    titleLine1: "Middle East",
    titleLine2: "Bookstore",
    description: "WooCommerce Store",
    link: "http://middleeastbookstore.ca/",
    image: localProjectImage("9.avif", "Middle East Bookstore project screenshot"),
  },
  {
    titleLine1: "Avisaine",
    titleLine2: "Shop",
    description: "WooCommerce Store",
    link: "https://www.avisaine.com/",
    image: localProjectImage("10.avif", "Avisaine Shop project screenshot"),
  },
  {
    titleLine1: "Watara",
    titleLine2: "Podcast",
    description: "WordPress Website",
    link: "https://watara.org/",
    image: localProjectImage("11.avif", "Watara Podcast project screenshot"),
  },
];

function localLogo(file: string, name: string): TechLogo["logo"] {
  return {
    asset: { _id: `fallback-${file}`, url: `/svg_logo/${file}` },
    alt: `${name} logo`,
  };
}

export const FALLBACK_TECH_LOGOS: TechLogo[] = [
  { name: "Next.js", logo: localLogo("nextjs-logo.svg", "Next.js") },
  { name: "TypeScript", logo: localLogo("typescript-logo.svg", "TypeScript") },
  { name: "React", logo: localLogo("react-logo.svg", "React") },
  { name: "Webflow", logo: localLogo("webflow-logo.svg", "Webflow") },
  { name: "Adobe XD", logo: localLogo("xd-logo.svg", "Adobe XD") },
  { name: "Photoshop", logo: localLogo("photoshop-logo.svg", "Photoshop") },
  { name: "Figma", logo: localLogo("figma-logo.svg", "Figma") },
  { name: "WordPress", logo: localLogo("wordpress-logo.svg", "WordPress") },
  { name: "WooCommerce", logo: localLogo("woo-logo.svg", "WooCommerce") },
  { name: "Shopify", logo: localLogo("shopify-logo.svg", "Shopify") },
  { name: "Laravel", logo: localLogo("laravel-logo.svg", "Laravel") },
  { name: "Symfony", logo: localLogo("symfony-logo.svg", "Symfony") },
];
