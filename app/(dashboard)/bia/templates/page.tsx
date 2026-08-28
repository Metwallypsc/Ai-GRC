import React from "react";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { Plus, FileText } from "lucide-react";

export default function BiaTemplatesPage() {
  const columns = [
    { accessorKey: "name", header: "Template Name" },
    { accessorKey: "industry", header: "Industry / Scope" },
    { accessorKey: "version", header: "Version" },
    { accessorKey: "status", header: "Status" },
  ];

  const data = [
    { name: "Standard Enterprise BIA Template", industry: "General Corporate", version: "v1.2", status: "Active" },
    { name: "Financial Services Resilience Template", industry: "Banking & Finance", version: "v2.0", status: "Active" },
    { name: "Healthcare Critical Operations Template", industry: "Healthcare & Pharma", version: "v1.0", status: "Draft" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">BIA Questionnaire Templates</h1>
          <p className="text-sm text-slate-500">Configure dynamic assessment templates, sections, and scoring weights.</p>
        </div>
        <Link
          href="/bia/templates/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <Plus size={16} /> Create Template
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
