"use client"

import type React from "react"
import { useState } from "react"
import { addToWaitlist } from "@/app/actions/waitlist"
import { toast } from "sonner"

interface NewsletterFormProps {
  onClose: () => void
}

export function NewsletterForm({ onClose }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await addToWaitlist(email)

      if (result.success) {
        setIsSubmitted(true)
        toast.success(result.message)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Failed to join waitlist. Please try again.")
    } finally {
      setIsLoading(false)
    }

    // Close after 2 seconds
    setTimeout(() => {
      onClose()
      setIsSubmitted(false)
      setEmail("")
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      <div className="bg-background rounded-2xl border border-border shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-semibold mb-2">Get Early Access</h2>
            <p className="text-muted-foreground mb-6">
              Be the first to experience SuperArc Mail. We'll send you an invite as soon as we launch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-subtle w-full"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">We'll never spam you. Unsubscribe anytime.</p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Thanks for signing up!</h3>
            <p className="text-muted-foreground">Check your email for updates about SuperArc Mail.</p>
          </div>
        )}
      </div>
    </div>
  )
}
