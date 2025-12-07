"use client"

import { useState } from "react"
import { NewsletterForm } from "./newsletter-form"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="SuperArc Mail" width={40} height={40} className="w-10 h-10 rounded-full" />
              <span className="font-sans text-lg font-semibold tracking-tight">SuperArc</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Why SuperArc
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </nav>

            {/* CTA */}
            <button onClick={() => setShowForm(true)} className="hidden sm:block button-primary">
              Get Early Access
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
      </header>

      {showForm && <NewsletterForm onClose={() => setShowForm(false)} />}
    </>
  )
}
