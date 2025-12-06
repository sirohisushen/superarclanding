"use client"

import { useState } from "react"
import { NewsletterForm } from "./newsletter-form"

export function HeroSection() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-32 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-border bg-card">
          <span className="inline-block w-2 h-2 bg-foreground rounded-full animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">Coming Soon • Pre-Launch</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-light tracking-tight mb-6 text-pretty">
          The fastest & <span className="font-semibold">smartest mail app</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          SuperArc Mail blends the perfect features from every great email app. Blazing fast. Fully encrypted. Insanely
          good experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button onClick={() => setShowForm(true)} className="button-primary min-w-48">
            Get Early Access
          </button>
          <a href="#features" className="button-secondary min-w-48">
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-border">
          <div>
            <div className="text-2xl sm:text-3xl font-semibold mb-1">100ms</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Load time</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold mb-1">256-bit</div>
            <div className="text-xs sm:text-sm text-muted-foreground">End-to-end encryption</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold mb-1">0 ads</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Tracking-free</div>
          </div>
        </div>

        {/* Newsletter Form Modal */}
        {showForm && <NewsletterForm onClose={() => setShowForm(false)} />}
      </div>
    </section>
  )
}
