export const metadata = { title: "Fraud detection | Ziarra" };

const checks = [
  { name: "Repeated self-bookings", severity: "High", count: 2 },
  { name: "Promo code abuse", severity: "Medium", count: 5 },
  { name: "Refund after commission release", severity: "High", count: 1 },
];

export default function FraudSettingsPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center justify-between px-6 py-3.5 border-b border-gray-200 bg-white flex-shrink-0">
        <h1 className="text-base font-medium text-gray-900">Fraud detection</h1>
        <button className="btn btn-primary text-sm py-1.5 px-3">Run review</button>
      </header>
      <main className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="stat-card"><p className="text-xs text-gray-500">Open flags</p><p className="text-xl font-medium text-amber-700">8</p></div>
          <div className="stat-card"><p className="text-xs text-gray-500">Creators watched</p><p className="text-xl font-medium text-gray-900">3</p></div>
          <div className="stat-card"><p className="text-xs text-gray-500">Prevented payouts</p><p className="text-xl font-medium text-green-700">KES 42,800</p></div>
        </div>
        <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>{["Check", "Severity", "Flags", "Action"].map((h) => <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {checks.map((check) => (
                <tr key={check.name}>
                  <td className="px-4 py-3 font-medium text-gray-900">{check.name}</td>
                  <td className="px-4 py-3">{check.severity}</td>
                  <td className="px-4 py-3">{check.count}</td>
                  <td className="px-4 py-3"><button className="text-purple-600 text-sm">Review</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
