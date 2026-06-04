// app/admin/bookings/page.tsx
export const metadata = { title: "Bookings | Ziarra" };

export default function AdminBookingsPage() {
  const bookings = [
    {
      id: "BK001",
      customer: "John Mwangi",
      package: "Coastal Safari Retreat",
      creator: "Wildlife Guides Kenya",
      date: "2024-03-15",
      amount: 72000,
      commission: 5760,
      status: "CONFIRMED",
    },
    {
      id: "BK002",
      customer: "Sarah Chen",
      package: "Wildlife & Culture",
      creator: "Beach Escape Creators",
      date: "2024-03-18",
      amount: 110000,
      commission: 11000,
      status: "CONFIRMED",
    },
    {
      id: "BK003",
      customer: "Ahmed Hassan",
      package: "Island Escape",
      creator: "Beach Escape Creators",
      date: "2024-03-20",
      amount: 58000,
      commission: 5800,
      status: "PENDING",
    },
    {
      id: "BK004",
      customer: "Maria Lopez",
      package: "Coastal Safari Retreat",
      creator: "Wildlife Guides Kenya",
      date: "2024-03-22",
      amount: 72000,
      commission: 5760,
      status: "CONFIRMED",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">All Bookings</h1>
          <p className="text-slate-400">Manage all platform bookings and payments</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-800/50">
                <th className="px-6 py-3 text-left text-sm font-semibold">Booking ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Package</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Creator</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Commission</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-slate-800 hover:bg-slate-800/30">
                  <td className="px-6 py-4 font-mono text-sm text-ziarra-400">{booking.id}</td>
                  <td className="px-6 py-4 text-sm">{booking.customer}</td>
                  <td className="px-6 py-4 text-sm">{booking.package}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{booking.creator}</td>
                  <td className="px-6 py-4 text-sm">{booking.date}</td>
                  <td className="px-6 py-4 text-sm font-semibold">KES {booking.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-emerald-400">
                    KES {booking.commission.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === "CONFIRMED"
                          ? "bg-emerald-900/30 text-emerald-400"
                          : "bg-amber-900/30 text-amber-400"
                      }`}
                    >
                      {booking.status}
                    </span>
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
