"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

import { EASE, useAnimationsDisabled } from "@/components/ui/reveal";

const NAME = "Raka Pratama";

export const Hero = () => {
  const disabled = useAnimationsDisabled();
  const { scrollY } = useScroll();

  // Background layers drift slower than content for parallax depth.
  const gridY = useTransform(scrollY, [0, 900], [0, 160]);
  const glowY = useTransform(scrollY, [0, 900], [0, 220]);

  return (
    <section
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden"
      id="top"
    >
      {/* Backdrop — extended above so parallax never reveals an edge */}
      <motion.div
        aria-hidden
        className="bg-grid absolute -top-72 right-0 left-0 h-[calc(100%+18rem)]"
        style={{ y: gridY }}
      />
      <motion.div
        aria-hidden
        className="bg-glow absolute -top-72 right-0 left-0 h-[calc(100%+18rem)]"
        style={{ y: glowY }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
        {/* Eyebrow */}
        <motion.p
          animate={{ opacity: 1 }}
          className="text-accent mb-6 font-mono text-xs tracking-[0.28em] uppercase"
          initial={disabled ? false : { opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
        >
          {"// product engineer — bandung, id"}
        </motion.p>

        {/* Name: character-by-character reveal */}
        <h1
          aria-label={NAME}
          className="text-ink font-sans text-4xl leading-[0.98] font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          {NAME.split("").map((char, i) => (
            <motion.span
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              aria-hidden
              className="inline-block"
              initial={disabled ? false : { opacity: 0, rotateX: 45, y: 34 }}
              key={`${char}-${i}`}
              transition={{
                delay: 0.25 + i * 0.03,
                duration: 0.6,
                ease: EASE,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Thesis line */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="text-accent mt-6 font-serif text-xl italic md:text-2xl"
          initial={disabled ? false : { opacity: 0, y: 18 }}
          transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
        >
          Frontend-first. Full-stack capable.
        </motion.p>

        {/* Intro */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="text-body mt-6 max-w-xl leading-relaxed"
          initial={disabled ? false : { opacity: 0, y: 18 }}
          transition={{ delay: 1.25, duration: 0.6, ease: EASE }}
        >
          I&apos;m Tama — a product engineer who leads frontend architecture and
          ships end-to-end when it counts. Seven years of turning product chaos
          into order: design systems, platform migrations, and the Node/API
          layer behind them.
        </motion.p>

        {/* CTAs */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={disabled ? false : { opacity: 0, y: 18 }}
          transition={{ delay: 1.4, duration: 0.6, ease: EASE }}
        >
          <Link
            className="bg-accent text-accent-ink inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-semibold tracking-wider uppercase transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            href="#case-studies"
          >
            View case studies
            <ArrowDown size={15} />
          </Link>
          <Link
            className="border-line text-ink hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-full border px-6 py-3 font-mono text-sm font-semibold tracking-wider uppercase transition-colors duration-200"
            href="#contact"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ opacity: 1 }}
        className="text-muted absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={disabled ? false : { opacity: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          scroll
        </span>
        <motion.span
          animate={disabled ? undefined : { y: [0, 6, 0] }}
          className="bg-line relative h-8 w-px overflow-hidden"
          transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
        >
          <span className="bg-accent absolute top-0 left-0 h-3 w-px" />
        </motion.span>
      </motion.div>
    </section>
  );
};
