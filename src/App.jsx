import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import SolutionsPage from './pages/SolutionsPage'
import ResourcesVideosPage from './pages/ResourcesVideosPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'
import XBOMPage from './pages/XBOMPage'
import SecretsPage from './pages/SecretsPage'
import AISecurityPage from './pages/AISecurityPage'
import APISecurityPage from './pages/APISecurityPage'
import GitSecurityPage from './pages/GitSecurityPage'
import PenetrationTestingPage from './pages/PenetrationTestingPage'
import AIBOMPage from './pages/AIBOMPage'
import DependencyIntelligencePage from './pages/DependencyIntelligencePage'
import LicenseRiskPage from './pages/LicenseRiskPage'
import ProvenancePage from './pages/ProvenancePage'
import AuditReportingPage from './pages/AuditReportingPage'
import ClusterSecurityPage from './pages/ClusterSecurityPage'
import WorkloadSecurityPage from './pages/WorkloadSecurityPage'
import ThreatCorrelationPage from './pages/ThreatCorrelationPage'
import CloudRemediationPage from './pages/CloudRemediationPage'
import ChangeRiskPage from './pages/ChangeRiskPage'
import DeploymentVerificationPage from './pages/DeploymentVerificationPage'
import RootCauseAnalysisPage from './pages/RootCauseAnalysisPage'
import IncidentDiagnosticsPage from './pages/IncidentDiagnosticsPage'
import OperationalRemediationPage from './pages/OperationalRemediationPage'
import AIPenetrationTestingPage from './pages/AIPenetrationTestingPage'
import SASTPage from './pages/SASTPage'
import AdvancedBOMPage from './pages/AdvancedBOMPage'
import WhyOpsMxXBOMPage from './pages/WhyOpsMxXBOMPage'
import RegulatoryBOMSolutionBriefPage from './pages/RegulatoryBOMSolutionBriefPage'
import AssessRiskPage from './pages/AssessRiskPage'
import FixRiskPage from './pages/FixRiskPage'
import AIAssistantPage from './pages/AIAssistantPage'
import OperationsDeliveryPage from './pages/OperationsDeliveryPage'
import RemediationBenchmarksPage from './pages/RemediationBenchmarksPage'
import RequestDemoPage from './pages/RequestDemoPage'
import ZeroDayContainmentPage from './pages/ZeroDayContainmentPage'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/videos" element={<ResourcesVideosPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/x-bom" element={<XBOMPage />} />
          <Route path="/secrets" element={<SecretsPage />} />
          <Route path="/static-application-security-testing" element={<SASTPage />} />
          <Route path="/ai-security" element={<AISecurityPage />} />
          <Route path="/api-security" element={<APISecurityPage />} />
          <Route path="/git-security-posture" element={<GitSecurityPage />} />
          <Route path="/ai-penetration-testing" element={<AIPenetrationTestingPage />} />
          <Route path="/penetration-testing" element={<PenetrationTestingPage />} />
          <Route path="/ai-bom" element={<AIBOMPage />} />
          <Route path="/solution-briefs/advanced-bom-reporting" element={<AdvancedBOMPage />} />
          <Route path="/solution-briefs/why-opsmx-xbom" element={<WhyOpsMxXBOMPage />} />
          <Route path="/solution-briefs/regulatory-bom-reporting-suite" element={<RegulatoryBOMSolutionBriefPage />} />
          <Route path="/opsmx/assess-risk" element={<AssessRiskPage />} />
          <Route path="/opsmx/fix-risk" element={<FixRiskPage />} />
          <Route path="/opsmx/ai-assistant" element={<AIAssistantPage />} />
          <Route path="/opsmx/operations-delivery" element={<OperationsDeliveryPage />} />
          <Route path="/remediation-benchmarks" element={<RemediationBenchmarksPage />} />
          <Route path="/request-a-demo" element={<RequestDemoPage />} />
          <Route path="/dependency-intelligence" element={<DependencyIntelligencePage />} />
          <Route path="/license-risk" element={<LicenseRiskPage />} />
          <Route path="/provenance" element={<ProvenancePage />} />
          <Route path="/audit-reporting" element={<AuditReportingPage />} />
          <Route path="/cluster-security" element={<ClusterSecurityPage />} />
          <Route path="/workload-security" element={<WorkloadSecurityPage />} />
          <Route path="/threat-correlation" element={<ThreatCorrelationPage />} />
          <Route path="/cloud-remediation" element={<CloudRemediationPage />} />
          <Route path="/change-risk" element={<ChangeRiskPage />} />
          <Route path="/deployment-verification" element={<DeploymentVerificationPage />} />
          <Route path="/root-cause-analysis" element={<RootCauseAnalysisPage />} />
          <Route path="/incident-diagnostics" element={<IncidentDiagnosticsPage />} />
          <Route path="/operational-remediation" element={<OperationalRemediationPage />} />
          <Route path="/solutions/zero-day-containment-and-remediation" element={<ZeroDayContainmentPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}
