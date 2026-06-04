import { buildRefUrl, formatKes } from "@/lib/format";

export const metadata = { title: "Packages to promote" };

const packages = [
  { id: "diani", slug: "diani-weekend", name: "Diani Weekend Escape", destination: "Diani Beach", category: "Beach", priceKes: 58000, durationDays: 3, commissionPct: 8 },
  { id: "maasai", slug: "maasai-mara-safari", name: "Maasai Mara Safari", destination: "Narok County", category: "Safari", priceKes: 112000, durationDays: 4, commissionPct: 10 },
  { id: "watamu", slug: "watamu-family-holiday", name: "Watamu Family Holiday", destination: "Watamu", category: "Family", priceKes: 76000, durationDays: 5, commissionPct: 8 },
];

export default function CreatorPackagesPage() {
  const handle = "demo_creator";

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center justify-between px-6 py-3.5 border-b border-gray-200 bg-white flex-shrink-0">
        <h1 className="text-base font-medium text-gray-900">Packages to promote</h1>
        <a href="/creator/links" className="btn btn-primary text-sm py-1.5 px-3">My links</a>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-3 gap-4">
          {packages.map((pkg) => {
            const commission = Math.round((pkg.priceKes * pkg.commissionPct) / 100);
            return (
              <article key={pkg.id} className="bg-white border border-gray-200 rounded-2xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-500">{pkg.category} package</p>
                    <h2 className="mt-1 text-base font-medium text-gray-900">{pkg.name}</h2>
                  </div>
                  <span className="badge badge-active">{pkg.commissionPct}%</span>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <Info label="Destination" value={pkg.destination} />
                  <Info label="Duration" value={`${pkg.durationDays} days`} />
                  <Info label="Price" value={formatKes(pkg.priceKes)} />
                  <Info label="Earn per booking" value={formatKes(commission)} strong />
                </div>
                <div className="mt-4 flex gap-2">
                  <a href={buildRefUrl(handle, pkg.slug)} className="btn btn-primary flex-1 justify-center text-sm py-2">Promote</a>
                  <a href={`/packages/${pkg.slug}?ref=${handle}`} className="btn btn-secondary flex-1 justify-center text-sm py-2">Preview</a>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function Info({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-gray-500">{label}</span>
      <span className={strong ? "font-medium text-green-700" : "font-medium text-gray-900"}>{value}</span>
    </div>
  );
}
