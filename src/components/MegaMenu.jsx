import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, Package, Cloud, GitMerge, ArrowRight, ExternalLink } from 'lucide-react'
import Logo from './Logo'
import { fixRiskNavigation } from '../data/fixRisk'

// ─── DETECT RISK — grouped subcategory layout (NEW) ──────────────────────────

const codeAndAgentGroups = [
  {
    label: 'Code & Applications',
    description: '',
    items: [
      { label: 'SAST', href: '/static-application-security-testing' },
      { label: 'SCA', href: 'https://www.opsmx.com/software-composition-analysis-with-opsmx-delivery-shield/' },
      { label: 'Secrets', href: '/secrets' },
      { label: 'DAST', href: 'https://www.opsmx.com/dynamic-application-security-testing-with-opsmx-delivery-shield/' },
      { label: 'API Security', href: '/api-security' },
      { label: 'AI Penetration Testing', href: '/ai-penetration-testing' },
    ],
  },
  {
    label: 'AI & Agent Security',
    description: '',
    items: [
      { label: 'AI Agent Security', href: '/ai-security' },
      { label: 'AI Model Security', href: '/ai-security' },
      { label: 'Prompt Security', href: '/ai-security' },
      { label: 'MCP Server Security', href: '/ai-security' },
    ],
  },
]

const detectColumns = [
  {
    id: 'code-ai',
    icon: Code2,
    color: '#22d3ee',
    title: 'Code & AI Agents',
    description: 'Secure Apps, APIs, AI-Code and AI Agents',
    groups: codeAndAgentGroups,
  },
  {
    id: 'supply-chain',
    icon: Package,
    color: '#a78bfa',
    title: 'Supply Chain',
    description: 'Secure supply chain from code to prod',
    groups: [
      {
        label: 'Supply Chain Security',
        description: '',
        items: [
          { label: 'SBOM', href: 'https://www.opsmx.com/software-bill-of-materials-with-opsmx-delivery-shield/' },
          { label: 'AI-BOM', href: '/ai-bom' },
          { label: 'CBOM, DBOM, QBOM & HBOM', href: '/solution-briefs/advanced-bom-reporting' },
          { label: 'Dependency Intelligence', href: '/dependency-intelligence' },
          { label: 'Provenance', href: '/provenance' },
          { label: 'Open Source BOM / OSS Risk', href: 'https://www.opsmx.com/open-source-risk-management-for-oss-with-opsmx-delivery-shield/' },
        ],
      },
      {
        label: 'Supply Chain Governance',
        description: '',
        items: [
          { label: 'Regulatory BOM Reporting', href: '/solution-briefs/regulatory-bom-reporting-suite' },
          { label: 'License Risk', href: '/license-risk' },
          { label: 'Audit Reporting', href: '/audit-reporting' },
          { label: 'Policy Enforcement', href: 'https://www.opsmx.com/deployment-firewall/' },
        ],
      },
    ],
  },
  {
    id: 'cloud-runtime',
    icon: Cloud,
    color: '#34d399',
    title: 'Cloud & Runtime',
    description: 'Secure cloud, infra and production.',
    groups: [
      {
        label: 'Cloud & Kubernetes Security',
        items: [
          { label: 'Cloud Security Posture Management', href: 'https://www.opsmx.com/cloud-security-posture-management-with-opsmx-delivery-shield/' },
          { label: 'IaC Security', href: 'https://www.opsmx.com/infrastructure-as-code-security-with-opsmx-delivery-shield/' },
          { label: 'Container Security', href: 'https://www.opsmx.com/kubernetes-security-with-opsmx-delivery-shield/' },
          { label: 'Cluster Security', href: '/cluster-security' },
          { label: 'Workload Security', href: '/workload-security' },
          { label: 'Policy Enforcement', href: 'https://www.opsmx.com/deployment-firewall/' },
        ],
      },
      {
        label: 'Runtime Security',
        items: [
          { label: 'Threat Correlation', href: '/threat-correlation' },
          { label: 'Change Risk Assessment', href: '/opsmx/runtime-security' },
          { label: 'Continuous Risk Monitoring & Verification', href: '/opsmx/runtime-security' },
          { label: 'Runtime Risk Remediation', href: '/opsmx/runtime-security' },
        ],
      },
    ],
  },
  {
    id: 'operations',
    icon: GitMerge,
    color: '#fbbf24',
    title: 'Operations & Delivery',
    description: 'Secure workflows, releases, and deployments.',
    groups: [
      {
        label: 'Delivery Remediation',
        items: [
          { label: 'Pipeline Failure Diagnosis', href: '/opsmx/operations-delivery#pipeline-failure-diagnosis' },
          { label: 'Deployment Failure Diagnosis', href: '/opsmx/operations-delivery#deployment-failure-diagnosis' },
          { label: 'Incident Root Cause Analysis', href: '/opsmx/operations-delivery#incident-root-cause-analysis' },
          { label: 'Rollback & Roll-forward Guidance', href: '/opsmx/operations-delivery#rollback-rollforward-guidance' },
          { label: 'Policy Gate Diagnosis', href: '/opsmx/operations-delivery#policy-gate-diagnosis' },
          { label: 'Continuous Delivery Verification', href: '/opsmx/operations-delivery#continuous-delivery-verification' },
        ],
      },
      {
        label: 'Operations Intelligence',
        items: [
          { label: 'Change Risk Assessment', href: '/opsmx/operations-delivery#change-risk-assessment' },
          { label: 'Release Readiness', href: '/opsmx/operations-delivery#release-readiness' },
          { label: 'Deployment Risk Analysis', href: '/opsmx/operations-delivery#deployment-risk-analysis' },
          { label: 'Environment Drift Detection', href: '/opsmx/operations-delivery#environment-drift-detection' },
        ],
      },
    ],
  },
]

