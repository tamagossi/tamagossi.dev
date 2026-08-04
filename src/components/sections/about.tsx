"use client";

import SectionHeading from "@/components/ui/section-heading";
import { FadeIn, SlideIn } from "@/components/ui/reveal";

const TOKENS = [
  { key: "--color-base", value: "#0c0a09", swatch: "bg-base border border-line" },
  { key: "--color-surface", value: "#1c1917", swatch: "bg-surface border border-line" },
  { key: "--color-accent", value: "#fbbf24", swatch: "bg-accent" },
  { key: "--font-display", value: "Syne" },
  { key: "--font-body", value: "Source Serif 4" },
  { key: "--font-mono", value: "JetBrains Mono" },
];

const STATS = [
  { value: "7+", label: "years shipping product UI" },
  { value: "12", label: "engineers led as Chapter Lead" },
  { value: "40+", label: "design system components" },
  { value: "60%", label: "faster CI builds" },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="whoami" title="About me" />

        <div className="grid gap-12 md:grid-cols-[1fr_320px] md:gap-16 items-start">
          {/* Bio */}
          <SlideIn className="space-y-5 text-body leading-relaxed">
            <p>
              I&apos;m a Lead Frontend Engineer based in Bandung, Indonesia,
              with 7+ years of experience building design systems, leading
              frontend teams, and shipping data-heavy product UI at scale.
              Currently Chapter Lead at{" "}
              <a
                href="https://staffinc.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-4"
              >
                Staffinc
              </a>
              , where I architect the Ventura UI design system used by 12
              engineers across 3 product squads, and drive frontend standards
              across the organization.
            </p>
            <p>
              I thrive at the intersection of engineering leadership and
              hands-on architecture — setting technical direction, mentoring
              engineers, and still writing production code. My work spans design
              systems, Next.js platform migrations, and team restructuring that
              measurably improved delivery quality.
            </p>
            <p>
              Associate Degree (D3) in Informatics — with 7+ years of
              progressive engineering experience including Chapter Lead, my
              practical leadership and architecture skills exceed what a degree
              signals.
            </p>
            <p>
              Outside of work, I&apos;m a husband, gamer, and occasional
              open-source contributor. I believe great software comes from clear
              standards, honest code review, and teams that trust each other.
            </p>
          </SlideIn>

          {/* Token card — the site's own design system, shown as data */}
          <FadeIn delay={0.15} className="md:sticky md:top-24">
            <div className="rounded-2xl bg-surface border border-line p-6 font-mono text-xs">
              <div className="flex items-center justify-between mb-5">
                <p className="text-muted">tokens.json</p>
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-elevated" />
                  <span className="h-2 w-2 rounded-full bg-elevated" />
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
              </div>
              <ul className="space-y-3">
                {TOKENS.map((token) => (
                  <li
                    key={token.key}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-faint truncate">{token.key}</span>
                    <span className="flex items-center gap-2 text-muted">
                      {token.swatch ? (
                        <span
                          className={`h-3 w-3 rounded ${token.swatch}`}
                          aria-hidden
                        />
                      ) : null}
                      <span className="text-body">{token.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-line">
                <p className="text-faint">
                  This site&apos;s design system — every value on this page.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats */}
        <FadeIn delay={0.1} className="mt-16 md:mt-20">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line/70 rounded-2xl overflow-hidden border border-line">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface px-6 py-7"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-sans text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </dd>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
