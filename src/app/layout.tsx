import type { Metadata } from "next";
import { JetBrains_Mono, Source_Serif_4, Syne } from "next/font/google";

import { PageFade } from "@/components/layout/page-fade";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { JsonLd } from "@/components/seo/json-ld";

import "./globals.css";

const SITE_URL = "https://tamagossi.dev";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  authors: [{ name: "Auliya Raka Pratama", url: SITE_URL }],
  creator: "Auliya Raka Pratama",
  description:
    "Product engineer, frontend-first. 7+ years leading frontend architecture — design systems, Next.js migrations, DDD — plus Node.js, API integrations (OpenAI), and PostgreSQL. Chapter Lead at Staffinc, Bandung, Indonesia. Remote-ready.",
  keywords: [
    "Product Engineer",
    "Frontend Engineer",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Design Systems",
    "Bandung",
    "Remote",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    description:
      "Product engineer, frontend-first. 7+ years of design systems, Next.js migrations, and DDD — plus Node.js, API integrations, and PostgreSQL. Based in Bandung, Indonesia.",
    locale: "en_US",
    siteName: "Raka Pratama",
    title: "Raka Pratama — Product Engineer (Frontend-First)",
    type: "website",
    url: SITE_URL,
  },
  robots: { follow: true, index: true },
  title: {
    default:
      "Raka Pratama — Product Engineer (Frontend-First) · React, Next.js, TypeScript",
    template: "%s — Raka Pratama",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Product engineer, frontend-first. 7+ years of design systems, Next.js migrations, and DDD — plus Node.js, API integrations, and PostgreSQL.",
    title: "Raka Pratama — Product Engineer (Frontend-First)",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${syne.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
      lang="en"
    >
      <body className="bg-base text-body min-h-screen antialiased">
        <JsonLd />
        <SmoothScroll>
          <PageFade>{children}</PageFade>
        </SmoothScroll>
      </body>
    </html>
  );
}