// ─── ASSESS RISK TOPICS for mega menu ─────────────────────────────────────────

const assessTopicsForMenu = [
  { label: 'Context Engine', href: '/opsmx/assess-risk#context-engine' },
  { label: 'Exploitability', href: '/opsmx/assess-risk#exploitability' },
  { label: 'Reachability', href: '/opsmx/assess-risk#reachability' },
  { label: 'False Positive Reduction', href: '/opsmx/assess-risk#false-positive-reduction' },
  { label: 'Risk Scoring', href: '/opsmx/assess-risk#risk-scoring' },
  { label: 'Vulnerability Correlation', href: '/opsmx/assess-risk#vulnerability-correlation' },
  { label: 'Risk Prioritization', href: '/opsmx/assess-risk#risk-prioritization' },
  { label: 'Root Cause Diagnosis', href: '/opsmx/assess-risk#root-cause-diagnosis' },
  { label: 'Supply Chain Risk Assessment', href: '/opsmx/assess-risk#supply-chain-risk-assessment' },
]

// ─── ASSESS & FIX DATA ─────────────────────────────────────────────────────

const matrixData = {
  assess: {
    title: 'Assess Risk',
    description: 'Correlate findings, context, posture, ownership, and business impact to identify what matters.',
    pillars: [
      {
        id: 'code-ai-assess',
        icon: Code2,
        title: 'Code & AI',
        color: '#22d3ee',
        items: ['Context Engine', 'Exploitability', 'Reachability', 'False Positive Reduction', 'Risk Scoring'],
      },
      {
        id: 'supply-chain-assess',
        icon: Package,
        title: 'Supply Chain',
        color: '#a78bfa',
        items: ['X-BOM Intelligence', 'Dependency Impact', 'Package Reachability', 'Provenance Risk', 'Supply Chain Posture'],
      },
      {
        id: 'cloud-runtime-assess',
        icon: Cloud,
        title: 'Cloud & Runtime',
        color: '#34d399',
        items: ['Posture Management', 'Blast Radius', 'Business Impact', 'Policy & Governance', 'Compliance Reporting'],
      },
      {
        id: 'operations-assess',
        icon: GitMerge,
        title: 'Operations',
        color: '#fbbf24',
        items: ['Audit Evidence', 'Change Impact', 'Ownership Mapping', 'Compliance Reporting'],
      },
      {
        id: 'vulnerability-assess',
        icon: Code2,
        title: 'Vulnerability Correlation',
        color: '#ef4444',
        items: ['Code Vulnerabilities', 'Dependency Vulnerabilities', 'API Vulnerabilities', 'Runtime Vulnerabilities'],
      },
      {
        id: 'risk-prioritization-assess',
        icon: Code2,
        title: 'Risk Prioritization',
        color: '#f59e0b',
        items: ['Exploitability', 'Reachability', 'Business Criticality', 'Remediation Status'],
      },
      {
        id: 'supply-chain-risk-assess',
        icon: Package,
        title: 'Supply Chain Risk Assessment',
        color: '#a78bfa',
        items: ['Dependency Analysis', 'Open Source Health', 'Provenance', 'BOM Analysis'],
      },
    ],
  },
  fix: {
    title: 'Fix Risk',
    description: 'Use remediation agents and workflows to remediate issues and verify fixes.',
    pillars: [
      {
        id: 'code-ai-fix',
        icon: Code2,
        title: 'Code & AI',
        color: '#22d3ee',
        items: ['Code Remediation Agent', 'AI Code Fix Suggestions', 'PR & Patch Automation', 'Dependency Upgrade Fixes', 'Fix Verification'],
      },
      {
        id: 'supply-chain-fix',
        icon: Package,
        title: 'Supply Chain',
        color: '#a78bfa',
        items: ['Binary Artifact Agent', 'Dependency Update Agent', 'Container Remediation', 'SBOM / XBOM Updates', 'Integrity Verification'],
      },
      {
        id: 'cloud-runtime-fix',
        icon: Cloud,
        title: 'Cloud & Runtime',
        color: '#34d399',
        items: ['Cloud Remediation Agent', 'Kubernetes Agent', 'IaC Remediation', 'Misconfiguration Fixes', 'Continuous Verification'],
      },
      {
        id: 'operations-fix',
        icon: GitMerge,
        title: 'Operations',
        color: '#fbbf24',
        items: ['DevOps & SRE Agent', 'Pipeline Security Fixes', 'Policy-as-Code Updates', 'Automated Rollback', 'Deployment Verification'],
      },
    ],
  },
}

