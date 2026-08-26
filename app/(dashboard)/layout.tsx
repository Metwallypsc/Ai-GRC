import DashboardShell from "@/components/shell/DashboardShell";

export const metadata = {
  title: "Dashboard | BIA Platform",
};

export default function DashboardLayout({ children }: LayoutProps) {
  return <DashboardShell>{children}</DashboardShell>;
}
