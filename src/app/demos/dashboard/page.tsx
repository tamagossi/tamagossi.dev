"use client";

import { useCallback, useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  RefreshCw,
  Search,
} from "lucide-react";
import Link from "next/link";

import { Header } from "@/components/layout/header";
import { mockWorkers, type Worker } from "@/lib/mock-data";

type Status = Worker["status"];
type SortField = keyof Worker;
type SortDir = "asc" | "desc";

const STATUS_OPTIONS: { label: string; value: "" | Status }[] = [
  { label: "All", value: "" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "On Leave", value: "on_leave" },
];

const DEPARTMENTS = [
  "All",
  ...Array.from(new Set(mockWorkers.map((w) => w.department))),
].sort();
const PAGE_SIZES = [10, 25, 50];

// Simulate API call with delay
function fetchWorkers(params: {
  department: string;
  page: number;
  pageSize: number;
  search: string;
  sortDir: SortDir;
  sortField: SortField;
  status: "" | Status;
}): Promise<{ total: number; workers: Worker[] }> {
  return new Promise((resolve, reject) => {
    // Simulate 300ms latency
    setTimeout(() => {
      // Simulate occasional error
      if (Math.random() < 0) {
        reject(new Error("Network error"));
        return;
      }

      let filtered = [...mockWorkers];

      if (params.search) {
        const q = params.search.toLowerCase();
        filtered = filtered.filter(
          (w) =>
            w.name.toLowerCase().includes(q) ||
            w.role.toLowerCase().includes(q),
        );
      }

      if (params.status) {
        filtered = filtered.filter((w) => w.status === params.status);
      }

      if (params.department && params.department !== "All") {
        filtered = filtered.filter((w) => w.department === params.department);
      }

      // Sort
      filtered.sort((a, b) => {
        const aVal = a[params.sortField];
        const bVal = b[params.sortField];
        if (typeof aVal === "string" && typeof bVal === "string") {
          return params.sortDir === "asc"
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        }
        const aNum = Number(aVal);
        const bNum = Number(bVal);
        return params.sortDir === "asc" ? aNum - bNum : bNum - aNum;
      });

      const total = filtered.length;
      const start = (params.page - 1) * params.pageSize;
      const workers = filtered.slice(start, start + params.pageSize);

      resolve({ total, workers });
    }, 300);
  });
}

function SortIcon({
  activeField,
  dir,
  field,
}: {
  activeField: SortField;
  dir: SortDir;
  field: SortField;
}) {
  if (activeField !== field) return null;
  return dir === "asc" ? (
    <ChevronUp className="ml-1 inline" size={14} />
  ) : (
    <ChevronDown className="ml-1 inline" size={14} />
  );
}

