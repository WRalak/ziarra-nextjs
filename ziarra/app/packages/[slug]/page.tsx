import Link from "next/link";
import { formatKes } from "@/lib/format";

interface Props {
  params: { slug: string };
  searchParams: { ref?: string };
}

const packages: Record<string, {
  name: string;
  destination: string;
  price: number;
  duration: string;
  description: string;
}> = {
  "diani-weekend": {
    name: "Diani Weekend Package",
    destination: "Diani Beach",
    price: 20000,
    duration: "3 days",
    description: "A simple beach escape package owned and fulfilled by Ziarra.",
  },
  "nairobi-park-day-trip": {
    name: "Nairobi National Park Day Trip",
    destination: "Nairobi",
    price: 8500,
    duration: "1 day",
    description: "A day-trip package for students, families, and community groups.",
  },
  "zanzibar-group-trip": {
    name: "Zanzibar Group Trip",
    destination: "Zanzibar",
    price: 58000,
    duration: "5 days",
    description: "A group travel package promoted by creators and checked out through Ziarra.",
  },
};

export async function generateMetadata({ params }: Props) {
  const pkg = packages[params.slug] ?? packages["diani-weekend"];
  return { title: pkg.name, description: pkg.description };
}

export default function PackagePage({ params, searchParams }: Props) {
  const pkg = packages[params.slug] ?? packages["diani-weekend"];
  const ref = searchParams.ref ?? "creatorname";
  const commission = Math.round(pkg.price * 0.05);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <Link href="/creator/dashboard" className="text-sm text-ziarra-400">
        Back to creator demo
      </Link>
      <section className="mt-5 rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <p className="text-sm font-medium uppercase tracking-wide text-ziarra-400">{pkg.destination}</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">{pkg.name}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{pkg.description}</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <Info label="Duration" value={pkg.duration} />
          <Info label="Price" value={formatKes(pkg.price)} />
          <Info label="Creator earns" value={formatKes(commission)} />
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-lg font-semibold">Customer booking flow</h2>
          <div className="mt-4 space-y-3">
            {["Select date", "Select travelers", "Add customer details", "Pay with Ziarra checkout including M-Pesa", "Receive booking confirmation"].map((step) => (
              <div key={step} className="rounded-xl border border-slate-800 bg-black p-3 text-sm text-slate-200">
                {step}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-lg font-semibold">Referral tracking</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <Info label="Referred by" value={`@${ref}`} />
            <Info label="Booking amount" value={formatKes(pkg.price)} />
            <Info label="Commission rate" value="5%" />
            <Info label="Commission status" value="Pending until booking is confirmed" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-black p-3">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );
}
