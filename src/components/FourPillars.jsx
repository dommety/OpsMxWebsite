import { motion } from 'framer-motion'
import { Code2, Package, Cloud, GitMerge, ArrowRight, CheckCircle2, AlertTriangle, Shield } from 'lucide-react'

const pillars = [
  {
    id: 'code-ai',
    icon: Code2,
    title: 'Code & AI',
    color: '#22d3ee',
    gradient: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-500/20',
    glow: 'shadow-cyan-500/20',
    description: 'Secure applications, APIs, AI-generated code, AI agents, and software development workflows.',
    capabilities: ['SAST', 'DAST', 'SCA', 'API Security', 'AI Security', 'Penetration Testing', 'Code Remediation'],
    visual: <CodeAIVisual />,
  },
  {
    id: 'supply-chain',
    icon: Package,
    title: 'Supply Chain',
    color: '#a78bfa',
    gradient: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20',
    glow: 'shadow-violet-500/20',
    description: 'Understand and secure everything your software and AI systems are built from.',
    capabilities: ['SBOM', 'XBOM', 'AI-BOM', 'Dependency Intelligence', 'Open Source Risk', 'Container Analysis'],
    visual: <SupplyChainVisual />,
  },
  {
    id: 'cloud-runtime',
    icon: Cloud,
    title: 'Cloud & Runtime',
    color: '#60a5fa',
    gradient: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/20',
    glow: 'shadow-blue-500/20',
    description: 'Secure cloud infrastructure, Kubernetes environments, containers, and production systems.',
    capabilities: ['CSPM', 'Kubernetes Security', 'IaC Security', 'Container Security', 'Runtime Visibility', 'Cloud Remediation'],
    visual: <CloudVisual />,
  },
  {
    id: 'operations',
    icon: GitMerge,
    title: 'Operations',
    color: '#34d399',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20',
    glow: 'shadow-emerald-500/20',
    description: 'Reduce risk from software changes, releases, deployments, and operational complexity.',
    capabilities: ['Change Risk Analysis', 'Release Governance', 'Deployment Verification', 'GitOps Governance', 'DevOps Diagnostics'],
    visual: <OpsVisual />,
  },
]

function CodeAIVisual() {
  return (
    <div className="relative h-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        {/* Code lines */}
        <div className="space-y-1.5 font-mono text-[10px] w-full px-3">
          {[
            { text: 'function authenticate(token) {', color: 'text-cyan-400' },
            { text: '  // AI-detected: SQL injection risk', color: 'text-red-400', alert: true },
            { text: '  const query = sanitize(token)', color: 'text-slate-400' },
            { text: '  return db.exec(query)', color: 'text-slate-500' },
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-1.5 ${line.color}`}
            >
              {line.alert && (
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <AlertTriangle className="w-3 h-3 text-red-400 flex-shrink-0" />
                </motion.div>
              )}
              <span>{line.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Fix badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-0 right-2 flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/30 px-2 py-1 rounded-lg text-[10px] text-emerald-400 font-medium"
      >
        <CheckCircle2 className="w-3 h-3" />
        Auto-remediated
      </motion.div>
    </div>
  )
}

function SupplyChainVisual() {
  const nodes = [
    { label: 'App', x: 50, y: 15, color: '#a78bfa' },
    { label: 'Lib A', x: 20, y: 50, color: '#a78bfa' },
    { label: 'Lib B', x: 80, y: 50, color: '#f87171' },
    { label: 'Core', x: 50, y: 80, color: '#a78bfa' },
  ]
  const edges = [[0,1],[0,2],[1,3],[2,3]]

  return (
    <div className="relative h-32 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`}
            x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
            stroke={nodes[b].color === '#f87171' ? '#f87171' : '#a78bfa'}
            strokeWidth="0.8"
            strokeOpacity="0.4"
            strokeDasharray="3 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          />
        ))}
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: i * 0.1 + 0.3 }}
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
            style={{ background: node.color, boxShadow: `0 0 8px ${node.color}80` }}
          >
            {node.label === 'Lib B' && <AlertTriangle className="w-2.5 h-2.5" />}
          </div>
          <span className="text-[8px] font-medium" style={{ color: node.color }}>{node.label}</span>
        </motion.div>
      ))}
      <div className="absolute bottom-1 right-2 text-[9px] text-violet-400 font-mono">3 CVEs found</div>
    </div>
  )
}

