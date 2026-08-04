"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Buttery smooth scrolling — the foundation for parallax + asymmetric motion. */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      autoRaf: true,
      anchors: true,
    });
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
