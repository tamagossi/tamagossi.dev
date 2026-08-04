"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const PREVIEW_ROWS = [
  {
    name: "Adi Pratama",
    perf: 4.6,
    role: "Frontend Engineer",
    status: "Active",
  },
  {
    name: "Budi Wijaya",
    perf: 3.8,
    role: "Product Designer",
    status: "On Leave",
  },
  {
    name: "Citra Lestari",
    perf: 4.2,
    role: "Backend Engineer",
    status: "Active",
  },
  { name: "Dewi Anggraini", perf: 3.1, role: "QA Engineer", status: "Active" },
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

export const Demo = () => {
  return (
    <section className="relative overflow-hidden py-28 md:py-36" id="demo">
      {/* Full-bleed band */}
      <div aria-hidden className="bg-surface/40 absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="live proof" title="Interactive demo" />

        <FadeIn y={30}>
          <div className="bg-surface border-line overflow-hidden rounded-2xl border">
            {/* Window chrome */}
            <div className="border-line flex items-center justify-between border-b px-5 py-3">
              <div aria-hidden className="flex items-center gap-2">
                <span className="bg-elevated h-3 w-3 rounded-full" />
                <span className="bg-elevated h-3 w-3 rounded-full" />
                <span className="bg-accent h-3 w-3 rounded-full" />
              </div>
              <p className="text-faint font-mono text-xs">workers-table.tsx</p>
            </div>

            <div className="p-5 md:p-8">
              <div className="border-line hidden overflow-hidden rounded-lg border md:block">
                <div className="bg-elevated/60 text-muted grid grid-cols-4 gap-3 px-5 py-3 font-mono text-[10px] tracking-widest uppercase">
                  <span>Name</span>
                  <span>Role</span>
                  <span>Status</span>
                  <span className="text-right">Perf</span>
                </div>
                {PREVIEW_ROWS.map((row) => (
                  <div
                    className="border-line/60 grid grid-cols-4 gap-3 border-t px-5 py-3.5"
                    key={row.name}
                  >
                    <span className="text-ink font-mono text-xs">
                      {row.name}
                    </span>
                    <span className="text-muted font-mono text-xs">
                      {row.role}
                    </span>
                    <span>
                      <span
                        className={`inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-wide uppercase ${statusStyle(
                          row.status,
                        )}`}
                      >
                        {row.status}
                      </span>
                    </span>
                    <span className="flex items-center justify-end gap-2">
                      <span className="text-body font-mono text-xs">
                        {row.perf}
                      </span>
                      <span className="bg-elevated h-1 w-14 overflow-hidden rounded-full">
                        <span
                          className={`block h-full rounded-full ${perfColor(row.perf)}`}
                          style={{ width: `${(row.perf / 5) * 100}%` }}
                        />
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-body mt-6 max-w-xl leading-relaxed">
                A public interactive dashboard proving production frontend
                skills: search, multi-select filters, URL-based state,
                pagination, loading/empty/error states, keyboard accessibility,
                and responsive design — over 100 simulated worker records.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  className="bg-accent text-accent-ink inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-semibold tracking-wider uppercase transition-transform duration-200 hover:scale-[1.03] active:scale-95"
                  href="/demos/dashboard"
                >
                  Launch demo
                  <ArrowUpRight size={15} />
                </Link>
                <span className="text-faint font-mono text-xs">
                  100 workers · search · sort · paginate
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
