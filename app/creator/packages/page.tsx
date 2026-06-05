import { buildRefUrl, formatKes } from "@/lib/format";

export const metadata = { title: "Packages to promote" };

const packages = [
  {
    id: "diani",
    slug: "diani-weekend",
    name: "Diani Weekend Escape",
    destination: "Diani Beach",
    category: "Beach",
    priceKes: 58000,
    durationDays: 3,
    commissionPct: 8,
    operator: "Coastline Escapes Ltd",
    license: "TRA-OP-2048",
  },
  {
    id: "maasai",
    slug: "maasai-mara-safari",
    name: "Maasai Mara Safari",
    destination: "Narok County",
    category: "Safari",
    priceKes: 112000,
    durationDays: 4,
    commissionPct: 10,
    operator: "Mara Plains Logistics",
    license: "TRA-OP-1882",
  },
  {
    id: "watamu",
    slug: "watamu-family-holiday",
    name: "Watamu Family Holiday",
    destination: "Watamu",
    category: "Family",
    priceKes: 76000,
    durationDays: 5,
    commissionPct: 8,
    operator: "Blue Reef Holidays",
    license: "TRA-OP-2291",
  },
];

export default function CreatorPackagesPage() {
  const handle = "demo_creator";

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center justify-between px-6 py-3.5 border-b border-gray-200 bg-white flex-shrink-0">
        <h1 className="text-base font-medium text-gray-900">Packages to promote</h1>
        <a href="/creator/links" className="btn btn-primary text-sm py-1.5 px-3">My links</a>
      </header>
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <section className="rounded-2xl border border-ziarra-400/50 bg-white p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-900">Verified marketplace inventory</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-gray-500">
                Creators promote only Ziarra-approved inventory from 30+ signed operators. Each package is backed by uploaded licenses, compliance review, and a signed service level agreement before it appears here.
              </p>
            </div>
            <div className="grid gap-2 text-xs font-medium text-gray-900 sm:grid-cols-3 lg:min-w-[28rem]">
              <span className="rounded-xl border border-gray-200 bg-gray-50 p-3">No arbitrary itineraries</span>
              <span className="rounded-xl border border-gray-200 bg-gray-50 p-3">Active license required</span>
              <span className="rounded-xl border border-gray-200 bg-gray-50 p-3">Operator executes logistics</span>
            </div>
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-3">
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
                  <Info label="Operator" value={pkg.operator} />
                  <Info label="License" value={pkg.license} />
                </div>
                <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs leading-5 text-gray-500">
                  Ziarra holds checkout and quality control. The verified local operator executes travel logistics under SLA.
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
