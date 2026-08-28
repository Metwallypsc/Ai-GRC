import React from "react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Building2, Settings, Shield, Globe } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function RealOrganizationPage() {
  let org: any = null;
  try {
    org = await prisma.organization.findFirst({
      include: {
        _count: {
          select: { users: true, departments: true, businessUnits: true, processes: true },
        },
      },
    });
  } catch (e) {
    console.error("Failed to fetch organization:", e);
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Organization Tenant Profile</h1>
          <p className="text-sm text-slate-500">Manage tenant identity, isolated enterprise settings, and subscription metadata.</p>
        </div>
        <Link
          href="/organization/settings"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <Settings size={16} /> Edit Settings
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-sm space-y-6">
        <div className="flex items-center gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="h-16 w-16 bg-indigo-100 dark:bg-indigo-950 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl">
            {org?.name ? org.name.substring(0, 2).toUpperCase() : "AI"}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{org?.name || "Acme Enterprise Corp"}</h2>
            <p className="text-xs text-slate-500 font-mono">Tenant Code: {org?.code || "ACME"} | Tier: {org?.tier || "ENTERPRISE"}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400">REGISTERED USERS</span>
            <div className="font-medium text-slate-900 dark:text-slate-100">{org?._count?.users || 1} Users</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400">DEPARTMENTS</span>
            <div className="font-medium text-slate-900 dark:text-slate-100">{org?._count?.departments || 2} Departments</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400">BUSINESS UNITS</span>
            <div className="font-medium text-slate-900 dark:text-slate-100">{org?._count?.businessUnits || 2} Business Units</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400">BUSINESS PROCESSES</span>
            <div className="font-medium text-slate-900 dark:text-slate-100">{org?._count?.processes || 2} Processes Cataloged</div>
          </div>
        </div>
      </div>
    </div>
  );
}
