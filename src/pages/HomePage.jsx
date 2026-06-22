import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CustomerLogos from '../components/CustomerLogos'
import FourPillars from '../components/FourPillars'
import ProblemSection from '../components/ProblemSection'
import Lifecycle from '../components/Lifecycle'
import ContextEngine from '../components/ContextEngine'
import Outcomes from '../components/Outcomes'
import FinalCTA from '../components/FinalCTA'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <CustomerLogos />
      <FourPillars />
      <ProblemSection />
      <Lifecycle />
      <ContextEngine />
      <Outcomes />
      <FinalCTA />
    </div>
  )
}
