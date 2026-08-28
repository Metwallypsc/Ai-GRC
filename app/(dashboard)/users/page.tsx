import React from "react";
import { DataTable } from "@/components/ui/DataTable";
import Link from "next/link";
import { UserPlus, Shield, Mail, MoreHorizontal } from "lucide-react";

export default function UsersPage() {
  const columns = [
    { accessorKey: "name", header: "Full Name" },
    { accessorKey: "email", header: "Email Address" },
    { accessorKey: "role", header: "Role" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "status", header: "Status" },
  ];

  const data = [
    { name: "John Doe", email: "john.doe@enterprise.com", role: "ORG_ADMIN", department: "IT", status: "Active" },
    { name: "Sarah Smith", email: "sarah.smith@enterprise.com", role: "BCM_MANAGER", department: "Operations", status: "Active" },
    { name: "Michael Johnson", email: "michael.j@enterprise.com", role: "VIEWER", department: "Finance", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">User Directory</h1>
          <p className="text-sm text-slate-500">Manage tenant users, roles, and access control permissions.</p>
        </div>
        <Link
          href="/users/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
        >
          <UserPlus size={16} /> Add New User
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
