import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import { allSolutions, columns, BADGES } from '../data/solutions'

function BadgeChip({ type }) {
  const cfg = BADGES[type]
  if (!cfg) return null
  return (
    <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
      {cfg.label}
    </span>
  )
}

export default function SolutionDetailPage() {
  const { slug } = useParams()
  const solution = allSolutions.find(s => s.slug === slug)

  // Find which column this belongs to
  const column = columns.find(col => col.items.some(i => i.slug === slug))

  // Related: other items in same column (excluding current)
  const related = column?.items.filter(i => i.slug !== slug).slice(0, 4) ?? []

  if (!solution) {
    return (
      <div className="min-h-screen bg-navy-950 text-white flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <p className="text-slate-400 mb-4">Solution not found.</p>
          <Link to="/solutions" className="text-cyan-400 hover:text-cyan-300">← Back to Solutions</Link>
        </div>
      </div>
    )
  }

  const Icon = solution.icon

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at 20% 50%, ${solution.color}08, transparent 60%)` }} />

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Back breadcrumb */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Solutions
              {column && <><span className="mx-1 text-slate-700">/</span><span style={{ color: column.color }}>{column.heading}</span></>}
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* Icon + badge */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${solution.color}18`, border: `1px solid ${solution.color}35` }}>
                  <Icon className="w-6 h-6" style={{ color: solution.color }} strokeWidth={1.5} />
                </div>
                {solution.badge && <BadgeChip type={solution.badge} />}
              </div>

              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
                {solution.title}
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">{solution.desc}</p>

              <div className="flex flex-wrap gap-3">
                <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all shadow-lg shadow-cyan-500/25">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <Link to="/platform"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-300 glass border border-white/10 hover:border-white/20 hover:text-white transition-all">
                  Explore Platform
                </Link>
              </div>
            </motion.div>

            {/* Right — placeholder capability panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-strong rounded-2xl border border-white/8 p-6"
            >
              <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4">
                Key Capabilities
              </p>
              <div className="space-y-2.5">
                {[
                  'Continuous detection and assessment',
                  'Context-aware prioritization',
                  'AI-powered remediation guidance',
                  'Verified fix confirmation',
                  'Audit trail and governance',
                  'Human-in-the-loop controls',
                ].map((cap, i) => (
                  <motion.div key={cap} className="flex items-center gap-2.5"
                    initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.07 }}>
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: solution.color }} />
                    <span className="text-sm text-slate-300">{cap}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/6">
                <p className="text-[10px] text-slate-600 font-mono">
                  Part of{' '}
                  <span style={{ color: column?.color ?? '#22d3ee' }}>
                    {column?.heading} Solutions
                  </span>
                  {' '}· Powered by OpsMx Active Defense
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related solutions */}
      {related.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-lg font-bold text-white mb-6">
              Related{' '}
              <span style={{ color: column?.color }}>{column?.heading}</span>{' '}
              Solutions
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {related.map((item, i) => {
                const RelIcon = item.icon
                return (
                  <motion.div key={item.slug}
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    whileHover={{ y: -2 }}>
                    <Link to={`/solutions/${item.slug}`}
                      className="group flex flex-col gap-2 p-4 rounded-xl border border-white/6 glass hover:border-white/12 transition-all h-full">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}28` }}>
                        <RelIcon className="w-3.5 h-3.5" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <p className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug">
                        {item.title}
                      </p>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
