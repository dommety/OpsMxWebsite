import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import { columns, BADGES, FEATURED_SLUGS, allSolutions } from '../data/solutions'
import { Sparkles } from 'lucide-react'

function BadgeChip({ type }) {
  const cfg = BADGES[type]
  if (!cfg) return null
  return (
    <span className={`inline-flex items-center text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
      {cfg.label}
    </span>
  )
}

function SolutionCard({ item, index }) {
  const Icon = item.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      whileHover={{ y: -3 }}
    >
      <Link
        to={`/solutions/${item.slug}`}
        className="group flex items-start gap-3 p-4 rounded-xl border border-white/6 glass hover:border-white/12 transition-all duration-200 h-full"
        style={{ '--glow': item.color }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${item.color}15`, border: `1px solid ${item.color}28` }}
        >
          <Icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-2 flex-wrap mb-1">
            <span className="text-sm font-semibold text-white group-hover:text-white leading-tight">
              {item.title}
            </span>
            {item.badge && <BadgeChip type={item.badge} />}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{item.desc}</p>
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
      </Link>
    </motion.div>
  )
}

function SolutionSection({ col }) {
  return (
    <section className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-5 rounded-full" style={{ background: col.color }} />
            <h2 className="text-2xl font-black text-white">
              {col.heading} Solutions
            </h2>
          </div>
          <p className="text-slate-400 text-sm ml-3.5">{col.desc}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {col.items.map((item, i) => (
            <SolutionCard key={item.slug} item={item} index={i} />
          ))}
        </div>

        {/* Ribbon */}
        {col.ribbon && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-5 flex items-center gap-3 p-3 rounded-xl border border-emerald-500/15 bg-emerald-500/5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
            <span className="text-xs font-semibold text-emerald-400">{col.ribbonLabel || 'Platform capabilities'}</span>
            <span className="text-xs text-slate-600">·</span>
            <span className="text-xs text-slate-500">{col.ribbon}</span>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/10 glass">
              <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5">
              Solutions for{' '}
              <span className="text-gradient-full">Active Defense</span>
              <br />& Remediation
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Explore how OpsMx helps teams secure, prioritize, remediate, verify, and govern
              risk across the software lifecycle.
            </p>
            {/* Quick-jump nav */}
            <div className="flex flex-wrap gap-2">
              {columns.map(col => (
                <a
                  key={col.id}
                  href={`#${col.id}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold glass border border-white/8 hover:border-white/16 transition-colors"
                  style={{ color: col.color }}
                >
                  {col.heading}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-8 text-sm"
          >
            {[
              { val: '30+', label: 'Solution areas', color: '#22d3ee' },
              { val: '3', label: 'Practice pillars', color: '#a78bfa' },
              { val: '5', label: 'Remediation agents', color: '#34d399' },
              { val: '100%', label: 'Verified outcomes', color: '#fbbf24' },
            ].map(s => (
              <div key={s.label}>
                <span className="font-black text-2xl" style={{ color: s.color }}>{s.val}</span>
                <span className="text-slate-500 text-xs block">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured solutions strip */}
      <section className="relative py-16 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/4 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-xl font-black text-white mb-2">Featured Solutions</h2>
            <p className="text-slate-400 text-sm">Start here — the most powerful OpsMx capabilities.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {FEATURED_SLUGS.map((slug, i) => {
              const item = allSolutions.find(s => s.slug === slug)
              if (!item) return null
              const Icon = item.icon
              return (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                >
                  <Link
                    to={`/solutions/${slug}`}
                    className="group flex flex-col gap-2 p-4 rounded-xl border border-white/8 glass hover:border-white/16 transition-all h-full"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}28` }}>
                        <Icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      {item.badge && <BadgeChip type={item.badge} />}
                    </div>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-snug line-clamp-2">
                      {item.desc}
                    </p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Three solution columns */}
      {columns.map(col => (
        <div key={col.id} id={col.id}>
          <SolutionSection col={col} />
        </div>
      ))}

      {/* Bottom CTA */}
      <section className="relative py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-4"
          >
            Stop managing findings.{' '}
            <span className="text-gradient-full">Start resolving risk.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 mb-8"
          >
            OpsMx Active Defense gives your team a single platform to detect, diagnose, remediate,
            verify, and govern risk — across every layer of the software stack.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all shadow-xl shadow-cyan-500/25 text-lg">
              Request a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