// ─── OVERVIEW CARD — unchanged ───────────────────────────────────────────────

function OverviewCard({ onClose }) {
  return (
    <div className="flex flex-col gap-5 h-full sticky top-0">
      <div>
        <div className="mb-3">
          <Logo size="sm" href="/" />
        </div>
        <p className="text-[11px] font-semibold text-cyan-400 leading-tight mb-3">
          Active Defence & Remediaiton
        </p>
        <p className="text-[10px] text-slate-400 leading-relaxed">
          Detect, assess, and fix risk across code, AI, supply chain, cloud, runtime, and operations.
        </p>
      </div>

      <div className="space-y-4 py-2">
        <div>
          <p className="text-[12px] font-bold mb-0.5" style={{ color: '#60a5fa' }}>Detect</p>
          <p className="text-[11px] font-medium text-slate-400">Find risk everywhere</p>
        </div>
        <div>
          <Link
            to="/opsmx/assess-risk"
            onClick={onClose}
            className="group hover:opacity-80 transition-opacity"
          >
            <p className="text-[12px] font-bold mb-0.5" style={{ color: '#34d399' }}>Assess</p>
            <p className="text-[11px] font-medium text-slate-400">Understand what matters</p>
          </Link>
        </div>
        <div>
          <Link
            to="/opsmx/fix-risk"
            onClick={onClose}
            className="group hover:opacity-80 transition-opacity"
          >
            <p className="text-[12px] font-bold mb-0.5" style={{ color: '#fbbf24' }}>Fix</p>
            <p className="text-[11px] font-medium text-slate-400">Remediate and verify</p>
          </Link>
        </div>
        <div>
          <Link
            to="/opsmx/ai-assistant"
            onClick={onClose}
            className="group hover:opacity-80 transition-opacity"
          >
            <p className="text-[12px] font-bold mb-0.5" style={{ color: '#06b6d4' }}>⭐ AI Assistant</p>
            <p className="text-[11px] font-medium text-slate-400">Ask questions. Diagnose. Remediate. Report.</p>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5" />

      <div className="space-y-2">
        <Link
          to="/platform"
          onClick={onClose}
          className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          Explore Platform
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <a
          href="https://www.opsmx.com/talk-to-an-application-security-expert/"
          className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 hover:text-white transition-colors"
        >
          Request a Demo
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  )
}

// ─── FIX RISK ROW — navigation-driven section ────────────────────────────────

