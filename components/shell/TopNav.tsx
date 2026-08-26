"use client";

import { Bell, Menu } from "lucide-react";
import { useState } from "react";

export default function TopNav({ onMobileMenu }: { onMobileMenu?: () => void }) {
  return (
    <header className="w-full h-14 border-b bg-white/80 dark:bg-slate-900/80 flex items-center px-4 justify-between">
      <div className="flex items-center gap-2">
        <button className="md:hidden p-2" aria-label="Open menu" onClick={onMobileMenu}>
          <Menu />
        </button>
        <div className="text-lg font-semibold">BIA Platform</div>
      </div>

      <div className="flex items-center gap-4">
        <button aria-label="Notifications" className="p-2">
          <Bell />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">U</div>
      </div>
    </header>
  );
}
