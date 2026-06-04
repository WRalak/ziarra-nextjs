export const metadata = { title: "Admin Profile" };

const details = [
  ["Name", "Demo Admin"],
  ["Role", "Platform admin"],
  ["Email", "admin@ziarra.com"],
  ["Permissions", "Creators, packages, commissions, payouts"],
  ["Notifications", "Creator approvals and payout requests"],
  ["Status", "Active"],
];

export default function AdminProfilePage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="border-b border-gray-200 bg-white px-6 py-3.5">
        <h1 className="text-base font-medium text-gray-900">Profile</h1>
        <p className="text-xs text-gray-500">Admin account overview for the Ziarra demo.</p>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <section className="grid max-w-4xl gap-4 lg:grid-cols-[0.7fr_1fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 text-lg font-semibold text-white">
              AD
            </div>
            <h2 className="mt-4 text-lg font-semibold text-gray-900">Demo Admin</h2>
            <p className="mt-1 text-sm text-gray-500">Platform control account</p>
            <span className="badge badge-active mt-4">Active</span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h2 className="text-sm font-medium text-gray-900">Account details</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {details.map(([label, value]) => (
                <div key={label} className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">{label}</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
