export const metadata = { title: "Creator Profile" };

const details = [
  ["Name / brand", "Demo Creator"],
  ["Handle", "@demo_creator"],
  ["Audience", "Students, families, travel groups"],
  ["City", "Nairobi"],
  ["Commission", "8%"],
  ["Payout", "M-Pesa ending 678"],
];

const stats = [["Followers", "42K"], ["Primary platform", "TikTok"], ["Conversion", "6.8%"], ["Top audience", "Students"]];

export default function CreatorProfilePage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="border-b border-gray-200 bg-white px-6 py-3.5">
        <h1 className="text-base font-medium text-gray-900">Profile</h1>
        <p className="text-xs text-gray-500">Creator partner account details used for approval, tracking, and payouts.</p>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <section className="grid max-w-4xl gap-4 lg:grid-cols-[0.7fr_1fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ziarra-400 text-lg font-semibold text-black">
              DC
            </div>
            <h2 className="mt-4 text-lg font-semibold text-gray-900">Demo Creator</h2>
            <p className="mt-1 text-sm text-gray-500">Approved creator partner</p>
            <span className="badge badge-active mt-4">Active</span>
            <span className="badge badge-active mt-2">Verified Ziarra Partner</span>
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
        <section className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-900">Public influencer media kit</h2>
              <p className="mt-1 text-xs text-gray-500">A shareable profile brands and communities can use to verify the creator.</p>
            </div>
            <button className="btn btn-primary text-sm">Copy media kit link</button>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {stats.map(([label, value]) => (
              <div key={label} className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs text-gray-500">{label}</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
