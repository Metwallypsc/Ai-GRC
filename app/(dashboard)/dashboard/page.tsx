import React from "react";
import Link from "next/link";
import { Cpu, FileSpreadsheet, Building2, Users } from "lucide-react";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Enterprise Overview</h1>
        <p className="text-sm text-slate-500">Welcome to your Business Continuity Management command center.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="text-xs font-semibold text-slate-400">TOTAL PROCESSES</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">24</div>
          <div className="text-xs text-emerald-600 font-medium">100% compliant</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="text-xs font-semibold text-slate-400">BIA COMPLETION</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">85%</div>
          <div className="text-xs text-indigo-600 font-medium">On track for Q3</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="text-xs font-semibold text-slate-400">BUSINESS UNITS</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">6</div>
          <div className="text-xs text-slate-500 font-medium">Across 3 regions</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="text-xs font-semibold text-slate-400">ACTIVE USERS</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">18</div>
          <div className="text-xs text-slate-500 font-medium">Enterprise Tier</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Quick Actions</h2>
          <div className="space-y-2">
            <Link href="/processes" className="block p-3 rounded hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="font-medium text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Cpu size={16} className="text-indigo-600" /> Manage Business Processes
              </div>
              <div className="text-xs text-slate-500">Catalog and version critical operational workflows.</div>
            </Link>
            <Link href="/bia" className="block p-3 rounded hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="font-medium text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <FileSpreadsheet size={16} className="text-indigo-600" /> Conduct BIA Assessment
              </div>
              <div className="text-xs text-slate-500">Evaluate impact periods, RTO/RPOs, and resource dependencies.</div>
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tenant Status</h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span>Organization</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">Acme Enterprise Corp</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span>Subscription Tier</span>
              <span className="font-medium text-indigo-600">Enterprise</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Security Policy</span>
              <span className="font-medium text-emerald-600">Enforced (RBAC)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
