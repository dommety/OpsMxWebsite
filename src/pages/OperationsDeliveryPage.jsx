import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import FinalCTA from '../components/FinalCTA'

// ─── Hero ────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950 pt-24">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial from-amber-500/8 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-yellow-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 glass px-4 py-2 rounded-full border border-amber-400/20"
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-amber-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                Operations Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">Operations</span>
              <br />
              <span className="text-gradient-full">&amp; Delivery</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              Use OpsMx to diagnose pipeline and deployment failures, guide rollback and roll-forward decisions, verify releases, and assess operational risk across modern software delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 transition-all duration-200 shadow-xl shadow-amber-500/25">
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://ssd.sandbox.opsmx.org/login?redir=/ui/application" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-300 glass border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200">
                Try Operations Platform
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right - Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-transparent border border-amber-500/20"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Delivery Remediation Sections ──────────────────────────────────────

function DeliveryRemediationSection() {
  const items = [
    {
      id: 'pipeline-failure-diagnosis',
      title: 'Pipeline Failure Diagnosis',
      description: 'Diagnose pipeline failures to identify root causes, failures, and remediation guidance.',
    },
    {
      id: 'deployment-failure-diagnosis',
      title: 'Deployment Failure Diagnosis',
      description: 'Identify why deployments failed and what needs to be fixed to succeed.',
    },
    {
      id: 'incident-root-cause-analysis',
      title: 'Incident Root Cause Analysis',
      description: 'Analyze incidents to understand root causes, triggers, and remediation steps.',
    },
    {
      id: 'rollback-rollforward-guidance',
      title: 'Rollback & Roll-forward Guidance',
      description: 'Get safe rollback and roll-forward recommendations based on current state and risk.',
    },
    {
      id: 'policy-gate-diagnosis',
      title: 'Policy Gate Diagnosis',
      description: 'Understand why policy gates failed and how to resolve violations.',
    },
    {
      id: 'continuous-delivery-verification',
      title: 'Continuous Delivery Verification',
      description: 'Verify release safety and deployment correctness throughout the delivery pipeline.',
    },
  ]

  return (
    <section className="relative py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Delivery Remediation</h2>
          <p className="text-lg text-slate-400">Diagnose and fix delivery pipeline and deployment issues with AI-assisted guidance.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-margin-top glass rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Operations Intelligence Sections ───────────────────────────────────

function OperationsIntelligenceSection() {
  const items = [
    {
      id: 'change-risk-assessment',
      title: 'Change Risk Assessment',
      description: 'Assess risk of changes, deployments, and releases before they go to production.',
    },
    {
      id: 'release-readiness',
      title: 'Release Readiness',
      description: 'Verify release readiness and deployment safety across all quality gates.',
    },
    {
      id: 'deployment-risk-analysis',
      title: 'Deployment Risk Analysis',
      description: 'Analyze deployment risks including blast radius, rollback safety, and impact.',
    },
    {
      id: 'environment-drift-detection',
      title: 'Environment Drift Detection',
      description: 'Detect and understand environment drift that could impact deployments.',
    },
  ]

  return (
    <section className="relative py-24 bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Operations Intelligence</h2>
          <p className="text-lg text-slate-400">Understand operational and deployment risk with AI-powered context and analysis.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-margin-top glass rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main Page ──────────────────────────────────────────────────────────

export default function OperationsDeliveryPage() {
  useEffect(() => {
    document.title = 'Operations & Delivery Platform | OpsMx'
  }, [])

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <DeliveryRemediationSection />
      <OperationsIntelligenceSection />
      <FinalCTA />
    </div>
  )
}
