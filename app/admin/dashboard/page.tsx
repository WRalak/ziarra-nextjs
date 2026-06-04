import Link from "next/link";
import { formatKes } from "@/lib/format";

export const metadata = { title: "Admin Dashboard" };

const creators = [
  { name: "Mary Campus Travel", audience: "Students", city: "Nairobi", status: "Active", bookings: 32, commission: 42800 },
  { name: "Diaspora Deals KE", audience: "Diaspora", city: "London", status: "Pending", bookings: 0, commission: 0 },
  { name: "Family Trips Hub", audience: "Families", city: "Mombasa", status: "Active", bookings: 18, commission: 21400 },
];

const controls = [
  "Approve, pause, suspend, or feature creators",
  "Assign Ziarra packages to creators",
  "Manage referral links and promo codes",
  "Review payout requests",
  "Check duplicate or suspicious bookings",
];

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3.5">
        <div>
          <h1 className="text-base font-medium text-gray-900">Admin dashboard</h1>
          <p className="text-xs text-gray-500">Ziarra controls packages, checkout, payments, and quality.</p>
        </div>
        <Link href="/admin/packages" className="btn btn-primary text-sm">
          Manage packages
        </Link>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <section className="grid gap-3 md:grid-cols-4">
          <Metric label="Creators" value="124" />
          <Metric label="Active packages" value="18" />
          <Metric label="Referral sales" value={formatKes(1840000)} />
          <Metric label="Payout requests" value="9" />
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h2 className="mb-3 text-sm font-medium text-gray-900">Creators and performance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
                    <th className="py-2">Creator</th>
                    <th>Audience</th>
                    <th>City</th>
                    <th>Bookings</th>
                    <th>Commission</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {creators.map((creator) => (
                    <tr key={creator.name} className="border-b border-gray-200 last:border-0">
                      <td className="py-3 font-medium text-gray-900">{creator.name}</td>
                      <td>{creator.audience}</td>
                      <td>{creator.city}</td>
                      <td>{creator.bookings}</td>
                      <td>{formatKes(creator.commission)}</td>
                      <td><span className={creator.status === "Active" ? "badge badge-active" : "badge badge-pending"}>{creator.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h2 className="text-sm font-medium text-gray-900">Admin controls</h2>
            <div className="mt-3 space-y-3">
              {controls.map((control) => (
                <div key={control} className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900">
                  {control}
                </div>
              ))}
            </div>
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
