export const metadata = { title: "Marketing assets" };

const assets = [
  { name: "Diani story pack", type: "Image set", package: "Diani Weekend Escape", size: "8 files" },
  { name: "Safari reels captions", type: "Text", package: "Maasai Mara Safari", size: "12 captions" },
  { name: "Watamu itinerary PDF", type: "PDF", package: "Watamu Family Holiday", size: "1 file" },
];

const copyBlocks = [
  { title: "WhatsApp group message", text: "Diani weekend deal is live. Ziarra handles booking and payment. Use my link to reserve your slot." },
  { title: "TikTok hook", text: "POV: You need a beach weekend but do not want to plan anything. Diani with Ziarra." },
  { title: "Instagram story", text: "Weekend escape loading. Tap the link, book through Ziarra, and pack light." },
];

export default function CreatorAssetsPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center justify-between px-6 py-3.5 border-b border-gray-200 bg-white flex-shrink-0">
        <h1 className="text-base font-medium text-gray-900">Marketing assets</h1>
        <a href="/creator/packages" className="btn btn-primary text-sm py-1.5 px-3">Browse packages</a>
      </header>
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <section className="grid gap-4 lg:grid-cols-3">
          {copyBlocks.map((block) => (
            <article key={block.title} className="rounded-2xl border border-gray-200 bg-white p-4">
              <h2 className="text-sm font-medium text-gray-900">{block.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-500">{block.text}</p>
              <button className="btn btn-primary mt-4 w-full justify-center py-2 text-sm">Copy text</button>
            </article>
          ))}
        </section>
        <section className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-medium text-gray-900">WhatsApp-first sharing</h2>
              <p className="mt-1 text-xs text-gray-500">Creators can share approved Ziarra package copy directly to community groups.</p>
            </div>
            <button className="btn btn-primary text-sm" type="button">Copy WhatsApp message</button>
          </div>
        </section>
        <div className="grid grid-cols-3 gap-4">
          {assets.map((asset) => (
            <article key={asset.name} className="bg-white border border-gray-200 rounded-2xl p-4">
              <div className="h-28 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-xl font-medium text-gray-500">
                {asset.type === "PDF" ? "PDF" : asset.type === "Text" ? "TXT" : "IMG"}
              </div>
              <h2 className="mt-3 text-sm font-medium text-gray-900">{asset.name}</h2>
              <p className="mt-1 text-xs text-gray-500">{asset.package}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>{asset.type}</span><span>{asset.size}</span>
              </div>
              <button className="btn btn-secondary mt-4 w-full justify-center text-sm py-2">Download</button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
