import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";
import StoreProvider from "@/redux/storeProvider";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

const dM_Sans = DM_Sans({ subsets: ["latin-ext"] });
const satoshi = localFont({
  src: "../font/satoshi/Satoshi-Variable.woff2",
  style: "normal",
});

const helvetica = localFont({
  src: "../font/helvetica/HelveticaNowDisplay-Medium.woff2",
  style: "normal",
});

export const metadata: Metadata = {
  // Title for the browser tab and search results.
  // The template is great for pages that extend this metadata.
  title: {
    default: "Gérard RWEIK • Fullstack Developer",
    template: "%s | Gérard RWEIK",
  },
  // A compelling description for search engine snippets and social media previews.
  description:
    "Architecting seamless, high-performance e-commerce platforms. With 9 years of full-stack mastery, I transform business visions into intuitive, pixel-perfect user experiences.",
  // Keywords to help search engines understand the content (less critical than they used to be).
  keywords: [
    "Gérard RWEIK",
    "Fullstack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "UX/UI",
    "e-commerce",
    "Next.js",
    "React",
    "Node.js",
    "WordPress",
    "Elementor",
    "Shopify",
    "Symfony",
    "Laravel",
    "WooCommerce",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "Web Designer",
  ],
  // Open Graph (OG) tags for social media sharing previews (e.g., LinkedIn, Facebook).
  openGraph: {
    title: "Gérard RWEIK • Fullstack Developer",
    description:
      "Leveraging 9 years of expertise to build high-converting e-commerce platforms and intuitive user experiences.",
    url: "https://www.gerardrweik.fr", // Replace with your actual domain
    siteName: "Gérard RWEIK's Portfolio",
    images: [
      {
        url: "/img/og-image.jpg", // A high-quality image for social media previews
        width: 1200,
        height: 630,
        alt: "Gérard RWEIK's Portfolio Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter card for Twitter sharing previews.
  twitter: {
    card: "summary_large_image",
    title: "Gérard RWEIK • Fullstack Developer",
    description:
      "Transforming business visions into profitable, high-performing e-commerce platforms with 9 years of full-stack expertise.",
    images: ["/img/twitter-card.jpg"], // A high-quality image for Twitter
  },
  // Favicons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // Robots tag to ensure search engines can index the site.
  robots: "index, follow",
  verification: {
    other: {
      'impact-site-verification': '0090:ciae-2267-467d-a00f-4dc1aac68694',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        ></meta>
        <GoogleAnalytics />
        <SpeedInsights />
      </head>

      <body className={helvetica.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
      <Script src="/gsap/ScrambleTextPlugin.min.js" />
    </html>
  );
}
