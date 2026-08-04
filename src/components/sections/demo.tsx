"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/reveal";

const PREVIEW_ROWS = [
  { name: "Adi Pratama", role: "Frontend Engineer", status: "Active", perf: 4.6 },
  { name: "Budi Wijaya", role: "Product Designer", status: "On Leave", perf: 3.8 },
  { name: "Citra Lestari", role: "Backend Engineer", status: "Active", perf: 4.2 },
  { name: "Dewi Anggraini", role: "QA Engineer", status: "Active", perf: 3.1 },
];

function statusStyle(status: string) {
  switch (status) {
    case "Active":
      return "bg-accent-dim text-accent border-accent/30";
    case "On Leave":
      return "bg-elevated text-muted border-line";
    default:
      return "bg-elevated text-muted border-line";
  }
}

function perfColor(p: number) {
  if (p >= 4) return "bg-accent";
  if (p >= 3.5) return "bg-accent-strong/70";
  return "bg-faint";
}

export default function Demo() {
  return (
    <section id="demo" className="relative py-28 md:py-36 overflow-hidden">
      {/* Full-bleed band */}
      <div className="absolute inset-0 bg-surface/40" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="live proof" title="Interactive demo" />

        <FadeIn y={30}>
          <div className="rounded-2xl bg-surface border border-line overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <div className="flex items-center gap-2" aria-hidden>
                <span className="h-3 w-3 rounded-full bg-elevated" />
                <span className="h-3 w-3 rounded-full bg-elevated" />
                <span className="h-3 w-3 rounded-full bg-accent" />
              </div>
              <p className="font-mono text-xs text-faint">workers-table.tsx</p>
            </div>

            <div className="p-5 md:p-8">
              <div className="hidden md:block overflow-hidden rounded-lg border border-line">
                <div className="grid grid-cols-4 gap-3 bg-elevated/60 px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                  <span>Name</span>
                  <span>Role</span>
                  <span>Status</span>
                  <span className="text-right">Perf</span>
                </div>
                {PREVIEW_ROWS.map((row) => (
                  <div
                    key={row.name}
                    className="grid grid-cols-4 gap-3 border-t border-line/60 px-5 py-3.5"
                  >
                    <span className="font-mono text-xs text-ink">{row.name}</span>
                    <span className="font-mono text-xs text-muted">{row.role}</span>
                    <span>
                      <span
                        className={`inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${statusStyle(
                          row.status
                        )}`}
                      >
                        {row.status}
                      </span>
                    </span>
                    <span className="flex items-center justify-end gap-2">
                      <span className="font-mono text-xs text-body">{row.perf}</span>
                      <span className="h-1 w-14 overflow-hidden rounded-full bg-elevated">
                        <span
                          className={`block h-full rounded-full ${perfColor(row.perf)}`}
                          style={{ width: `${(row.perf / 5) * 100}%` }}
                        />
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-xl text-body leading-relaxed">
                A public interactive dashboard proving production frontend
                skills: search, multi-select filters, URL-based state,
                pagination, loading/empty/error states, keyboard accessibility,
                and responsive design — over 100 simulated worker records.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  href="/demos/dashboard"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-accent-ink transition-transform duration-200 hover:scale-[1.03] active:scale-95"
                >
                  Launch demo
                  <ArrowUpRight size={15} />
                </Link>
                <span className="font-mono text-xs text-faint">
                  100 workers · search · sort · paginate
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
