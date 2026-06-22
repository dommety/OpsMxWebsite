import { motion } from 'framer-motion'
import { Radio, Microscope, BarChart3, Wrench, ShieldCheck, BookOpen } from 'lucide-react'

const steps = [
  { icon: Radio, title: 'Detect', color: '#22d3ee',
    desc: 'Continuously identify vulnerabilities, exposures, misconfigurations, threats, and operational risks.' },
  { icon: Microscope, title: 'Diagnose', color: '#60a5fa',
    desc: 'Determine root cause, ownership, dependencies, exploitability, and blast radius.' },
  { icon: BarChart3, title: 'Prioritize', color: '#a78bfa',
    desc: 'Focus teams on the issues that create the most business, security, or operational risk.' },
  { icon: Wrench, title: 'Remediate', color: '#34d399',
    desc: 'Generate guided or automated fixes across code, cloud, Kubernetes, artifacts, and operations.' },
  { icon: ShieldCheck, title: 'Verify', color: '#fbbf24',
    desc: 'Retest, validate, and confirm that remediation actually worked.' },
  { icon: BookOpen, title: 'Govern', color: '#f472b6',
    desc: 'Control automation with policies, approvals, audit trails, and human oversight.' },
]

export default function PlatformLifecycle() {
  return (
    <section className="relative py-28 bg-navy-900/60 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-radial from-cyan-500/4 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 glass">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Active Defense Lifecycle</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Detect. Diagnose. Remediate.{' '}
            <span className="text-gradient-full">Verify. Govern.</span>
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative mb-10">
            {/* Baseline */}
            <div className="absolute top-8 left-[4%] right-[4%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Animated dot */}
            <motion.div className="absolute top-[27px] w-4 h-4 rounded-full"
              style={{ background: '#22d3ee', boxShadow: '0 0 12px #22d3ee, 0 0 24px #22d3ee60' }}
              animate={{ left: ['4%', '96%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }} />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div key={step.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="relative group cursor-default">
                  <div className="flex flex-col items-center mb-5">
                    <motion.div className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 mb-2"
                      style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                      whileHover={{ boxShadow: `0 0 24px ${step.color}60` }}>
                      <motion.div className="absolute inset-0 rounded-2xl" style={{ border: `1px solid ${step.color}40` }}
                        animate={{ scale: [1, 1.35], opacity: [0.6, 0] }} transition={{ duration: 2.2, delay: i * 0.35, repeat: Infinity }} />
                      <Icon className="w-7 h-7" style={{ color: step.color }} strokeWidth={1.5} />
                    </motion.div>
                    <span className="text-[11px] font-bold" style={{ color: step.color }}>0{i + 1}</span>
                  </div>
                  <div className="glass rounded-xl p-4 border border-white/5 group-hover:border-white/10 transition-colors">
                    <h3 className="font-bold text-white mb-1.5 text-base">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div key={step.title}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex gap-4 glass rounded-xl p-4 border border-white/6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}>
                  <Icon className="w-6 h-6" style={{ color: step.color }} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold" style={{ color: step.color }}>0{i + 1}</span>
                    <h3 className="font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
