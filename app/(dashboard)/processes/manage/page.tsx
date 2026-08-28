import React from "react";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { Plus, Cpu } from "lucide-react";

export default function ProcessesManagementPage() {
  const columns = [
    { accessorKey: "title", header: "Process Title" },
    { accessorKey: "owner", header: "Process Owner" },
    { accessorKey: "rto", header: "Target RTO" },
    { accessorKey: "rpo", header: "Target RPO" },
    { accessorKey: "status", header: "Lifecycle Status" },
  ];

  const data = [
    { title: "Monthly Payroll Execution", owner: "HR Team", rto: "24 Hours", rpo: "12 Hours", status: "Active" },
    { title: "Database Backup & Restore", owner: "DevOps", rto: "2 Hours", rpo: "1 Hour", status: "Active" },
    { title: "Customer Dispute Resolution", owner: "Support Lead", rto: "4 Hours", rpo: "2 Hours", status: "In Review" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Business Processes Directory</h1>
          <p className="text-sm text-slate-500">Manage organizational workflows, versioning, recovery targets, and review cycles.</p>
        </div>
        <Link
          href="/processes/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <Plus size={16} /> New Process
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
