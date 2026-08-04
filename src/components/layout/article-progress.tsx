"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin amber reading-progress bar fixed to the top of the viewport. */
export default function ArticleProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 inset-x-0 h-0.5 bg-accent origin-left z-[60]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
