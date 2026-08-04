"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Fades content in on mount — a lightweight page-level transition. */
export const PageFade = ({ children }: { children: React.ReactNode }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={reduced ? false : { opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
