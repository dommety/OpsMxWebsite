import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, BarChart3 } from 'lucide-react'
import { fixRiskNavigation } from '../data/fixRisk'

// ─── STAGE ACCENT COLORS (kept consistent with the rest of the site) ─────────
const DETECT = '#60a5fa'
const ASSESS = '#34d399'
const FIX = '#fbbf24'

// ─── DETECT — four domains, deduplicated, hrefs mirror App.jsx routes ────────
// NOTE: links to `https://www.opsmx.com/...` are live WordPress pages that have
// not yet been migrated to React. They are correct for now and marked PHASE 2.
const detectColumns = [
  {
    title: 'Code & AI',
    items: [
      { label: 'SAST', href: '/static-application-security-testing' },
      { label: 'SCA', href: 'https://www.opsmx.com/software-composition-analysis-with-opsmx-delivery-shield/' }, // PHASE 2
      { label: 'DAST', href: 'https://www.opsmx.com/dynamic-application-security-testing-with-opsmx-delivery-shield/' }, // PHASE 2
      { label: 'Secrets', href: '/secrets' },
      { label: 'API Security', href: '/api-security' },
      { label: 'AI Security', href: '/ai-security' },
      { label: 'AI Penetration Testing', href: '/ai-penetration-testing' },
    ],
  },
  {
    title: 'Supply Chain',
    items: [
      { label: 'SBOM', href: 'https://www.opsmx.com/software-bill-of-materials-with-opsmx-delivery-shield/' }, // PHASE 2
      { label: 'AI-BOM', href: '/ai-bom' },
      { label: 'CBOM, DBOM, QBOM & HBOM', href: '/solution-briefs/advanced-bom-reporting' },
      { label: 'Dependency Intelligence', href: '/dependency-intelligence' },
      { label: 'Provenance', href: '/provenance' },
      { label: 'Open Source / OSS Risk', href: 'https://www.opsmx.com/open-source-risk-management-for-oss-with-opsmx-delivery-shield/' }, // PHASE 2
      { label: 'License Risk', href: '/license-risk' },
      { label: 'Regulatory BOM Reporting', href: '/solution-briefs/regulatory-bom-reporting-suite' },
      { label: 'Audit Reporting', href: '/audit-reporting' },
      { label: 'Policy Enforcement', href: 'https://www.opsmx.com/deployment-firewall/' }, // PHASE 2
    ],
  },
  {
    title: 'Cloud & Runtime',
    items: [
      { label: 'Cloud Security Posture (CSPM)', href: 'https://www.opsmx.com/cloud-security-posture-management-with-opsmx-delivery-shield/' }, // PHASE 2
      { label: 'IaC Security', href: 'https://www.opsmx.com/infrastructure-as-code-security-with-opsmx-delivery-shield/' }, // PHASE 2
      { label: 'Container Security', href: 'https://www.opsmx.com/kubernetes-security-with-opsmx-delivery-shield/' }, // PHASE 2
      { label: 'Cluster Security', href: '/cluster-security' },
      { label: 'Workload Security', href: '/workload-security' },
      { label: 'Threat Correlation', href: '/threat-correlation' },
      // FIXED: was 3 links to /opsmx/runtime-security (no such route → 404). Now one link to the live WP runtime page. PHASE 2.
      { label: 'Runtime Security', href: 'https://www.opsmx.com/dynamic-runtime-ai-security/' },
    ],
  },
  {
    title: 'Operations & Delivery',
    items: [
      { label: 'Pipeline Failure Diagnosis', href: '/opsmx/operations-delivery#pipeline-failure-diagnosis' },
      { label: 'Deployment Failure Diagnosis', href: '/opsmx/operations-delivery#deployment-failure-diagnosis' },
      { label: 'Incident Root Cause Analysis', href: '/opsmx/operations-delivery#incident-root-cause-analysis' },
      { label: 'Rollback & Roll-forward Guidance', href: '/opsmx/operations-delivery#rollback-rollforward-guidance' },
      { label: 'Change Risk Assessment', href: '/opsmx/operations-delivery#change-risk-assessment' },
      { label: 'Release Readiness', href: '/opsmx/operations-delivery#release-readiness' },
      { label: 'Environment Drift Detection', href: '/opsmx/operations-delivery#environment-drift-detection' },
    ],
  },
]

