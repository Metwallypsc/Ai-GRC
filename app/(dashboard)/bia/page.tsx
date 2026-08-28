import React from "react";
import { DataTable } from "@/components/ui/DataTable";

export default function BiaPage() {
  const columns = [
    { accessorKey: "assessment", header: "Assessment Name" },
    { accessorKey: "scope", header: "Scope" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "completion", header: "Completion" },
  ];

  const data = [
    { assessment: "Q3 2026 Resilience Review", scope: "Enterprise-wide", status: "In Progress", completion: "65%" },
    { assessment: "Cloud Infrastructure BIA", scope: "Engineering", status: "Completed", completion: "100%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">BIA Assessments</h1>
        <p className="text-sm text-slate-500">Conduct and review Business Impact Analysis questionnaires and calculations.</p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
