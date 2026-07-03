import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, CheckCircle, AlertCircle, Users, Shield, Lock, BarChart3 } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'
import {
  remediationAgents,
  workflowSteps,
  governanceCards,
  integrations,
  problemCards,
  beforeAfterComparison,
  whyOpsMxCards,
  outcomes,
  faqItems,
} from '../data/fixRisk'

function WorkflowAnimation() {
  const steps = ['Finding', 'Root Cause', 'Agent Recommendation', 'Human Approval', 'Fix Applied', 'Verification', 'Audit Evidence']

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap md:flex-nowrap">
      {steps.map((step, idx) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.3 }}
          className="flex items-center gap-3"
        >
          <motion.div
            animate={{ boxShadow: ['0 0 0 0 rgba(34, 211, 238, 0.7)', '0 0 0 20px rgba(34, 211, 238, 0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/50 flex items-center justify-center flex-shrink-0"
          >
            <span className={`text-xs md:text-sm font-bold text-center px-1 ${idx === steps.length - 1 ? 'text-green-400' : 'text-cyan-300'}`}>
              {step}
            </span>
          </motion.div>
          {idx < steps.length - 1 && (
            <motion.div
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden md:block w-8 h-1 bg-gradient-to-r from-cyan-500 to-transparent origin-left"
            />
          )}
          {idx < steps.length - 1 && <div className="md:hidden text-cyan-400">→</div>}
        </motion.div>
      ))}
    </div>
  )
}

function ProblemSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Security teams do not need more findings. They need fixes.</h2>
        <p className="text-slate-300 text-lg max-w-3xl">
          Modern scanners identify thousands of risks across code, open source, containers, cloud, Kubernetes, APIs, and delivery pipelines. But risk is not reduced until the right owner fixes the issue, the change is approved, the system is redeployed, and the fix is verified.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {problemCards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
            <p className="text-slate-300">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function WorkflowSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The OpsMx Remediation Workflow</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {workflowSteps.map((step, idx) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold text-sm">
                {step.step}
              </div>
              <h3 className="font-bold text-white">{step.label}</h3>
            </div>
            <p className="text-xs text-slate-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function AgentsSection() {
  // Map agent IDs to anchor IDs for deep linking
  const anchorMap = {
    'code-remediation': 'code-remediation',
    'binary-artifact': 'binary-artifact',
    'cloud-remediation': 'cloud-remediation',
    'devops-sre': 'devops-sre',
    'kubernetes': 'kubernetes',
    'compliance': 'compliance',
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Remediation Agents for Every Risk Domain</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {remediationAgents.map((agent, idx) => (
          <motion.div
            key={agent.id}
            id={anchorMap[agent.id] || agent.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
            className="p-8 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors scroll-mt-32"
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${agent.color}20`, border: `1px solid ${agent.color}40` }}
              >
                <Zap className="w-6 h-6" style={{ color: agent.color }} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{agent.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{agent.subtitle}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Capabilities</p>
                <ul className="space-y-1">
                  {agent.capabilities.map((cap) => (
                    <li key={cap} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Outcomes</p>
                <ul className="space-y-1">
                  {agent.outcomes.map((outcome) => (
                    <li key={outcome} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function GovernanceSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Governed Remediation, Not Blind Automation</h2>
        <p className="text-slate-300 text-lg max-w-3xl">
          OpsMx is built for enterprise remediation where automation must be safe, explainable, and governed. Teams can use AI to recommend fixes while preserving human approval, policy controls, audit trails, and deployment guardrails.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {governanceCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
            <p className="text-slate-300 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ComparisonSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">From Root Cause to Verified Fix</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-red-400 mb-6">Before OpsMx</h3>
          <ul className="space-y-3">
            {beforeAfterComparison.before.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-green-400 mb-6">After OpsMx</h3>
          <ul className="space-y-3">
            {beforeAfterComparison.after.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function IntegrationsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Works Across Your Security and Delivery Stack</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {integrations.map((tool) => (
          <motion.div
            key={tool}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-medium hover:border-white/20 hover:bg-white/10 transition-colors"
          >
            {tool}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function WhyOpsMxSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why OpsMx for Remediation?</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {whyOpsMxCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
            <p className="text-slate-300 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function OutcomesSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Business Outcomes</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {outcomes.map((outcome) => (
          <motion.div
            key={outcome}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-xl border border-white/8 bg-gradient-to-br from-cyan-500/10 to-green-500/10 hover:from-cyan-500/15 hover:to-green-500/15 transition-all text-center"
          >
            <p className="text-slate-300 font-medium text-sm">{outcome}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function FAQSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqItems.map((item, idx) => (
          <motion.details
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.02, duration: 0.3 }}
            className="group p-6 rounded-xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors cursor-pointer"
          >
            <summary className="flex items-center justify-between font-bold text-white">
              {item.q}
              <motion.span
                className="text-cyan-400 text-xl group-open:rotate-45"
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </summary>
            <p className="mt-4 text-slate-300 text-sm leading-relaxed">{item.a}</p>
          </motion.details>
        ))}
      </div>
    </div>
  )
}

export default function FixRiskPage() {
  useEffect(() => {
    document.title = 'Fix Risk with Remediation Agents & Workflows | OpsMx'
  }, [])

  useEffect(() => {
    // Handle hash-based navigation for deep linking
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-navy-950 pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 w-fit">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">Fix Risk Platform</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Fix Risk with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Remediation Agents</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Use AI-assisted remediation agents and governed workflows to fix code, dependencies, containers, cloud, Kubernetes, and DevOps issues — then verify that risk is actually resolved.
          </p>
          <p className="text-lg text-slate-400">Detecting risk is only the start. OpsMx drives every issue to a verified fix.</p>
        </motion.div>

        <div className="flex flex-wrap gap-4 pt-8">
          <motion.a
            href="https://www.opsmx.com/talk-to-an-application-security-expert/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Request a Demo
          </motion.a>
          <motion.a
            href="https://ssd.sandbox.opsmx.org/login?redir=/ui/application"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg border border-white/20 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-2"
          >
            Try Remediation
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="pt-12">
          <WorkflowAnimation />
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ProblemSection />
      </section>

      {/* Workflow Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <WorkflowSection />
      </section>

      {/* Agents Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <AgentsSection />
      </section>

      {/* Governance Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <GovernanceSection />
      </section>

      {/* Comparison Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ComparisonSection />
      </section>

      {/* Integrations Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <IntegrationsSection />
      </section>

      {/* Why OpsMx Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <WhyOpsMxSection />
      </section>

      {/* Outcomes Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <OutcomesSection />
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <FAQSection />
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <FinalCTA
          headline="Do Not Just Find Risk. Fix It."
          subtitle="Use OpsMx remediation agents and governed workflows to remediate security issues, verify fixes, and continuously prove risk reduction."
          buttonText="Request a Demo"
        />
      </section>
    </main>
  )
}
