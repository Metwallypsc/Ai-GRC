import React from "react";
import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { Plus, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function RealBiaTemplatesPage() {
  let templates: any[] = [];
  try {
    templates = await prisma.biaAssessment.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.error("Failed to fetch BIA assessments:", e);
  }

  const columns = [
    { accessorKey: "assessment", header: "Assessment Title" },
    { accessorKey: "scope", header: "Scope / Department" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "completion", header: "Completion" },
  ];

  const formattedData = templates.map((t) => ({
    assessment: t.assessment,
    scope: t.scope || "Enterprise-wide",
    status: t.status || "In Progress",
    completion: t.completion || "50%",
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">BIA Assessments Hub (Database Connected)</h1>
          <p className="text-sm text-slate-500">Configure dynamic assessment templates and conduct reviews synchronized with Neon PostgreSQL.</p>
        </div>
        <Link
          href="/bia/templates/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <Plus size={16} /> New Assessment Template
        </Link>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}
