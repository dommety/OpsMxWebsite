import { motion } from 'framer-motion'
import { ArrowRight, Box, Lock, Zap, Cpu, CheckCircle2, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

// BOM Types Animation
function BOMTypesAnimation() {
  const boms = [
    { label: 'SBOM', desc: 'Software Bill of Materials', color: '#22d3ee' },
    { label: 'AI-BOM', desc: 'AI Bill of Materials', color: '#a78bfa' },
    { label: 'CBOM', desc: 'Cryptographic', color: '#f87171' },
    { label: 'DBOM', desc: 'Delivery', color: '#60a5fa' },
    { label: 'QBOM', desc: 'Quantum', color: '#fbbf24' },
    { label: 'HBOM', desc: 'Hardware', color: '#34d399' },
  ]

  return (
    <div className="relative py-16 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50 rounded-2xl border border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-cyan-400 mb-2">BOM ECOSYSTEM</p>
          <p className="text-2xl font-black text-white">Every BOM, One Platform</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {boms.map((bom, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="rounded-lg border p-4 text-center hover:border-white/20 transition-all"
              style={{
                borderColor: `${bom.color}40`,
                backgroundColor: `${bom.color}08`,
              }}
            >
              <div
                className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
                style={{ backgroundColor: `${bom.color}20` }}
              >
                <Box className="w-5 h-5" style={{ color: bom.color }} />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{bom.label}</h3>
              <p className="text-xs text-slate-400">{bom.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// BOM Type Card
function BOMTypeCard({ icon: Icon, label, title, description, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-all"
      style={{
        borderColor: `${color}40`,
      }}
    >
      <div
        className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-sm font-bold text-white mb-2">{label}</h3>
      <p className="text-xs text-slate-300 font-semibold mb-2">{title}</p>
      <p className="text-xs text-slate-400">{description}</p>
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

const bomTypes = [
  {
    icon: Lock,
    label: 'CBOM',
    title: 'Cryptographic Bill of Materials',
    description: 'Inventory cryptographic algorithms, key management systems, certificate authorities, and encryption frameworks used across applications and infrastructure.',
    color: '#f87171',
  },
  {
    icon: Zap,
    label: 'DBOM',
    title: 'Delivery Bill of Materials',
    description: 'Track deployment artifacts, CI/CD pipelines, release processes, build systems, and delivery infrastructure from code to production.',
    color: '#60a5fa',
  },
  {
    icon: Cpu,
    label: 'QBOM',
    title: 'Quantum Bill of Materials',
    description: 'Identify systems exposed to quantum computing threats and track quantum-resistant cryptography adoption and migration progress.',
    color: '#fbbf24',
  },
  {
    icon: Box,
    label: 'HBOM',
    title: 'Hardware Bill of Materials',
    description: 'Catalog hardware components, firmware versions, supply chain sources, and security certifications across your infrastructure.',
    color: '#34d399',
  },
]

const faqs = [
  {
    question: 'What is CBOM (Cryptographic Bill of Materials)?',
    answer: 'CBOM is an inventory of all cryptographic algorithms, key management systems, certificates, and encryption frameworks used in your applications and infrastructure. It ensures compliance with cryptographic standards and helps track quantum-resistant migration.',
  },
  {
    question: 'What is DBOM (Delivery Bill of Materials)?',
    answer: 'DBOM captures the complete delivery pipeline from code to production, including CI/CD tools, build systems, deployment infrastructure, release processes, and artifact repositories. It improves visibility into delivery risk and compliance.',
  },
  {
    question: 'What is QBOM (Quantum Bill of Materials)?',
    answer: 'QBOM identifies systems using cryptography vulnerable to quantum computing attacks and tracks the adoption of quantum-resistant algorithms. It supports organizations preparing for post-quantum cryptography transitions.',
  },
  {
    question: 'What is HBOM (Hardware Bill of Materials)?',
    answer: 'HBOM inventories hardware components, firmware versions, supply chain sources, and security certifications. It helps manage hardware supply chain risk and ensure compliance with hardware security standards.',
  },
  {
    question: 'How does OpsMx generate these BOMs?',
    answer: 'OpsMx automatically discovers and catalogs every BOM type across your environment through continuous scanning of code, CI/CD, cloud infrastructure, Kubernetes, and runtime systems.',
  },
  {
    question: 'Can OpsMx generate multiple BOMs simultaneously?',
    answer: 'Yes. OpsMx generates SBOM, AI-BOM, CBOM, DBOM, QBOM, and HBOM from a unified platform, providing complete software supply chain visibility.',
  },
  {
    question: 'Which regulations require CBOM, DBOM, QBOM, or HBOM?',
    answer: 'The EU AI Act, NIST Cybersecurity Framework, Executive Order 14110, and emerging supply chain security mandates require organizations to maintain comprehensive inventories of cryptographic, delivery, and hardware components.',
  },
  {
    question: 'How does OpsMx help with quantum-resistant migration?',
    answer: 'OpsMx tracks quantum-vulnerable cryptography through QBOM and CBOM, identifies affected systems, and provides remediation guidance for migrating to quantum-resistant algorithms.',
  },
]

export default function AdvancedBOMPage() {
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
              Beyond SBOM: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CBOM, DBOM, QBOM & HBOM</span>
            </h1>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Extend software supply chain visibility with Cryptographic, Delivery, Quantum, and Hardware Bills of Materials. Generate continuous compliance evidence, improve operational visibility, and accelerate remediation from one unified platform.
            </p>
            <p className="text-lg text-slate-400 mb-8 font-semibold">One Platform. Every BOM. Every Regulation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOM Types Animation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <BOMTypesAnimation />
        </div>
      </section>

      {/* Advanced BOMs */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Advanced Bills of Materials
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {bomTypes.map((bom, idx) => (
              <BOMTypeCard key={idx} {...bom} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Every BOM Matters */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Why Every BOM Matters
          </motion.h2>
          <div className="space-y-4">
            {[
              {
                title: 'SBOM',
                description: 'Software Bill of Materials — Traditional open source and software component inventory.',
              },
              {
                title: 'AI-BOM',
                description: 'AI Bill of Materials — Models, prompts, datasets, agents, and agentic AI systems.',
              },
              {
                title: 'CBOM',
                description: 'Cryptographic BOM — Encryption, key management, and cryptographic algorithms.',
              },
              {
                title: 'DBOM',
                description: 'Delivery BOM — CI/CD, build systems, and deployment infrastructure.',
              },
              {
                title: 'QBOM',
                description: 'Quantum BOM — Quantum-vulnerable cryptography and quantum-resistant migration.',
              },
              {
                title: 'HBOM',
                description: 'Hardware BOM — Hardware components, firmware, and physical supply chain.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex gap-4 p-4 rounded-lg border border-white/10 bg-white/5"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="text-xs text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Regulations */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Supported Compliance Frameworks
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'EU AI Act',
              'NIST Cybersecurity Framework',
              'Executive Order 14110',
              'NIST AI Risk Management Framework',
              'ISO/IEC 42001',
              'OWASP Top 10 for LLM',
              'OWASP Agentic AI',
              'Hardware Security Standards',
            ].map((framework, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{framework}</span>
              </motion.div>
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
            <h2 className="text-4xl font-black text-white mb-4">One Platform. Every BOM. Every Regulation.</h2>
            <p className="text-lg text-slate-300 mb-8">Generate CBOM, DBOM, QBOM, and HBOM from a unified platform while maintaining continuous compliance evidence and supply chain visibility.</p>
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
