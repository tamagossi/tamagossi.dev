"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Demo() {
  return (
    <motion.section
      id="demo"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-400 mb-8">
        Demo
      </h2>

      <div className="bg-navy-900 rounded-lg p-6 border border-navy-800 max-w-xl">
        <h3 className="text-slate-50 font-medium">
          Data-Heavy Dashboard
        </h3>
        <p className="text-slate-400 mt-2 text-sm leading-relaxed">
          A public interactive dashboard proving production frontend skills:
          search, multi-select filters, URL-based state, pagination,
          loading/empty/error states, keyboard accessibility, and responsive
          design.
        </p>
        <Link
          href="/demos/dashboard"
          className="inline-flex items-center gap-2 mt-4 text-sm text-teal-300 hover:underline group"
        >
          Launch Demo
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.section>
  );
}
