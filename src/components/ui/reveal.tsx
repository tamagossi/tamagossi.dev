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
  once?: boolean;
  y?: number;
}

/** Fade-up reveal on scroll into view. */
export function FadeIn({
  children,
  className,
  delay = 0,
  once = true,
  y = 24,
}: FadeInProps) {
  const disabled = useAnimationsDisabled();
  return (
    <motion.div
      className={className}
      initial={disabled ? false : { opacity: 0, y }}
      transition={{ delay, duration: 0.7, ease: EASE }}
      viewport={{ margin: "-80px", once }}
      whileInView={disabled ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  x?: number;
}

/** Slide in from the side (left by default) with opacity. */
export function SlideIn({
  children,
  className,
  delay = 0,
  x = -40,
}: SlideInProps) {
  const disabled = useAnimationsDisabled();
  return (
    <motion.div
      className={className}
      initial={disabled ? false : { opacity: 0, x }}
      transition={{ delay, duration: 0.9, ease: EASE }}
      viewport={{ margin: "-80px", once: true }}
      whileInView={disabled ? undefined : { opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
}

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Subtle scale-in reveal. */
export function ScaleIn({ children, className, delay = 0 }: ScaleInProps) {
  const disabled = useAnimationsDisabled();
  return (
    <motion.div
      className={className}
      initial={disabled ? false : { opacity: 0, scale: 0.97 }}
      transition={{ delay, duration: 0.8, ease: EASE }}
      viewport={{ margin: "-80px", once: true }}
      whileInView={disabled ? undefined : { opacity: 1, scale: 1 }}
    >
      {children}
    </motion.div>
  );
}

interface WordRevealProps {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  text: string;
}

/** Word-by-word mask reveal, staggered left to right. */
export function WordReveal({
  as: Tag = "h2",
  className,
  delay = 0,
  text,
}: WordRevealProps) {
  const disabled = useAnimationsDisabled();
  const words = text.split(" ");
  return (
    <Tag aria-label={text} className={className}>
      {words.map((word, i) => (
        <span
          aria-hidden
          className="-mb-[0.08em] inline-block overflow-hidden pb-[0.08em] align-bottom"
          key={`${word}-${i}`}
        >
          <motion.span
            className="inline-block"
            initial={disabled ? false : { y: "115%" }}
            transition={{ delay: delay + i * 0.05, duration: 0.65, ease: EASE }}
            viewport={{ margin: "-60px", once: true }}
            whileInView={disabled ? undefined : { y: "0%" }}
          >
            {word}
            {"\u00A0"}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
