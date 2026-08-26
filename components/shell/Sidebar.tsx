"use client";

import Link from "next/link";
import { Home, Layers, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r h-full p-4 hidden md:block">
      <div className="mb-8 text-lg font-semibold">BIA Platform</div>
      <nav className="space-y-2">
        <Link href="/dashboard" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800">
          <Home size={18} /> <span>Overview</span>
        </Link>
        <Link href="/dashboard/features" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800">
          <Layers size={18} /> <span>Features</span>
        </Link>
        <Link href="/dashboard/settings" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800">
          <Settings size={18} /> <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}
