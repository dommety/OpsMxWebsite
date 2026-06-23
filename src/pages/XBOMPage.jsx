import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Package, Globe, Code2, Lock, GitBranch, Cloud, CheckCircle, Zap } from 'lucide-react'
import Navbar from '../components/Navbar'

const bomTypes = [
  {
    title: 'SBOM',
    icon: Package,
    description: 'Your code: libraries, frameworks, dependencies. The piece you already track.',
    color: '#a78bfa',
  },
  {
    title: 'SaaSBOM',
    icon: Globe,
    description: 'Third-party software your org actually uses. GitHub, Datadog, Okta, Salesforce—all tracked, all governed.',
    color: '#60a5fa',
  },
  {
    title: 'API-BOM',
    icon: Code2,
    description: 'External APIs, webhooks, and integrations. Know what data flows where and who can access it.',
    color: '#22d3ee',
  },
  {
    title: 'AI-BOM',
    icon: Zap,
    description: 'AI models, ML pipelines, training data, LLMs. Track model provenance and data lineage for compliance.',
    color: '#f59e0b',
  },
  {
    title: 'CBOM',
    icon: Lock,
    description: 'Cryptographic algorithms and key material. Know what crypto you use and when it becomes obsolete.',
    color: '#f87171',
  },
  {
    title: 'Pipeline-BOM',
    icon: GitBranch,
    description: 'Build systems, CI/CD tools, deployment infrastructure. Audit your deployment chain end-to-end.',
    color: '#34d399',
  },
  {
    title: 'Cloud/Runtime BOM',
    icon: Cloud,
    description: 'Kubernetes, containers, cloud accounts, runtime services. See everything that runs your applications.',
    color: '#fbbf24',
  },
  {
    title: 'Compliance Context',
    icon: CheckCircle,
    description: 'Vulnerability status, license obligations, ownership, controls tied to every component. Context that matters.',
    color: '#60a5fa',
  },
]

const differences = [
  {
    title: 'One Inventory, Not Five',
    description: "Stop stitching together point tools. X-BOM covers software, SaaS, APIs, AI, crypto, pipelines, and infrastructure in one place—so your team works from the same data.",
  },
  {
    title: 'Not a Snapshot. Live Data.',
    description: "SBOM tools give you a report. X-BOM continuously updates as vulnerabilities emerge, deployments change, and SaaS subscriptions evolve. Auditors see what's actually running now.",
  },
  {
    title: 'Risk + Ownership + Action',
    description: "Every component shows vulnerability status, license risk, who owns it, and where it's deployed. Your team knows exactly what to fix and who's responsible.",
  },
  {
    title: 'Built for Audit Speed, Not Spreadsheets',
    description: "Compliance questions get answered in minutes, not weeks. Drill into component risk, trace impact across applications, generate audit trails automatically.",
  },
  {
    title: 'Closes the Gap Between Inventory and Remediation',
    description: "Find a vulnerable component? X-BOM routes it to the right team, tracks the fix, verifies the patch. No more inventory sitting in backlog.",
  },
  {
    title: 'Scale Without Chaos',
    description: "Handles multi-cloud, multi-environment, and enterprise complexity natively. Add new SaaS, new cloud accounts, new Kubernetes clusters—X-BOM scales with you.",
  },
]

const outcomes = [
  {
    title: "Audit Response in Days, Not Months",
    description: "Auditors ask for inventory. You answer in 24 hours with complete component, owner, and risk data. No more discovery calls or spreadsheet exports.",
  },
  {
    title: "Find Risk That SBOM Misses",
    description: "Discover shadow SaaS, undocumented APIs, unmanaged AI models, and cryptographic debt. Get ahead of auditors and regulations.",
  },
  {
    title: "Regulatory Readiness, Any Time",
    description: "SOC 2, ISO 27001, NIST, PCI—generate compliant inventory and evidence on demand. No scrambling before assessments.",
  },
  {
    title: "Fix Vulnerabilities That Matter",
    description: "Stop chasing noise. Prioritize by actual exposure, exploitability, and deployment context. Fix the 20 components that matter, not 2,000 that don't.",
  },
  {
    title: "Remediation Ownership That Sticks",
    description: "Route vulnerable components to the right team (code owner, cloud team, DevOps), track progress, verify fixes. No more orphaned vulnerabilities.",
  },
  {
    title: "Board-Ready Risk Reporting",
    description: "Show the board your supply chain posture in real numbers: component count, vulnerability trends, compliance status. Prove you have it under control.",
  },
]

