"use client"

import { useState } from "react"
import { NewsletterForm } from "./newsletter-form"

export function CtaSection() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-sans font-light tracking-tight mb-6 text-pretty">
          Ready to experience <span className="font-semibold">the future of email?</span>
        </h2>
        <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
          Join thousands of early adopters getting instant access to SuperArc Mail.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center justify-center rounded-lg bg-background px-8 py-4 font-sans text-base font-semibold text-foreground transition-all hover:shadow-xl active:scale-95"
        >
          Get Early Access Now
        </button>
      </div>

      {showForm && <NewsletterForm onClose={() => setShowForm(false)} />}
    </section>
  )
}
