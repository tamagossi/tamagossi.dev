import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "An interactive data-heavy dashboard: search, filters, URL state, pagination, loading/empty/error states, keyboard accessibility.",
  title: "Data-Heavy Dashboard Demo — React, TanStack Table, URL State",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
