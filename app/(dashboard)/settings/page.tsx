import React from "react";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Settings</h1>
        <p className="text-sm text-slate-500">Configure workspace preferences, security policies, and integrations.</p>
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">General Settings</h2>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Workspace Name</label>
          <input
            type="text"
            defaultValue="Acme Enterprise"
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-transparent text-sm text-slate-900 dark:text-slate-100"
          />
        </div>
        <div className="pt-4">
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
