"use client";

import { useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
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

const DEPARTMENTS = ["All", ...Array.from(new Set(mockWorkers.map((w) => w.department)))].sort();
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
    fetchWorkers({ search, status, department, sortField, sortDir, page, pageSize })
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
  useMemo(() => {
    loadData();
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

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDir === "asc" ? (
      <ChevronUp size={14} className="inline ml-1" />
    ) : (
      <ChevronDown size={14} className="inline ml-1" />
    );
  };

  const statusBadge = (s: Status) => {
    const colors: Record<Status, string> = {
      active: "bg-green-900/30 text-green-400 border-green-800",
      inactive: "bg-slate-800 text-slate-400 border-slate-700",
      on_leave: "bg-yellow-900/30 text-yellow-400 border-yellow-800",
    };
    return (
      <span className={`px-2 py-0.5 text-xs rounded-full border ${colors[s]}`}>
        {s.replace("_", " ")}
      </span>
    );
  };

  return (
    <div className="lg:ml-[40%] lg:w-[60%] w-full lg:pt-0 pt-20 px-6 pb-24 lg:px-16 lg:py-24">
      <Link
        href="/#demo"
        className="inline-flex items-center gap-2 text-sm text-teal-300 hover:underline mb-8 group"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        Back home
      </Link>

      <h1 className="text-2xl font-bold text-slate-50 mb-2">
        Data-Heavy Dashboard
      </h1>
      <p className="text-slate-400 mb-8 text-sm">
        Worker records with search, filters, sorting, pagination, and URL-based
        state. Demonstrates production frontend patterns.
      </p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search by name or role..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-navy-700 rounded-lg text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-teal-300/50 focus:ring-1 focus:ring-teal-300/50"
          />
        </div>
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value as Status | "");
            setPage(1);
          }}
          className="px-3 py-2 bg-navy-900 border border-navy-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-teal-300/50"
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
          className="px-3 py-2 bg-navy-900 border border-navy-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-teal-300/50"
        >
          {DEPARTMENTS.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Content */}
      <div className="bg-navy-900 border border-navy-800 rounded-lg overflow-hidden">
        {/* Loading state */}
        {loading && (
          <div className="p-8 space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-10 bg-navy-800 rounded animate-pulse"
                style={{ width: `${80 - i * 10}%` }}
              />
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="p-8 text-center">
            <p className="text-red-400 mb-3">Something went wrong</p>
            <button
              onClick={loadData}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-navy-800 text-slate-200 rounded-lg hover:bg-navy-700 transition-colors"
            >
              <RefreshCw size={14} />
              Retry
            </button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && workers.length === 0 && (
          <div className="p-8 text-center text-slate-400">
            <p className="mb-2">No workers match your filters.</p>
            <button
              onClick={() => {
                setSearch("");
                setStatus("");
                setDepartment("All");
                setPage(1);
              }}
              className="text-teal-300 hover:underline text-sm"
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
                <thead className="bg-navy-800 text-slate-400 uppercase text-xs tracking-wider">
                  <tr>
                    <th
                      className="px-4 py-3 text-left cursor-pointer hover:text-teal-300 transition-colors"
                      onClick={() => handleSort("name")}
                    >
                      Name <SortIcon field="name" />
                    </th>
                    <th
                      className="px-4 py-3 text-left cursor-pointer hover:text-teal-300 transition-colors hidden sm:table-cell"
                      onClick={() => handleSort("role")}
                    >
                      Role <SortIcon field="role" />
                    </th>
                    <th
                      className="px-4 py-3 text-left cursor-pointer hover:text-teal-300 transition-colors hidden md:table-cell"
                      onClick={() => handleSort("department")}
                    >
                      Department <SortIcon field="department" />
                    </th>
                    <th
                      className="px-4 py-3 text-left cursor-pointer hover:text-teal-300 transition-colors"
                      onClick={() => handleSort("status")}
                    >
                      Status <SortIcon field="status" />
                    </th>
                    <th
                      className="px-4 py-3 text-right cursor-pointer hover:text-teal-300 transition-colors hidden sm:table-cell"
                      onClick={() => handleSort("joinDate")}
                    >
                      Joined <SortIcon field="joinDate" />
                    </th>
                    <th
                      className="px-4 py-3 text-right cursor-pointer hover:text-teal-300 transition-colors"
                      onClick={() => handleSort("performance")}
                    >
                      Perf <SortIcon field="performance" />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800">
                  {workers.map((worker) => (
                    <tr
                      key={worker.id}
                      className="hover:bg-navy-800/50 transition-colors"
                    >
                      <td className="px-4 py-3 text-slate-200 font-medium">
                        {worker.name}
                      </td>
                      <td className="px-4 py-3 text-slate-400 hidden sm:table-cell">
                        {worker.role}
                      </td>
                      <td className="px-4 py-3 text-slate-400 hidden md:table-cell">
                        {worker.department}
                      </td>
                      <td className="px-4 py-3">{statusBadge(worker.status)}</td>
                      <td className="px-4 py-3 text-slate-400 text-right hidden sm:table-cell">
                        {worker.joinDate}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span
                          className={
                            worker.performance >= 4
                              ? "text-green-400"
                              : worker.performance >= 3
                              ? "text-yellow-400"
                              : "text-red-400"
                          }
                        >
                          {worker.performance}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-navy-800 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span>Show</span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setPage(1);
                  }}
                  className="px-2 py-1 bg-navy-800 border border-navy-700 rounded text-slate-200 text-sm focus:outline-none focus:border-teal-300/50"
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
                  className="p-1.5 rounded hover:bg-navy-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="px-3 py-1 text-slate-200">
                  {page} / {totalPages || 1}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="p-1.5 rounded hover:bg-navy-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
      <p className="mt-6 text-xs text-slate-400">
        Data is randomly generated. Simulates a 300ms API delay. Filters and
        pagination happen client-side. In production, these would be server-side
        query parameters.
      </p>
    </div>
  );
}
