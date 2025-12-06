export function FeaturesSection() {
  const features = [
    {
      icon: "⚡",
      title: "Blazing Fast",
      description: "Lightning-quick load times and instant sync across all devices. Feel the difference.",
    },
    {
      icon: "🔒",
      title: "End-to-End Encrypted",
      description: "Your emails are yours alone. Military-grade 256-bit encryption on everything.",
    },
    {
      icon: "🧠",
      title: "Intelligent",
      description: "Smart filtering, predictive search, and AI-powered features that work for you.",
    },
    {
      icon: "🎯",
      title: "Unified Inbox",
      description: "Bring all your email accounts together in one beautiful, organized space.",
    },
    {
      icon: "⌨️",
      title: "Power User Features",
      description: "Advanced keyboard shortcuts, automation rules, and deep customization.",
    },
    {
      icon: "🌍",
      title: "Works Everywhere",
      description: "Desktop, mobile, web. Perfect sync across every device you use.",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-sans font-light tracking-tight mb-4 text-pretty">
            Built from the ground up <span className="font-semibold">for you</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We took the best features from Superhuman, Gmail, Apple Mail, Notion, and created something entirely new.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