function FixRiskRow({ onClose }) {
  const color = '#fbbf24'

  return (
    <div className="border-t border-white/12 px-5 py-4">
      <div className="mb-3 flex items-center gap-4">
        <Link
          to={fixRiskNavigation.href}
          onClick={onClose}
          className="flex items-center gap-1.5 group flex-shrink-0"
        >
          <p className="text-[12px] font-black group-hover:opacity-80 transition-opacity" style={{ color }}>
            {fixRiskNavigation.title}
          </p>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" style={{ color }} />
        </Link>
        <p className="text-[10px] text-slate-400">{fixRiskNavigation.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {fixRiskNavigation.items.filter(item => item.enabled).map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.02, duration: 0.2 }}
          >
            <Link
              to={item.href}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all hover:bg-white/8 cursor-pointer"
              style={{
                background: `${color}12`,
                borderColor: `${color}20`,
              }}
            >
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
              <span className="text-[9px] font-medium text-slate-300">{item.title}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── DETECT RISK ROW — new grouped subcategory layout ────────────────────────

function DetectRiskRow() {
  const rowColor = '#60a5fa'

  return (
    <div className="border-t border-white/12 px-5 py-4">
      {/* Row header */}
      <div className="mb-4 flex items-center gap-4">
        <p className="text-[12px] font-black flex-shrink-0" style={{ color: rowColor }}>
          Detect Risk
        </p>
        <p className="text-[10px] text-slate-400">
          Continuously detect risk across four defense areas.
        </p>
      </div>

      {/* 4-column grid */}
      <div className="grid grid-cols-4 gap-5">
        {detectColumns.map((col, colIdx) => {
          const Icon = col.icon

          return (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: colIdx * 0.05, duration: 0.25 }}
              className="flex flex-col gap-2.5"
            >
              {/* Column header */}
              <div className="flex items-center gap-1.5">
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: `${col.color}18`, border: `1px solid ${col.color}28` }}
                >
                  <Icon className="w-3 h-3" style={{ color: col.color }} strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-bold text-white">{col.title}</span>
              </div>

              {/* Column description */}
              <p className="text-[9px] text-slate-500 leading-snug">{col.description}</p>

              {/* Groups */}
              <div className="space-y-2.5">
                {col.groups.map((group) => (
                  <div key={group.label}>
                    {/* Group label */}
                    <p
                      className="text-[11px] font-bold mb-0.5"
                      style={{ color: col.color }}
                    >
                      {group.label}
                    </p>
                    {/* Group description */}
                    {group.description && (
                      <p className="text-[8.5px] text-slate-400 leading-snug mb-1.5">
                        {group.description}
                      </p>
                    )}
                    {/* Group items */}
                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const isExternal = item.href.startsWith('http')
                        const LinkComponent = isExternal ? 'a' : Link
                        const linkProps = isExternal
                          ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                          : { to: item.href }

                        return (
                          <LinkComponent
                            key={item.label}
                            {...linkProps}
                            className="flex items-center gap-1.5 group/item"
                          >
                            <div
                              className="w-0.5 h-0.5 rounded-full flex-shrink-0"
                              style={{ background: col.color, opacity: 0.4 }}
                            />
                            <span className="text-[9px] font-medium text-slate-400 group-hover/item:text-slate-200 transition-colors leading-tight">
                              {item.label}
                            </span>
                          </LinkComponent>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// ─── ASSESS / FIX ROW — unchanged horizontal band ────────────────────────────

function HorizontalRiskRow({ layer, color, isAssess, isFix, onClose, assessTopics }) {
  // For Assess Risk, show the special topics with anchors
  let displayItems = []
  if (isAssess && assessTopics) {
    displayItems = assessTopics.map(topic => ({
      label: topic.label,
      href: topic.href,
      isSpecial: true
    }))
  } else {
    // For other rows, flatten items from pillars
    const allItems = layer.pillars.flatMap((p) => p.items)
    displayItems = allItems.map(item => ({
      label: item,
      href: isAssess ? '/opsmx/assess-risk' : isFix ? '/opsmx/fix-risk' : null,
      isSpecial: false
    }))
  }

  const linkHref = isAssess ? '/opsmx/assess-risk' : isFix ? '/opsmx/fix-risk' : null

  return (
    <div className="border-t border-white/12 px-5 py-4">
      <div className="mb-3 flex items-center gap-4">
        {(isAssess || isFix) ? (
          <Link
            to={linkHref}
            onClick={onClose}
            className="flex items-center gap-1.5 group flex-shrink-0"
          >
            <p className="text-[12px] font-black group-hover:opacity-80 transition-opacity" style={{ color }}>
              {layer.title}
            </p>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" style={{ color }} />
          </Link>
        ) : (
          <p className="text-[12px] font-black flex-shrink-0" style={{ color }}>
            {layer.title}
          </p>
        )}
        <p className="text-[10px] text-slate-400">{layer.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {displayItems.map((item, idx) => (
          <motion.div
            key={`${item.label}-${idx}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.02, duration: 0.2 }}
          >
            <Link
              to={item.href || '#'}
              onClick={onClose}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all hover:bg-white/8 cursor-pointer`}
              style={{
                background: `${color}12`,
                borderColor: `${color}20`,
              }}
            >
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
              <span className="text-[9px] font-medium text-slate-300">{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── MAIN MEGAMENU ────────────────────────────────────────────────────────────

export default function MegaMenu({ onClose, onMouseEnter, onMouseLeave }) {
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

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
        <div className="grid grid-cols-5 divide-x divide-white/5">
          {/* Left: Overview */}
          <div className="p-5">
            <OverviewCard onClose={onClose} />
          </div>

          {/* Right: Detect + Assess + Fix */}
          <div className="col-span-4" style={{ background: 'rgba(20, 20, 28, 0.6)' }}>
            {/* Detect Risk — new grouped subcategory layout */}
            <DetectRiskRow />

            {/* Assess Risk — now links to /opsmx/assess-risk with anchor support */}
            <HorizontalRiskRow layer={matrixData.assess} color="#34d399" isAssess={true} onClose={onClose} assessTopics={assessTopicsForMenu} />

            {/* Fix Risk — navigation-driven section with deep linking */}
            <FixRiskRow onClose={onClose} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
