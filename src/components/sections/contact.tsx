"use client";

import { FadeIn, WordReveal } from "@/components/ui/reveal";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  FileTextIcon,
} from "@/components/ui/icons";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/tamagossi",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tamagossi",
    Icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:mgf.prauliyatama@gmail.com",
    Icon: MailIcon,
  },
  {
    label: "Résumé",
    href: "/resume.pdf",
    Icon: FileTextIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent mb-4">
            {"// "}contact
          </p>
          <WordReveal
            as="h2"
            text="Let's build something that scales."
            className="font-sans text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight max-w-2xl"
          />
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10 max-w-xl">
          <p className="text-body leading-relaxed">
            I&apos;m open to lead frontend roles, design-system work, and
            consulting on scaling product UI. If you&apos;re building something
            data-heavy or turning frontend chaos into systems, let&apos;s talk.
          </p>

          <a
            href="mailto:mgf.prauliyatama@gmail.com"
            className="mt-8 inline-block font-mono text-xl md:text-2xl font-semibold text-accent underline underline-offset-8 decoration-accent/40 hover:decoration-accent transition-colors"
          >
            mgf.prauliyatama@gmail.com
          </a>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-12">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
                >
                  <Icon size={17} />
                  <span className="group-hover:underline underline-offset-4">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 border-t border-line/70 pt-6 font-mono text-xs text-faint max-w-xl">
            GMT+7 (Bandung, Indonesia) — experienced in async collaboration
            across 8–12h timezone gaps.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