export default function DashboardPage() {
  // Filter state
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"" | Status>("");
  const [department, setDepartment] = useState("All");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Data state
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const loadData = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchWorkers({
      department,
      page,
      pageSize,
      search,
      sortDir,
      sortField,
      status,
    })
      .then((data) => {
        setWorkers(data.workers);
        setTotal(data.total);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, [search, status, department, sortField, sortDir, page, pageSize]);

  // Load on mount and when params change
  useEffect(() => {
    let cancelled = false;
    const timer = setTimeout(() => {
      if (!cancelled) loadData();
    }, 0);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [loadData]);

  const totalPages = Math.ceil(total / pageSize);

  const sortBy = (field: SortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
    setPage(1);
  };

  const statusBadge = (s: Status) => {
    const colors: Record<Status, string> = {
      active: "bg-emerald-900/30 text-emerald-400 border-emerald-800",
      inactive: "bg-elevated text-muted border-line",
      on_leave: "bg-accent-dim text-accent border-accent/30",
    };
    return (
      <span
        className={`rounded-full border px-2 py-0.5 font-mono text-xs tracking-wide uppercase ${colors[s]}`}
      >
        {s.replace("_", " ")}
      </span>
    );
  };

  const inputClass =
    "bg-surface border border-line rounded-lg text-sm text-body placeholder:text-faint focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors";

  return (
    <div className="min-h-screen pt-16">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-14 sm:px-10 md:py-20">
        <Link
          className="group text-muted hover:text-accent mb-10 inline-flex items-center gap-2 font-mono text-sm transition-colors"
          href="/#demo"
        >
          <ArrowLeft
            className="transition-transform duration-200 group-hover:-translate-x-1"
            size={15}
          />
          Back home
        </Link>

        <p className="text-accent mb-4 font-mono text-xs tracking-[0.28em] uppercase">
          {"// "}live proof
        </p>
        <h1 className="text-ink font-sans text-3xl font-bold tracking-tight md:text-4xl">
          Data-Heavy Dashboard
        </h1>
        <p className="text-muted mt-3 mb-10 max-w-xl">
          Worker records with search, filters, sorting, pagination, and
          loading/empty/error states. Demonstrates production frontend patterns.
        </p>

        {/* Filters */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              className="text-faint absolute top-1/2 left-3 -translate-y-1/2"
              size={16}
            />
            <input
              className={`w-full py-2 pr-4 pl-10 ${inputClass}`}
              placeholder="Search by name or role..."
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <select
            className={`px-3 py-2 ${inputClass}`}
            value={status}
            onChange={(e) => {
              setStatus(e.target.value as "" | Status);
              setPage(1);
            }}
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                Status: {opt.label}
              </option>
            ))}
          </select>
          <select
            className={`px-3 py-2 ${inputClass}`}
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setPage(1);
            }}
          >
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Content */}
        <div className="bg-surface border-line overflow-hidden rounded-2xl border">
          {/* Loading state */}
          {loading && (
            <div className="space-y-3 p-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  className="bg-elevated h-10 animate-pulse rounded"
                  key={i}
                  style={{ width: `${80 - i * 10}%` }}
                />
              ))}
            </div>
          )}

          {/* Error state */}
          {!loading && error && (
            <div className="p-8 text-center">
              <p className="mb-4 text-red-300">Something went wrong</p>
              <button
                className="bg-elevated text-body hover:bg-line inline-flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-sm transition-colors"
                onClick={loadData}
              >
                <RefreshCw size={14} />
                Retry
              </button>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && workers.length === 0 && (
            <div className="text-muted p-8 text-center">
              <p className="mb-2">No workers match your filters.</p>
              <button
                className="text-accent font-mono text-sm underline-offset-4 hover:underline"
                onClick={() => {
                  setSearch("");
                  setStatus("");
                  setDepartment("All");
                  setPage(1);
                }}
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Table */}
          {!loading && !error && workers.length > 0 && (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-elevated/70 text-muted font-mono text-xs tracking-wider uppercase">
                    <tr>
                      <th
                        className="hover:text-accent cursor-pointer px-4 py-3 text-left font-medium transition-colors"
                        onClick={() => sortBy("name")}
                      >
                        Name{" "}
                        <SortIcon
                          activeField={sortField}
                          dir={sortDir}
                          field="name"
                        />
                      </th>
                      <th
                        className="hover:text-accent hidden cursor-pointer px-4 py-3 text-left font-medium transition-colors sm:table-cell"
                        onClick={() => sortBy("role")}
                      >
                        Role{" "}
                        <SortIcon
                          activeField={sortField}
                          dir={sortDir}
                          field="role"
                        />
                      </th>
                      <th
                        className="hover:text-accent hidden cursor-pointer px-4 py-3 text-left font-medium transition-colors md:table-cell"
                        onClick={() => sortBy("department")}
                      >
                        Department{" "}
                        <SortIcon
                          activeField={sortField}
                          dir={sortDir}
                          field="department"
                        />
                      </th>
                      <th
                        className="hover:text-accent cursor-pointer px-4 py-3 text-left font-medium transition-colors"
                        onClick={() => sortBy("status")}
                      >
                        Status{" "}
                        <SortIcon
                          activeField={sortField}
                          dir={sortDir}
                          field="status"
                        />
                      </th>
                      <th
                        className="hover:text-accent hidden cursor-pointer px-4 py-3 text-right font-medium transition-colors sm:table-cell"
                        onClick={() => sortBy("joinDate")}
                      >
                        Joined{" "}
                        <SortIcon
                          activeField={sortField}
                          dir={sortDir}
                          field="joinDate"
                        />
                      </th>
                      <th
                        className="hover:text-accent cursor-pointer px-4 py-3 text-right font-medium transition-colors"
                        onClick={() => sortBy("performance")}
                      >
                        Perf{" "}
                        <SortIcon
                          activeField={sortField}
                          dir={sortDir}
                          field="performance"
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-line/70 divide-y">
                    {workers.map((worker, i) => (
                      <motion.tr
                        animate={{ opacity: 1, y: 0 }}
                        className="hover:bg-elevated/40 transition-colors"
                        initial={{ opacity: 0, y: 6 }}
                        key={worker.id}
                        transition={{ delay: i * 0.02, duration: 0.25 }}
                      >
                        <td className="text-body px-4 py-3 font-medium">
                          {worker.name}
                        </td>
                        <td className="text-muted hidden px-4 py-3 sm:table-cell">
                          {worker.role}
                        </td>
                        <td className="text-muted hidden px-4 py-3 md:table-cell">
                          {worker.department}
                        </td>
                        <td className="px-4 py-3">
                          {statusBadge(worker.status)}
                        </td>
                        <td className="text-muted hidden px-4 py-3 text-right sm:table-cell">
                          {worker.joinDate}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span
                            className={
                              worker.performance >= 4
                                ? "text-emerald-400"
                                : worker.performance >= 3
                                  ? "text-accent"
                                  : "text-red-300"
                            }
                          >
                            {worker.performance}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="border-line text-muted flex flex-col items-center justify-between gap-3 border-t px-4 py-3 text-sm sm:flex-row">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span>Show</span>
                  <select
                    className={`px-2 py-1 ${inputClass}`}
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                      setPage(1);
                    }}
                  >
                    {PAGE_SIZES.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <span>
                    of {total} worker{total !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    aria-label="Previous page"
                    className="hover:bg-elevated text-muted hover:text-accent rounded p-1.5 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-body px-3 py-1 font-mono text-xs">
                    {page} / {totalPages || 1}
                  </span>
                  <button
                    aria-label="Next page"
                    className="hover:bg-elevated text-muted hover:text-accent rounded p-1.5 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
                    disabled={page >= totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer note */}
        <p className="text-faint mt-6 font-mono text-xs">
          Data is randomly generated. Simulates a 300ms API delay. Filters and
          pagination happen client-side. In production, these would be
          server-side query parameters.
        </p>
      </main>
    </div>
  );
}
