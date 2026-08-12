"use client";

import { FadeIn, SlideIn } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const TOKENS = [
  {
    key: "--color-base",
    swatch: "bg-base border border-line",
    value: "#0c0a09",
  },
  {
    key: "--color-surface",
    swatch: "bg-surface border border-line",
    value: "#1c1917",
  },
  { key: "--color-accent", swatch: "bg-accent", value: "#fbbf24" },
  { key: "--font-display", value: "Syne" },
  { key: "--font-body", value: "Source Serif 4" },
  { key: "--font-mono", value: "JetBrains Mono" },
];

const STATS = [
  { label: "years shipping product UI", value: "7+" },
  { label: "FE engineers led as Chapter Lead", value: "2" },
  { label: "design system components", value: "91" },
  { label: "faster CI builds", value: "60%" },
];

export const About = () => {
  return (
    <section className="py-28 md:py-36" id="about">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="whoami" title="About me" />

        <div className="grid items-start gap-12 md:grid-cols-[1fr_320px] md:gap-16">
          {/* Bio */}
          <SlideIn className="text-body space-y-5 leading-relaxed">
            <p>
              I&apos;m a Product Engineer based in Bandung, Indonesia —
              frontend-first, with 7+ years of experience building design
              systems, leading frontend teams, and shipping data-heavy product
              UI at scale. I&apos;ve also shipped what sits behind the UI:
              Node.js services, REST and OpenAI API integrations, and
              PostgreSQL-backed features. Currently Chapter Lead at{" "}
              <a
                className="text-accent underline-offset-4 hover:underline"
                href="https://staffinc.co"
                rel="noopener noreferrer"
                target="_blank"
              >
                Staffinc
              </a>
              , where I architect the Ventura UI design system, lead 2 FE
              engineers, coordinate a cross-functional squad (FE, backend, QA,
              mobile), and drive frontend standards across the organization.
            </p>
            <p>
              I thrive at the intersection of engineering leadership and
              hands-on architecture — setting technical direction, mentoring
              engineers, and still writing production code. My work spans design
              systems, Next.js platform migrations, and team restructuring that
              rebuilt trust and delivery discipline.
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
          <FadeIn className="md:sticky md:top-24" delay={0.15}>
            <div className="bg-surface border-line rounded-2xl border p-6 font-mono text-xs">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-muted">tokens.json</p>
                <span aria-hidden className="flex gap-1.5">
                  <span className="bg-elevated h-2 w-2 rounded-full" />
                  <span className="bg-elevated h-2 w-2 rounded-full" />
                  <span className="bg-accent h-2 w-2 rounded-full" />
                </span>
              </div>
              <ul className="space-y-3">
                {TOKENS.map((token) => (
                  <li
                    className="flex items-center justify-between gap-4"
                    key={token.key}
                  >
                    <span className="text-faint truncate">{token.key}</span>
                    <span className="text-muted flex items-center gap-2">
                      {token.swatch ? (
                        <span
                          aria-hidden
                          className={`h-3 w-3 rounded ${token.swatch}`}
                        />
                      ) : null}
                      <span className="text-body">{token.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-line mt-5 border-t pt-5">
                <p className="text-faint">
                  This site&apos;s design system — every value on this page.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats */}
        <FadeIn className="mt-16 md:mt-20" delay={0.1}>
          <dl className="bg-line/70 border-line grid grid-cols-2 gap-px overflow-hidden rounded-2xl border md:grid-cols-4">
            {STATS.map((stat) => (
              <div className="bg-surface px-6 py-7" key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-accent font-sans text-3xl font-bold md:text-4xl">
                  {stat.value}
                </dd>
                <p className="text-muted mt-2 font-mono text-xs tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
};
