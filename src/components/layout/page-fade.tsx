"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Fades content in on mount — a lightweight page-level transition. */
export default function PageFade({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
