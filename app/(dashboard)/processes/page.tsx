import React from "react";
import { DataTable } from "@/components/ui/DataTable";

export default function ProcessesPage() {
  const columns = [
    { accessorKey: "title", header: "Process Title" },
    { accessorKey: "owner", header: "Process Owner" },
    { accessorKey: "rto", header: "Target RTO" },
    { accessorKey: "rpo", header: "Target RPO" },
  ];

  const data = [
    { title: "Monthly Payroll Execution", owner: "HR Team", rto: "24 Hours", rpo: "12 Hours" },
    { title: "Database Backup & Restore", owner: "DevOps", rto: "2 Hours", rpo: "1 Hour" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Business Processes</h1>
        <p className="text-sm text-slate-500">Catalog and analyze operational business workflows.</p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
