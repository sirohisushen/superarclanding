import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { WhySection } from "@/components/why-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhySection />
      <ComparisonSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
