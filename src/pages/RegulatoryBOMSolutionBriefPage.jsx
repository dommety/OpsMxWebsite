import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Box, Lock, Cpu, Code2, Zap, Shield, GitBranch, CheckCircle2, ChevronDown, Menu } from 'lucide-react'
import Navbar from '../components/Navbar'

// X-BOM Platform Animation
function XBOMPlatformAnimation() {
  const boms = [
    { label: 'SBOM', angle: 0 },
    { label: 'CBOM', angle: 51.4 },
    { label: 'QBOM', angle: 102.8 },
    { label: 'AI-BOM', angle: 154.2 },
    { label: 'HBOM', angle: 205.6 },
    { label: 'DBOM', angle: 257 },
    { label: 'Open Source BOM', angle: 308.4 },
  ]

  const workflow = [
    { label: 'Compliance', color: '#22d3ee' },
    { label: 'Risk', color: '#f87171' },
    { label: 'Remediation', color: '#34d399' },
    { label: 'Verification', color: '#10b981' },
  ]

  return (
    <div className="relative py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50 rounded-2xl border border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          {/* X-BOM Platform Center */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Center Circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute w-32 h-32 rounded-full border-2 border-cyan-500 bg-cyan-500/10 flex items-center justify-center"
            >
              <p className="text-center">
                <span className="text-xs font-bold text-cyan-400">OpsMx</span>
                <span className="text-xs text-slate-400 block">X-BOM Platform</span>
              </p>
            </motion.div>

            {/* Orbiting BOMs */}
            {boms.map((bom, idx) => {
              const rad = (bom.angle * Math.PI) / 180
              const x = 130 * Math.cos(rad)
              const y = 130 * Math.sin(rad)

              return (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.08, duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  className="px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 text-xs font-semibold text-white whitespace-nowrap"
                >
                  {bom.label}
                </motion.div>
              )
            })}
          </div>

          {/* Workflow */}
          <div className="space-y-3 w-full max-w-md">
            {workflow.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-semibold text-white">{item.label}</span>
                {idx < workflow.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-slate-600 ml-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Challenge Card
function ChallengeCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-red-500/30 transition-all"
    >
      <Icon className="w-6 h-6 text-red-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-300">{description}</p>
    </motion.div>
  )
}

// BOM Card
function BOMCard({ icon: Icon, label, items, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-all"
      style={{ borderColor: `${color}40` }}
    >
      <Icon className="w-6 h-6 mb-3" style={{ color }} />
      <h3 className="text-sm font-bold text-white mb-3">{label}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// Regulation Card
function RegulationCard({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-5 hover:border-cyan-500/30 transition-all"
    >
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-300">{description}</p>
    </motion.div>
  )
}

// Dashboard Metric Card
function MetricCard({ label }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border border-white/10 bg-white/5 p-4 text-center"
    >
      <p className="text-xs font-bold text-white">{label}</p>
    </motion.div>
  )
}

// Outcome Card
function OutcomeCard({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-6"
    >
      <CheckCircle2 className="w-6 h-6 text-cyan-400 mb-3" />
      <p className="text-sm font-bold text-white mb-2">{title}</p>
      <p className="text-xs text-slate-300">{description}</p>
    </motion.div>
  )
}

// Use Case Card
function UseCaseCard({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-5"
    >
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-300">{description}</p>
    </motion.div>
  )
}

// FAQ Item
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border border-white/10 rounded-lg overflow-hidden bg-white/2"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <h3 className="text-sm font-bold text-white text-left">{question}</h3>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-4 text-xs text-slate-400 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  )
}

const challenges = [
  {
    icon: Shield,
    title: 'Regulatory Pressure',
    description: 'CERT-In, EO 14028, CRA, RBI, SEBI require continuous BOM evidence—not static reports.',
  },
  {
    icon: Code2,
    title: 'AI Supply Chains',
    description: 'Models, prompts, agents, and datasets need inventory and governance, but SBOMs do not cover AI.',
  },
  {
    icon: Lock,
    title: 'Cryptographic Risk',
    description: 'Quantum-ready migration and weak crypto identification need CBOM and QBOM visibility.',
  },
  {
    icon: GitBranch,
    title: 'Evidence Sprawl',
    description: 'Multiple tools generate scattered BOMs, reports, and evidence across systems.',
  },
  {
    icon: Zap,
    title: 'Slow Remediation',
    description: 'BOM findings lack context on ownership, blast radius, and fix priority.',
  },
  {
    icon: Box,
    title: 'Manual Audits',
    description: 'Compliance evidence is prepared manually before audits, not continuously maintained.',
  },
]

const boms = [
  {
    icon: Box,
    label: 'SBOM',
    color: '#22d3ee',
    items: ['Software packages', 'Dependencies', 'Licenses', 'Provenance'],
  },
  {
    icon: Lock,
    label: 'CBOM',
    color: '#f87171',
    items: ['Algorithms', 'Certificates', 'Keys', 'Crypto Libraries', 'PQC readiness'],
  },
  {
    icon: Cpu,
    label: 'QBOM',
    color: '#fbbf24',
    items: ['Quantum-vulnerable crypto', 'Migration readiness', 'Sensitive data exposure'],
  },
  {
    icon: Code2,
    label: 'AI-BOM',
    color: '#a78bfa',
    items: ['Models', 'Prompts', 'Datasets', 'Agents', 'MCP Servers', 'Frameworks', 'SDKs'],
  },
  {
    icon: Shield,
    label: 'HBOM',
    color: '#34d399',
    items: ['Hardware', 'Firmware', 'Servers', 'Cloud', 'Runtime', 'Infrastructure'],
  },
  {
    icon: GitBranch,
    label: 'DBOM',
    color: '#60a5fa',
    items: ['Build provenance', 'CI/CD', 'Containers', 'Deployments', 'Release approvals'],
  },
]

const workflowSteps = [
  { label: 'Discover', description: 'Scan environment for all software, AI, crypto, hardware, and delivery artifacts.' },
  { label: 'Generate BOMs', description: 'Create SBOM, CBOM, QBOM, AI-BOM, HBOM, DBOM, Open Source BOM from inventory.' },
  { label: 'Correlate Risk', description: 'Connect BOMs with vulnerability data, cloud exposure, runtime context, and ownership.' },
  { label: 'Prioritize', description: 'Rank findings by blast radius, criticality, remediation effort, and regulatory impact.' },
  { label: 'Assign Owner', description: 'Route findings to application owners, security teams, and platform engineers.' },
  { label: 'Remediate', description: 'Track fixes, pull requests, deployments, and remediation evidence.' },
  { label: 'Verify', description: 'Re-scan to confirm vulnerabilities are fixed and evidence is audit-ready.' },
  { label: 'Report', description: 'Generate compliance reports, audit packages, and executive dashboards.' },
]

const regulations = [
  { title: 'CERT-In', description: 'Continuous software supply chain visibility and vulnerability disclosure.' },
  { title: 'MeitY', description: 'Indian software security and supply chain governance requirements.' },
  { title: 'Executive Order 14028', description: 'US federal software supply chain security and SBOMs.' },
  { title: 'CRA', description: 'EU Cyber Resilience Act demands for software security and vulnerability management.' },
  { title: 'EUVD', description: 'EU Vulnerability Disclosure Directive for coordinated vulnerability response.' },
  { title: 'RBI', description: 'Reserve Bank of India guidelines for software security and risk management.' },
  { title: 'SEBI', description: 'Securities and Exchange Board of India compliance on cybersecurity.' },
  { title: 'AI Governance', description: 'Emerging requirements for AI system transparency, safety, and accountability.' },
  { title: 'NIST SSDF', description: 'US NIST Secure Software Development Framework.' },
  { title: 'ISO 27001', description: 'International information security management standard.' },
  { title: 'ISO 42001', description: 'AI governance and management systems.' },
]

const metrics = [
  'X-BOM Coverage',
  'Compliance Score',
  'Audit Readiness',
  'Verified Fixes',
  'AI Assets',
  'Open Source Health',
  'Crypto Readiness',
  'Quantum Readiness',
  'Critical Risks',
  'SLA Status',
]

const outcomes = [
  {
    title: '50–80% less manual compliance effort',
    description: 'Continuous evidence generation vs. manual audit preparation.',
  },
  {
    title: 'Audit preparation reduced from weeks to hours',
    description: 'Pre-built compliance packages and audit-ready evidence.',
  },
  {
    title: 'Faster owner identification',
    description: 'Automatic routing to application owners and remediation teams.',
  },
  {
    title: 'Better risk prioritization',
    description: 'Context-driven prioritization vs. scanner-generated noise.',
  },
  {
    title: 'Continuous compliance evidence',
    description: 'Always-current audit logs, not pre-audit document preparation.',
  },
  {
    title: 'Better executive visibility',
    description: 'Real-time dashboards vs. manual reporting cycles.',
  },
]

const useCases = [
  { title: 'Regulatory Reporting', description: 'Generate audit-ready evidence for CERT-In, EO 14028, CRA, RBI, SEBI.' },
  { title: 'AI Governance', description: 'Inventory and govern AI systems across models, prompts, agents, and datasets.' },
  { title: 'Open Source Governance', description: 'Track maintainer health, community activity, contributor geography, and project sustainability.' },
  { title: 'Supply Chain Security', description: 'End-to-end traceability from code to build to deployment to production.' },
  { title: 'Cryptographic Readiness', description: 'Identify quantum-vulnerable crypto and track PQC migration progress.' },
  { title: 'Audit Preparation', description: 'Generate pre-audit evidence packages and compliance dashboards.' },
]

const faqs = [
  {
    question: 'What is Regulatory BOM Reporting?',
    answer: 'Regulatory BOM Reporting is the continuous generation and management of multiple Bills of Materials (SBOM, CBOM, QBOM, AI-BOM, HBOM, DBOM, Open Source BOM) to produce audit-ready compliance evidence across regulatory frameworks like CERT-In, EO 14028, CRA, RBI, and SEBI.',
  },
  {
    question: 'What is X-BOM?',
    answer: 'X-BOM (Extended BOM) is the unified platform spanning seven Bills of Materials: Software (SBOM), Cryptographic (CBOM), Quantum (QBOM), AI (AI-BOM), Hardware (HBOM), Delivery (DBOM), and Open Source BOM—managed from one system.',
  },
  {
    question: 'How is OpsMx different from an SBOM tool?',
    answer: 'Traditional SBOM tools generate software inventory. OpsMx goes further with X-BOM (7 BOM types), correlates BOMs to risk and remediation, connects findings to owners, drives verified fixes, and produces continuous regulatory evidence—not just inventory.',
  },
  {
    question: 'Which BOMs does OpsMx support?',
    answer: 'OpsMx supports SBOM (software), CBOM (cryptography), QBOM (quantum readiness), AI-BOM (AI systems), HBOM (hardware), DBOM (delivery), and Open Source BOM (community health and supply chain trust).',
  },
  {
    question: 'How does OpsMx support EO 14028?',
    answer: 'OpsMx generates SBOMs, traces code-to-cloud supply chain, tracks vulnerabilities, verifies remediation, and produces audit evidence required by Executive Order 14028 for federal software procurement.',
  },
  {
    question: 'How does OpsMx support CRA?',
    answer: 'OpsMx supports EU Cyber Resilience Act compliance through continuous vulnerability management, SBOM generation, active remediation tracking, verified fixes, and audit-ready evidence for software vendors.',
  },
  {
    question: 'What is AI-BOM?',
    answer: 'AI-BOM is an inventory of AI systems: models, prompts, agents, datasets, MCP servers, embeddings, frameworks, and SDKs. It enables governance, risk assessment, and compliance for organizations using AI across applications.',
  },
  {
    question: 'What is Open Source BOM?',
    answer: 'Open Source BOM tracks maintainer health, contributor geography, community activity, MTTR, project sustainability, and supply chain trust signals—helping organizations assess risk and sustainability of open-source dependencies.',
  },
  {
    question: 'Does OpsMx support SPDX?',
    answer: 'Yes. OpsMx generates SBOMs in SPDX format and can ingest SPDX-formatted SBOMs from third-party tools for normalization and correlation with other BOM types.',
  },
  {
    question: 'Does OpsMx support CycloneDX?',
    answer: 'Yes. OpsMx generates and ingests CycloneDX-formatted SBOMs, enabling integration with existing SBOM tools and compliance workflows.',
  },
  {
    question: 'Can OpsMx ingest third-party SBOMs?',
    answer: 'Yes. OpsMx can ingest SPDX and CycloneDX SBOMs from other tools and correlate them with AI-BOM, CBOM, QBOM, HBOM, DBOM, and Open Source BOM data for unified risk assessment and compliance reporting.',
  },
]

export default function RegulatoryBOMSolutionBriefPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-400 mb-6">
              Solution Brief
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              OpsMx Regulatory <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">BOM Reporting Suite</span>
            </h1>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Continuously generate Software, AI, Cryptographic, Quantum, Hardware, Delivery, and Open Source Bills of Materials while connecting them to risk prioritization, remediation workflows, verification, and regulatory reporting.
            </p>
            <p className="text-lg text-slate-400 mb-8 font-semibold">One Platform. Every BOM. Every Regulation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#download" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <XBOMPlatformAnimation />
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-6">Executive Summary</h2>
            <div className="space-y-4 mb-8 text-slate-300">
              <p>
                Modern software now consists of open source components, AI systems, APIs, containers, cloud infrastructure, and delivery pipelines. Meanwhile, regulations like CERT-In, Executive Order 14028, CRA, RBI, and SEBI demand continuous evidence of security, governance, and compliance.
              </p>
              <p>
                Traditional SBOM tools generate software inventory. But SBOMs alone are insufficient. Organizations need visibility into AI systems, cryptographic algorithms, quantum readiness, hardware supply chains, delivery provenance, and open-source health—unified into one platform.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-cyan-500/30 bg-cyan-500/5">
              <p className="text-sm text-cyan-300 italic">
                "A BOM is only valuable if it helps teams understand exposure, fix risk, and prove compliance."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Challenge */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            The Business Challenge
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, idx) => (
              <ChallengeCard key={idx} {...challenge} />
            ))}
          </div>
        </div>
      </section>

      {/* SBOM Not Enough */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Why SBOM Alone Is Not Enough
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Traditional SBOM</h3>
              <ul className="space-y-2">
                {['Software packages', 'Versions', 'Licenses', 'Static inventory'].map((item, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">OpsMx X-BOM Suite</h3>
              <ul className="space-y-2">
                {['Software, AI, Crypto, Quantum, Hardware, Delivery, Community', 'Runtime visibility', 'Risk correlation', 'Remediation workflow', 'Continuous compliance'].map((item, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OpsMx Suite */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            The OpsMx Regulatory BOM Reporting Suite
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boms.map((bom, idx) => (
              <BOMCard key={idx} {...bom} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            From Inventory to Verified Risk Reduction
          </motion.h2>
          <div className="space-y-6">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex gap-4 p-6 rounded-lg border border-white/10 bg-white/5"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-cyan-400">{idx + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white mb-1">{step.label}</h3>
                  <p className="text-xs text-slate-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Alignment */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Regulatory Alignment
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regulations.map((reg, idx) => (
              <RegulationCard key={idx} {...reg} />
            ))}
          </div>
        </div>
      </section>

      {/* Executive Dashboard */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Executive Dashboard
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {metrics.map((metric, idx) => (
              <MetricCard key={idx} label={metric} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Business Outcomes & ROI
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {outcomes.map((outcome, idx) => (
              <OutcomeCard key={idx} {...outcome} />
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-xs text-slate-500 italic"
          >
            Benefits vary by environment and process maturity.
          </motion.p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Use Cases
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, idx) => (
              <UseCaseCard key={idx} {...useCase} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-20 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-6">Download the Solution Brief</h2>
            <p className="text-lg text-slate-300 mb-8">Get the complete guide to Regulatory BOM Reporting in PDF format.</p>
            <a
              href="/resources/solution-briefs/regulatory-bom-reporting-suite.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-5 h-5" />
              Download PDF Solution Brief
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-blue-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">Ready to Operationalize Regulatory BOM Reporting?</h2>
            <p className="text-lg text-slate-300 mb-8">
              See how OpsMx helps enterprises generate every BOM, understand risk, drive remediation, verify fixes, and continuously report compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/opsmx/advanced-bom-reporting" className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all">
                Explore BOM Reporting Suite
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
