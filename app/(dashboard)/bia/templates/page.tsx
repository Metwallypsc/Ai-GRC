import React from "react";
import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { Plus, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function RealBiaTemplatesPage() {
  let templates: any[] = [];
  try {
    templates = await prisma.bIATemplate.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.error("Failed to fetch BIA templates:", e);
  }

  const columns = [
    { accessorKey: "name", header: "Template Name" },
    { accessorKey: "version", header: "Version" },
    { accessorKey: "status", header: "Lifecycle Status" },
    { accessorKey: "createdAt", header: "Created Date" },
  ];

  const formattedData = templates.map((t) => ({
    name: t.name,
    version: `v${t.version || 1}.0`,
    status: t.status,
    createdAt: new Date(t.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">BIA Questionnaire Templates (Database Connected)</h1>
          <p className="text-sm text-slate-500">Configure dynamic assessment templates, sections, and scoring weights synchronized with Neon PostgreSQL.</p>
        </div>
        <Link
          href="/bia/templates/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <Plus size={16} /> Create Template
        </Link>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}
