import React from "react";
import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { Plus, Cpu } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function RealProcessesPage() {
  let processes: any[] = [];
  try {
    processes = await prisma.process.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.error("Failed to fetch processes:", e);
  }

  const columns = [
    { accessorKey: "title", header: "Process Title" },
    { accessorKey: "owner", header: "Process Owner" },
    { accessorKey: "rto", header: "Target RTO" },
    { accessorKey: "rpo", header: "Target RPO" },
    { accessorKey: "createdAt", header: "Created Date" },
  ];

  const formattedData = processes.map((p) => ({
    title: p.title,
    owner: p.owner || "Unassigned",
    rto: p.rto || "24 Hours",
    rpo: p.rpo || "12 Hours",
    createdAt: new Date(p.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Business Processes Directory (Database Connected)</h1>
          <p className="text-sm text-slate-500">Manage organizational workflows and recovery targets synchronized directly with Neon PostgreSQL.</p>
        </div>
        <Link
          href="/processes/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <Plus size={16} /> New Process
        </Link>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}
