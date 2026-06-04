// app/admin/packages/page.tsx
export const metadata = { title: "Packages | Ziarra" };

export default function AdminPackagesPage() {
  const packages = [
    {
      id: "1",
      name: "Coastal Safari Retreat",
      creator: "Wildlife Guides Kenya",
      price: 72000,
      currency: "KES",
      duration: "3 days",
      bookings: 12,
      revenue: 864000,
      status: "ACTIVE",
    },
    {
      id: "2",
      name: "Wildlife & Culture",
      creator: "Beach Escape Creators",
      price: 110000,
      currency: "KES",
      duration: "5 days",
      bookings: 28,
      revenue: 3080000,
      status: "ACTIVE",
    },
    {
      id: "3",
      name: "Island Escape",
      creator: "Beach Escape Creators",
      price: 58000,
      currency: "KES",
      duration: "2 days",
      bookings: 8,
      revenue: 464000,
      status: "ACTIVE",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Packages</h1>
          <button className="btn-primary px-4 py-2 rounded">+ New Package</button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                <p className="text-slate-400 text-sm mb-4">by {pkg.creator}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Price</span>
                    <span className="font-semibold">
                      {pkg.currency} {pkg.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Duration</span>
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Bookings</span>
                    <span className="font-semibold">{pkg.bookings}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Revenue</span>
                    <span className="font-semibold text-emerald-400">
                      {pkg.currency} {pkg.revenue.toLocaleString()}
                    </span>
                  </div>
                </div>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    pkg.status === "ACTIVE"
                      ? "bg-emerald-900/30 text-emerald-400"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {pkg.status}
                </span>

                <div className="flex gap-2">
                  <button className="flex-1 btn-secondary py-2 rounded text-sm">View</button>
                  <button className="flex-1 btn-secondary py-2 rounded text-sm">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
