export function WhySection() {
  return (
    <section id="why" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-sans font-light tracking-tight mb-16 text-pretty text-center">
          Why email feels broken. <span className="font-semibold">We fixed it.</span>
        </h2>

        <div className="space-y-8">
          {[
            {
              problem: "Most mail apps are slow",
              solution: "SuperArc loads in 100ms. Sync is instant. No lag, no waiting.",
            },
            {
              problem: "Privacy doesn't exist",
              solution: "Your emails are end-to-end encrypted by default. Not even we can read them.",
            },
            {
              problem: "Features are scattered",
              solution: "Everything you loved from other apps, in one unified experience.",
            },
            {
              problem: "Design is outdated",
              solution: "Minimal, modern, and inspired by the best design thinking of today.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-foreground flex items-center justify-center text-background font-semibold">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.problem}</h3>
                <p className="text-muted-foreground text-lg">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
