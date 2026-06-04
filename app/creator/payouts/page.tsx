import { formatDate, formatKes } from "@/lib/format";

export const metadata = { title: "Payouts" };

const payouts = [
  { id: "PO-210", amount: 6080, method: "M-Pesa", status: "Completed", requestedAt: "2026-05-22" },
  { id: "PO-198", amount: 12400, method: "Bank", status: "Completed", requestedAt: "2026-05-08" },
];

const timeline = ["Booking confirmed", "Commission pending", "Available after review", "Payout requested", "Paid"];

export default function CreatorPayoutsPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="border-b border-gray-200 bg-white px-6 py-3.5">
        <h1 className="text-base font-medium text-gray-900">Payouts</h1>
        <p className="text-xs text-gray-500">Creators request payout after commission becomes available.</p>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <section className="mb-4 rounded-2xl border border-gray-200 bg-white p-4">
          <h2 className="text-sm font-medium text-gray-900">Payout timeline</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            {timeline.map((step, index) => (
              <div key={step} className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-ziarra-400 text-xs font-semibold text-black">{index + 1}</div>
                <p className="text-xs font-medium text-gray-900">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-4 lg:grid-cols-[0.85fr_1.2fr]">
          <form className="form-card-light">
            <h2 className="text-sm font-medium text-gray-900">Request payout</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs text-gray-500">Available balance</p>
              <p className="mt-1 text-3xl font-semibold text-green-700">{formatKes(11200)}</p>
            </div>
            <div className="mt-5 space-y-4">
              <Field label="Amount">
                <input defaultValue="11200" />
              </Field>
              <Field label="Payout method">
                <select defaultValue="M-Pesa">
                  <option>M-Pesa</option>
                  <option>Bank transfer</option>
                </select>
              </Field>
              <Field label="Payout account">
                <input defaultValue="0712 345 678" />
              </Field>
            </div>
            <button className="btn btn-primary mt-5 w-full justify-center py-3" type="button">
              Submit payout request
            </button>
            <p className="mt-3 text-center text-xs text-gray-500">
              Ziarra reviews payout requests before release.
            </p>
          </form>

          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-4 py-3">
              <h2 className="text-sm font-medium text-gray-900">Payout history</h2>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>{["ID", "Requested", "Method", "Amount", "Status"].map((h) => <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {payouts.map((payout) => (
                  <tr key={payout.id}>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500">{payout.id}</td>
                    <td className="px-4 py-3">{formatDate(payout.requestedAt)}</td>
                    <td className="px-4 py-3">{payout.method}</td>
                    <td className="px-4 py-3 font-medium">{formatKes(payout.amount)}</td>
                    <td className="px-4 py-3"><span className="badge badge-active">{payout.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </main>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm text-gray-500">
      <span className="field-label-light">{label}</span>
      {children}
    </label>
  );
}
