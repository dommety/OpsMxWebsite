import { motion } from 'framer-motion'
import {
  ArrowRight,
  Eye,
  Zap,
  AlertCircle,
  Wrench,
  CheckCircle2,
  Lock,
  Shield,
  Network,
  Code2,
  GitBranch,
  Cloud,
  Workflow,
} from 'lucide-react'
import Navbar from '../components/Navbar'

// Problem cards
const problems = [
  {
    title: 'Unknown APIs',
    description: 'Shadow, zombie, internal, external, third-party, and AI-connected APIs remain outside security visibility.',
  },
  {
    title: 'Unclear Risk',
    description: 'Security teams need exposure, exploitability, data sensitivity, runtime usage, ownership, and business context.',
  },
  {
    title: 'No Remediation Workflow',
    description: 'API findings need to move through security, developers, platform teams, approvals, and verification before risk is reduced.',
  },
]

// What OpsMx Does
const capabilities = [
  {
    title: 'Discover Everything',
    description: 'Inventory REST, GraphQL, gRPC, SOAP, WebSocket, internal, external, third-party, shadow, zombie, and AI-connected APIs.',
    icon: Eye,
    color: '#06b6d4',
  },
  {
    title: 'Test Like an Attacker',
    description: 'Validate OWASP API Top 10, broken authentication, authorization flaws, business logic abuse, data exposure, and misconfigurations.',
    icon: Zap,
    color: '#0ea5e9',
  },
  {
    title: 'Prioritize What Matters',
    description: 'Rank API risks using exploitability, exposure, runtime usage, sensitive data, ownership, and business impact.',
    icon: AlertCircle,
    color: '#fbbf24',
  },
  {
    title: 'Remediate Faster',
    description: 'Generate developer-ready guidance, route work to owners, create tickets, and support code/config remediation.',
    icon: Wrench,
    color: '#34d399',
  },
  {
    title: 'Verify Risk Reduction',
    description: 'Re-test fixes, validate closure, preserve audit evidence, and prove that API risk is reduced.',
    icon: CheckCircle2,
    color: '#a78bfa',
  },
]

// Workflow steps for the animated diagram
const workflowSteps = [
  { name: 'Discover', description: 'Inventory all APIs' },
  { name: 'Attack Simulation', description: 'Test like an attacker' },
  { name: 'Prioritize', description: 'Real business risk' },
  { name: 'Diagnose', description: 'Root cause analysis' },
  { name: 'Remediate', description: 'Developer guidance' },
  { name: 'Approve', description: 'Human approval' },
  { name: 'Verify', description: 'Verified Fix' },
]

// Differentiators
const differentiators = [
  {
    title: 'Remediation Workflow, Not Just Findings',
    description: 'OpsMx helps route API issues to the right owners, coordinate fixes, apply approvals, and track risk to verified closure.',
  },
  {
    title: 'Context Beyond API Traffic',
    description: 'OpsMx correlates API findings with code, dependencies, cloud, Kubernetes, runtime, ownership, and business context.',
  },
  {
    title: 'AI-Assisted Fix Guidance',
    description: 'OpsMx helps generate developer-ready remediation guidance for vulnerable endpoints, unsafe authentication, exposed data, dependency risks, and configuration issues.',
  },
  {
    title: 'Human + AI Governance',
    description: 'OpsMx coordinates security teams, developers, platform engineers, approvers, and AI agents through governed workflows.',
  },
  {
    title: 'Verified Fixes',
    description: 'OpsMx does not stop at ticket creation. It validates that fixes work and that business risk is actually reduced.',
  },
]

