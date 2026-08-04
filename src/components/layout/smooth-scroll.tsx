"use client";

import { useEffect } from "react";

import Lenis from "lenis";

/** Buttery smooth scrolling — the foundation for parallax + asymmetric motion. */
export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      lerp: 0.1,
    });
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
};
