import Hero from "@/components/hero"
import UnderstandingInternship from "@/components/understanding-internship"
import ImportanceOfInternship from "@/components/importance"
import DataAndImpact from "@/components/data-impact"
import ImplementationFramework from "@/components/implementation-framework"
import CompetencyDimensions from "@/components/competency-dimensions"
import StakeholderPerspectives from "@/components/stakeholder-perspectives"
import ChallengesAndSolutions from "@/components/challenges-solutions"
import PolicyRecommendations from "@/components/policy-recommendations"
import CallToAction from "@/components/call-to-action"
import References from "@/components/references"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <UnderstandingInternship />
      <ImportanceOfInternship />
      <DataAndImpact />
      <ImplementationFramework />
      <CompetencyDimensions />
      <StakeholderPerspectives />
      <ChallengesAndSolutions />
      <PolicyRecommendations />
      {/* <CallToAction /> */}
      {/* <References /> */}
      <Footer />
    </main>
  )
}
