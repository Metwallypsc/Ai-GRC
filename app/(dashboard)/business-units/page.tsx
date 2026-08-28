import React from "react";
import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { Plus, Briefcase } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function RealBusinessUnitsPage() {
  let businessUnits: any[] = [];
  try {
    businessUnits = await prisma.businessUnit.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.error("Failed to fetch business units:", e);
  }

  const columns = [
    { accessorKey: "name", header: "Business Unit Name" },
    { accessorKey: "region", header: "Region / Location" },
    { accessorKey: "criticality", header: "Criticality" },
    { accessorKey: "createdAt", header: "Created Date" },
  ];

  const formattedData = businessUnits.map((bu) => ({
    name: bu.name,
    region: bu.region || "Global",
    criticality: bu.criticality || "Medium",
    createdAt: new Date(bu.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Business Units (Database Connected)</h1>
          <p className="text-sm text-slate-500">Manage enterprise operating units synchronized directly with Neon PostgreSQL.</p>
        </div>
        <Link
          href="/business-units/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <Plus size={16} /> Add Business Unit
        </Link>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}
