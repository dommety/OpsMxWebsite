import { motion } from 'framer-motion'
import { Code2, Package, Cloud, GitMerge } from 'lucide-react'

const coverageAreas = [
  {
    icon: Code2, title: 'Code & AI', color: '#22d3ee',
    gradient: 'from-cyan-500/15 to-cyan-500/3',
    border: 'border-cyan-500/20',
    items: ['SAST', 'DAST', 'SCA', 'API Security', 'AI Security', 'Penetration Testing', 'Code Remediation'],
    stat: { val: '100%', label: 'code coverage' },
  },
  {
    icon: Package, title: 'Supply Chain', color: '#a78bfa',
    gradient: 'from-violet-500/15 to-violet-500/3',
    border: 'border-violet-500/20',
    items: ['SBOM', 'XBOM', 'AI-BOM', 'Dependency Intelligence', 'Open Source Risk', 'Container Analysis'],
    stat: { val: 'Live', label: 'SBOM evaluation' },
  },
  {
    icon: Cloud, title: 'Cloud & Runtime', color: '#34d399',
    gradient: 'from-emerald-500/15 to-emerald-500/3',
    border: 'border-emerald-500/20',
    items: ['CSPM', 'Kubernetes Security', 'IaC Security', 'Container Security', 'Runtime Visibility', 'Cloud Remediation'],
    stat: { val: '3', label: 'major clouds' },
  },
  {
    icon: GitMerge, title: 'Operations', color: '#fbbf24',
    gradient: 'from-yellow-500/15 to-yellow-500/3',
    border: 'border-yellow-500/20',
    items: ['Change Risk', 'Release Governance', 'Deployment Verification', 'GitOps Governance', 'DevOps Diagnostics', 'Operational Remediation'],
    stat: { val: 'Full', label: 'SDLC coverage' },
  },
]

function CoverageCard({ area, index }) {
  const Icon = area.icon
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`relative group rounded-2xl border ${area.border} bg-gradient-to-b ${area.gradient} p-6 cursor-default overflow-hidden`}>
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ boxShadow: `inset 0 0 40px ${area.color}10, 0 0 40px ${area.color}15` }} />
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, ${area.color}80, ${area.color}20, transparent)` }} />

      {/* Icon + title */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
            style={{ background: `${area.color}18`, border: `1px solid ${area.color}30` }}>
            <Icon className="w-5 h-5" style={{ color: area.color }} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-white">{area.title}</h3>
        </div>
        <div className="text-right glass rounded-xl px-3 py-2 border border-white/8">
          <div className="text-xl font-black" style={{ color: area.color }}>{area.stat.val}</div>
          <div className="text-[9px] text-slate-500">{area.stat.label}</div>
        </div>
      </div>

      {/* Animated capability list */}
      <div className="space-y-2">
        {area.items.map((item, i) => (
          <motion.div key={item} className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: index * 0.08 + i * 0.06 + 0.2 }}>
            <motion.div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: area.color }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }} />
            <span className="text-sm text-slate-300">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function PlatformCoverage() {
  return (
    <section className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 glass">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Coverage</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Built Across the <span className="text-gradient-full">Modern Software Stack</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Active defense coverage across every layer — from first commit to production runtime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {coverageAreas.map((area, i) => <CoverageCard key={area.title} area={area} index={i} />)}
        </div>
      </div>
    </section>
  )
}
