import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingDown, Zap, Shield, Package, GitPullRequest, ClipboardCheck, Users } from 'lucide-react'

const outcomes = [
  { icon: TrendingDown, color: '#22d3ee', metric: '80%', label: 'Reduced vulnerability backlog',
    desc: 'Prioritized, contextualized findings replace noise with action.' },
  { icon: Zap, color: '#fbbf24', metric: '10×', label: 'Accelerated remediation',
    desc: 'From weeks to hours. Automated fix generation with human governance.' },
  { icon: Shield, color: '#34d399', metric: '95%', label: 'Cloud & Kubernetes posture',
    desc: 'Continuous runtime validation with verified remediation across cloud layers.' },
  { icon: Package, color: '#a78bfa', metric: '100%', label: 'Supply chain coverage',
    desc: 'SBOM, XBOM, and AI-BOM continuously evaluated as new CVEs emerge.' },
  { icon: GitPullRequest, color: '#f472b6', metric: '3×', label: 'Reduced change failure risk',
    desc: 'Change risk analysis and deployment verification before every release.' },
  { icon: ClipboardCheck, color: '#60a5fa', metric: '90%', label: 'Improved audit readiness',
    desc: 'Every action tracked, logged, and exportable for compliance evidence.' },
  { icon: Users, color: '#34d399', metric: '40%', label: 'Engineering productivity gain',
    desc: 'Security becomes part of the flow — not a blocker to delivery.' },
]

function AnimatedNumber({ value, color }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef()
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const isPercent = value.includes('%'), isX = value.includes('×')
    const num = parseFloat(value)
    let start = 0
    const dur = 1200, t0 = performance.now()
    const tick = (now) => {
      const prog = Math.min((now - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - prog, 3)
      setDisplay(isPercent ? `${Math.round(eased * num)}%` : isX ? `${Math.round(eased * num)}×` : `${Math.round(eased * num)}`)
      if (prog < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])
  return <span ref={ref} className="text-4xl font-black" style={{ color }}>{display}</span>
}

export default function PlatformOutcomes() {
  return (
    <section className="relative py-28 bg-navy-900/60 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 glass">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Outcomes</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            What the Platform <span className="text-gradient-full">Enables</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2">*Indicative outcomes based on active defense program benchmarks</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {outcomes.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="relative group glass-strong rounded-2xl p-5 border border-white/7 cursor-default overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${item.color}07, transparent 65%)` }} />
                <div className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${item.color}50, transparent)` }} />
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                  <Icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                </div>
                <AnimatedNumber value={item.metric} color={item.color} />
                <p className="text-sm font-semibold text-white mt-1 mb-1.5">{item.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
