import Link from "next/link";
import { buildRefUrl, formatKes } from "@/lib/format";

export const metadata = { title: "Creator Dashboard" };

const packages = [
  { name: "Diani Weekend Package", slug: "diani-weekend", price: 20000, commission: 5, operator: "Coastline Escapes Ltd" },
  { name: "Nairobi National Park Day Trip", slug: "nairobi-park-day-trip", price: 8500, commission: 5, operator: "Savannah City Tours" },
  { name: "Zanzibar Group Trip", slug: "zanzibar-group-trip", price: 58000, commission: 7, operator: "Island Bridge Holidays" },
];

const creatorSignals = [
  { label: "Community size", value: "18.4K", detail: "Instagram, TikTok, WhatsApp" },
  { label: "Engagement", value: "6.2%", detail: "Last 30 days" },
  { label: "Linked socials", value: "4", detail: "All channels verified" },
];

const bookings = [
  { ref: "ZIA-1021", package: "Diani Weekend Package", amount: 20000, commission: 1000, status: "Paid" },
  { ref: "ZIA-1028", package: "Nairobi National Park Day Trip", amount: 17000, commission: 850, status: "Pending" },
];

const leaders = [
  { name: "Mary Campus Travel", bookings: 32, conversion: "6.8%", tier: "Elite" },
  { name: "Beach Escape Creators", bookings: 28, conversion: "5.9%", tier: "Rising" },
  { name: "Family Trips Hub", bookings: 18, conversion: "4.7%", tier: "Starter" },
];

export default function CreatorDashboardPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3.5">
        <div>
          <h1 className="text-base font-medium text-gray-900">Creator dashboard</h1>
          <p className="text-xs text-gray-500">Demo Creator · Travel and campus audience</p>
        </div>
        <Link href="/creator/packages" className="btn btn-primary text-sm">
          Promote a package
        </Link>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <section className="grid gap-3 md:grid-cols-5">
          <Metric label="Clicks" value="1,240" />
          <Metric label="Bookings" value="32" />
          <Metric label="Paid trips" value="24" />
          <Metric label="Commission" value={formatKes(42800)} />
          <Metric label="Payout due" value={formatKes(18500)} />
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-4">
          <h2 className="text-sm font-medium text-gray-900">Simple funnel</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            {["Clicks", "Bookings", "Paid Trips", "Commission", "Payout"].map((step) => (
              <div key={step} className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center text-sm text-gray-900">
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-sm font-medium text-gray-900">Creator interface</h2>
                <p className="mt-1 text-xs text-gray-500">Real-time audience signals linked to approved promotion channels.</p>
              </div>
              <span className="badge badge-active">Live</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {creatorSignals.map((signal) => (
                <div key={signal.label} className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">{signal.label}</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">{signal.value}</p>
                  <p className="mt-1 text-[11px] text-gray-500">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-ziarra-400/50 bg-white p-4">
            <h2 className="text-sm font-medium text-gray-900">Inventory guardrail</h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Creators cannot build arbitrary itineraries. This marketplace only exposes inventory from 30+ signed operators with active licenses, formal compliance checks, and Ziarra service level agreements.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {["30+ signed operators", "Active licenses uploaded", "SLA-backed fulfillment"].map((item) => (
                <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs font-medium text-gray-900">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-900">Marketplace packages I can promote</h2>
              <Link href="/creator/packages" className="text-xs text-ziarra-600">View all</Link>
            </div>
            <div className="space-y-3">
              {packages.map((pkg) => (
                <div key={pkg.slug} className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{pkg.name}</p>
                    <p className="mt-1 text-[11px] text-gray-500">Fulfilled by verified operator: {pkg.operator}</p>
                    <p className="text-xs text-gray-500">{formatKes(pkg.price)} · {pkg.commission}% commission</p>
                  </div>
                  <Link href={buildRefUrl("demo_creator", pkg.slug)} className="btn btn-primary py-1.5 text-xs">
                    Promote
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h2 className="text-sm font-medium text-gray-900">My link and code</h2>
            <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs text-gray-500">Referral link</p>
              <p className="mt-1 break-all font-mono text-xs text-gray-900">{buildRefUrl("demo_creator", "diani-weekend")}</p>
            </div>
            <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs text-gray-500">Promo code</p>
              <p className="mt-1 font-mono text-lg font-semibold text-ziarra-400">MARY10</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-900">Creator tier</h2>
              <span className="badge badge-active">Rising Partner</span>
            </div>
            <p className="mt-3 text-sm text-gray-500">Current rate: 7%. Reach 50 confirmed bookings to unlock Elite Partner at 10%.</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-[64%] rounded-full bg-ziarra-400" />
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>32 bookings</span>
              <span>50 needed</span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h2 className="text-sm font-medium text-gray-900">Creator leaderboard</h2>
            <div className="mt-3 space-y-2">
              {leaders.map((leader, index) => (
                <div key={leader.name} className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm">
                  <span className="font-semibold text-gray-500">#{index + 1}</span>
                  <div>
                    <p className="font-medium text-gray-900">{leader.name}</p>
                    <p className="text-xs text-gray-500">{leader.tier} · {leader.conversion} conversion</p>
                  </div>
                  <span className="font-medium text-gray-900">{leader.bookings} bookings</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-4">
          <h2 className="mb-3 text-sm font-medium text-gray-900">Recent referred bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
                  <th className="py-2">Ref</th>
                  <th>Package</th>
                  <th>Booking</th>
                  <th>Commission</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.ref} className="border-b border-gray-200 last:border-0">
                    <td className="py-3 font-mono text-xs text-gray-500">{booking.ref}</td>
                    <td className="font-medium text-gray-900">{booking.package}</td>
                    <td>{formatKes(booking.amount)}</td>
                    <td>{formatKes(booking.commission)}</td>
                    <td><span className="badge badge-active">{booking.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-card">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-xl font-medium text-gray-900">{value}</p>
    </div>
  );
}
