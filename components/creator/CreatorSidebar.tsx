"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface Props {
  creator: {
    handle: string;
    brandName: string;
    commissionPct: number;
    city: string;
  };
}

const NAV = [
  { label: "Overview", href: "/creator/dashboard" },
  { label: "Profile", href: "/creator/profile" },
  { label: "Packages", href: "/creator/packages" },
  { label: "Links & Codes", href: "/creator/links" },
  { label: "Bookings", href: "/creator/bookings" },
  { label: "Earnings", href: "/creator/earnings" },
  { label: "Payouts", href: "/creator/payouts" },
  { label: "Assets", href: "/creator/assets" },
];

export default function CreatorSidebar({ creator }: Props) {
  const path = usePathname();

  return (
    <aside className="w-52 flex-shrink-0 border-r border-gray-200 bg-gray-50 flex flex-col">
      <div className="border-b border-gray-200 px-4 py-4">
        <div className="text-sm font-medium text-gray-900">Ziarra</div>
        <div className="text-[10px] text-gray-500">Creator partner</div>
      </div>

      <div className="border-b border-gray-200 px-4 py-3">
        <div className="text-sm font-medium text-gray-900">@{creator.handle}</div>
        <div className="text-[10px] text-gray-500">
          {creator.city} · {creator.commissionPct}% commission
        </div>
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
