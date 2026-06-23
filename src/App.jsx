import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import SolutionsPage from './pages/SolutionsPage'
import SolutionDetailPage from './pages/SolutionDetailPage'
import ResourcesVideosPage from './pages/ResourcesVideosPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'
import XBOMPage from './pages/XBOMPage'
import SecretsPage from './pages/SecretsPage'
import AISecurityPage from './pages/AISecurityPage'
import APISecurityPage from './pages/APISecurityPage'
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

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
        <Route path="/resources/videos" element={<ResourcesVideosPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/x-bom" element={<XBOMPage />} />
        <Route path="/secrets" element={<SecretsPage />} />
        <Route path="/ai-security" element={<AISecurityPage />} />
        <Route path="/api-security" element={<APISecurityPage />} />
        <Route path="/penetration-testing" element={<PenetrationTestingPage />} />
        <Route path="/ai-bom" element={<AIBOMPage />} />
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
      </Routes>
    </BrowserRouter>
  )
}
