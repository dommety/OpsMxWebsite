import { motion } from 'framer-motion'
import { Radio, Cpu, Microscope, Wrench, ShieldCheck, BookOpen, ArrowDown } from 'lucide-react'

const layers = [
  {
    num: '01', icon: Radio, title: 'Continuous Detection',
    color: '#22d3ee',
    desc: 'Ingest findings, alerts, exposures, events, and telemetry across software, cloud, runtime, and operations.',
    inputs: ['SAST', 'DAST', 'SCA', 'SBOM', 'XBOM', 'CSPM', 'Kubernetes', 'CI/CD', 'Runtime', 'Threat Intel'],
    visual: <DetectionVisual />,
  },
  {
    num: '02', icon: Cpu, title: 'Context Engine',
    color: '#a78bfa',
    desc: 'Correlate applications, services, APIs, owners, dependencies, cloud resources, Kubernetes objects, pipelines, runtime signals, and business impact.',
    inputs: ['App Graph', 'Service Map', 'Owner DB', 'Blast Radius', 'Business Impact'],
    visual: <ContextVisual />,
  },
  {
    num: '03', icon: Microscope, title: 'Diagnostics Engine',
    color: '#60a5fa',
    desc: 'Determine root cause, blast radius, exploitability, ownership, severity, and business relevance before action is taken.',
    inputs: ['Root Cause', 'Exploitability', 'Severity Score', 'Ownership', 'Business Risk'],
    visual: <DiagnosticsVisual />,
  },
  {
    num: '04', icon: Wrench, title: 'Remediation Factory',
    color: '#34d399',
    desc: 'Generate safe remediation plans, code fixes, pull requests, cloud changes, Kubernetes actions, policy updates, and operational runbooks.',
    inputs: ['Code Agent', 'Cloud Agent', 'K8s Agent', 'Policy Agent', 'DevOps Agent'],
    visual: <RemediationVisual />,
  },
  {
    num: '05', icon: ShieldCheck, title: 'Verification Engine',
    color: '#fbbf24',
    desc: 'Validate that every remediation worked through retesting, deployment checks, policy validation, and runtime confirmation.',
    inputs: ['Retest', 'Deploy Check', 'Policy Validate', 'Runtime Confirm'],
    visual: <VerificationVisual />,
  },
  {
    num: '06', icon: BookOpen, title: 'Governance Framework',
    color: '#f472b6',
    desc: 'Apply approvals, policies, RBAC, audit trails, exception workflows, and human-in-the-loop controls.',
    inputs: ['RBAC', 'Approvals', 'Audit Trail', 'Exceptions', 'Human-in-Loop'],
    visual: <GovernanceVisual />,
  },
]

function DetectionVisual() {
  const feeds = ['SAST', 'SCA', 'CSPM', 'K8s', 'Runtime']
  return (
    <div className="relative h-28 flex items-center justify-center gap-2 flex-wrap p-2">
      {feeds.map((f, i) => (
        <motion.div key={f} className="flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold"
          style={{ background: '#22d3ee12', border: '1px solid #22d3ee30', color: '#22d3ee' }}
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: i * 0.35, repeat: Infinity }}>
          <motion.div className="w-1.5 h-1.5 rounded-full bg-cyan-400" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, delay: i * 0.35, repeat: Infinity }} />
          {f}
        </motion.div>
      ))}
      <div className="absolute bottom-1 right-2 text-[9px] font-mono text-slate-600">4,892 findings today</div>
    </div>
  )
}

