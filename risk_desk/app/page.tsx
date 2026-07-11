export default function Home() {
  const riskRules = [
    {
      zone: "Green Zone",
      rule: "Equity ratio near or above 50%. Research and small defined-risk ideas are allowed.",
      color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
    },
    {
      zone: "Yellow Zone",
      rule: "Equity ratio around 45%. Slow down, protect cushion, and avoid adding new risk.",
      color: "border-yellow-500/40 bg-yellow-500/10 text-yellow-200",
    },
    {
      zone: "Red Zone",
      rule: "Equity ratio near or below 40%. No new risk. Repair margin cushion first.",
      color: "border-red-500/40 bg-red-500/10 text-red-200",
    },
    {
      zone: "Trade Rule",
      rule: "No trade without thesis, invalidation, risk, and exit plan.",
      color: "border-slate-700 bg-slate-950 text-slate-200",
    },
    {
      zone: "Options Rule",
      rule: "Options practice should stay defined-risk while skill is being built.",
      color: "border-slate-700 bg-slate-950 text-slate-200",
    },
  ];

  const watchlist = [
    {
      ticker: "NVDA",
      company: "Nvidia",
      theme: "AI chips",
      bullCase: "AI compute demand stays strong and data center revenue keeps growing.",
      mainRisk: "High valuation, export controls, and competition from custom chips.",
      trigger: "Pullback, earnings reset, or continued data center acceleration.",
      status: "Watching",
    },
    {
      ticker: "MSFT",
      company: "Microsoft",
      theme: "Cloud / AI",
      bullCase: "Azure growth and AI tools keep expanding across enterprise customers.",
      mainRisk: "Cloud growth slows or AI spending fails to convert into profit.",
      trigger: "Strong Azure numbers or attractive pullback.",
      status: "Watching",
    },
    {
      ticker: "AMZN",
      company: "Amazon",
      theme: "AWS / consumer",
      bullCase: "AWS reaccelerates while retail margins continue improving.",
      mainRisk: "Margin pressure, consumer slowdown, or weaker cloud demand.",
      trigger: "AWS growth improves or market overreacts to short-term weakness.",
      status: "Watching",
    },
    {
      ticker: "CRWD",
      company: "CrowdStrike",
      theme: "Cybersecurity",
      bullCase: "Security demand remains durable and platform adoption expands.",
      mainRisk: "Competition, execution risk, or customer confidence issues.",
      trigger: "Clean earnings recovery or improving retention metrics.",
      status: "Researching",
    },
  ];

  const checklist = [
    "What does the company do?",
    "Why could it grow over the next 3–5 years?",
    "What could break the thesis?",
    "What event or price would make it interesting?",
    "Does it fit the current risk zone?",
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-7xl space-y-8">
        <section>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            Risk Desk
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Rules first. Watchlist second.
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            A simple dashboard for protecting margin cushion, tracking growth
            companies, and keeping trade ideas disciplined.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
          <h2 className="text-2xl font-semibold">Risk Rules</h2>
          <p className="mt-2 text-slate-400">
            These rules decide whether a new idea is allowed to move from
            research to action.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {riskRules.map((item) => (
              <div key={item.zone} className={`rounded-xl border p-4 ${item.color}`}>
<h3 className="font-semibold">{item.zone}</h3>
                <p className="mt-2 text-sm leading-6">{item.rule}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
          <h2 className="text-2xl font-semibold">Growth Company Watchlist</h2>
          <p className="mt-2 text-slate-400">
            Companies to research — not automatic buy signals.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full min-w-[1000px] border-collapse text-left text-sm">
              <thead className="bg-slate-950 text-slate-300">
                <tr>
                  <th className="p-3">Ticker</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">Theme</th>
                  <th className="p-3">Bull Case</th>
                  <th className="p-3">Main Risk</th>
                  <th className="p-3">Trigger</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {watchlist.map((stock) => (
                  <tr key={stock.ticker} className="border-t border-slate-800">
                    <td className="p-3 font-semibold text-emerald-400">
                      {stock.ticker}
                    </td>
                    <td className="p-3 font-medium">{stock.company}</td>
                    <td className="p-3 text-slate-300">{stock.theme}</td>
                    <td className="p-3 text-slate-300">{stock.bullCase}</td>
                    <td className="p-3 text-slate-300">{stock.mainRisk}</td>
                    <td className="p-3 text-slate-300">{stock.trigger}</td>
                    <td className="p-3">
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200">
                        {stock.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold">Research Checklist</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold">Next Actions</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Add 5 more companies to research.</li>
              <li>Add a 1–5 score for quality, growth, risk, and valuation.</li>
              <li>Add thesis and invalidation notes for each company.</li>
              <li>Add a trade journal after the watchlist is useful.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}