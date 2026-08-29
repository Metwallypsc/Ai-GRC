import React from "react";
import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { Plus, CheckCircle2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function RealBiaAssessmentsPage() {
  let assessments: any[] = [];
  try {
    assessments = await prisma.biaAssessment.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.error("Failed to fetch BIA assessments:", e);
  }

  const columns = [
    { accessorKey: "assessment", header: "Assessment Title" },
    { accessorKey: "scope", header: "Scope / Department" },
    { accessorKey: "status", header: "Lifecycle Status" },
    { accessorKey: "completion", header: "Completion" },
    { accessorKey: "createdAt", header: "Assigned Date" },
  ];

  const formattedData = assessments.map((a) => ({
    assessment: a.assessment,
    scope: a.scope || "Enterprise-wide",
    status: a.status || "In Progress",
    completion: a.completion || "50%",
    createdAt: new Date(a.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">BIA Assessment Execution Hub (Database Connected)</h1>
          <p className="text-sm text-slate-500">Manage live Business Impact Assessments, workflows, and reviewer sign-offs synchronized with Neon PostgreSQL.</p>
        </div>
        <Link
          href="/bia/assessments/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <Plus size={16} /> Assign Assessment
        </Link>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}
