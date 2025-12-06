export function ComparisonSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-sans font-light tracking-tight mb-16 text-center text-pretty">
          How SuperArc compares
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">Feature</th>
                <th className="text-center py-4 px-4 font-semibold">SuperArc</th>
                <th className="text-center py-4 px-4 font-semibold">Gmail</th>
                <th className="text-center py-4 px-4 font-semibold">Superhuman</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Speed", superarc: "✓", gmail: "○", superhuman: "✓" },
                { feature: "Encryption", superarc: "✓", gmail: "○", superhuman: "○" },
                { feature: "Price", superarc: "Free", gmail: "Free", superhuman: "$30/mo" },
                { feature: "Open Source", superarc: "✓", gmail: "○", superhuman: "○" },
                { feature: "No Tracking", superarc: "✓", gmail: "○", superhuman: "○" },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-secondary/40 transition-colors">
                  <td className="py-4 px-4 font-medium">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-foreground">{row.superarc}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{row.gmail}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{row.superhuman}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
