import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  Search,
  Zap,
  Shield,
  Target,
  CheckCircle2,
  Wrench,
  Lock,
  Eye,
  GitBranch,
  Cloud,
  GitMerge,
  AlertTriangle,
} from 'lucide-react'
import Navbar from '../components/Navbar'

import Seo from '../components/Seo'
// Problem cards
const problems = [
  {
    title: 'Point-in-Time Testing',
    description: 'Traditional penetration tests happen once or twice per year while applications change every day.',
  },
  {
    title: 'Too Much at Once',
    description: 'Large annual reports overwhelm engineering teams, delaying remediation.',
  },
  {
    title: 'Limited Context',
    description: 'Black-box testing alone lacks code, deployment, ownership, runtime, and business context needed to accelerate remediation.',
  },
]

// Context cards
const contextCards = [
  {
    title: 'Black Box Testing',
    description: 'Attack applications exactly like external attackers.',
    icon: Target,
  },
  {
    title: 'White Box Testing',
    description: 'Leverage source code, APIs, infrastructure, runtime and dependency intelligence.',
    icon: Code2,
  },
  {
    title: 'AI Attack Planning',
    description: 'Use LLMs to generate attack paths, test ideas and adaptive penetration tests.',
    icon: Zap,
  },
  {
    title: 'Context Engine',
    description: 'Correlate runtime, cloud, APIs, code ownership, dependencies and business context.',
    icon: Shield,
  },
]

// Workflow steps for animation and section
const workflowSteps = [
  { label: 'Discover', outcome: 'Find new APIs and code changes' },
  { label: 'Context', outcome: 'Collect code, cloud, runtime data' },
  { label: 'Attack Planning', outcome: 'Generate intelligent attack paths' },
  { label: 'Black + White Box', outcome: 'Execute targeted tests' },
  { label: 'Validate', outcome: 'Prove exploitability' },
  { label: 'Root Cause', outcome: 'Identify why vulnerability exists' },
  { label: 'Remediate', outcome: 'Generate fix guidance' },
  { label: 'Governance', outcome: 'Apply approvals' },
  { label: 'Verify', outcome: 'Re-test and prove fix' },
]

// Why OpsMx cards
const whyOpsMx = [
  {
    title: 'Continuous Testing',
    description: 'Security testing evolves with every software change.',
  },
  {
    title: 'Context-Aware Pentesting',
    description: 'Combine runtime, cloud, APIs, code, dependencies and ownership.',
  },
  {
    title: 'LLM-Powered Attack Reasoning',
    description: 'Use AI to intelligently plan and adapt penetration tests.',
  },
  {
    title: 'AI-Assisted Remediation',
    description: 'Generate developer-ready remediation guidance instead of just reports.',
  },
  {
    title: 'Human + AI Workflow',
    description: 'Coordinate developers, security, platform teams and AI agents.',
  },
  {
    title: 'Verified Risk Reduction',
    description: 'Continuously validate fixes and prove vulnerabilities are actually remediated.',
  },
]

// Comparison
const comparison = {
  traditional: [
    'Annual',
    'Mostly Black Box',
    'Static Reports',
    'Large Backlogs',
    'Manual Retesting',
    'Limited Context',
  ],
  opsmx: [
    'Continuous',
    'Black + White Box',
    'AI-Assisted',
    'Incremental',
    'Context-Aware',
    'Verified Fixes',
  ],
}

// Supported testing
const supportedTesting = [
  'Applications',
  'APIs',
  'Cloud',
  'Kubernetes',
  'Containers',
  'Supply Chain',
  'Secrets',
  'AI Applications',
  'MCP Servers',
  'Authentication',
  'Authorization',
  'Business Logic',
  'OWASP Top 10',
  'Infrastructure',
]

// Integrations
const integrations = [
  'GitHub',
  'GitLab',
  'Bitbucket',
  'Jenkins',
  'Azure DevOps',
  'AWS',
  'Azure',
  'GCP',
  'Kubernetes',
  'Jira',
  'ServiceNow',
  'Slack',
]

