import React from "react";
import { DataTable } from "@/components/ui/DataTable";

export default function OrganizationPage() {
  const columns = [
    { accessorKey: "name", header: "Organization Name" },
    { accessorKey: "code", header: "Code" },
    { accessorKey: "tier", header: "Subscription Tier" },
    { accessorKey: "status", header: "Status" },
  ];

  const data = [
    { name: "Acme Enterprise Corp", code: "ACME", tier: "Enterprise", status: "Active" },
    { name: "Global Logistics Ltd", code: "GLOB", tier: "Business", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Organization Management</h1>
        <p className="text-sm text-slate-500">Manage your tenant profile, enterprise settings, and subscription limits.</p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
