// app/admin/creators/page.tsx
import { formatNumber } from "@/lib/format";

export const metadata = { title: "Creator roster | Ziarra" };

export default async function AdminCreatorsPage() {
  // Demo mode: hardcoded creators
  const creators = [
    {
      id: "1",
      brandName: "Wildlife Guides Kenya",
      handle: "wildlife_ke",
      status: "ACTIVE",
      commissionPct: 8,
      audienceSize: "15,000",
      platform: "Instagram",
      joinedDate: "2024-01-15",
      bookings: 12,
      revenue: 240000,
    },
    {
      id: "2",
      brandName: "Nairobi City Tours",
      handle: "nairobi_tours",
      status: "PENDING",
      commissionPct: 5,
      audienceSize: "8,500",
      platform: "TikTok",
      joinedDate: "2024-02-20",
      bookings: 0,
      revenue: 0,
    },
    {
      id: "3",
      brandName: "Beach Escape Creators",
      handle: "beach_escape",
      status: "ACTIVE",
      commissionPct: 10,
      audienceSize: "42,000",
      platform: "YouTube",
      joinedDate: "2023-11-10",
      bookings: 28,
      revenue: 840000,
    },
  ];

  const applications = [
    { name: "Diaspora Deals KE", id: "P1234567", social: "TikTok", audience: "Diaspora", terms: "Signed", status: "Review" },
    { name: "Campus Trips Nairobi", id: "35478921", social: "Instagram", audience: "Students", terms: "Signed", status: "Approve" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Creator Roster</h1>
          <button className="btn-primary px-4 py-2 rounded">+ Invite Creator</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Creators", value: "3" },
            { label: "Pending Review", value: "1" },
            { label: "Total Referrals", value: "40" },
            { label: "Commission Due", value: "KES 80,000" },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="mb-8 rounded-lg border border-slate-800 bg-slate-900 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Application review</h2>
              <p className="text-sm text-slate-400">Review ID/passport, socials, audience type, and signed terms before approval.</p>
            </div>
            <span className="badge badge-pending">{applications.length} pending</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-slate-800 text-left text-xs text-slate-400"><th className="py-2">Applicant</th><th>ID/Passport</th><th>Social</th><th>Audience</th><th>Terms</th><th>Actions</th></tr></thead>
              <tbody>
                {applications.map((applicant) => (
                  <tr key={applicant.name} className="border-b border-slate-800 last:border-0">
                    <td className="py-3 font-medium">{applicant.name}</td>
                    <td>{applicant.id}</td>
                    <td>{applicant.social}</td>
                    <td>{applicant.audience}</td>
                    <td><span className="badge badge-active">{applicant.terms}</span></td>
                    <td className="space-x-2"><button className="text-ziarra-400">Approve</button><button className="text-slate-400">Reject</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Creator Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-800/50">
                <th className="px-6 py-3 text-left text-sm font-semibold">Creator</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Platform</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Audience</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Bookings</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Revenue</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Commission</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {creators.map((creator) => (
                <tr key={creator.id} className="border-b border-slate-800 hover:bg-slate-800/30">
                  <td className="px-6 py-4">
                    <div className="font-medium">{creator.brandName}</div>
                    <div className="text-sm text-slate-400">@{creator.handle}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">{creator.platform}</td>
                  <td className="px-6 py-4 text-sm">{creator.audienceSize}</td>
                  <td className="px-6 py-4 text-sm">{creator.bookings}</td>
                  <td className="px-6 py-4 text-sm">KES {creator.revenue.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm">{creator.commissionPct}%</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        creator.status === "ACTIVE"
                          ? "bg-emerald-900/30 text-emerald-400"
                          : "bg-amber-900/30 text-amber-400"
                      }`}
                    >
                      {creator.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-ziarra-400 hover:text-ziarra-300 text-sm">Edit</button>
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