// Premium Hero Workflow Animation Component
function PremiumWorkflowAnimation() {
  const steps = [
    { label: 'Code Change', color: '#3b82f6' },
    { label: 'Context', color: '#06b6d4' },
    { label: 'Attack Plan', color: '#f97316' },
    { label: 'Black Box', color: '#ef4444' },
    { label: 'White Box', color: '#d946ef' },
    { label: 'Validate', color: '#eab308' },
    { label: 'Root Cause', color: '#84cc16' },
    { label: 'Remediate', color: '#22d3ee' },
    { label: 'Approve', color: '#a78bfa' },
    { label: 'Verify', color: '#10b981' },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  }

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }

  const pulseVariants = {
    animate: {
      boxShadow: [
        '0 0 0 0 rgba(255, 255, 255, 0.7)',
        '0 0 20 10 rgba(255, 255, 255, 0)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Vertical workflow for all screens */}
      <div className="flex flex-col items-center gap-2">
        {steps.map((step, idx) => {
          // Calculate pulse delay based on position
          const totalDuration = 2 * steps.length
          const delay = (idx * 2) % totalDuration

          return (
            <div key={idx} className="w-full">
              {/* Animated node */}
              <motion.div
                variants={nodeVariants}
                className="flex justify-center mb-2"
              >
                <motion.div
                  animate="animate"
                  variants={pulseVariants}
                  transition={{
                    delay: delay / 10,
                  }}
                  className="px-6 py-3 rounded-full border-2 text-center whitespace-nowrap"
                  style={{
                    borderColor: step.color,
                    backgroundColor: `${step.color}15`,
                  }}
                >
                  <span
                    style={{ color: step.color }}
                    className="text-sm font-bold"
                  >
                    {step.label}
                  </span>
                </motion.div>
              </motion.div>

              {/* Arrow */}
              {idx < steps.length - 1 && (
                <div className="flex justify-center mb-2">
                  <ArrowRight className="w-5 h-5 text-slate-500 rotate-90" />
                </div>
              )}
            </div>
          )
        })}

        {/* Final verified fix highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-4 px-8 py-4 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center gap-3"
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          <span className="font-bold text-emerald-400">✓ Verified Fix</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Problem card
function ProblemCard({ problem, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-white/20 hover:bg-white/8 transition-all"
    >
      <h3 className="text-lg font-bold text-white mb-3">{problem.title}</h3>
      <p className="text-slate-400 leading-relaxed">{problem.description}</p>
    </motion.div>
  )
}

// Context card
function ContextCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all"
    >
      <div className="flex items-start gap-4 mb-4">
        <card.icon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
        <h3 className="text-lg font-bold text-white">{card.title}</h3>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
    </motion.div>
  )
}

// Why OpsMx card
function WhyCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all"
    >
      <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
    </motion.div>
  )
}

export default function AIPenetrationTestingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Seo route="/ai-penetration-testing" />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" /> AI Penetration Testing
            </div>

            <h1 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Continuous AI{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Penetration Testing
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Continuously validate exploitable risk across applications, APIs, cloud, Kubernetes, AI systems, and software supply chains—and drive every finding to verified remediation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="/request-a-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-400 hover:to-red-400 transition-all duration-200 shadow-lg shadow-orange-500/20 inline-flex items-center justify-center gap-2"
              >
                Request Demo <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                Watch Product Tour
              </button>
            </div>
          </motion.div>

          {/* Premium Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 p-12 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2"
          >
            <PremiumWorkflowAnimation />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">
              Annual penetration testing cannot keep up with modern software.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <ProblemCard key={idx} problem={problem} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Continuous Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-8"
          >
            Security testing should evolve as fast as your software.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-slate-300 leading-relaxed"
          >
            <p>
              Modern software changes continuously. Every commit introduces:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">New APIs</div>
                  <div className="text-sm text-slate-400">Expanding attack surface</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">New Code</div>
                  <div className="text-sm text-slate-400">Introduces vulnerabilities</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">New Dependencies</div>
                  <div className="text-sm text-slate-400">Supply chain risk</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">New Cloud Resources</div>
                  <div className="text-sm text-slate-400">Unintended exposure</div>
                </div>
              </div>
            </div>
            <p className="pt-4 border-t border-white/10">
              Penetration testing should continuously adapt instead of waiting for the next annual assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-6">
              Context changes everything.
            </h2>
            <p className="text-xl text-slate-300">
              <span className="block">Black-box testing tells you what attackers see.</span>
              <span className="block text-white font-bold">White-box testing tells you why it exists.</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {contextCards.map((card, idx) => (
              <ContextCard key={idx} card={card} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Incremental Testing Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-8"
          >
            Test what changed—not everything.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 mb-8 leading-relaxed"
          >
            Instead of running one massive penetration test every year, OpsMx continuously identifies new APIs, code, services, infrastructure, and attack paths—and performs targeted penetration testing only where risk has changed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-4 gap-4"
          >
            {['Faster testing', 'Smaller backlogs', 'Continuous validation', 'Lower effort'].map((benefit, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-white/10 bg-white/5">
                <div className="text-sm font-bold text-white">{benefit}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-16 text-center"
          >
            AI Penetration Testing Workflow
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-orange-400">{idx + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{step.label}</h3>
                </div>
                <p className="text-xs text-slate-400">{step.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OpsMx Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-16 text-center"
          >
            Why OpsMx?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyOpsMx.map((card, idx) => (
              <WhyCard key={idx} card={card} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-16 text-center"
          >
            Traditional vs OpsMx
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-red-500/20 bg-red-500/5 p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Traditional</h3>
              <ul className="space-y-3">
                {comparison.traditional.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* OpsMx */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">OpsMx</h3>
              <ul className="space-y-3">
                {comparison.opsmx.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supported Testing */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-16 text-center"
          >
            Comprehensive Testing Coverage
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4">
            {supportedTesting.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all text-center"
              >
                <div className="font-bold text-white">{item}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Works With Your Stack
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="px-4 py-2 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-sm font-medium hover:border-orange-500/30 hover:bg-orange-500/5 transition-all"
              >
                {integration}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-orange-950/20 to-slate-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-white mb-6">
              Don't just find vulnerabilities. Get them fixed.
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              OpsMx continuously discovers exploitable risk, coordinates remediation, and verifies that vulnerabilities are actually resolved.
            </p>
            <a
              href="/request-a-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-400 hover:to-red-400 transition-all duration-200 shadow-lg shadow-orange-500/20 inline-flex items-center justify-center gap-2"
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
