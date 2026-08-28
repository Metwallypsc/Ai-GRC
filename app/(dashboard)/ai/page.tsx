import React from "react";
import { Sparkles, Bot, Lightbulb, CheckCircle2 } from "lucide-react";

export default function AiAssistantPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-600" /> BCM AI Assistant & Advisor
          </h1>
          <p className="text-sm text-slate-500">Intelligent business continuity co-pilot for BIA questionnaires, RTO/RPO optimization, and executive insights.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
            <Bot size={18} className="text-indigo-600" /> RTO/RPO Advisor
          </div>
          <p className="text-xs text-slate-500">Analyze current financial and operational impacts to recommend optimal recovery time objectives based on industry benchmarks.</p>
          <button className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs font-medium rounded transition-colors">
            Run RTO Analysis
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
            <Lightbulb size={18} className="text-amber-500" /> Executive Summary Generator
          </div>
          <p className="text-xs text-slate-500">Automatically synthesize department resilience data into concise, board-ready impact summaries.</p>
          <button className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950 dark:hover:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs font-medium rounded transition-colors">
            Generate Summary
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Active AI Governance & Context</h2>
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" /> Tenant-scoped context isolation strictly enforced.
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" /> Human-in-the-loop approval required before applying suggestions.
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" /> Prompt version tracking and usage logging active.
          </div>
        </div>
      </div>
    </div>
  );
}
