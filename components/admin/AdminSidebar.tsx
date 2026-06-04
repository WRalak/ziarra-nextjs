"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV = [
  { label: "Overview", href: "/admin/dashboard" },
  { label: "Profile", href: "/admin/profile" },
  { label: "Creators", href: "/admin/creators" },
  { label: "Packages", href: "/admin/packages" },
  { label: "Bookings", href: "/admin/bookings" },
  { label: "Payouts", href: "/admin/payouts" },
  { label: "Commission", href: "/admin/settings/commission" },
  { label: "Fraud Checks", href: "/admin/settings/fraud" },
];

export default function AdminSidebar({ user }: { user: { name?: string | null } }) {
  const path = usePathname();

  return (
    <aside className="w-52 flex-shrink-0 border-r border-gray-200 bg-gray-50 flex flex-col">
      <div className="border-b border-gray-200 px-4 py-4">
        <div className="text-sm font-medium text-gray-900">Ziarra</div>
        <div className="text-[10px] text-gray-500">Admin panel</div>
      </div>
      <div className="border-b border-gray-200 px-4 py-3">
        <div className="text-sm font-medium text-gray-900">{user.name ?? "Admin"}</div>
        <div className="text-[10px] text-gray-500">Platform control</div>
      </div>
      <nav className="flex-1 space-y-0.5 overflow-y-auto p-2">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx("nav-item text-sm", path === item.href && "active")}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
