import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import FinalCTA from '../components/FinalCTA'
import {
  capabilityGroups,
  workflowSteps,
  integrations,
  outcomes,
  whyOpsMxCards,
  faqItems,
} from '../data/assessRisk'

// ─── Hero ────────────────────────────────────────────────────────────────

function WorkflowAnimation() {
  const nodes = [
    'Findings',
    'Context',
    'Reachability',
    'Exploitability',
    'Ownership',
    'Risk Score',
    'Prioritized Risk',
  ]

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/8 via-electric-500/4 to-transparent rounded-3xl blur-2xl" />

      <div className="relative glass-strong rounded-2xl p-8 border border-white/10">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          {nodes.map((node, i) => (
            <div key={i} className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 12px ${i === nodes.length - 1 ? '#22d3ee' : '#60a5fa'}40`,
                      `0 0 24px ${i === nodes.length - 1 ? '#22d3ee' : '#60a5fa'}60`,
                      `0 0 12px ${i === nodes.length - 1 ? '#22d3ee' : '#60a5fa'}40`,
                    ],
                  }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                  className="w-20 h-20 rounded-lg flex items-center justify-center border flex-shrink-0"
                  style={{
                    background: i === nodes.length - 1 ? 'rgba(34, 211, 238, 0.1)' : 'rgba(96, 165, 250, 0.1)',
                    borderColor: i === nodes.length - 1 ? 'rgba(34, 211, 238, 0.3)' : 'rgba(96, 165, 250, 0.3)',
                  }}
                >
                  <span className="text-[11px] font-bold text-center px-1" style={{ color: i === nodes.length - 1 ? '#22d3ee' : '#60a5fa' }}>
                    {node}
                  </span>
                </motion.div>
              </motion.div>

              {i < nodes.length - 1 && (
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
                  className="flex-shrink-0"
                >
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950 pt-24">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/8 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-electric-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 glass px-4 py-2 rounded-full border border-cyan-400/20"
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                Assess Risk Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">Assess Risk</span>
              <br />
              <span className="text-gradient-full">Across Code, Cloud, Supply Chain, and Runtime</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              Correlate findings, context, posture, ownership, and business impact to identify what matters, reduce noise, and focus remediation on the risks that actually affect the business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all duration-200 shadow-xl shadow-cyan-500/25">
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-300 glass border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200">
                Explore Risk Workflow
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right - Animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <WorkflowAnimation />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  )
}

// ─── Problem Section ──────────────────────────────────────────────────────

function ProblemSection() {
  const problems = [
    {
      title: 'Too Much Noise',
      desc: 'Findings are scattered across scanners, cloud tools, AppSec platforms, and tickets.',
    },
    {
      title: 'Limited Context',
      desc: 'Severity alone does not explain whether a risk is reachable, exploitable, deployed, or business-critical.',
    },
    {
      title: 'Slow Decisions',
      desc: 'Without ownership, blast radius, and policy context, teams spend too much time triaging instead of fixing.',
    },
  ]

  return (
    <section className="relative py-24 bg-navy-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-white">
            Security teams have findings. They need risk clarity.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Modern security tools generate large volumes of findings across code, dependencies, APIs, cloud, Kubernetes, containers, runtime, and software supply chains. But not every finding matters equally. Teams need to understand exploitability, reachability, ownership, business impact, compliance exposure, and remediation priority.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-slate-400">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Capability Hub ───────────────────────────────────────────────────────

function CapabilityGroup({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="mb-16"
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-8 rounded-full" style={{ background: group.color }} />
          <h3 className="text-2xl font-bold text-white">{group.title}</h3>
        </div>
        <p className="text-slate-400 max-w-2xl">{group.intro}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {group.cards.map((card, i) => (
          <a
            key={card.id}
            href={card.href}
            className="group glass rounded-xl p-6 border border-white/5 hover:border-white/20 hover:bg-white/3 transition-all duration-300 cursor-pointer"
          >
            <h4 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{card.title}</h4>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{card.desc}</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100">
              Learn more <ChevronRight className="w-3 h-3" />
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  )
}

function CapabilityHub() {
  return (
    <section className="relative py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-black text-white mb-16 text-center"
        >
          Everything OpsMx Correlates to Assess Risk
        </motion.h2>

        {capabilityGroups.map((group, i) => (
          <CapabilityGroup key={group.id} group={group} index={i} />
        ))}
      </div>
    </section>
  )
}

// ─── Assess Risk Workflow ─────────────────────────────────────────────────

function WorkflowSection() {
  return (
    <section className="relative py-24 bg-navy-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-black text-white mb-16 text-center"
        >
          From Findings to Prioritized Risk
        </motion.h2>

        <div className="grid gap-8">
          {workflowSteps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-electric-500 flex items-center justify-center font-bold text-white text-lg">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why OpsMx ────────────────────────────────────────────────────────────

function WhyOpsMx() {
  return (
    <section className="relative py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-black text-white mb-16 text-center"
        >
          Why OpsMx for Risk Assessment?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyOpsMxCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Integrations ─────────────────────────────────────────────────────────

function IntegrationsSection() {
  return (
    <section className="relative py-24 bg-navy-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-black text-white mb-12 text-center"
        >
          Correlate Risk Across Your Security Stack
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              {integration}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Outcomes ─────────────────────────────────────────────────────────────

function OutcomesSection() {
  return (
    <section className="relative py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-black text-white mb-16 text-center"
        >
          Outcomes Security Leaders Can Measure
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors text-center"
            >
              <p className="text-slate-300 font-medium">{outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────

function FAQSection() {
  return (
    <section className="relative py-24 bg-navy-950 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-black text-white mb-16 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqItems.map((item, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-lg border border-white/5 hover:border-white/10 transition-colors"
            >
              <summary className="cursor-pointer p-6 flex items-start justify-between font-semibold text-white hover:text-cyan-400 transition-colors">
                <span className="text-left">{item.q}</span>
                <ChevronRight className="w-5 h-5 flex-shrink-0 ml-4 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-400 border-t border-white/5 pt-6">
                {item.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────

export default function AssessRiskPage() {
  useEffect(() => {
    document.title = 'Assess Risk Platform | OpsMx'
  }, [])

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <CapabilityHub />
      <WorkflowSection />
      <WhyOpsMx />
      <IntegrationsSection />
      <OutcomesSection />
      <FAQSection />
      <FinalCTA />
    </div>
  )
}