// API risks covered
const apiRisks = [
  'Shadow APIs',
  'Zombie APIs',
  'Broken Object Level Authorization',
  'Broken Authentication',
  'Excessive Data Exposure',
  'Injection',
  'Business Logic Abuse',
  'Misconfigurations',
  'Sensitive Data Leakage',
  'API Drift',
  'Third-Party API Risk',
  'AI / MCP-connected API Risk',
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

// Animated workflow diagram component
function WorkflowDiagram() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  // Animated pulse moving through workflow
  const pulseVariants = {
    animate: {
      opacity: [0, 1, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        times: [0, 0.5, 1],
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="w-full"
    >
      {/* Desktop workflow */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between gap-3 mb-12">
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={nodeVariants}
              className="flex flex-col items-center flex-1"
            >
              {/* Node */}
              <motion.div
                className="w-14 h-14 rounded-full border-2 border-cyan-500/50 bg-slate-900 flex items-center justify-center mb-3 relative"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(6, 182, 212, 0.4)',
                    '0 0 20 8 rgba(6, 182, 212, 0)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: idx * 0.357,
                }}
              >
                <div className="text-xs font-bold text-cyan-400">{idx + 1}</div>
              </motion.div>

              {/* Step name */}
              <div className="text-center">
                <div className="text-sm font-bold text-white mb-1">{step.name}</div>
                <div className="text-xs text-slate-400">{step.description}</div>
              </div>

              {/* Connector line */}
              {idx < workflowSteps.length - 1 && (
                <div className="absolute left-1/2 top-6 w-24 h-0.5 bg-gradient-to-r from-cyan-500/50 to-cyan-500/0 transform translate-x-32" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile workflow */}
      <div className="lg:hidden space-y-4">
        {workflowSteps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={nodeVariants}
            className="flex items-center gap-4"
          >
            {/* Node */}
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-cyan-500/50 bg-slate-900 flex items-center justify-center flex-shrink-0"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(6, 182, 212, 0.4)',
                  '0 0 15 6 rgba(6, 182, 212, 0)',
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: idx * 0.357,
              }}
            >
              <div className="text-xs font-bold text-cyan-400">{idx + 1}</div>
            </motion.div>

            {/* Step info */}
            <div>
              <div className="text-sm font-bold text-white">{step.name}</div>
              <div className="text-xs text-slate-400">{step.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Problem card component
function ProblemCard({ problem, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-red-500/20 bg-red-500/5 p-6 hover:border-red-500/40 hover:bg-red-500/10 transition-all"
    >
      <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{problem.description}</p>
    </motion.div>
  )
}

// Capability card component
function CapabilityCard({ capability, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-white/10 bg-slate-900/50 p-6 hover:border-white/20 hover:bg-slate-900 transition-all"
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="p-3 rounded-lg flex-shrink-0"
          style={{
            background: `${capability.color}15`,
            border: `1px solid ${capability.color}30`,
          }}
        >
          <capability.icon className="w-5 h-5" style={{ color: capability.color }} />
        </div>
        <h3 className="text-lg font-bold text-white flex-1">{capability.title}</h3>
      </div>
      <p className="text-sm text-slate-300 leading-relaxed">{capability.description}</p>
    </motion.div>
  )
}

// Differentiator card component
function DifferentiatorCard({ diff, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-6 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
    >
      <h3 className="text-lg font-bold text-white mb-3">{diff.title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{diff.description}</p>
    </motion.div>
  )
}

export default function APISecurityPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" /> API Security Platform
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Continuous API Security &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Remediation
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-2 leading-relaxed max-w-3xl mx-auto">
              Discover every API, test it like an attacker, prioritize real risk, drive remediation, and verify that vulnerabilities are actually fixed.
            </p>
            <p className="text-lg text-cyan-300 font-semibold max-w-2xl mx-auto mb-10">
              Finding API issues is not enough. OpsMx helps enterprises get API risks fixed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opsmx.com/talk-to-an-application-security-expert/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2"
              >
                Request a Demo <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                See the Workflow
              </button>
            </div>
          </motion.div>

          {/* Workflow diagram */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 px-4"
          >
            <WorkflowDiagram />
          </motion.div>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-20 px-6 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Finding APIs is not the hard part. Fixing API risk is.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Security teams need more than detection. They need a workflow that gets findings fixed, verified, and closed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <ProblemCard key={idx} problem={problem} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* What OpsMx Does */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              From API findings to verified fixes.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Five core capabilities across the entire remediation workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((cap, idx) => (
              <CapabilityCard key={idx} capability={cap} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Why OpsMx - The strongest section */}
      <section className="py-20 px-6 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">Why OpsMx?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Remediation workflow, not just findings. Real risk reduction, not ticket volume.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {differentiators.map((diff, idx) => (
              <DifferentiatorCard key={idx} diff={diff} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* API Risks Covered */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            API Risks Covered
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {apiRisks.map((risk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-slate-900/50 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{risk}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Works With Your Stack
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-white/10 text-slate-300 text-sm font-medium hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
              >
                {integration}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-cyan-950/30 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Security does not end at detection.
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              OpsMx helps enterprises continuously discover APIs, validate real risk, orchestrate remediation, and verify that vulnerabilities are actually fixed.
            </p>
            <a
              href="https://www.opsmx.com/talk-to-an-application-security-expert/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2"
            >
              Request a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
