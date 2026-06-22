import Navbar from '../components/Navbar'
import PlatformHero from '../components/platform/PlatformHero'
import PlatformArchitecture from '../components/platform/PlatformArchitecture'
import PlatformContextEngine from '../components/platform/PlatformContextEngine'
import PlatformRemediationFactory from '../components/platform/PlatformRemediationFactory'
import PlatformLifecycle from '../components/platform/PlatformLifecycle'
import PlatformCoverage from '../components/platform/PlatformCoverage'
import PlatformIntegrations from '../components/platform/PlatformIntegrations'
import PlatformEnterprise from '../components/platform/PlatformEnterprise'
import PlatformOutcomes from '../components/platform/PlatformOutcomes'
import PlatformCTA from '../components/platform/PlatformCTA'

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar activePage="platform" />
      <PlatformHero />
      <PlatformArchitecture />
      <PlatformContextEngine />
      <PlatformRemediationFactory />
      <PlatformLifecycle />
      <PlatformCoverage />
      <PlatformIntegrations />
      <PlatformEnterprise />
      <PlatformOutcomes />
      <PlatformCTA />
    </div>
  )
}
