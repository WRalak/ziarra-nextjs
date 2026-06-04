// app/admin/payouts/page.tsx
export const metadata = { title: "Payouts | Ziarra" };

export default function AdminPayoutsPage() {
  const payouts = [
    {
      id: "PO001",
      creator: "Wildlife Guides Kenya",
      amount: 57600,
      method: "Bank Transfer",
      account: "**** **** **** 1234",
      requestDate: "2024-03-10",
      status: "PENDING",
    },
    {
      id: "PO002",
      creator: "Beach Escape Creators",
      amount: 139200,
      method: "Mobile Money",
      account: "+254 7XX XXX 456",
      requestDate: "2024-03-05",
      status: "PROCESSING",
    },
    {
      id: "PO003",
      creator: "Nairobi City Tours",
      amount: 0,
      method: "Bank Transfer",
      account: "**** **** **** 7890",
      requestDate: null,
      status: "NONE",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Payout Management</h1>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Pending Payouts", value: "KES 57,600", count: "1 request" },
              { label: "Processing", value: "KES 139,200", count: "1 request" },
              { label: "Total Paid (30d)", value: "KES 1,248,000", count: "18 payouts" },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <div className="text-sm text-slate-400 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.count}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-800/50">
                <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Creator</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Method</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Account</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Requested</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((payout) => (
                <tr key={payout.id} className="border-b border-slate-800 hover:bg-slate-800/30">
                  <td className="px-6 py-4 font-mono text-sm text-ziarra-400">{payout.id}</td>
                  <td className="px-6 py-4 text-sm">{payout.creator}</td>
                  <td className="px-6 py-4 text-sm font-semibold">KES {payout.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm">{payout.method}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{payout.account}</td>
                  <td className="px-6 py-4 text-sm">{payout.requestDate || "-"}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        payout.status === "PENDING"
                          ? "bg-amber-900/30 text-amber-400"
                          : payout.status === "PROCESSING"
                            ? "bg-blue-900/30 text-blue-400"
                            : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {payout.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {payout.status === "PENDING" ? (
                      <button className="text-ziarra-400 hover:text-ziarra-300 text-sm">Approve</button>
                    ) : (
                      <span className="text-slate-500 text-sm">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
