import React from "react";
import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { UserPlus } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function RealUsersPage() {
  let users: any[] = [];
  try {
    users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.error("Failed to fetch users:", e);
  }

  const columns = [
    { accessorKey: "name", header: "Full Name" },
    { accessorKey: "email", header: "Email Address" },
    { accessorKey: "role", header: "Role" },
    { accessorKey: "createdAt", header: "Created Date" },
  ];

  const formattedData = users.map((u) => ({
    name: u.name || "N/A",
    email: u.email,
    role: u.role,
    createdAt: new Date(u.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">User Management (Database Connected)</h1>
          <p className="text-sm text-slate-500">Manage tenant users and permissions synchronized directly with Neon PostgreSQL.</p>
        </div>
        <Link
          href="/users/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <UserPlus size={16} /> Add New User
        </Link>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}
