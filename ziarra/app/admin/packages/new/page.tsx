export const metadata = { title: "New package | Ziarra" };

const packageTypes = ["Day trip", "Weekend", "Group trip", "International", "Honeymoon", "Student"];

export default function NewPackagePage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3.5">
        <div>
          <h1 className="text-base font-medium text-gray-900">New Ziarra package</h1>
          <p className="text-xs text-gray-500">Admin creates packages. Creators only promote them.</p>
        </div>
        <a href="/admin/packages" className="btn btn-secondary text-sm">Cancel</a>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <form className="grid max-w-5xl gap-6 lg:grid-cols-[1fr_0.85fr]">
          <section className="form-card-light">
            <h2 className="text-sm font-medium text-gray-900">Package details</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Field label="Package name">
                <input placeholder="Diani Weekend Package" />
              </Field>
              <Field label="Public slug">
                <input placeholder="diani-weekend" />
              </Field>
              <Field label="Destination">
                <input placeholder="Diani Beach" />
              </Field>
              <Field label="Package type">
                <select defaultValue="">
                  <option value="" disabled>Select type</option>
                  {packageTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </Field>
              <Field label="Price per person">
                <input type="number" placeholder="20000" />
              </Field>
              <Field label="Duration">
                <input placeholder="3 days" />
              </Field>
              <Field label="Short description">
                <textarea className="min-h-28 resize-none" placeholder="A simple Ziarra-owned package creators can promote." />
              </Field>
            </div>
          </section>

          <aside className="space-y-4">
            <section className="form-card-light">
              <h2 className="text-sm font-medium text-gray-900">Creator promotion</h2>
              <div className="mt-4 space-y-4">
                <Field label="Commission rate">
                  <select defaultValue="5%">
                    <option>5%</option>
                    <option>7%</option>
                    <option>10%</option>
                  </select>
                </Field>
                <Field label="Promo code example">
                  <input placeholder="MARY10" />
                </Field>
              </div>
              <div className="form-hint-light mt-4">
                Once published, approved creators can copy referral links and promote this package.
              </div>
            </section>
            <button className="btn btn-primary w-full justify-center py-3" type="button">
              Save package
            </button>
          </aside>
        </form>
      </main>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm text-gray-500 md:col-span-1">
      <span className="field-label-light">{label}</span>
      {children}
    </label>
  );
}
