import type { Metadata } from "next";
import { JetBrains_Mono, Source_Serif_4, Syne } from "next/font/google";

import { PageFade } from "@/components/layout/page-fade";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

import "./globals.css";

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
  description:
    "I architect design systems, lead frontend teams, and build data-heavy product UI. 7+ years at scale.",
  title: "Raka Pratama — Lead Frontend Engineer",
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
        <SmoothScroll>
          <PageFade>{children}</PageFade>
        </SmoothScroll>
      </body>
    </html>
  );
}
