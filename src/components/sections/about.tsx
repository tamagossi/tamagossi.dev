"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-400 mb-4">
        About
      </h2>

      <div className="space-y-4 text-slate-400 leading-relaxed max-w-xl">
        <p>
          I&apos;m a Lead Frontend Engineer based in Bandung, Indonesia, with
          7+ years of experience building design systems, leading frontend
          teams, and shipping data-heavy product UI at scale. Currently Chapter
          Lead at{" "}
          <a
            href="https://staffinc.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:underline"
          >
            Staffinc
          </a>
          , where I architect the Ventura UI design system used by 12 engineers
          across 3 product squads, and drive frontend standards across the
          organization.
        </p>

        <p>
          I thrive at the intersection of engineering leadership and hands-on
          architecture — setting technical direction, mentoring engineers, and
          still writing production code. My work spans design systems, Next.js
          platform migrations, and team restructuring that measurably improved
          delivery quality.
        </p>

        <p>
          Associate Degree (D3) in Informatics — with 7+ years of progressive
          engineering experience including Chapter Lead, my practical leadership
          and architecture skills exceed what a degree signals.
        </p>

        <p>
          Outside of work, I&apos;m a husband, gamer, and occasional
          open-source contributor. I believe great software comes from clear
          standards, honest code review, and teams that trust each other.
        </p>
      </div>
    </motion.section>
  );
}
