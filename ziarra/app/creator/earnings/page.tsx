import { formatDate, formatKes } from "@/lib/format";

export const metadata = { title: "Earnings" };

const commissions = [
  { id: "COM-1048", package: "Maasai Mara Safari", amount: 11200, status: "AVAILABLE", date: "2026-05-31" },
  { id: "COM-1047", package: "Diani Weekend Escape", amount: 4640, status: "PENDING", date: "2026-06-03" },
  { id: "COM-1039", package: "Watamu Family Holiday", amount: 6080, status: "PAID", date: "2026-05-21" },
];

export default function CreatorEarningsPage() {
  const available = commissions.filter((c) => c.status === "AVAILABLE").reduce((sum, c) => sum + c.amount, 0);
  const pending = commissions.filter((c) => c.status === "PENDING").reduce((sum, c) => sum + c.amount, 0);
  const paid = commissions.filter((c) => c.status === "PAID").reduce((sum, c) => sum + c.amount, 0);

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center justify-between px-6 py-3.5 border-b border-gray-200 bg-white flex-shrink-0">
        <h1 className="text-base font-medium text-gray-900">Earnings</h1>
        <a href="/creator/payouts" className="btn btn-primary text-sm py-1.5 px-3">Request payout</a>
      </header>
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          <Stat label="Available" value={formatKes(available)} tone="green" />
          <Stat label="Pending review" value={formatKes(pending)} tone="amber" />
          <Stat label="Paid out" value={formatKes(paid)} />
        </div>
        <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200"><h2 className="text-sm font-medium text-gray-900">Commission history</h2></div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>{["ID", "Package", "Date", "Amount", "Status"].map((h) => <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {commissions.map((commission) => (
                <tr key={commission.id}>
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{commission.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{commission.package}</td>
                  <td className="px-4 py-3 text-gray-500">{formatDate(commission.date)}</td>
                  <td className="px-4 py-3 font-medium">{formatKes(commission.amount)}</td>
                  <td className="px-4 py-3"><Status status={commission.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "green" | "amber" }) {
  return (
    <div className="stat-card">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className={`text-xl font-medium ${tone === "green" ? "text-green-700" : tone === "amber" ? "text-amber-700" : "text-gray-900"}`}>{value}</div>
    </div>
  );
}

function Status({ status }: { status: string }) {
  const className = status === "PAID" || status === "AVAILABLE" ? "badge badge-active" : "badge badge-pending";
  return <span className={className}>{status.replace("_", " ")}</span>;
}