function CloudVisual() {
  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Central cluster */}
          <motion.div
            className="w-14 h-14 rounded-xl border border-blue-400/30 bg-blue-500/10 flex items-center justify-center"
            animate={{ boxShadow: ['0 0 8px rgba(96,165,250,0.2)', '0 0 20px rgba(96,165,250,0.4)', '0 0 8px rgba(96,165,250,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Cloud className="w-6 h-6 text-blue-400" />
          </motion.div>
          {/* Pods */}
          {[0,1,2,3].map(i => {
            const angle = (i * 90 - 45) * Math.PI / 180
            const r = 42
            const x = Math.cos(angle) * r
            const y = Math.sin(angle) * r
            return (
              <motion.div
                key={i}
                className="absolute w-6 h-6 rounded-lg border border-blue-400/20 bg-blue-500/10 flex items-center justify-center"
                style={{ left: x + 28, top: y + 28, transform: 'translate(-50%,-50%)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.3 }}
                animate={{ opacity: i === 1 ? [1, 0.3, 1] : 1 }}
              >
                <div className={`w-2 h-2 rounded-sm ${i === 1 ? 'bg-red-400' : 'bg-blue-400'}`} style={{ boxShadow: i === 1 ? '0 0 4px #f87171' : '0 0 4px #60a5fa' }} />
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="absolute bottom-1 right-2 text-[9px] text-blue-400 font-mono">1 pod at risk → remediating</div>
    </div>
  )
}

function OpsVisual() {
  const steps = [
    { label: 'Change', color: '#34d399' },
    { label: 'Risk?', color: '#fbbf24' },
    { label: 'Gate', color: '#34d399' },
    { label: 'Deploy', color: '#34d399' },
  ]
  return (
    <div className="relative h-32 flex items-center">
      <div className="w-full flex items-center justify-around px-2">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-1">
            <motion.div
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-bold"
                style={{ background: `${s.color}15`, border: `1px solid ${s.color}40`, color: s.color }}
              >
                {s.label === 'Gate' ? <Shield className="w-4 h-4" /> : s.label.charAt(0)}
              </div>
              <span className="text-[9px] font-medium" style={{ color: s.color }}>{s.label}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              >
                <ArrowRight className="w-3 h-3 text-slate-600 mb-3" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-1 right-2 text-[9px] text-emerald-400 font-mono">✓ Verified & deployed</div>
    </div>
  )
}

function PillarCard({ pillar, index }) {
  const Icon = pillar.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative group rounded-2xl border ${pillar.border} bg-gradient-to-b ${pillar.gradient} p-6 cursor-default overflow-hidden`}
      style={{ boxShadow: `0 0 0 0 ${pillar.color}` }}
    >
      {/* Animated glow border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `inset 0 0 30px ${pillar.color}15, 0 0 30px ${pillar.color}20` }}
      />

      {/* Corner glow */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ background: `${pillar.color}20` }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${pillar.color}20`, border: `1px solid ${pillar.color}30` }}
      >
        <Icon className="w-5 h-5" style={{ color: pillar.color }} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{pillar.description}</p>

      {/* Visual */}
      <div className="border border-white/5 rounded-xl bg-black/20 mb-4 overflow-hidden">
        {pillar.visual}
      </div>

      {/* Capabilities */}
      <div className="flex flex-wrap gap-1.5">
        {pillar.capabilities.map((cap) => (
          <span
            key={cap}
            className="text-[10px] font-medium px-2 py-0.5 rounded-md"
            style={{ color: pillar.color, background: `${pillar.color}10`, border: `1px solid ${pillar.color}20` }}
          >
            {cap}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function FourPillars() {
  return (
    <section className="relative py-28 bg-navy-950 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 glass">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Platform</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            One Platform.{' '}
            <span className="text-gradient-full">Four Active Defense Pillars.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            OpsMx Active Defense protects and remediates risk across the four critical layers of modern software systems.
          </p>
        </motion.div>

        {/* Pillar Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
