"use client"

import { useState } from "react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: "When will SuperArc Mail launch?",
      a: "We're in beta now and launching publicly in Q1 2025. Early access members get 6 months free when we launch.",
    },
    {
      q: "Is it really end-to-end encrypted?",
      a: "Yes. All your emails are encrypted with 256-bit AES encryption. We use industry-standard protocols and can never access your messages.",
    },
    {
      q: "Can I import my existing emails?",
      a: "Absolutely. We support seamless imports from Gmail, Outlook, Apple Mail, and any IMAP-compatible email provider.",
    },
    {
      q: "What will SuperArc cost?",
      a: "Base plan is free forever. Premium features like advanced automation and priority support will be $9.99/month.",
    },
    {
      q: "Do you track my data?",
      a: "Never. We don't use trackers, we don't sell your data, and we don't create advertising profiles. It's just you and your email.",
    },
    {
      q: "What about security?",
      a: "We conduct regular security audits, follow GDPR compliance, and our infrastructure is hosted on secure, isolated servers.",
    },
  ]

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl sm:text-5xl font-sans font-light tracking-tight mb-16 text-center text-pretty">
          Questions? <span className="font-semibold">We have answers.</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border rounded-lg overflow-hidden transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-medium hover:bg-secondary/50 transition-colors flex items-center justify-between"
              >
                <span>{faq.q}</span>
                <span className={`transition-transform ${openIndex === idx ? "rotate-180" : ""}`}>⌄</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 border-t border-border bg-secondary/20 text-muted-foreground">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
