import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, Package, Cloud, GitMerge, ArrowRight, ExternalLink } from 'lucide-react'
import Logo from './Logo'

const matrixData = {
  detect: {
    title: 'Detect Risk',
    description: 'Continuously detect risk across four defense areas.',
    pillars: [
      {
        id: 'code-ai-detect',
        icon: Code2,
        title: 'Code & AI',
        color: '#22d3ee',
        items: ['SAST', 'SCA', 'Secrets Detection', 'AI Code Security', 'DAST & API Security', 'AI Penetration Testing'],
      },
      {
        id: 'supply-chain-detect',
        icon: Package,
        title: 'Supply Chain',
        color: '#a78bfa',
        items: ['SBOM / XBOM / AI-BOM', 'Dependency Scanning', 'OSS & License Risk', 'Container Scanning', 'Provenance & Integrity', 'Supply Chain Exposure'],
      },
      {
        id: 'cloud-runtime-detect',
        icon: Cloud,
        title: 'Cloud & Runtime',
        color: '#34d399',
        items: ['CSPM', 'IaC Scanning', 'Kubernetes Security', 'Container Security', 'Runtime Visibility', 'Cloud Exposure Detection'],
      },
      {
        id: 'operations-detect',
        icon: GitMerge,
        title: 'Operations',
        color: '#fbbf24',
        items: ['Change Risk Signals', 'Release Risk Analysis', 'GitOps Security', 'Deployment Events', 'Incident Signals', 'Configuration Drift'],
      },
    ],
  },
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
        items: ['Posture Management', 'Asset Context', 'Blast Radius', 'Runtime Context', 'Business Impact'],
      },
      {
        id: 'operations-assess',
        icon: GitMerge,
        title: 'Operations',
        color: '#fbbf24',
        items: ['Policy & Governance', 'Audit Evidence', 'Change Impact', 'Ownership Mapping', 'Compliance Reporting'],
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

// ─── Overview Card

function OverviewCard() {
  return (
    <div className="flex flex-col gap-5 h-full sticky top-0">
      <div>
        <div className="mb-3">
          <Logo size="sm" href="/" />
        </div>
        <p className="text-[12px] font-black text-white mb-1">OpsMx Active Defense</p>
        <p className="text-[11px] font-semibold text-cyan-400 leading-tight mb-3">Active Defense & Remediation Platform</p>
        <p className="text-[10px] text-slate-400 leading-relaxed">
          Detect, assess, and fix risk across code, AI, supply chain, cloud, runtime, and operations.
        </p>
      </div>

      {/* Three Sections */}
      <div className="space-y-4 py-2">
        {/* Detect */}
        <div>
          <p className="text-[11px] font-bold text-cyan-400 mb-0.5">Detect</p>
          <p className="text-[9px] text-slate-500">Find risk everywhere</p>
        </div>

        {/* Assess */}
        <div>
          <p className="text-[11px] font-bold text-cyan-400 mb-0.5">Assess</p>
          <p className="text-[9px] text-slate-500">Understand what matters</p>
        </div>

        {/* Fix */}
        <div>
          <p className="text-[11px] font-bold text-cyan-400 mb-0.5">Fix</p>
          <p className="text-[9px] text-slate-500">Remediate and verify</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/6" />

      {/* CTA */}
      <div className="space-y-2">
        <Link to="/platform"
          className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors group">
          Explore Platform
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <button className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 hover:text-white transition-colors">
          Request a Demo
          <ExternalLink className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>
  )
}

// ─── Detect Risk Row (4-Column Grid)

function DetectRiskRow({ layer, color }) {
  return (
    <div className="border-t border-white/5 px-5 py-5">
      {/* Row Header */}
      <div className="mb-4 pb-3 border-b border-white/5">
        <p className="text-[12px] font-black mb-1" style={{ color }}>{layer.title}</p>
        <p className="text-[10px] text-slate-400">{layer.description}</p>
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-4 gap-4">
        {layer.pillars.map((pillar, idx) => {
          const Icon = pillar.icon
          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="flex flex-col gap-2.5"
            >
              {/* Column Header */}
              <div className="flex items-center gap-2">
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}28` }}
                >
                  <Icon className="w-3 h-3" style={{ color }} strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-bold text-white">{pillar.title}</span>
              </div>

              {/* Items */}
              <div className="space-y-1">
                {pillar.items.map((item) => (
                  <div key={item} className="flex items-start gap-1.5">
                    <div className="w-0.5 h-0.5 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: color, opacity: 0.5 }} />
                    <span className="text-[9px] font-medium text-slate-300">{item}</span>
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

// ─── Assess/Fix Risk Row (Horizontal Band)

function HorizontalRiskRow({ layer, color }) {
  // Flatten all items from all pillars
  const allItems = layer.pillars.flatMap(p => p.items)

  return (
    <div className="border-t border-white/5 px-5 py-4">
      {/* Row Header */}
      <div className="mb-3 pb-3 border-b border-white/5">
        <p className="text-[12px] font-black mb-1" style={{ color }}>{layer.title}</p>
        <p className="text-[10px] text-slate-400">{layer.description}</p>
      </div>

      {/* Horizontal Chips */}
      <div className="flex flex-wrap gap-2">
        {allItems.map((item, idx) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.02, duration: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all hover:bg-white/8"
            style={{
              background: `${color}12`,
              borderColor: `${color}20`
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

// ─── Main MegaMenu

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
      <div className="mx-4 lg:mx-8 xl:mx-auto xl:max-w-7xl rounded-2xl border border-white/8 overflow-hidden"
        style={{
          background: 'rgba(5, 7, 18, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)',
        }}>

        {/* Left overview panel + Right matrix grid */}
        <div className="grid grid-cols-5 divide-x divide-white/5">
          {/* Left: Overview Card */}
          <div className="p-5">
            <OverviewCard />
          </div>

          {/* Right: 3×4 Matrix */}
          <div className="col-span-4">
            {/* Row 1: Detect Risk (4-Column) */}
            <DetectRiskRow layer={matrixData.detect} color="#60a5fa" />

            {/* Row 2: Assess Risk (Horizontal Band) */}
            <HorizontalRiskRow layer={matrixData.assess} color="#34d399" />

            {/* Row 3: Fix Risk (Horizontal Band) */}
            <HorizontalRiskRow layer={matrixData.fix} color="#fbbf24" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
