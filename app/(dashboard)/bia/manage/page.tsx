import React from "react";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { Plus, FileSpreadsheet } from "lucide-react";

export default function BiaManagementPage() {
  const columns = [
    { accessorKey: "assessment", header: "Assessment Name" },
    { accessorKey: "scope", header: "Scope / Department" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "completion", header: "Completion" },
  ];

  const data = [
    { assessment: "Q3 2026 Enterprise Resilience Review", scope: "Core Operations", status: "In Progress", completion: "65%" },
    { assessment: "Cloud Infrastructure BIA", scope: "Engineering", status: "Completed", completion: "100%" },
    { assessment: "Payment Gateway Disruption Study", scope: "Finance & IT", status: "Under Review", completion: "90%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">BIA Assessments Hub</h1>
          <p className="text-sm text-slate-500">Conduct guided Business Impact Assessments, calculate RTO/RPOs, and evaluate operational resilience.</p>
        </div>
        <Link
          href="/bia/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <Plus size={16} /> New Assessment Wizard
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
