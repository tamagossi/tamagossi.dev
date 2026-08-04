"use client";

import { motion, useReducedMotion } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Respect prefers-reduced-motion: returns true when animations are disabled. */
export function useAnimationsDisabled() {
  return !!useReducedMotion();
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

/** Fade-up reveal on scroll into view. */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: FadeInProps) {
  const disabled = useAnimationsDisabled();
  return (
    <motion.div
      className={className}
      initial={disabled ? false : { opacity: 0, y }}
      whileInView={disabled ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
}

/** Word-by-word mask reveal, staggered left to right. */
export function WordReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: WordRevealProps) {
  const disabled = useAnimationsDisabled();
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            initial={disabled ? false : { y: "115%" }}
            whileInView={disabled ? undefined : { y: "0%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE, delay: delay + i * 0.05 }}
          >
            {word}
            {"\u00A0"}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
