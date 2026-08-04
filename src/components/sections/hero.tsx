"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { EASE, useAnimationsDisabled } from "@/components/ui/reveal";

const NAME = "Raka Pratama";

export default function Hero() {
  const disabled = useAnimationsDisabled();
  const { scrollY } = useScroll();

  // Background layers drift slower than content for parallax depth.
  const gridY = useTransform(scrollY, [0, 900], [0, 160]);
  const glowY = useTransform(scrollY, [0, 900], [0, 220]);

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Backdrop — extended above so parallax never reveals an edge */}
      <motion.div
        className="absolute left-0 right-0 -top-72 h-[calc(100%+18rem)] bg-grid"
        style={{ y: gridY }}
        aria-hidden
      />
      <motion.div
        className="absolute left-0 right-0 -top-72 h-[calc(100%+18rem)] bg-glow"
        style={{ y: glowY }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-10 py-24">
        {/* Eyebrow */}
        <motion.p
          initial={disabled ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.28em] text-accent mb-6"
        >
          {"// lead frontend engineer — bandung, id"}
        </motion.p>

        {/* Name: character-by-character reveal */}
        <h1
          className="font-sans font-extrabold text-ink tracking-tight text-4xl sm:text-6xl md:text-7xl leading-[0.98]"
          aria-label={NAME}
        >
          {NAME.split("").map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              className="inline-block"
              aria-hidden
              initial={disabled ? false : { opacity: 0, y: 34, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: 0.25 + i * 0.03,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Thesis line */}
        <motion.p
          initial={disabled ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.1 }}
          className="mt-6 font-serif italic text-xl md:text-2xl text-accent"
        >
          Frontend systems, built to scale.
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={disabled ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.25 }}
          className="mt-6 max-w-xl text-body leading-relaxed"
        >
          I&apos;m Raka — I architect design systems, lead 12-engineer frontend
          teams, and ship data-heavy product UI. Seven years of turning
          frontend chaos into order at scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={disabled ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#case-studies"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-accent-ink transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            View case studies
            <ArrowDown size={15} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={disabled ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          scroll
        </span>
        <motion.span
          animate={disabled ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-line relative overflow-hidden"
        >
          <span className="absolute top-0 left-0 h-3 w-px bg-accent" />
        </motion.span>
      </motion.div>
    </section>
  );
}
