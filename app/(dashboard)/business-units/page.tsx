import React from "react";
import { DataTable } from "@/components/ui/DataTable";

export default function BusinessUnitsPage() {
  const columns = [
    { accessorKey: "name", header: "Business Unit Name" },
    { accessorKey: "region", header: "Region / Location" },
    { accessorKey: "criticality", header: "Criticality" },
  ];

  const data = [
    { name: "Core Payment Processing", region: "North America", criticality: "High" },
    { name: "Customer Support Desk", region: "EMEA", criticality: "Medium" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Business Units</h1>
        <p className="text-sm text-slate-500">Monitor core business units and operational divisions.</p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
