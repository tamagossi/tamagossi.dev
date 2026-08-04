import type { Metadata } from "next";
import { Syne, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import PageFade from "@/components/layout/page-fade";
import SmoothScroll from "@/components/layout/smooth-scroll";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Raka Pratama — Lead Frontend Engineer",
  description:
    "I architect design systems, lead frontend teams, and build data-heavy product UI. 7+ years at scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-base text-body antialiased min-h-screen">
        <SmoothScroll>
          <PageFade>{children}</PageFade>
        </SmoothScroll>
      </body>
    </html>
  );
}
