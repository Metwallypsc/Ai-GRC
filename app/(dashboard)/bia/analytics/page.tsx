import React from "react";
import { DataTable } from "@/components/ui/DataTable";
import { BarChart3, AlertTriangle, ShieldCheck, TrendingUp } from "lucide-react";

export default function BiaAnalyticsPage() {
  const columns = [
    { accessorKey: "process", header: "Critical Process" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "impactScore", header: "Weighted Impact Score" },
    { accessorKey: "criticality", header: "Criticality Tier" },
    { accessorKey: "rto", header: "Target RTO" },
  ];

  const data = [
    { process: "Monthly Payroll Execution", department: "HR Team", impactScore: "92 / 100", criticality: "Critical", rto: "24 Hours" },
    { process: "Database Backup & Restore", department: "IT Infrastructure", impactScore: "88 / 100", criticality: "High", rto: "2 Hours" },
    { process: "Customer Dispute Resolution", department: "Support Desk", impactScore: "74 / 100", criticality: "Medium", rto: "4 Hours" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">BIA Scoring & Resilience Analytics</h1>
        <p className="text-sm text-slate-500">Analyze automated criticality calculations, impact heatmaps, and organizational recovery profiles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5"><AlertTriangle size={14} className="text-amber-500" /> CRITICAL PROCESSES</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">3</div>
          <div className="text-xs text-slate-500 font-medium">Requires immediate continuity plans</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-500" /> RESILIENCE SCORE</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">89%</div>
          <div className="text-xs text-emerald-600 font-medium">+4% from last quarter</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5"><TrendingUp size={14} className="text-indigo-500" /> AVG RECOVERY (RTO)</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">6.5h</div>
          <div className="text-xs text-slate-500 font-medium">Within target thresholds</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5"><BarChart3 size={14} className="text-indigo-500" /> ASSESSMENTS SCORED</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">12</div>
          <div className="text-xs text-slate-500 font-medium">Fully calculated</div>
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Top Critical Processes Ranking</h2>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
