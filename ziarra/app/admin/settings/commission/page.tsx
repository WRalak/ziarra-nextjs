export const metadata = { title: "Commission rules | Ziarra" };

const rules = [
  { name: "Default creator commission", value: "8%", appliesTo: "All active creators" },
  { name: "High-margin safari packages", value: "10%", appliesTo: "Selected safari inventory" },
  { name: "Commission release delay", value: "48 hours", appliesTo: "Confirmed paid bookings" },
];

export default function CommissionSettingsPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center justify-between px-6 py-3.5 border-b border-gray-200 bg-white flex-shrink-0">
        <h1 className="text-base font-medium text-gray-900">Commission rules</h1>
        <button className="btn btn-primary text-sm py-1.5 px-3">Add rule</button>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>{["Rule", "Value", "Applies to", "Action"].map((h) => <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rules.map((rule) => (
                <tr key={rule.name}>
                  <td className="px-4 py-3 font-medium text-gray-900">{rule.name}</td>
                  <td className="px-4 py-3">{rule.value}</td>
                  <td className="px-4 py-3 text-gray-500">{rule.appliesTo}</td>
                  <td className="px-4 py-3"><button className="text-purple-600 text-sm">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
