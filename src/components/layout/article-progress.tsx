"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin amber reading-progress bar fixed to the top of the viewport. */
export const ArticleProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.001,
    stiffness: 100,
  });
  return (
    <motion.div
      aria-hidden
      className="bg-accent fixed inset-x-0 top-0 z-[60] h-0.5 origin-left"
      style={{ scaleX }}
    />
  );
};
