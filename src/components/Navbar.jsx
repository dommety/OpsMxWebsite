import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import MegaMenu from './MegaMenu'
import SolutionsMegaMenu from './SolutionsMegaMenu'
import ResourcesMegaMenu from './ResourcesMegaMenu'
import CustomersMegaMenu from './CustomersMegaMenu'
import CompanyDropdown from './CompanyDropdown'
import Logo from './Logo'

const navLinks = [
  { label: 'Products',   mega: 'products',   href: '/platform' },
  { label: 'Solutions',  mega: 'solutions',  href: '/solutions' },
  { label: 'Remediation Benchmarks', href: '/remediation-benchmarks' },
  { label: 'Customers',  mega: 'customers',  href: 'https://www.opsmx.com/customer-case-study/' },
  { label: 'Pricing',    href: '/pricing' },
]

const crawlableProductLinks = [
  { label: 'Platform Overview', href: '/platform' },
  { label: 'Remediation Benchmarks', href: '/remediation-benchmarks' },
  { label: 'Assess Risk', href: '/opsmx/assess-risk' },
  { label: 'Context Engine', href: '/opsmx/assess-risk#context-engine' },
  { label: 'Vulnerability Correlation', href: '/opsmx/assess-risk#vulnerability-correlation' },
  { label: 'Exploitability', href: '/opsmx/assess-risk#exploitability' },
  { label: 'Reachability', href: '/opsmx/assess-risk#reachability' },
  { label: 'Root Cause Diagnosis', href: '/opsmx/assess-risk#root-cause-diagnosis' },
  { label: 'False Positive Reduction', href: '/opsmx/assess-risk#false-positive-reduction' },
  { label: 'Supply Chain Risk Assessment', href: '/opsmx/assess-risk#supply-chain-risk-assessment' },
  { label: 'Risk Scoring', href: '/opsmx/assess-risk#risk-scoring' },
  { label: 'Risk Prioritization', href: '/opsmx/assess-risk#risk-prioritization' },
  { label: 'Resources',  mega: 'resources',  href: 'https://www.opsmx.com/guides-datasheets/' },
  { label: 'Company',    isDropdown: true },
  { label: 'Fix Risk', href: '/opsmx/fix-risk' },
  { label: 'Code Remediation', href: '/opsmx/fix-risk#code-remediation' },
  { label: 'Dependency Remediation', href: '/opsmx/fix-risk#dependency-remediation' },
  { label: 'Cloud & IaC Remediation', href: '/opsmx/fix-risk#cloud-iac-remediation' },
  { label: 'Infrastructure & Network Remediation', href: '/opsmx/fix-risk#infrastructure-network-remediation' },
  { label: 'Kubernetes Remediation', href: '/opsmx/fix-risk#kubernetes-remediation' },
  { label: 'Operations & Delivery Remediation', href: '/opsmx/fix-risk#operations-delivery-remediation' },
  { label: 'Compliance Remediation', href: '/opsmx/fix-risk#compliance-remediation' },
  { label: 'SAST', href: '/static-application-security-testing' },
  { label: 'SCA', href: 'https://www.opsmx.com/software-composition-analysis-with-opsmx-delivery-shield/' },
  { label: 'Secrets', href: '/secrets' },
  { label: 'AI Security', href: '/ai-security' },
  { label: 'DAST', href: 'https://www.opsmx.com/dynamic-application-security-testing-with-opsmx-delivery-shield/' },
  { label: 'API Security', href: '/api-security' },
  { label: 'Penetration Testing', href: '/penetration-testing' },
  { label: 'SBOM', href: 'https://www.opsmx.com/software-bill-of-materials-with-opsmx-delivery-shield/' },
  { label: 'AI-BOM', href: '/ai-bom' },
  { label: 'CBOM, DBOM, QBOM & HBOM', href: '/solution-briefs/advanced-bom-reporting' },
  { label: 'X-BOM', href: '/x-bom' },
  { label: 'Dependency Intelligence', href: '/dependency-intelligence' },
  { label: 'OSS Risk', href: 'https://www.opsmx.com/open-source-risk-management-for-oss-with-opsmx-delivery-shield/' },
  { label: 'License Risk', href: '/license-risk' },
  { label: 'Provenance', href: '/provenance' },
  { label: 'Audit Reporting', href: '/audit-reporting' },
  { label: 'CSPM', href: 'https://www.opsmx.com/cloud-security-posture-management-with-opsmx-delivery-shield/' },
  { label: 'IaC Security', href: 'https://www.opsmx.com/infrastructure-as-code-security-with-opsmx-delivery-shield/' },
  { label: 'Container Security', href: 'https://www.opsmx.com/kubernetes-security-with-opsmx-delivery-shield/' },
  { label: 'Cluster Security', href: '/cluster-security' },
  { label: 'Workload Security', href: '/workload-security' },
  { label: 'Policy Enforcement', href: 'https://www.opsmx.com/deployment-firewall/' },
  { label: 'Threat Correlation', href: '/threat-correlation' },
  { label: 'Runtime Risk', href: 'https://opsmx.com/dynamic-runtime-ai-security/' },
  { label: 'Cloud Remediation', href: '/cloud-remediation' },
  { label: 'Change Risk', href: '/change-risk' },
  { label: 'Release Governance', href: 'https://www.opsmx.com/deployment-firewall/' },
  { label: 'Deployment Verification', href: '/deployment-verification' },
  { label: 'Root Cause Analysis', href: '/root-cause-analysis' },
  { label: 'Incident Diagnostics', href: '/incident-diagnostics' },
  { label: 'Operational Remediation', href: '/operational-remediation' },
]

