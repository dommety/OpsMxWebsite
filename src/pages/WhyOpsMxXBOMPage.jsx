import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Box, Lock, Cpu, Code2, Zap, CheckCircle2, ChevronDown, Shield, Cloud, GitBranch } from 'lucide-react'
import Navbar from '../components/Navbar'

// X-BOM Unified Platform Animation
function XBOMAnimation() {
  const steps = [
    { label: 'SBOM', color: '#22d3ee' },
    { label: 'AI-BOM', color: '#a78bfa' },
    { label: 'CBOM', color: '#f87171' },
    { label: 'QBOM', color: '#fbbf24' },
    { label: 'HBOM', color: '#34d399' },
    { label: 'DBOM', color: '#60a5fa' },
  ]

  const workflow = [
    'Unified Evidence Graph',
    'Risk Prioritization',
    'Remediation Workflow',
    'Verified Compliance',
  ]

  return (
    <div className="relative py-16 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50 rounded-2xl border border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* BOM Types Row */}
          <div>
            <p className="text-center text-sm font-bold text-cyan-400 mb-6">ALL BOMs</p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="px-4 py-2 rounded-lg border-2 font-semibold text-white"
                  style={{
                    borderColor: step.color,
                    backgroundColor: `${step.color}15`,
                  }}
                >
                  {step.label}
                </motion.div>
              ))}
            </div>

            {/* Arrows */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center text-cyan-400 text-2xl mb-8"
            >
              ↓
            </motion.div>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-4">
            {workflow.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.15, duration: 0.4 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5"
              >
                <CheckCircle2
                  className="w-5 h-5 flex-shrink-0"
                  style={{
                    color: idx === workflow.length - 1 ? '#10b981' : '#22d3ee',
                  }}
                />
                <span className="text-sm font-semibold text-white">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Comparison Column
function ComparisonColumn({ title, items, isOpsMx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-lg border p-6 ${
        isOpsMx
          ? 'border-cyan-500/50 bg-cyan-500/10'
          : 'border-white/10 bg-white/5'
      }`}
    >
      <h3 className={`text-lg font-bold mb-4 ${isOpsMx ? 'text-cyan-400' : 'text-white'}`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isOpsMx ? 'text-cyan-400' : 'text-slate-500'}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// BOM Type Card
function BOMCard({ icon: Icon, label, description, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-all"
      style={{ borderColor: `${color}40` }}
    >
      <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-sm font-bold text-white mb-2">{label}</h3>
      <p className="text-xs text-slate-400">{description}</p>
    </motion.div>
  )
}

// Differentiation Card
function DifferentiationCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-cyan-500/30 transition-all"
    >
      <Icon className="w-6 h-6 text-cyan-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-300">{description}</p>
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
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-cyan-500/30 transition-all"
    >
      <CheckCircle2 className="w-6 h-6 text-cyan-400 mb-3" />
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

const bomCards = [
  {
    icon: Box,
    label: 'SBOM',
    description: 'Software components, dependencies, licenses, vulnerabilities, provenance.',
    color: '#22d3ee',
  },
  {
    icon: Lock,
    label: 'CBOM',
    description: 'Cryptographic algorithms, certificates, keys, weak crypto, PQC readiness.',
    color: '#f87171',
  },
  {
    icon: Cpu,
    label: 'QBOM',
    description: 'Quantum-vulnerable cryptography, migration readiness, long-lived data exposure.',
    color: '#fbbf24',
  },
  {
    icon: Code2,
    label: 'AI-BOM',
    description: 'Models, prompts, agents, MCP servers, datasets, notebooks, AI SDKs.',
    color: '#a78bfa',
  },
  {
    icon: Shield,
    label: 'HBOM',
    description: 'Hardware, firmware, infrastructure, cloud assets, Kubernetes, runtime workloads.',
    color: '#34d399',
  },
  {
    icon: GitBranch,
    label: 'DBOM',
    description: 'Builds, pipelines, containers, artifacts, approvals, deployments, release evidence.',
    color: '#60a5fa',
  },
]

const differentiationCards = [
  {
    icon: Box,
    title: 'Unified X-BOM Platform',
    description: 'Manage multiple BOM types from one system.',
  },
  {
    icon: Cloud,
    title: 'Code-to-Cloud Visibility',
    description: 'Trace risk from code to build to deployment to runtime.',
  },
  {
    icon: CheckCircle2,
    title: 'Continuous Compliance',
    description: 'Keep evidence current instead of preparing reports manually before audits.',
  },
  {
    icon: Zap,
    title: 'Remediation Workflow',
    description: 'Route issues to owners, track fixes, manage exceptions, and verify closure.',
  },
  {
    icon: Shield,
    title: 'Regulatory Reporting',
    description: 'Generate evidence for CERT-In, MeitY, EO 14028, CRA, RBI, SEBI, NIST, and AI governance.',
  },
  {
    icon: GitBranch,
    title: 'Future-Ready BOMs',
    description: 'Support emerging needs around AI, quantum readiness, cryptography, and hardware transparency.',
  },
]

const workflowSteps = ['Generate BOM', 'Correlate Risk', 'Prioritize', 'Assign Owner', 'Remediate', 'Verify', 'Report']

const regulatoryFrameworks = [
  'CERT-In',
  'MeitY',
  'Executive Order 14028',
  'EU Cyber Resilience Act',
  'RBI',
  'SEBI',
  'AI Governance',
  'NIST SSDF',
  'ISO 27001',
]

const outcomes = [
  { title: 'Fewer tools', description: 'Consolidate BOM reporting, compliance, and remediation on one platform.' },
  { title: 'Better risk context', description: 'Correlate BOMs with code, cloud, runtime, and compliance data.' },
  { title: 'Faster remediation', description: 'Route findings to owners and track fixes end-to-end.' },
  { title: 'Audit-ready evidence', description: 'Generate audit logs, compliance mappings, and governance trails.' },
  { title: 'Continuous monitoring', description: 'Update BOMs automatically as systems change.' },
  { title: 'Future-ready compliance', description: 'Support emerging BOMs: AI, quantum, crypto, hardware.' },
]

const comparisonRows = [
  'SBOM generation',
  'SBOM management',
  'SPDX / CycloneDX',
  'AI-BOM',
  'CBOM',
  'QBOM',
  'HBOM',
  'DBOM',
  'Third-party BOM ingestion',
  'Vulnerability correlation',
  'Code-to-cloud visibility',
  'Runtime deployment traceability',
  'Active remediation',
  'Deployment policy enforcement',
  'Continuous compliance monitoring',
]

const faqs = [
  {
    question: 'How is OpsMx different from traditional SBOM tools?',
    answer: 'Traditional SBOM tools help answer "What software do I have?" OpsMx goes further with X-BOM reporting—SBOM, CBOM, QBOM, AI-BOM, HBOM, DBOM—to answer "What software, AI, crypto, hardware, delivery, and runtime risk do I have — and how do I fix it?" OpsMx connects inventory to remediation workflow, compliance evidence, and continuous monitoring.',
  },
  {
    question: 'What is X-BOM reporting?',
    answer: 'X-BOM reporting is the complete suite of Bills of Materials: SBOM (software), AI-BOM (AI systems), CBOM (cryptography), QBOM (quantum readiness), HBOM (hardware), and DBOM (delivery). OpsMx generates and correlates all six from one unified platform.',
  },
  {
    question: 'Does OpsMx support AI-BOM?',
    answer: 'Yes. OpsMx AI-BOM catalogs models, prompts, agents, MCP servers, datasets, notebooks, and AI frameworks. It integrates AI inventory into the compliance and remediation workflow alongside traditional software supply chain data.',
  },
  {
    question: 'Does OpsMx support CBOM and QBOM?',
    answer: 'Yes. OpsMx CBOM tracks cryptographic algorithms, certificates, key management, and identifies weak or deprecated crypto. QBOM identifies quantum-vulnerable cryptography and tracks migration progress to post-quantum cryptography.',
  },
  {
    question: 'Why is DBOM important?',
    answer: 'DBOM (Delivery Bill of Materials) provides visibility into CI/CD pipelines, build systems, containers, artifacts, approvals, and deployments. It closes the gap between code inventory and what actually runs in production, enabling end-to-end supply chain traceability.',
  },
  {
    question: 'How does OpsMx help with regulatory compliance?',
    answer: 'OpsMx generates audit-ready evidence for CERT-In, MeitY, Executive Order 14028, EU Cyber Resilience Act, RBI, SEBI, NIST SSDF, ISO 27001, and AI governance frameworks. BOMs are continuously updated, not manually prepared before audits.',
  },
  {
    question: 'Can OpsMx ingest third-party SBOMs?',
    answer: 'Yes. OpsMx can ingest SPDX and CycloneDX-formatted SBOMs from third-party tools and correlate them with code, cloud, runtime, and compliance data within the unified X-BOM platform.',
  },
]

export default function WhyOpsMxXBOMPage() {
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
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Why OpsMx <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">X-BOM Reporting</span> Is Different
            </h1>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Go beyond traditional SBOM tools with one platform for SBOM, CBOM, QBOM, AI-BOM, HBOM, DBOM, continuous compliance, code-to-cloud visibility, and verified remediation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all">
                Explore BOM Reporting Suite
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* X-BOM Animation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <XBOMAnimation />
        </div>
      </section>

      {/* Traditional vs OpsMx */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Traditional SBOM Tools Stop Too Early
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ComparisonColumn
              title="Traditional BOM Tools"
              items={[
                'SBOM generation',
                'License visibility',
                'Vulnerability matching',
                'Static reports',
                'Limited remediation workflow',
              ]}
              isOpsMx={false}
            />
            <ComparisonColumn
              title="OpsMx X-BOM Reporting"
              items={[
                'SBOM, CBOM, QBOM, AI-BOM, HBOM, DBOM',
                'Code-to-cloud and runtime context',
                'Continuous compliance monitoring',
                'Risk prioritization',
                'Active remediation and verification',
              ]}
              isOpsMx={true}
            />
          </div>
        </div>
      </section>

      {/* One Platform for Every BOM */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            One Platform for Every BOM
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bomCards.map((card, idx) => (
              <BOMCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Where OpsMx Goes Beyond Traditional Vendors
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiationCards.map((card, idx) => (
              <DifferentiationCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Capability Comparison
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-bold text-white">Capability</th>
                  <th className="text-center py-3 px-4 font-bold text-white">Traditional SBOM Tools</th>
                  <th className="text-center py-3 px-4 font-bold text-white">Next-Gen AppSec / SCA Tools</th>
                  <th className="text-center py-3 px-4 font-bold text-white">OpsMx X-BOM</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-slate-300 font-semibold">{row}</td>
                    <td className="py-4 px-4 text-center text-slate-500">Basic</td>
                    <td className="py-4 px-4 text-center text-slate-500">Partial</td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
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
            className="text-4xl font-black text-white mb-4 text-center"
          >
            From Inventory to Action
          </motion.h2>
          <p className="text-center text-slate-300 mb-12 max-w-3xl mx-auto">
            The biggest difference is that OpsMx connects BOM data to the remediation workflow. A BOM is only valuable if it helps teams understand exposure, fix issues, and prove risk reduction.
          </p>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="px-4 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-sm font-semibold text-cyan-400"
                >
                  {step}
                </motion.div>
                {idx < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.05, duration: 0.3 }}
                    className="text-cyan-400 font-bold"
                  >
                    →
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Built for Regulatory BOM Reporting
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regulatoryFrameworks.map((framework, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-white">{framework}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Choose */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Why Customers Choose OpsMx
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((outcome, idx) => (
              <OutcomeCard key={idx} {...outcome} />
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

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-blue-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">Move Beyond SBOM</h2>
            <p className="text-lg text-slate-300 mb-8">
              Use OpsMx X-BOM Reporting to generate every BOM, understand risk, drive remediation, and prove compliance continuously.
            </p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20">
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
