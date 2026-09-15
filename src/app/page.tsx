import { CtcScoreSection } from "@/components/ctc-score-section";
import { DualCoreSection } from "@/components/dual-core-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { InfraStripSection } from "@/components/infra-strip-section";
import { MonthlySprintSection } from "@/components/monthly-sprint-section";
import { PromoBanner } from "@/components/promo-banner";
import { RubyChatbot } from "@/components/ruby-chatbot";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustMarquee } from "@/components/trust-marquee";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background font-sans text-foreground">
      <SiteHeader>
        <PromoBanner />
      </SiteHeader>
      <main className="flex-1">
        <HeroSection />
        <TrustMarquee />
        <DualCoreSection />
        <MonthlySprintSection />
        <CtcScoreSection />
        <InfraStripSection />
        <FaqSection />
        <section id="pricing" className="sr-only" aria-label="Pricing">
          Pricing
        </section>
        <section id="download" className="sr-only" aria-label="Download" />
        <section
          id="documentation"
          className="sr-only"
          aria-label="Documentation"
        />
        <section id="privacy" className="sr-only" aria-label="Privacy" />
        <section id="terms" className="sr-only" aria-label="Terms" />
      </main>
      <SiteFooter />
      <RubyChatbot />
    </div>
  );
}
