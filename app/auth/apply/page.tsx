"use client";

import { useState } from "react";
import Link from "next/link";

const audienceTypes = [
  "Travel",
  "Students",
  "Churches",
  "Families",
  "Diaspora",
  "Corporate",
  "Campus",
  "Community groups",
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [signature, setSignature] = useState("");
  const canSubmit = acceptedTerms && signature.trim().length > 1;

  if (submitted) {
    return (
      <main className="min-h-screen bg-black px-6 py-12 text-white">
        <section className="mx-auto max-w-xl rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ziarra-400 text-lg font-semibold text-black">
            OK
          </div>
          <h1 className="mt-5 text-2xl font-semibold">Application received</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Ziarra will review the creator profile, audience fit, and payout details before approving the dashboard.
          </p>
          <div className="mt-5 rounded-xl border border-slate-800 bg-black p-4 text-left text-sm leading-6 text-slate-300">
            Thank you for applying to become a Ziarra Creator Partner. If approved, you will get access to referral links, promo codes, approved packages, earnings, and payout tracking.
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/" className="btn btn-secondary">Home</Link>
            <Link href="/creator/dashboard" className="btn btn-primary">View demo dashboard</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-ziarra-400">Creator partner application</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Apply to promote Ziarra packages.
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            This demo form shows the information Ziarra collects before approving a nano creator, influencer, or community leader.
          </p>
        </div>

        <form
          className="grid gap-6 lg:grid-cols-[1fr_0.8fr]"
          onSubmit={(event) => {
            event.preventDefault();
            if (canSubmit) setSubmitted(true);
          }}
        >
          <section className="form-card">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-lg font-semibold">Profile details</h2>
              <p className="mt-1 text-sm text-slate-400">Who is applying and what community do they reach?</p>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Field label="Name or brand/community name">
                <input placeholder="Mary Campus Travel" />
              </Field>
              <Field label="ID or passport number">
                <input placeholder="ID / Passport number" />
              </Field>
              <Field label="Audience size">
                <select defaultValue="">
                  <option value="" disabled>Select size</option>
                  <option>Under 1,000</option>
                  <option>1,000 - 5,000</option>
                  <option>5,000 - 20,000</option>
                  <option>20,000+</option>
                </select>
              </Field>
              <Field label="Country">
                <input placeholder="Kenya" />
              </Field>
              <Field label="City">
                <input placeholder="Nairobi" />
              </Field>
              <Field label="Phone number">
                <input placeholder="07XX XXX XXX" />
              </Field>
              <Field label="Email address">
                <input type="email" placeholder="creator@email.com" />
              </Field>
              <Field label="Primary social link">
                <input placeholder="@yourhandle" />
              </Field>
              <Field label="WhatsApp or community link">
                <input placeholder="Community group name or invite code" />
              </Field>
              <Field label="About the audience">
                <textarea className="min-h-28 resize-none" placeholder="Example: campus students looking for affordable group trips." />
              </Field>
            </div>
          </section>

          <aside className="space-y-6">
            <section className="form-card">
              <h2 className="text-lg font-semibold">Audience type</h2>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {audienceTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 rounded-xl border border-slate-800 bg-black px-3 py-2 text-sm text-slate-200 transition hover:border-ziarra-400/70">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-700" />
                    {type}
                  </label>
                ))}
              </div>
            </section>

            <section className="form-card">
              <h2 className="text-lg font-semibold">Payout details</h2>
              <div className="mt-4 space-y-4">
                <Field label="Payout method">
                  <select defaultValue="M-Pesa">
                    <option>M-Pesa</option>
                    <option>Bank transfer</option>
                  </select>
                </Field>
                <Field label="Payout phone or account">
                  <input placeholder="07XX XXX XXX" />
                </Field>
              </div>
              <div className="form-hint mt-5">
                Ziarra reviews and approves creators before referral links, promo codes, packages, and payouts are enabled.
              </div>
            </section>

            <section className="form-card">
              <h2 className="text-lg font-semibold">Terms and signature</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <p>
                  I understand that Ziarra owns checkout, payments, customer support, package quality, and final booking approval.
                </p>
                <p>
                  I agree to promote Ziarra packages honestly, avoid misleading prices or promises, and accept that commission is paid only on confirmed eligible bookings.
                </p>
              </div>
              <label className="mt-4 flex items-start gap-3 rounded-xl border border-slate-800 bg-black p-3 text-sm text-slate-200">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) => setAcceptedTerms(event.target.checked)}
                  className="mt-0.5"
                />
                <span>I have read and agree to the Ziarra Creator Partner terms.</span>
              </label>
              <Field label="Typed signature">
                <input
                  value={signature}
                  onChange={(event) => setSignature(event.target.value)}
                  placeholder="Type your full legal name"
                />
              </Field>
            </section>

            <button
              className="btn btn-primary w-full justify-center py-3 disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
              disabled={!canSubmit}
            >
              Submit application
            </button>
            {!canSubmit && (
              <p className="text-center text-xs text-slate-500">
                Accept the terms and type your signature to submit.
              </p>
            )}
          </aside>
        </form>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm text-slate-300 md:col-span-1">
      <span className="field-label">{label}</span>
      {children}
    </label>
  );
}
