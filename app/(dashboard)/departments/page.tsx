import React from "react";
import { DataTable } from "@/components/ui/DataTable";

export default function DepartmentsPage() {
  const columns = [
    { accessorKey: "name", header: "Department Name" },
    { accessorKey: "head", header: "Department Head" },
    { accessorKey: "employees", header: "Employees Count" },
  ];

  const data = [
    { name: "Information Technology", head: "Jane Doe", employees: 45 },
    { name: "Finance & Accounting", head: "John Smith", employees: 18 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Departments</h1>
        <p className="text-sm text-slate-500">View and manage company departments and unit allocations.</p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
