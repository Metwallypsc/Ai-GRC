"use client";

import { useState } from "react";
import Sidebar from "@/components/shell/Sidebar";
import TopNav from "@/components/shell/TopNav";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav onMobileMenu={() => setMobileOpen((s) => !s)} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 dark:bg-slate-900">
          {children}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileOpen(false)} />
      )}
    </div>
  );
}
