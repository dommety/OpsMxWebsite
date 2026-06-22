import { motion } from 'framer-motion'
import { Radio, Microscope, BarChart3, Wrench, ShieldCheck, BookOpen } from 'lucide-react'

const steps = [
  {
    icon: Radio,
    title: 'Detect',
    color: '#22d3ee',
    desc: 'Continuously identify vulnerabilities, exposures, misconfigurations, and operational risks.',
  },
  {
    icon: Microscope,
    title: 'Diagnose',
    color: '#60a5fa',
    desc: 'Understand root cause, ownership, dependencies, and blast radius.',
  },
  {
    icon: BarChart3,
    title: 'Prioritize',
    color: '#a78bfa',
    desc: 'Focus on the issues that matter most to the business.',
  },
  {
    icon: Wrench,
    title: 'Remediate',
    color: '#34d399',
    desc: 'Generate safe corrective actions across code, cloud, Kubernetes, and operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Verify',
    color: '#fbbf24',
    desc: 'Confirm that every fix worked.',
  },
  {
    icon: BookOpen,
    title: 'Govern',
    color: '#f472b6',
    desc: 'Maintain policy, approvals, audit trails, and human oversight.',
  },
]

export default function Lifecycle() {
  return (
    <section className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial from-cyan-500/5 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 glass">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Active Defense Lifecycle</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            From Detection to{' '}
            <span className="text-gradient-full">Verified Remediation</span>
          </h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mb-8">
            <div className="absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Animated flow dot */}
            <motion.div
              className="absolute top-[27px] w-4 h-4 rounded-full bg-cyan-400"
              style={{ boxShadow: '0 0 12px #22d3ee, 0 0 24px #22d3ee80' }}
              animate={{ left: ['8%', '92%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 0.5 }}
            />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="relative group cursor-default"
                >
                  {/* Node */}
                  <div className="flex flex-col items-center mb-5">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 mb-3"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                      }}
                      whileHover={{
                        boxShadow: `0 0 20px ${step.color}50, 0 0 40px ${step.color}20`,
                      }}
                    >
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{ border: `1px solid ${step.color}40` }}
                        animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                      />
                      <Icon className="w-7 h-7" style={{ color: step.color }} strokeWidth={1.5} />
                    </motion.div>
                    <span
                      className="text-xs font-bold tracking-wide"
                      style={{ color: step.color }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="glass rounded-xl p-4 border border-white/5 group-hover:border-white/10 transition-colors">
                    <h3 className="font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 glass rounded-xl p-4 border border-white/5"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: step.color }} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold" style={{ color: step.color }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
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
