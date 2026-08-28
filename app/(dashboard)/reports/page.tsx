import React from "react";
import { DataTable } from "@/components/ui/DataTable";

export default function ReportsPage() {
  const columns = [
    { accessorKey: "title", header: "Report Title" },
    { accessorKey: "type", header: "Type" },
    { accessorKey: "generatedAt", header: "Generated At" },
  ];

  const data = [
    { title: "Executive Summary - Critical RTOs", type: "PDF", generatedAt: "2026-08-20" },
    { title: "Resource Dependency Matrix", type: "Excel", generatedAt: "2026-08-15" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Reports & Analytics</h1>
        <p className="text-sm text-slate-500">Generate executive-ready resilience and impact reports.</p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
