import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingDown, Zap, Shield, Package, GitPullRequest, Users } from 'lucide-react'

const outcomes = [
  {
    icon: TrendingDown,
    color: '#22d3ee',
    metric: '80%',
    label: 'Reduction in vulnerability backlog',
    desc: 'Prioritized, contextualized findings eliminate noise and focus teams on real risk.',
  },
  {
    icon: Zap,
    color: '#fbbf24',
    metric: '10×',
    label: 'Faster mean time to remediate',
    desc: 'From weeks to hours. Automated fix generation with human-in-the-loop governance.',
  },
  {
    icon: Shield,
    color: '#34d399',
    metric: '95%',
    label: 'Cloud & Kubernetes resilience',
    desc: 'Continuous runtime validation with verified remediation across cloud environments.',
  },
  {
    icon: Package,
    color: '#a78bfa',
    metric: '100%',
    label: 'Supply chain coverage',
    desc: 'SBOM, XBOM, and AI-BOM continuously evaluated as new CVEs emerge.',
  },
  {
    icon: GitPullRequest,
    color: '#f472b6',
    metric: '3×',
    label: 'Safer release cycles',
    desc: 'Change risk analysis and deployment verification reduce change failure rate.',
  },
  {
    icon: Users,
    color: '#60a5fa',
    metric: '40%',
    label: 'Engineering productivity gain',
    desc: 'Security becomes part of the flow — not a blocker. Context enables faster decisions.',
  },
]

function AnimatedMetric({ value, color }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const isPercent = value.includes('%')
    const isX = value.includes('×')
    const num = parseFloat(value)

    let start = 0
    const duration = 1200
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * num)
      setDisplay(isPercent ? `${current}%` : isX ? `${current}×` : `${current}`)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className="text-4xl font-black" style={{ color }}>
      {display}
    </span>
  )
}

export default function Outcomes() {
  return (
    <section className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 glass">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Outcomes</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Built for Action.{' '}
            <span className="text-gradient-full">Measured by Outcomes.</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            *Indicative outcomes based on active defense program benchmarks
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {outcomes.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative group glass-strong rounded-2xl p-6 border border-white/8 hover:border-white/14 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${item.color}08, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                </div>

                {/* Metric */}
                <AnimatedMetric value={item.metric} color={item.color} />

                {/* Label */}
                <p className="text-sm font-semibold text-white mt-1 mb-2">{item.label}</p>

                {/* Desc */}
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>

                {/* Bottom bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${item.color}60, transparent)` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.3, duration: 0.6 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