const workflowSteps = [
  'Discover',
  'Normalize',
  'Enrich',
  'Prioritize',
  'Remediate',
  'Report',
]

function BOMCard({ type, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all"
    >
      <div className="flex items-start gap-4">
        <div
          className="p-3 rounded-lg flex-shrink-0"
          style={{ background: `${type.color}18`, border: `1px solid ${type.color}28` }}
        >
          <type.icon className="w-6 h-6" style={{ color: type.color }} />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-white mb-1">{type.title}</h3>
          <p className="text-xs text-slate-400 leading-snug">{type.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function DifferenceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-l-2 border-cyan-500/50 pl-6 py-4"
    >
      <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
      <p className="text-sm text-slate-400">{item.description}</p>
    </motion.div>
  )
}

function OutcomeCard({ outcome, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1 flex-shrink-0" />
        <h3 className="text-sm font-bold text-white">{outcome.title}</h3>
      </div>
      <p className="text-sm text-slate-400">{outcome.description}</p>
    </motion.div>
  )
}

export default function XBOMPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Your SBOM Is Incomplete. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">X-BOM Fixes It.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Traditional SBOMs miss 60% of your supply chain risk. OpsMx X-BOM brings together software, SaaS, APIs, AI models, cryptography, CI/CD pipelines, cloud infrastructure, and compliance context into one source of truth—so auditors get what they need, and your team can actually fix things.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                Get a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                See How It Works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-6 text-center">The SBOM Problem Your Auditors Won't Say Out Loud</h2>
            <p className="text-lg text-slate-300 text-center mb-8">
              You've deployed an SBOM tool. Auditors are happy. But your actual risk? Hidden across systems your SBOM doesn't see:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Internal software and custom code',
                'Open-source dependencies and components',
                'Third-party SaaS platforms and services',
                'Cloud infrastructure and Kubernetes',
                'AI-generated code and ML models',
                'APIs and external integrations',
                'CI/CD pipelines and build tools',
                'Cryptographic components and algorithms',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 mt-8 text-center">
              Traditional SBOMs capture only software components. OpsMx X-BOM extends visibility across your entire software supply chain with continuous updates and compliance context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is X-BOM Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            What OpsMx X-BOM Covers
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bomTypes.map((type, idx) => (
              <BOMCard key={idx} type={type} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Why OpsMx X-BOM Beats Point Tools
          </motion.h2>
          <div className="space-y-6">
            {differences.map((item, idx) => (
              <DifferenceCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            How OpsMx X-BOM Works
          </motion.h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center"
              >
                <div className="px-6 py-3 rounded-lg bg-gradient-to-b from-cyan-950/60 to-slate-900/60 border border-cyan-500/30 text-white font-semibold whitespace-nowrap">
                  {step}
                </div>
                {idx < workflowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-slate-500 mx-4" />
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-slate-400 text-center mt-8">
            Discover all components across code, SaaS, APIs, AI, and infrastructure. Normalize data. Enrich with vulnerability, license, and compliance context. Prioritize exploitable risk. Route to remediation teams. Report to auditors. That's it.
          </p>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-6 text-center"
          >
            Meet Every Audit in One System
          </motion.h2>
          <p className="text-slate-300 text-center mb-8">
            Whether it's SOC 2, ISO 27001, NIST, PCI, or customer RFPs, X-BOM has the data auditors actually ask for:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Software Supply Chain Risk', items: ['SBOM mandates', 'Dependency tracking', 'Vulnerability disclosure'] },
              { title: 'Third-Party & SaaS Risk', items: ['Third-party assessments', 'SaaS governance', 'API risk management'] },
              { title: 'AI & ML Governance', items: ['Model inventory', 'Dataset tracking', 'Training data risk'] },
              { title: 'Cryptographic Controls', items: ['Algorithm compliance', 'Certificate management', 'Key inventory'] },
              { title: 'Infrastructure Security', items: ['Cloud posture', 'Kubernetes governance', 'Runtime visibility'] },
              { title: 'Audit & Compliance', items: ['Evidence generation', 'Ownership mapping', 'Compliance reporting'] },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-sm font-bold text-cyan-400 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((i, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Outcomes Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Customer Outcomes
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, idx) => (
              <OutcomeCard key={idx} outcome={outcome} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-cyan-950/20 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">Stop Fighting Fragmented Tools. Start Owning Your Supply Chain.</h2>
            <p className="text-lg text-slate-300 mb-8">
              See everything that matters—software, SaaS, APIs, AI, crypto, pipelines, cloud—in one place. Audit faster. Fix vulnerabilities. Stay compliant.
            </p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 mx-auto">
              Schedule a Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
