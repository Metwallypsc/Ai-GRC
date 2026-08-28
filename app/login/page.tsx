import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">BIA Platform</h1>
          <p className="text-sm text-slate-500">Sign in to your enterprise workspace</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Email Address</label>
            <input
              type="email"
              defaultValue="admin@enterprise.com"
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Password</label>
            <input
              type="password"
              defaultValue="••••••••••••"
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <Link
            href="/dashboard"
            className="w-full flex items-center justify-center py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-md shadow-sm transition-colors"
          >
            Sign In
          </Link>
        </div>
        <div className="text-center text-xs text-slate-500">
          Enterprise Multi-Tenant Security Enabled
        </div>
      </div>
    </div>
  );
}
