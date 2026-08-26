"use client";

import Link from "next/link";

export default function Breadcrumbs({ items }: { items: Array<{ href?: string; label: string }> }) {
  return (
    <nav className="text-sm mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {items.map((it, idx) => (
          <li key={idx} className="text-gray-600 dark:text-gray-300">
            {it.href ? <Link href={it.href}>{it.label}</Link> : <span>{it.label}</span>}
            {idx < items.length - 1 && <span className="px-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
