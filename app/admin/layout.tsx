// app/admin/layout.tsx
import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardTopbar from "@/components/DashboardTopbar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Demo mode: provide mock admin user data for testing
  const user = {
    id: "demo-admin-1",
    name: "Demo Admin",
    email: "admin@ziarra.com",
    role: "ADMIN",
  };

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      <AdminSidebar user={user} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardTopbar
          title="Admin demo"
          subtitle="Creator approval, package control, and payout review"
          notifications={5}
          profileHref="/admin/profile"
          profileInitials="AD"
        />
        {children}
      </div>
    </div>
  );
}
