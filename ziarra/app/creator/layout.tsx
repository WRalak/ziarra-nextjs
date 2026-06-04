import CreatorSidebar from "@/components/creator/CreatorSidebar";
import DashboardTopbar from "@/components/DashboardTopbar";

export default function CreatorLayout({ children }: { children: React.ReactNode }) {
  const creator = {
    handle: "demo_creator",
    brandName: "Demo Creator",
    commissionPct: 8,
    city: "Nairobi",
  };

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      <CreatorSidebar creator={creator} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardTopbar
          title="Creator demo"
          subtitle="Referral links, bookings, earnings, and payouts"
          notifications={3}
          profileHref="/creator/profile"
          profileInitials="DC"
        />
        {children}
      </div>
    </div>
  );
}
