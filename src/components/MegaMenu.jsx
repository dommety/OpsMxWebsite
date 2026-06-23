import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, Package, Cloud, GitMerge, ArrowRight, ExternalLink } from 'lucide-react'
import Logo from './Logo'

// ─── DETECT RISK — grouped subcategory layout (NEW) ──────────────────────────

const detectColumns = [
  {
    id: 'code-ai',
    icon: Code2,
    color: '#22d3ee',
    title: 'Code & AI',
    description: 'Secure applications, APIs, AI-generated code, and AI systems.',
    groups: [
      {
        label: 'Code Security',
        items: [
          { label: 'SAST', href: 'https://www.opsmx.com/static-application-security-testing-with-opsmx-delivery-shield/' },
          { label: 'SCA', href: 'https://www.opsmx.com/software-composition-analysis-with-opsmx-delivery-shield/' },
          { label: 'Secrets', href: '#' },
          { label: 'AI Security', href: '#' },
          { label: 'Code Remediation', href: 'https://www.opsmx.com/ai-guided-risk-remediation-with-opsmx-delivery-shield/' },
        ],
      },
      {
        label: 'Testing',
        items: [
          { label: 'DAST', href: 'https://www.opsmx.com/dynamic-application-security-testing-with-opsmx-delivery-shield/' },
          { label: 'API Security', href: '#' },
          { label: 'Penetration Testing', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'supply-chain',
    icon: Package,
    color: '#a78bfa',
    title: 'Supply Chain',
    description: 'Understand and secure what your software is built from.',
    groups: [
      {
        label: 'BOM & Intelligence',
        items: [
          { label: 'SBOM', href: 'https://www.opsmx.com/software-bill-of-materials-with-opsmx-delivery-shield/' },
          { label: 'XBOM', href: '#' },
          { label: 'AI-BOM', href: '#' },
          { label: 'Dependency Intelligence', href: '#' },
          { label: 'OSS Risk', href: 'https://www.opsmx.com/open-source-risk-management-for-oss-with-opsmx-delivery-shield/' },
        ],
      },
      {
        label: 'Compliance',
        items: [
          { label: 'License Risk', href: '#' },
          { label: 'Provenance', href: '#' },
          { label: 'Audit Reporting', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'cloud-runtime',
    icon: Cloud,
    color: '#34d399',
    title: 'Cloud & Runtime',
    description: 'Secure cloud infrastructure and production systems.',
    groups: [
      {
        label: 'Cloud Security',
        items: [
          { label: 'CSPM', href: 'https://www.opsmx.com/cloud-security-posture-management-with-opsmx-delivery-shield/' },
          { label: 'IaC Security', href: 'https://www.opsmx.com/infrastructure-as-code-security-with-opsmx-delivery-shield/' },
          { label: 'Container Security', href: 'https://www.opsmx.com/kubernetes-security-with-opsmx-delivery-shield/' },
        ],
      },
      {
        label: 'Kubernetes',
        items: [
          { label: 'Cluster Security', href: '#' },
          { label: 'Workload Security', href: '#' },
          { label: 'Policy Enforcement', href: 'https://www.opsmx.com/deployment-firewall/' },
        ],
      },
      {
        label: 'Runtime',
        items: [
          { label: 'Threat Correlation', href: '#' },
          { label: 'Runtime Risk', href: 'https://opsmx.com/dynamic-runtime-ai-security/' },
          { label: 'Cloud Remediation', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'operations',
    icon: GitMerge,
    color: '#fbbf24',
    title: 'Operations',
    description: 'Reduce risk across deployments and operational workflows.',
    groups: [
      {
        label: 'Release & Deployment',
        items: [
          { label: 'Change Risk', href: '#' },
          { label: 'Release Governance', href: 'https://www.opsmx.com/deployment-firewall/' },
          { label: 'Deployment Verification', href: '#' },
        ],
      },
      {
        label: 'Diagnostics',
        items: [
          { label: 'Root Cause Analysis', href: '#' },
          { label: 'Incident Diagnostics', href: '#' },
          { label: 'Operational Remediation', href: '#' },
        ],
      },
    ],
  },
]

// ─── ASSESS & FIX DATA — unchanged from original ─────────────────────────────

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

function OverviewCard() {
  return (
    <div className="flex flex-col gap-5 h-full sticky top-0">
      <div>
        <div className="mb-3">
          <Logo size="sm" href="/" />
        </div>
        <p className="text-[12px] font-black text-white mb-1">OpsMx Active Defense</p>
        <p className="text-[11px] font-semibold text-cyan-400 leading-tight mb-3">
          Active Defense & Remediation Platform
        </p>
        <p className="text-[10px] text-slate-400 leading-relaxed">
          Detect, assess, and fix risk across code, AI, supply chain, cloud, runtime, and operations.
        </p>
      </div>

      <div className="space-y-4 py-2">
        <div>
          <p className="text-[11px] font-bold mb-0.5" style={{ color: '#60a5fa' }}>Detect</p>
          <p className="text-[9px] text-slate-500">Find risk everywhere</p>
        </div>
        <div>
          <p className="text-[11px] font-bold mb-0.5" style={{ color: '#34d399' }}>Assess</p>
          <p className="text-[9px] text-slate-500">Understand what matters</p>
        </div>
        <div>
          <p className="text-[11px] font-bold mb-0.5" style={{ color: '#fbbf24' }}>Fix</p>
          <p className="text-[9px] text-slate-500">Remediate and verify</p>
        </div>
      </div>

      <div className="border-t border-white/6" />

      <div className="space-y-2">
        <Link
          to="/platform"
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

// ─── DETECT RISK ROW — new grouped subcategory layout ────────────────────────

function DetectRiskRow() {
  const rowColor = '#60a5fa'

  return (
    <div className="border-t border-white/5 px-5 py-4">
      {/* Row header */}
      <div className="mb-4 pb-2.5 border-b border-white/5">
        <p className="text-[12px] font-black mb-0.5" style={{ color: rowColor }}>
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
                      className="text-[8.5px] font-bold uppercase tracking-wider mb-1.5"
                      style={{ color: col.color, opacity: 0.65 }}
                    >
                      {group.label}
                    </p>
                    {/* Group items */}
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-1.5 group/item"
                        >
                          <div
                            className="w-0.5 h-0.5 rounded-full flex-shrink-0"
                            style={{ background: col.color, opacity: 0.4 }}
                          />
                          <span className="text-[9px] font-medium text-slate-400 group-hover/item:text-slate-200 transition-colors leading-tight">
                            {item.label}
                          </span>
                        </a>
                      ))}
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

function HorizontalRiskRow({ layer, color }) {
  const allItems = layer.pillars.flatMap((p) => p.items)

  return (
    <div className="border-t border-white/5 px-5 py-4">
      <div className="mb-3 pb-3 border-b border-white/5">
        <p className="text-[12px] font-black mb-1" style={{ color }}>
          {layer.title}
        </p>
        <p className="text-[10px] text-slate-400">{layer.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {allItems.map((item, idx) => (
          <motion.div
            key={`${item}-${idx}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.02, duration: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all hover:bg-white/8 cursor-pointer"
            style={{
              background: `${color}12`,
              borderColor: `${color}20`,
            }}
          >
            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
            <span className="text-[9px] font-medium text-slate-300">{item}</span>
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
            <OverviewCard />
          </div>

          {/* Right: Detect + Assess + Fix */}
          <div className="col-span-4">
            {/* Detect Risk — new grouped subcategory layout */}
            <DetectRiskRow />

            {/* Assess Risk — unchanged horizontal band */}
            <HorizontalRiskRow layer={matrixData.assess} color="#34d399" />

            {/* Fix Risk — unchanged horizontal band */}
            <HorizontalRiskRow layer={matrixData.fix} color="#fbbf24" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
