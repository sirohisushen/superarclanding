import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SuperArc Mail - The Fastest & Smartest Mail App | Pre-Launch",
  description:
    "Experience the future of email. SuperArc Mail blends the best features from all apps with blazing speed and full encryption. Coming soon.",
  generator: "No Gen",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "SuperArc Mail - The Fastest & Smartest Mail App",
    description: "Experience the future of email with SuperArc Mail",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
