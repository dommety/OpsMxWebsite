import { useEffect } from 'react'
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
  // Tell the prerenderer the page is painted and ready to snapshot.
  // Double rAF waits for the browser to finish layout/paint; the timeout
  // is a fallback so the event always fires well within the 30s window.
  useEffect(() => {
    const fire = () => document.dispatchEvent(new Event('render-event'))
    const raf = requestAnimationFrame(() => requestAnimationFrame(fire))
    const t = setTimeout(fire, 2000)
    return () => { cancelAnimationFrame(raf); clearTimeout(t) }
  }, [])

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
