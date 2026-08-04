"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
} from "lucide-react";
import Header from "@/components/layout/header";
import { mockWorkers, type Worker } from "@/lib/mock-data";

type Status = Worker["status"];
type SortField = keyof Worker;
type SortDir = "asc" | "desc";

const STATUS_OPTIONS: { value: Status | ""; label: string }[] = [
  { value: "", label: "All" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "on_leave", label: "On Leave" },
];

const DEPARTMENTS = [
  "All",
  ...Array.from(new Set(mockWorkers.map((w) => w.department))),
].sort();
const PAGE_SIZES = [10, 25, 50];

// Simulate API call with delay
function fetchWorkers(params: {
  search: string;
  status: Status | "";
  department: string;
  sortField: SortField;
  sortDir: SortDir;
  page: number;
  pageSize: number;
}): Promise<{ workers: Worker[]; total: number }> {
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
            w.role.toLowerCase().includes(q)
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

      resolve({ workers, total });
    }, 300);
  });
}

function SortIcon({
  field,
  activeField,
  dir,
}: {
  field: SortField;
  activeField: SortField;
  dir: SortDir;
}) {
  if (activeField !== field) return null;
  return dir === "asc" ? (
    <ChevronUp size={14} className="inline ml-1" />
  ) : (
    <ChevronDown size={14} className="inline ml-1" />
  );
}

export default function DashboardPage() {
  // Filter state
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<Status | "">("");
  const [department, setDepartment] = useState("All");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Data state
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchWorkers({
      search,
      status,
      department,
      sortField,
      sortDir,
      page,
      pageSize,
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

  const handleSort = (field: SortField) => {
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
        className={`px-2 py-0.5 text-xs rounded-full border font-mono uppercase tracking-wide ${colors[s]}`}
      >
        {s.replace("_", " ")}
      </span>
    );
  };

  const inputClass =
    "bg-surface border border-line rounded-lg text-sm text-body placeholder:text-faint focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors";

  return (
    <div className="pt-16 min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl px-6 sm:px-10 py-14 md:py-20">
        <Link
          href="/#demo"
          className="group inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Back home
        </Link>

        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent mb-4">
          {"// "}live proof
        </p>
        <h1 className="font-sans text-3xl md:text-4xl font-bold text-ink tracking-tight">
          Data-Heavy Dashboard
        </h1>
        <p className="text-muted mt-3 mb-10 max-w-xl">
          Worker records with search, filters, sorting, pagination, and
          loading/empty/error states. Demonstrates production frontend patterns.
        </p>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-faint"
            />
            <input
              type="text"
              placeholder="Search by name or role..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className={`w-full pl-10 pr-4 py-2 ${inputClass}`}
            />
          </div>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value as Status | "");
              setPage(1);
            }}
            className={`px-3 py-2 ${inputClass}`}
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                Status: {opt.label}
              </option>
            ))}
          </select>
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setPage(1);
            }}
            className={`px-3 py-2 ${inputClass}`}
          >
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Content */}
        <div className="bg-surface border border-line rounded-2xl overflow-hidden">
          {/* Loading state */}
          {loading && (
            <div className="p-8 space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 bg-elevated rounded animate-pulse"
                  style={{ width: `${80 - i * 10}%` }}
                />
              ))}
            </div>
          )}

          {/* Error state */}
          {!loading && error && (
            <div className="p-8 text-center">
              <p className="text-red-300 mb-4">Something went wrong</p>
              <button
                onClick={loadData}
                className="inline-flex items-center gap-2 px-4 py-2 font-mono text-sm bg-elevated text-body rounded-lg hover:bg-line transition-colors"
              >
                <RefreshCw size={14} />
                Retry
              </button>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && workers.length === 0 && (
            <div className="p-8 text-center text-muted">
              <p className="mb-2">No workers match your filters.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setStatus("");
                  setDepartment("All");
                  setPage(1);
                }}
                className="text-accent hover:underline underline-offset-4 font-mono text-sm"
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
                  <thead className="bg-elevated/70 text-muted uppercase text-xs tracking-wider font-mono">
                    <tr>
                      <th
                        className="px-4 py-3 text-left cursor-pointer hover:text-accent transition-colors font-medium"
                        onClick={() => handleSort("name")}
                      >
                        Name <SortIcon field="name" activeField={sortField} dir={sortDir} />
                      </th>
                      <th
                        className="px-4 py-3 text-left cursor-pointer hover:text-accent transition-colors font-medium hidden sm:table-cell"
                        onClick={() => handleSort("role")}
                      >
                        Role <SortIcon field="role" activeField={sortField} dir={sortDir} />
                      </th>
                      <th
                        className="px-4 py-3 text-left cursor-pointer hover:text-accent transition-colors font-medium hidden md:table-cell"
                        onClick={() => handleSort("department")}
                      >
                        Department <SortIcon field="department" activeField={sortField} dir={sortDir} />
                      </th>
                      <th
                        className="px-4 py-3 text-left cursor-pointer hover:text-accent transition-colors font-medium"
                        onClick={() => handleSort("status")}
                      >
                        Status <SortIcon field="status" activeField={sortField} dir={sortDir} />
                      </th>
                      <th
                        className="px-4 py-3 text-right cursor-pointer hover:text-accent transition-colors font-medium hidden sm:table-cell"
                        onClick={() => handleSort("joinDate")}
                      >
                        Joined <SortIcon field="joinDate" activeField={sortField} dir={sortDir} />
                      </th>
                      <th
                        className="px-4 py-3 text-right cursor-pointer hover:text-accent transition-colors font-medium"
                        onClick={() => handleSort("performance")}
                      >
                        Perf <SortIcon field="performance" activeField={sortField} dir={sortDir} />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line/70">
                    {workers.map((worker, i) => (
                      <motion.tr
                        key={worker.id}
                        className="hover:bg-elevated/40 transition-colors"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.02 }}
                      >
                        <td className="px-4 py-3 text-body font-medium">
                          {worker.name}
                        </td>
                        <td className="px-4 py-3 text-muted hidden sm:table-cell">
                          {worker.role}
                        </td>
                        <td className="px-4 py-3 text-muted hidden md:table-cell">
                          {worker.department}
                        </td>
                        <td className="px-4 py-3">
                          {statusBadge(worker.status)}
                        </td>
                        <td className="px-4 py-3 text-muted text-right hidden sm:table-cell">
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
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-line text-sm text-muted">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span>Show</span>
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                      setPage(1);
                    }}
                    className={`px-2 py-1 ${inputClass}`}
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
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-1.5 rounded hover:bg-elevated disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-muted hover:text-accent"
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="px-3 py-1 font-mono text-xs text-body">
                    {page} / {totalPages || 1}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page >= totalPages}
                    className="p-1.5 rounded hover:bg-elevated disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-muted hover:text-accent"
                    aria-label="Next page"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer note */}
        <p className="mt-6 font-mono text-xs text-faint">
          Data is randomly generated. Simulates a 300ms API delay. Filters and
          pagination happen client-side. In production, these would be
          server-side query parameters.
        </p>
      </main>
    </div>
  );
}
