import { motion } from 'framer-motion'
import { Code2, Package, Cloud, GitMerge, Settings, Shield, ArrowRight, Zap } from 'lucide-react'

const pipelineSteps = [
  { label: 'Finding', color: '#f87171' },
  { label: 'Diagnosis', color: '#60a5fa' },
  { label: 'Plan', color: '#a78bfa' },
  { label: 'Approval', color: '#fbbf24' },
  { label: 'Action', color: '#34d399' },
  { label: 'Verification', color: '#22d3ee' },
]

const agents = [
  {
    icon: Code2, title: 'Code Agent', color: '#22d3ee',
    desc: 'Generates code fixes, dependency upgrades, secure PRs, and developer-ready remediation.',
    tags: ['Code Fixes', 'Dep Upgrades', 'Secure PRs', 'Auto-merge'],
  },
  {
    icon: Package, title: 'Binary Artifact Agent', color: '#a78bfa',
    desc: 'Analyzes and remediates risks in containers, packages, images, and deployed artifacts.',
    tags: ['Container Rebuild', 'Image Patching', 'Package Updates'],
  },
  {
    icon: Cloud, title: 'Cloud Agent', color: '#34d399',
    desc: 'Recommends and executes cloud remediation for misconfigurations, exposure, and posture risks.',
    tags: ['IAM Fix', 'S3 Policy', 'Network Rules', 'CSPM'],
  },
  {
    icon: GitMerge, title: 'Kubernetes Agent', color: '#60a5fa',
    desc: 'Diagnoses and remediates Kubernetes misconfigurations, drift, workload risks, and operational issues.',
    tags: ['Pod Security', 'RBAC', 'Drift Fix', 'Workload'],
  },
  {
    icon: Settings, title: 'DevOps Agent', color: '#fbbf24',
    desc: 'Fixes CI/CD, GitOps, release, deployment, and operational workflow issues.',
    tags: ['Pipeline Fix', 'GitOps', 'Release Gate', 'Runbooks'],
  },
  {
    icon: Shield, title: 'Policy Agent', color: '#f472b6',
    desc: 'Applies guardrails, approvals, exceptions, and governance controls.',
    tags: ['Guardrails', 'Approvals', 'Exceptions', 'Audit'],
  },
]

function FactoryPipeline() {
  return (
    <div className="glass-strong rounded-2xl border border-white/8 p-6 mb-12">
      <div className="flex items-center gap-2 mb-5">
        <Zap className="w-4 h-4 text-emerald-400" />
        <span className="text-sm font-semibold text-slate-300">Remediation Factory Pipeline</span>
        <div className="ml-auto flex items-center gap-1.5">
          <motion.div className="w-2 h-2 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
          <span className="text-xs text-slate-600 font-mono">processing 47 findings</span>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {pipelineSteps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2 flex-shrink-0">
            <motion.div className="relative flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              {/* Step node */}
              <motion.div className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center gap-0.5"
                style={{ background: `${step.color}15`, border: `1px solid ${step.color}35` }}
                animate={{ boxShadow: [`0 0 6px ${step.color}20`, `0 0 18px ${step.color}50`, `0 0 6px ${step.color}20`] }}
                transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}>
                <motion.div className="w-2.5 h-2.5 rounded-full" style={{ background: step.color }}
                  animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }} />
              </motion.div>
              <span className="text-[10px] font-semibold" style={{ color: step.color }}>{step.label}</span>
              {/* Count badge */}
              <motion.div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                style={{ background: step.color }}
                animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}>
                {[47, 44, 38, 22, 18, 17][i]}
              </motion.div>
            </motion.div>
            {i < pipelineSteps.length - 1 && (
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
                className="flex-shrink-0">
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-600">
        <span><span className="text-emerald-400">17</span> verified fixes today</span>
        <span><span className="text-yellow-400">22</span> awaiting approval</span>
        <span>Avg cycle: <span className="text-cyan-400">2.4h</span></span>
      </div>
    </div>
  )
}

function AgentCard({ agent, index }) {
  const Icon = agent.icon
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="relative group glass rounded-2xl border border-white/8 p-5 cursor-default overflow-hidden">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `inset 0 0 30px ${agent.color}08, 0 0 25px ${agent.color}12` }} />
      <div className="h-0.5 absolute top-0 left-0 right-0"
        style={{ background: `linear-gradient(90deg, ${agent.color}70, transparent)` }} />

      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
        style={{ background: `${agent.color}15`, border: `1px solid ${agent.color}30` }}>
        <Icon className="w-5 h-5" style={{ color: agent.color }} strokeWidth={1.5} />
      </div>
      <h3 className="font-bold text-white mb-1.5">{agent.title}</h3>
      <p className="text-xs text-slate-400 leading-relaxed mb-3">{agent.desc}</p>
      <div className="flex flex-wrap gap-1">
        {agent.tags.map(tag => (
          <span key={tag} className="text-[9px] font-medium px-1.5 py-0.5 rounded-md"
            style={{ color: agent.color, background: `${agent.color}10`, border: `1px solid ${agent.color}20` }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function PlatformRemediationFactory() {
  return (
    <section className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-emerald-500/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-emerald-400/20 glass">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Remediation Factory</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            From Finding to <span className="text-gradient-full" style={{ backgroundImage: 'linear-gradient(135deg,#34d399,#22d3ee)' }}>Fix</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            AI-powered remediation agents that turn diagnosis into action.
          </p>
        </motion.div>

        <FactoryPipeline />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {agents.map((agent, i) => <AgentCard key={agent.title} agent={agent} index={i} />)}
        </div>
      </div>
    </section>
  )
}
