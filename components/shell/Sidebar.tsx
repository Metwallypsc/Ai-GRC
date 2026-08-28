"use client";

import Link from "next/link";
import { Home, Building2, Users, Briefcase, Cpu, FileSpreadsheet, BarChart3, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full p-4 hidden md:flex flex-col">
      <div className="mb-8 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
        <Cpu className="h-5 w-5 text-indigo-600" /> BIA Platform
      </div>
      <nav className="space-y-1 flex-1">
        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
          <Home size={18} /> <span>Overview</span>
        </Link>
        <Link href="/organization" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
          <Building2 size={18} /> <span>Organization</span>
        </Link>
        <Link href="/departments" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
          <Users size={18} /> <span>Departments</span>
        </Link>
        <Link href="/business-units" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
          <Briefcase size={18} /> <span>Business Units</span>
        </Link>
        <Link href="/processes" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
          <Cpu size={18} /> <span>Processes</span>
        </Link>
        <Link href="/bia" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
          <FileSpreadsheet size={18} /> <span>BIA Assessments</span>
        </Link>
        <Link href="/reports" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
          <BarChart3 size={18} /> <span>Reports</span>
        </Link>
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
          <Settings size={18} /> <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}
