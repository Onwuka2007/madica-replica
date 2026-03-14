import FaqSection from './FaqSection'
import Hero from './Hero'
import MentorshipSection from './MentorshipSection'
import PortfolioSection from './PortfolioSection'
import ProgramBenefitsSection from './ProgramBenefitsSection'
import WhyMadicaSection from './WhyMadicaSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyMadicaSection />
      <ProgramBenefitsSection />
      <MentorshipSection />
      <PortfolioSection />
      <FaqSection />
    </>
  )
}
