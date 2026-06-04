import Link from "next/link";
import BellIcon from "@/components/BellIcon";

export default function DashboardTopbar({
  title,
  subtitle,
  notifications,
  profileHref,
  profileInitials,
}: {
  title: string;
  subtitle: string;
  notifications: number;
  profileHref: string;
  profileInitials: string;
}) {
  return (
    <header className="flex h-14 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div>
        <h1 className="text-sm font-medium text-gray-900">{title}</h1>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`${notifications} notifications`}
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-base text-gray-900 transition hover:border-ziarra-400"
        >
          <BellIcon />
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-ziarra-400 px-1 text-[10px] font-semibold text-black">
            {notifications}
          </span>
        </button>
        <Link
          href={profileHref}
          aria-label="Open profile"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-900 transition hover:border-ziarra-400"
        >
          {profileInitials}
        </Link>
        <Link href="/" className="btn btn-secondary py-2 text-xs">
          Log out
        </Link>
      </div>
    </header>
  );
}
