import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Package, Globe, Code2, Lock, GitBranch, Cloud, CheckCircle, Zap } from 'lucide-react'
import Navbar from '../components/Navbar'

const bomTypes = [
  {
    title: 'SBOM',
    icon: Package,
    description: 'Software components, libraries, dependencies, and versions',
    color: '#a78bfa',
  },
  {
    title: 'SaaSBOM',
    icon: Globe,
    description: 'Third-party SaaS products, cloud services, and external platforms',
    color: '#60a5fa',
  },
  {
    title: 'API-BOM',
    icon: Code2,
    description: 'APIs, endpoints, webhooks, data flows, and integrations',
    color: '#22d3ee',
  },
  {
    title: 'AI-BOM',
    icon: Zap,
    description: 'AI models, datasets, prompts, training data, and AI-generated code risks',
    color: '#f59e0b',
  },
  {
    title: 'CBOM',
    icon: Lock,
    description: 'Cryptographic components, algorithms, certificates, and key management',
    color: '#f87171',
  },
  {
    title: 'Pipeline-BOM',
    icon: GitBranch,
    description: 'CI/CD pipelines, build tools, deployment systems, and automation workflows',
    color: '#34d399',
  },
  {
    title: 'Cloud/Runtime BOM',
    icon: Cloud,
    description: 'Runtime containers, Kubernetes clusters, cloud resources, and infrastructure',
    color: '#fbbf24',
  },
  {
    title: 'Compliance Context',
    icon: CheckCircle,
    description: 'Vulnerabilities, licenses, ownership, controls, and regulatory requirements',
    color: '#60a5fa',
  },
]

const differences = [
  {
    title: 'One-Stop Supply Chain Visibility',
    description: 'See everything: software, SaaS, APIs, AI, cryptography, pipelines, infrastructure, and compliance in one unified view.',
  },
  {
    title: 'Continuous, Not Static',
    description: 'Traditional SBOMs are snapshots. X-BOM continuously updates as your infrastructure, code, and AI systems evolve.',
  },
  {
    title: 'Enriched with Context',
    description: 'Every component is mapped to vulnerabilities, licenses, owners, applications, environments, and compliance requirements.',
  },
  {
    title: 'Built for Compliance',
    description: 'Generate audit-ready reports for regulatory, security, and third-party assessments.',
  },
  {
    title: 'Connected to Action',
    description: 'Link inventory to vulnerability remediation, patch management, and security workflows.',
  },
  {
    title: 'Enterprise-Ready',
    description: 'Support for complex multi-cloud, multi-environment, and multi-application enterprises.',
  },
]

const outcomes = [
  {
    title: 'Reduce Audit Effort',
    description: 'Automated inventory and compliance reporting cuts manual audit work in half.',
  },
  {
    title: 'Improve Visibility',
    description: 'Discover hidden third-party, SaaS, and infrastructure risks others miss.',
  },
  {
    title: 'Accelerate Compliance',
    description: 'Meet SBOM mandates, regulatory requirements, and customer assessments faster.',
  },
  {
    title: 'Prioritize Risk',
    description: 'Focus on exploitable vulnerabilities with context about actual exposure.',
  },
  {
    title: 'Enable Remediation',
    description: 'Connect inventory to actionable remediation workflows and patch management.',
  },
  {
    title: 'Support Governance',
    description: 'Establish clear ownership and accountability across software and infrastructure.',
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
              X-BOM: Complete Software Supply Chain Visibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Beyond SBOM</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              OpsMx X-BOM gives enterprises a complete, continuously updated view of software, SaaS, APIs, AI assets, cryptography, pipelines, infrastructure, vulnerabilities, and compliance risks — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                View X-BOM Capabilities
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
            <h2 className="text-4xl font-black text-white mb-6 text-center">SBOM Alone Is No Longer Enough</h2>
            <p className="text-lg text-slate-300 text-center mb-8">
              Modern enterprises need visibility across a complex ecosystem:
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
            Why OpsMx X-BOM Is Different
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
            From Inventory to Action
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
            X-BOM discovers components, normalizes data across sources, enriches with vulnerability and compliance context, prioritizes risk, connects to remediation, and generates audit-ready reports.
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
            Built for Modern Regulatory Requirements
          </motion.h2>
          <p className="text-slate-300 text-center mb-8">
            OpsMx X-BOM supports organizations managing compliance across:
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
            <h2 className="text-4xl font-black text-white mb-4">See Your Complete X-BOM in One Place</h2>
            <p className="text-lg text-slate-300 mb-8">
              Get comprehensive visibility into your software supply chain with continuous updates and compliance context.
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