// ─── ASSESS — anchor deep-links into the assess-risk page ────────────────────
const assessItems = [
  { label: 'Context Engine', href: '/opsmx/assess-risk#context-engine' },
  { label: 'Vulnerability Correlation', href: '/opsmx/assess-risk#vulnerability-correlation' },
  { label: 'Exploitability', href: '/opsmx/assess-risk#exploitability' },
  { label: 'Reachability', href: '/opsmx/assess-risk#reachability' },
  { label: 'Root Cause Diagnosis', href: '/opsmx/assess-risk#root-cause-diagnosis' },
  { label: 'False Positive Reduction', href: '/opsmx/assess-risk#false-positive-reduction' },
  { label: 'Supply Chain Risk Assessment', href: '/opsmx/assess-risk#supply-chain-risk-assessment' },
  { label: 'Risk Scoring', href: '/opsmx/assess-risk#risk-scoring' },
  { label: 'Risk Prioritization', href: '/opsmx/assess-risk#risk-prioritization' },
]

// ─── Link helper: external (WordPress) → <a target=_blank>, internal → <Link> ─
function MegaLink({ href, className, style, onClose, children }) {
  const isExternal = href?.startsWith('http') ?? false
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style} onClick={onClose}>
        {children}
      </a>
    )
  }
  return (
    <Link to={href} className={className} style={style} onClick={onClose}>
      {children}
    </Link>
  )
}

function StageHeader({ color, label, sub, href, onClose }) {
  const inner = (
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
      <span className="text-[13px] font-bold" style={{ color }}>{label}</span>
      <span className="text-[11px] text-slate-500">{sub}</span>
    </div>
  )
  return href ? (
    <Link to={href} onClick={onClose} className="group inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity">
      {inner}
      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" style={{ color }} />
    </Link>
  ) : inner
}

function LinkList({ items, onClose }) {
  return (
    <div className="flex flex-col gap-1.5">
      {items.map((item) => (
        <MegaLink
          key={item.label}
          href={item.href}
          onClose={onClose}
          className="text-[11px] font-medium text-slate-400 hover:text-slate-100 transition-colors leading-tight"
        >
          {item.label}
        </MegaLink>
      ))}
    </div>
  )
}

export default function MegaMenu({ onClose, onMouseEnter, onMouseLeave }) {
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  const fixItems = (fixRiskNavigation?.items || [])
    .filter((item) => item.enabled)
    .map((item) => ({ label: item.title, href: item.href }))

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="fixed top-16 left-0 right-0 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="mx-4 lg:mx-8 xl:mx-auto xl:max-w-7xl rounded-2xl border border-white/8 overflow-hidden"
        style={{
          background: 'rgba(5, 7, 18, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        <div className="p-6">
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-baseline gap-3">
              <span className="text-[15px] font-bold text-white">Detect, assess, fix</span>
              <span className="text-[12px] text-slate-500">One platform. Three stages. From code to runtime.</span>
            </div>
            <Link
              to="/platform"
              onClick={onClose}
              className="group inline-flex items-center gap-1.5 text-[12px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Explore the platform
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* DETECT */}
          <div className="mb-3">
            <StageHeader color={DETECT} label="Detect" sub="Find risk everywhere" />
          </div>
          <div className="grid grid-cols-4 gap-6 mb-5">
            {detectColumns.map((col, idx) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.22 }}
              >
                <p className="text-[12px] font-bold text-white mb-2.5">{col.title}</p>
                <LinkList items={col.items} onClose={onClose} />
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/8 my-4" />

          {/* ASSESS + FIX */}
          <div className="grid grid-cols-2 gap-9 mb-4">
            <div>
              <div className="mb-2.5">
                <StageHeader color={ASSESS} label="Assess" sub="Understand what matters" href="/opsmx/assess-risk" onClose={onClose} />
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <LinkList items={assessItems.slice(0, 5)} onClose={onClose} />
                <LinkList items={assessItems.slice(5)} onClose={onClose} />
              </div>
            </div>
            <div>
              <div className="mb-2.5">
                <StageHeader color={FIX} label="Fix & Verify" sub="Remediate, then prove it held" href={fixRiskNavigation?.href || '/opsmx/fix-risk'} onClose={onClose} />
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <LinkList items={fixItems.slice(0, Math.ceil(fixItems.length / 2))} onClose={onClose} />
                <LinkList items={fixItems.slice(Math.ceil(fixItems.length / 2))} onClose={onClose} />
              </div>
            </div>
          </div>

          <div className="border-t border-white/8 my-4" />

          {/* ACTION FOOTER */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Link to="/opsmx/ai-assistant" onClick={onClose} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 hover:text-slate-100 transition-colors">
                <Sparkles className="w-3.5 h-3.5" style={{ color: '#c9a5f0' }} />
                AI Assistant
              </Link>
              <Link to="/remediation-benchmarks" onClick={onClose} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 hover:text-slate-100 transition-colors">
                <BarChart3 className="w-3.5 h-3.5" style={{ color: '#f5b301' }} />
                Remediation Benchmarks
              </Link>
            </div>
            <Link
              to="/request-a-demo"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-electric-500 text-white hover:from-cyan-400 hover:to-electric-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              Request a Demo
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
