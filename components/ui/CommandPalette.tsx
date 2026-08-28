"use client";

import React, { useState, useEffect } from "react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        <div className="p-3 border-b border-slate-200 dark:border-slate-800">
          <input
            autoFocus
            placeholder="Type a command or search..."
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none text-sm"
          />
        </div>
        <div className="p-2 max-h-60 overflow-y-auto space-y-1">
          <div className="px-3 py-2 text-xs font-semibold text-slate-400">Suggestions</div>
          <div className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer text-sm text-slate-700 dark:text-slate-300">
            Go to Dashboard
          </div>
          <div className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer text-sm text-slate-700 dark:text-slate-300">
            Manage Organization
          </div>
          <div className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer text-sm text-slate-700 dark:text-slate-300">
            View BIA Assessments
          </div>
        </div>
        <div className="p-2 border-t border-slate-200 dark:border-slate-800 text-right">
          <button
            onClick={() => setOpen(false)}
            className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 px-2 py-1"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
