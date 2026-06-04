import { formatKes } from "@/lib/format";

export const metadata = { title: "Bookings referred" };

const bookings = [
  { ref: "ZIA-1021", customer: "Customer A", package: "Diani Weekend Package", amount: 20000, commission: 1000, status: "Confirmed" },
  { ref: "ZIA-1028", customer: "Customer B", package: "Nairobi National Park Day Trip", amount: 17000, commission: 850, status: "Pending" },
  { ref: "ZIA-1034", customer: "Customer C", package: "Zanzibar Group Trip", amount: 58000, commission: 4060, status: "Confirmed" },
];

export default function CreatorBookingsPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="border-b border-gray-200 bg-white px-6 py-3.5">
        <h1 className="text-base font-medium text-gray-900">Bookings referred</h1>
        <p className="text-xs text-gray-500">Privacy-safe booking view for a creator partner.</p>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <section className="rounded-2xl border border-gray-200 bg-white p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
                <th className="py-2">Reference</th>
                <th>Customer</th>
                <th>Package</th>
                <th>Amount</th>
                <th>Commission</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.ref} className="border-b border-gray-200 last:border-0">
                  <td className="py-3 font-mono text-xs text-gray-500">{booking.ref}</td>
                  <td>{booking.customer}</td>
                  <td className="font-medium text-gray-900">{booking.package}</td>
                  <td>{formatKes(booking.amount)}</td>
                  <td>{formatKes(booking.commission)}</td>
                  <td><span className={booking.status === "Confirmed" ? "badge badge-active" : "badge badge-pending"}>{booking.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
