import { Analytics } from "@vercel/analytics/next"
import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import IntegrationSection from "@/components/integration-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";

export default function Home() {
  return (
    <main>
    <Analytics />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <IntegrationSection />
    <CTASection />
  </main>
  );
}
