import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <p className="text-sm font-medium uppercase tracking-wide text-ziarra-400">Demo login</p>
        <h1 className="mt-3 text-2xl font-semibold">Choose a dashboard</h1>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          For the representation app, login is simplified into direct role demos.
        </p>
        <div className="mt-6 space-y-3">
          <Link href="/creator/dashboard" className="btn btn-primary w-full justify-center">Creator dashboard</Link>
          <Link href="/admin/dashboard" className="btn btn-secondary w-full justify-center">Admin dashboard</Link>
        </div>
      </section>
    </main>
  );
}
