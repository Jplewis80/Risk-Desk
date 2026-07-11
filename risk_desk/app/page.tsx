export default function Home() {
  const riskRules = [
    "Protect equity cushion before adding new risk.",
    "Preferred equity level: around 50%.",
    "Yellow zone: around 45% equity ratio — slow down and protect.",
    "Hard floor: 40% equity ratio — no new risk, repair cushion first.",
    "Use defined-risk trades only while practicing options.",
    "No trade without thesis, invalidation, risk, and exit plan.",
  ];

  const watchlist = [
    {
      ticker: "NVDA",
      company: "Nvidia",
      theme: "AI chips",
      status: "Watching",
    },
    {
      ticker: "MSFT",
      company: "Microsoft",
      theme: "Cloud / AI",
      status: "Watching",
    },
    {
      ticker: "AMZN",
      company: "Amazon",
      theme: "Cloud / consumer",
      status: "Watching",
    },
    {
      ticker: "CRWD",
      company: "CrowdStrike",
      theme: "Cybersecurity",
      status: "Researching",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-8">
        <section>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            Risk Desk
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Rules first. Watchlist second.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            A simple dashboard for protecting margin cushion, tracking growth
            companies, and keeping trade ideas disciplined.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Risk Rules</h2>
          <ul className="mt-4 space-y-3">
            {riskRules.map((rule) => (
              <li key={rule} className="rounded-xl bg-slate-950 p-4 text-slate-200">
                {rule}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Growth Company Watchlist</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-950 text-slate-300">
                <tr>
                  <th className="p-3">Ticker</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">Theme</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {watchlist.map((stock) => (
                  <tr key={stock.ticker} className="border-t border-slate-800">
                    <td className="p-3 font-semibold text-emerald-400">
                      {stock.ticker}
                    </td>
                    <td className="p-3">{stock.company}</td>
                    <td className="p-3 text-slate-300">{stock.theme}</td>
                    <td className="p-3">{stock.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Next Actions</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            <li>Add risk score for each company.</li>
<li>Add thesis and invalidation notes.</li>
            <li>Add trade journal later.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}