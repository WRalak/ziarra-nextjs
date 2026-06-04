import ReferralLinkBox from "@/components/creator/ReferralLinkBox";
import { buildRefUrl } from "@/lib/format";

export const metadata = { title: "My links and codes" };

const links = [
  { label: "General Ziarra link", url: buildRefUrl("demo_creator"), clicks: 342, bookings: 18 },
  { label: "Diani Weekend Escape", url: buildRefUrl("demo_creator", "diani-weekend"), clicks: 126, bookings: 7 },
  { label: "Maasai Mara Safari", url: buildRefUrl("demo_creator", "maasai-mara-safari"), clicks: 91, bookings: 5 },
];

const campaigns = [
  { channel: "WhatsApp", campaign: "june-campus-groups", clicks: 188, bookings: 11, conversion: "5.9%" },
  { channel: "TikTok", campaign: "diani-video-hook", clicks: 420, bookings: 16, conversion: "3.8%" },
  { channel: "Instagram", campaign: "story-weekend", clicks: 236, bookings: 9, conversion: "3.8%" },
];

export default function CreatorLinksPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center justify-between px-6 py-3.5 border-b border-gray-200 bg-white flex-shrink-0">
        <h1 className="text-base font-medium text-gray-900">My links & codes</h1>
        <a href="/creator/packages" className="btn btn-primary text-sm py-1.5 px-3">Create package link</a>
      </header>
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <h2 className="text-sm font-medium text-gray-900 mb-3">Primary referral link</h2>
            <ReferralLinkBox url={links[0].url} promoCode="DEMO8" discountPct={3} commissionPct={8} />
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <h2 className="text-sm font-medium text-gray-900 mb-3">Performance</h2>
            <div className="grid grid-cols-3 gap-3">
              <Stat label="Clicks" value="342" />
              <Stat label="Bookings" value="18" />
              <Stat label="Conversion" value="5.3%" />
            </div>
          </div>
        </section>
        <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <h2 className="text-sm font-medium text-gray-900">Smart promo link builder</h2>
            <div className="mt-4 space-y-3">
              <label className="block text-sm text-gray-500">
                <span className="field-label-light">Package</span>
                <select defaultValue="diani-weekend"><option value="diani-weekend">Diani Weekend Package</option><option value="zanzibar-group-trip">Zanzibar Group Trip</option></select>
              </label>
              <label className="block text-sm text-gray-500">
                <span className="field-label-light">Platform</span>
                <select defaultValue="tiktok"><option value="tiktok">TikTok</option><option value="whatsapp">WhatsApp</option><option value="instagram">Instagram</option></select>
              </label>
              <label className="block text-sm text-gray-500">
                <span className="field-label-light">Campaign name</span>
                <input defaultValue="june-diani-push" />
              </label>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Generated link</p>
                <p className="mt-1 break-all font-mono text-xs text-gray-900">/packages/diani-weekend?ref=demo_creator&campaign=tiktok-june-diani-push</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <h2 className="text-sm font-medium text-gray-900">Campaign performance</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-200 text-left text-xs text-gray-500"><th className="py-2">Channel</th><th>Campaign</th><th>Clicks</th><th>Bookings</th><th>Conv.</th></tr></thead>
                <tbody>
                  {campaigns.map((item) => (
                    <tr key={item.campaign} className="border-b border-gray-200 last:border-0">
                      <td className="py-3 font-medium text-gray-900">{item.channel}</td>
                      <td className="font-mono text-xs text-gray-500">{item.campaign}</td>
                      <td>{item.clicks}</td>
                      <td>{item.bookings}</td>
                      <td>{item.conversion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-sm font-medium text-gray-900">Tracked links</h2>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>{["Link", "URL", "Clicks", "Bookings"].map((h) => <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {links.map((link) => (
                <tr key={link.label}>
                  <td className="px-4 py-3 font-medium text-gray-900">{link.label}</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{link.url}</td>
                  <td className="px-4 py-3">{link.clicks}</td>
                  <td className="px-4 py-3">{link.bookings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-card">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-xl font-medium text-gray-900">{value}</div>
    </div>
  );
}
