import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function DashboardHome() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Dashboard" }]} />
      <h1 className="text-2xl font-bold">Welcome to BIA Platform</h1>
      <p className="mt-4 text-muted-foreground">This is the modern enterprise dashboard shell. Business logic will be added later.</p>
    </div>
  );
}
