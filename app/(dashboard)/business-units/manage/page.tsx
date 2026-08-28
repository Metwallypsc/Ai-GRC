import React from "react";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { Plus, Network } from "lucide-react";

export default function BusinessUnitsManagementPage() {
  const columns = [
    { accessorKey: "name", header: "Business Unit Name" },
    { accessorKey: "region", header: "Region / Location" },
    { accessorKey: "criticality", header: "Criticality" },
    { accessorKey: "departmentsCount", header: "Departments" },
  ];

  const data = [
    { name: "Core Payment Processing", region: "North America", criticality: "High", departmentsCount: 4 },
    { name: "Customer Support Desk", region: "EMEA", criticality: "Medium", departmentsCount: 2 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Business Units Management</h1>
          <p className="text-sm text-slate-500">Organize and structure enterprise divisions for BCM analysis.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/business-units/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
          >
            <Plus size={16} /> Add Business Unit
          </Link>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
