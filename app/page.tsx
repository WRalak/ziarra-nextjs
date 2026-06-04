import Link from "next/link";

export const metadata = {
  title: "Ziarra Partner Platform",
};

const flow = [
  "Creator applies",
  "Ziarra approves",
  "Creator gets links",
  "Customer books",
  "Ziarra tracks sale",
  "Creator gets paid",
];

const packages = [
  "Nairobi National Park Day Trip",
  "Diani Weekend Package",
  "Zanzibar Group Trip",
  "Dubai Shopping Package",
  "Honeymoon Package",
  "Student Group Trip",
];

const roles = [
  {
    title: "Admin",
    body: "Controls packages, creators, commissions, bookings, payouts, and fraud checks.",
    href: "/admin/dashboard",
  },
  {
    title: "Creator",
    body: "Promotes Ziarra packages, shares referral links, tracks bookings, and earns commission.",
    href: "/creator/dashboard",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-ziarra-400">
            Simple representation demo
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Ziarra owns the trips. Creators bring demand.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Nano creators, influencers, churches, campus groups, diaspora communities, and local leaders promote Ziarra packages using referral links and promo codes. Ziarra keeps checkout, payments, customer support, and quality control.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/auth/apply" className="btn btn-primary px-5 py-3">
              Become a Creator Partner
            </Link>
            <Link href="/creator/dashboard" className="btn btn-secondary px-5 py-3">
              View Creator Demo
            </Link>
            <Link href="/admin/dashboard" className="btn btn-secondary px-5 py-3">
              View Admin Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-3 px-6 py-8 md:grid-cols-6">
          {flow.map((step, index) => (
            <div key={step} className="rounded-xl border border-slate-800 bg-black p-4">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-ziarra-400 text-sm font-semibold text-black">
                {index + 1}
              </div>
              <p className="text-sm font-medium text-white">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold">What creators submit</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Name or brand/community name",
              "Social links",
              "Audience size",
              "Country and city",
              "Audience type",
              "Payout details",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Ziarra-owned packages</h2>
          <div className="mt-5 space-y-3">
            {packages.map((item) => (
              <div key={item} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
                <span className="text-sm text-slate-200">{item}</span>
                <Link href="/creator/packages" className="text-sm font-medium text-ziarra-400">
                  Promote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Two simple roles</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {roles.map((role) => (
            <Link key={role.title} href={role.href} className="rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-ziarra-400">
              <h3 className="text-lg font-semibold">{role.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{role.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