function ContextVisual() {
  const nodes = [
    { l: 'App', x: 50, y: 15 }, { l: 'API', x: 20, y: 45 }, { l: 'K8s', x: 80, y: 45 },
    { l: 'Owner', x: 30, y: 80 }, { l: 'Cloud', x: 70, y: 80 },
  ]
  return (
    <div className="relative h-28">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[[0,1],[0,2],[1,3],[2,4],[1,4],[0,3]].map(([a,b],i)=>(
          <motion.line key={i} x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`} x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
            stroke="#a78bfa" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="3 2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: i * 0.1 }} />
        ))}
      </svg>
      {nodes.map((n, i) => (
        <motion.div key={i} className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-bold"
          style={{ left: `${n.x}%`, top: `${n.y}%`, background: '#a78bfa20', border: '1px solid #a78bfa50', color: '#a78bfa' }}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 + 0.5, type: 'spring' }}>
          {n.l}
        </motion.div>
      ))}
    </div>
  )
}

function DiagnosticsVisual() {
  const items = [
    { label: 'Root Cause', val: 'libxz dependency', status: 'found' },
    { label: 'Exploitability', val: 'CVSS 9.8', status: 'critical' },
    { label: 'Blast Radius', val: '3 services', status: 'warn' },
  ]
  return (
    <div className="h-28 p-2 space-y-1.5 overflow-hidden">
      {items.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 + 0.3 }}
          className="flex items-center justify-between px-2.5 py-1.5 rounded-lg"
          style={{ background: '#60a5fa08', border: '1px solid #60a5fa20' }}>
          <span className="text-[10px] text-slate-500">{item.label}</span>
          <span className="text-[10px] font-semibold text-blue-400">{item.val}</span>
        </motion.div>
      ))}
    </div>
  )
}

function RemediationVisual() {
  const agents = ['Code', 'Cloud', 'K8s', 'Policy']
  return (
    <div className="h-28 flex items-center justify-around p-3">
      {agents.map((a, i) => (
        <motion.div key={a} className="flex flex-col items-center gap-1.5"
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.3 }}>
          <motion.div className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold"
            style={{ background: '#34d39920', border: '1px solid #34d39940', color: '#34d399' }}
            animate={{ boxShadow: ['0 0 4px #34d39930', '0 0 12px #34d39960', '0 0 4px #34d39930'] }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}>
            {a[0]}
          </motion.div>
          <span className="text-[9px] text-emerald-400 font-medium">{a}</span>
        </motion.div>
      ))}
    </div>
  )
}

function VerificationVisual() {
  const checks = ['Retested', 'Deployed', 'Validated', 'Confirmed']
  return (
    <div className="h-28 p-3 space-y-1.5">
      {checks.map((c, i) => (
        <motion.div key={c} className="flex items-center gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 + 0.4 }}>
          <motion.div className="w-4 h-4 rounded-full bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, delay: i * 0.2 + 0.8 }}>
            <span className="text-[8px] text-yellow-400">✓</span>
          </motion.div>
          <span className="text-[10px] text-yellow-300/70">{c}</span>
        </motion.div>
      ))}
    </div>
  )
}

function GovernanceVisual() {
  const items = ['RBAC enforced', 'Approval required', 'Audit logged']
  return (
    <div className="h-28 p-3 space-y-2">
      {items.map((item, i) => (
        <motion.div key={item} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg"
          style={{ background: '#f472b610', border: '1px solid #f472b625' }}
          initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 + 0.3 }}>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
          <span className="text-[10px] text-pink-300/80">{item}</span>
        </motion.div>
      ))}
    </div>
  )
}

function LayerCard({ layer, index }) {
  const Icon = layer.icon
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="relative group rounded-2xl border border-white/8 glass-strong overflow-hidden cursor-default">
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `inset 0 0 40px ${layer.color}08, 0 0 30px ${layer.color}12` }} />
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${layer.color}80, transparent)` }} />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${layer.color}15`, border: `1px solid ${layer.color}30` }}>
            <Icon className="w-5 h-5" style={{ color: layer.color }} strokeWidth={1.5} />
          </div>
          <div>
            <span className="text-[10px] font-bold" style={{ color: layer.color }}>Layer {layer.num}</span>
            <h3 className="font-bold text-white text-base leading-tight">{layer.title}</h3>
          </div>
        </div>

        {/* Visual area */}
        <div className="rounded-xl bg-black/20 border border-white/5 mb-4 overflow-hidden">
          {layer.visual}
        </div>

        {/* Description */}
        <p className="text-xs text-slate-400 leading-relaxed mb-3">{layer.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {layer.inputs.map(tag => (
            <span key={tag} className="text-[9px] font-medium px-1.5 py-0.5 rounded-md"
              style={{ color: layer.color, background: `${layer.color}10`, border: `1px solid ${layer.color}20` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function PlatformArchitecture() {
  return (
    <section className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 glass">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Architecture</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            One Platform. <span className="text-gradient-full">Six Core Layers.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every layer connects to the next — from raw signal to verified, governed remediation.
          </p>
        </motion.div>

        {/* Vertical connector line on desktop */}
        <div className="hidden xl:block absolute left-1/2 top-60 bottom-28 w-px bg-gradient-to-b from-cyan-500/20 via-violet-500/20 to-pink-500/10 -translate-x-1/2 z-0" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {layers.map((layer, i) => <LayerCard key={layer.num} layer={layer} index={i} />)}
        </div>

        {/* Bottom flow strip */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-2 flex-wrap">
          {layers.map((l, i) => (
            <span key={l.num} className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                style={{ color: l.color, background: `${l.color}12`, border: `1px solid ${l.color}25` }}>
                {l.title}
              </span>
              {i < layers.length - 1 && <span className="text-slate-700 text-sm">→</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