function NavHubLink({ href, children, className }) {
  const isExternal = href?.startsWith('http')
  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
  }
  return <Link to={href} className={className}>{children}</Link>
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const closeTimer = useRef(null)
  const openWith = useCallback((which) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(which)
  }, [])
  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 130)
  }, [])
  const closeNow = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(null)
  }, [])
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[100] bg-navy-950 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" href="/" onClick={closeNow} className="flex-shrink-0" />
          {/* Nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = link.mega && openMenu === link.mega
              if (link.isDropdown && link.label === 'Company') {
                return (
                  <CompanyDropdown key={link.label} onClose={closeNow} />
                )
              }
              if (link.mega) {
                return (
                  <div
                    key={link.label}
                    onMouseEnter={() => openWith(link.mega)}
                    onMouseLeave={scheduleClose}
                    className="relative"
                  >
                    <NavHubLink
                      href={link.href}
                      className={`flex items-center gap-1 px-3.5 py-2 text-sm transition-colors rounded-lg ${
                        isActive
                          ? 'text-white bg-white/6'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                      <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-3 h-3" />
                      </motion.div>
                    </NavHubLink>
                  </div>
                )
              }
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center gap-1 px-3.5 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          {/* CTAs */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="https://ssd.sandbox.opsmx.org/login?redir=/ui/application" target="_blank" rel="noopener noreferrer" className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors px-3 py-2">
              Sign In
            </a>
            <Link to="/request-a-demo" className="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-electric-500 text-white hover:from-cyan-400 hover:to-electric-400 transition-all duration-200 shadow-lg shadow-cyan-500/20">
              Request Demo
            </Link>
          </div>
        </div>
      </motion.nav>
      {/* SEO: always-in-DOM crawlable product nav (visually hidden, screen-reader accessible). */}
      <nav aria-label="All products" className="sr-only">
        <ul>
          {crawlableProductLinks.map((item) => {
            const isExternal = item.href.startsWith('http')
            return (
              <li key={item.label + item.href}>
                {isExternal
                  ? <a href={item.href}>{item.label}</a>
                  : <Link to={item.href}>{item.label}</Link>}
              </li>
            )
          })}
        </ul>
      </nav>
      {/* Products mega menu */}
      <AnimatePresence>
        {openMenu === 'products' && (
          <MegaMenu
            onClose={closeNow}
            onMouseEnter={() => openWith('products')}
            onMouseLeave={scheduleClose}
          />
        )}
      </AnimatePresence>
      {/* Solutions mega menu */}
      <AnimatePresence>
        {openMenu === 'solutions' && (
          <SolutionsMegaMenu
            onClose={closeNow}
            onMouseEnter={() => openWith('solutions')}
            onMouseLeave={scheduleClose}
          />
        )}
      </AnimatePresence>
      {/* Resources mega menu */}
      <AnimatePresence>
        {openMenu === 'resources' && (
          <ResourcesMegaMenu
            onClose={closeNow}
            onMouseEnter={() => openWith('resources')}
            onMouseLeave={scheduleClose}
          />
        )}
      </AnimatePresence>
      {/* Customers mega menu */}
      <AnimatePresence>
        {openMenu === 'customers' && (
          <CustomersMegaMenu
            onClose={closeNow}
            onMouseEnter={() => openWith('customers')}
            onMouseLeave={scheduleClose}
          />
        )}
      </AnimatePresence>
      {/* Backdrop */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm -z-10"
            onClick={closeNow}
          />
        )}
      </AnimatePresence>
    </>
  )
}
