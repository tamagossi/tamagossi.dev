"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-400 mb-8">
        Contact
      </h2>

      <div className="space-y-3 text-slate-400 max-w-xl">
        <p>
          <a
            href="mailto:mgf.prauliyatama@gmail.com"
            className="text-teal-300 hover:underline"
          >
            mgf.prauliyatama@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://github.com/tamagossi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:underline"
          >
            github.com/tamagossi
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/tamagossi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:underline"
          >
            linkedin.com/in/tamagossi
          </a>
        </p>
        <p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:underline inline-flex items-center gap-1 group"
          >
            Download Résumé (PDF)
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </p>
      </div>

      <p className="text-slate-400 text-sm mt-8 max-w-xl">
        GMT+7 (Bandung, Indonesia) — experienced in async collaboration across
        8–12h timezone gaps.
      </p>
    </motion.section>
  );
}
