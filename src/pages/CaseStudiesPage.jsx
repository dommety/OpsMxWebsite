import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import { caseStudiesByCategory, categories } from '../data/caseStudies'

function CaseStudyCard({ study, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <a
        href={study.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-4 p-6 h-full rounded-xl border border-white/8 glass hover:border-white/16 transition-all"
      >
        {/* Logo / Avatar */}
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 font-semibold"
          style={{
            background: `${study.color}18`,
            border: `1px solid ${study.color}35`,
            color: study.color,
          }}
        >
          {study.logo}
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
            {study.name}
          </p>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-2">
            {study.title}
          </h3>
          <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors leading-relaxed">
            {study.desc}
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors font-semibold text-sm">
          Read Case Study
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>
    </motion.div>
  )
}

function CategorySection({ category, studies }) {
  const colorMap = {
    'Security & Compliance': '#60a5fa',
    'DevOps': '#f472b6',
  }

  const color = colorMap[category] || '#22d3ee'

  return (
    <section className="relative py-16 border-t border-white/5 first:border-t-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1.5 h-6 rounded-full" style={{ background: color }} />
            <h2 className="text-2xl lg:text-3xl font-black text-white">
              {category}
            </h2>
          </div>
          <p className="text-slate-400 text-sm ml-6">
            {category === 'Security & Compliance'
              ? 'Enterprise security, compliance, and risk governance success stories'
              : 'DevOps, deployment, and operational excellence case studies'}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {studies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/10 glass">
              <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Success Stories</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5">
              Customer{' '}
              <span className="text-gradient-full">Case Studies</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              See how enterprises use OpsMx to improve security, compliance, and software delivery.
              From reducing deployment risk to automating remediation, our customers are transforming
              how they approach active defense.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            {[
              { val: '50+', label: 'Enterprise Customers' },
              { val: '85%', label: 'Fewer Deployment Incidents' },
              { val: '40%', label: 'Faster Software Delivery' },
              { val: '15min', label: 'Incident Resolution Time' },
            ].map(stat => (
              <div key={stat.label}>
                <span className="text-3xl font-black text-cyan-400">{stat.val}</span>
                <span className="text-slate-500 text-sm block mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Sections */}
      {categories.map(category => (
        <CategorySection
          key={category}
          category={category}
          studies={caseStudiesByCategory[category]}
        />
      ))}

      {/* Bottom CTA */}
      <section className="relative py-24 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Ready to transform your security and operations?
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Join leading enterprises using OpsMx Active Defense to detect, diagnose, remediate,
              and verify risk across their entire software delivery lifecycle.
            </p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all shadow-lg shadow-cyan-500/25 text-lg">
              Request a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
