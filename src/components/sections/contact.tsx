"use client";

import {
  FileTextIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";
import { FadeIn, WordReveal } from "@/components/ui/reveal";

const LINKS = [
  {
    href: "https://github.com/tamagossi",
    Icon: GitHubIcon,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/tamagossi",
    Icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: "mailto:mgf.prauliyatama@gmail.com",
    Icon: MailIcon,
    label: "Email",
  },
  {
    href: "/resume.pdf",
    Icon: FileTextIcon,
    label: "Résumé",
  },
];

export const Contact = () => {
  return (
    <section className="py-28 md:py-40" id="contact">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <FadeIn>
          <p className="text-accent mb-4 font-mono text-xs tracking-[0.28em] uppercase">
            {"// "}contact
          </p>
          <WordReveal
            as="h2"
            className="text-ink max-w-2xl font-sans text-4xl leading-tight font-bold tracking-tight md:text-5xl"
            text="Let's build something that scales."
          />
        </FadeIn>

        <FadeIn className="mt-10 max-w-xl" delay={0.15}>
          <p className="text-body leading-relaxed">
            I&apos;m open to product engineer roles — frontend-first, with the
            backend and API depth to own features end-to-end — plus
            design-system work and consulting on scaling product UI. If
            you&apos;re building something data-heavy or turning product chaos
            into systems, let&apos;s talk.
          </p>

          <a
            className="text-accent decoration-accent/40 hover:decoration-accent mt-8 inline-block font-mono text-xl font-semibold underline underline-offset-8 transition-colors md:text-2xl"
            href="mailto:mgf.prauliyatama@gmail.com"
          >
            mgf.prauliyatama@gmail.com
          </a>
        </FadeIn>

        <FadeIn className="mt-12" delay={0.25}>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {LINKS.map(({ href, Icon, label }) => (
              <li key={label}>
                <a
                  className="group text-muted hover:text-accent inline-flex items-center gap-2 font-mono text-sm transition-colors"
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  <Icon size={17} />
                  <span className="underline-offset-4 group-hover:underline">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="border-line/70 text-faint mt-10 max-w-xl border-t pt-6 font-mono text-xs">
            GMT+7 (Bandung, Indonesia) — experienced in async collaboration
            across 8–12h timezone gaps.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
