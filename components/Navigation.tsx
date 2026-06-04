"use client";

import Link from "next/link";
import { useState } from "react";
import BellIcon from "@/components/BellIcon";

const links = [
  { label: "Apply", href: "/auth/apply" },
  { label: "Creator", href: "/creator/dashboard" },
  { label: "Admin", href: "/admin/dashboard" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-black/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          Ziarra
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="btn btn-secondary py-2">
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="2 notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-sm text-white transition hover:bg-white/20"
          >
            <BellIcon />
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-ziarra-400 px-1 text-[10px] font-semibold text-black">
              2
            </span>
          </button>
          <Link
            href="/creator/profile"
            aria-label="Open profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-xs font-semibold text-white transition hover:bg-white/20"
          >
            ME
          </Link>
          <Link href="/" className="btn btn-secondary py-2">
            Log out
          </Link>
        </div>
        <button className="btn btn-secondary md:hidden" onClick={() => setOpen((value) => !value)} type="button">
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-800 px-6 pb-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="btn btn-secondary">
                {link.label}
              </Link>
            ))}
            <button type="button" className="btn btn-secondary justify-between">
              Notifications <span className="rounded-full bg-ziarra-400 px-2 py-0.5 text-xs font-semibold text-black">2</span>
            </button>
            <Link href="/creator/profile" className="btn btn-secondary">
              Profile
            </Link>
            <Link href="/" className="btn btn-secondary">
              Log out
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
