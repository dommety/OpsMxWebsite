import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin } from 'lucide-react'
import Navbar from '../components/Navbar'
import { capabilities, whyOpsMx, teamMembers, investors } from '../data/company'

function CapabilityCard({ capability, index }) {
  const Icon = capability.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-xl border border-white/8 glass hover:border-white/16 transition-all group"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{ background: `${capability.color}18`, border: `1px solid ${capability.color}35` }}
      >
        <Icon className="w-5 h-5" style={{ color: capability.color }} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {capability.title}
      </h3>
      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
        {capability.desc}
      </p>
    </motion.div>
  )
}

function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col items-center text-center p-6 rounded-xl border border-white/8 glass hover:border-white/16 transition-all group"
    >
      {/* Team member photo */}
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-white/10 group-hover:border-cyan-500/30 transition-all"
        />
      ) : (
        <div
          className="w-24 h-24 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white"
          style={{
            background: `linear-gradient(135deg, ${['#22d3ee', '#a78bfa', '#34d399', '#f472b6', '#fbbf24'][index % 5]}, ${['#0ea5e9', '#8b5cf6', '#10b981', '#ec4899', '#eab308'][index % 5]})`,
          }}
        >
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>
      )}
      <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
      <p className="text-sm font-semibold text-cyan-400 mb-3">{member.title}</p>
      <p className="text-xs text-slate-500 mb-4 leading-relaxed">{member.bio}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          <span className="text-xs">LinkedIn</span>
        </a>
      )}
    </motion.div>
  )
}

function InvestorCard({ investor, index }) {
  const Component = investor.url ? motion.a : motion.div
  const componentProps = investor.url
    ? {
        href: investor.url,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {}

  return (
    <Component
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`flex flex-col items-center justify-center p-6 rounded-xl border transition-all group ${
        investor.type === 'firm'
          ? 'border-white/8 glass hover:border-white/16 min-h-24'
          : 'border-white/6 glass hover:border-cyan-500/30'
      }`}
      {...componentProps}
    >
      {investor.type === 'firm' ? (
        investor.logo ? (
          <img src={investor.logo} alt={investor.name} className="h-8 object-contain" />
        ) : (
          <span className="font-semibold text-slate-300 group-hover:text-white transition-colors text-center text-sm">
            {investor.name}
          </span>
        )
      ) : (
        <div className="text-center">
          <p className="font-semibold text-white mb-1">{investor.name}</p>
          <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-snug">
            {investor.desc}
          </p>
        </div>
      )}
    </Component>
  )
}

export default function CompanyPage() {
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
              <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Company</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5">
              About OpsMx
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              OpsMx helps enterprises secure, govern, and remediate software delivery risks across code,
              cloud, runtime, and AI-assisted development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-6">Our Mission</h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Help enterprises move from security findings to verified remediation with context,
              automation, and governance. We believe security isn't about finding issues — it's about
              fixing them safely, at scale, with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-3">What We Do</h2>
            <p className="text-slate-400">Five core capabilities that shape software security and delivery</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((cap, i) => (
              <CapabilityCard key={cap.title} capability={cap} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why OpsMx */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-3">Why OpsMx</h2>
            <p className="text-slate-400 mb-8">Built for modern security and delivery teams</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {whyOpsMx.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-2" />
                  <span className="text-slate-300 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-3">Leadership Team</h2>
            <p className="text-slate-400">Meet the people building OpsMx</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-3">Backed By Leading Investors & Advisors</h2>
            <p className="text-slate-400">Supported by top-tier venture firms and industry visionaries who believe in modern software delivery and security</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {investors.map((investor, i) => (
              <InvestorCard key={investor.name} investor={investor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Ready to modernize software security and remediation?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Contact our team to learn how OpsMx can transform your security and delivery operations.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all shadow-lg shadow-cyan-500/25 text-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
