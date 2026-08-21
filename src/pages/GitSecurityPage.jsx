import { motion } from 'framer-motion'
import { ArrowRight, GitBranch, Lock, AlertCircle, CheckCircle2, Shield, Code, Eye, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

import Seo from '../components/Seo'
// Git Security Workflow Animation
function GitSecurityWorkflow() {
  const steps = [
    { label: 'Code Commit', icon: GitBranch, color: '#22d3ee' },
    { label: 'Scan Repository', icon: Eye, color: '#60a5fa' },
    { label: 'Detect Issues', icon: AlertCircle, color: '#f87171' },
    { label: 'Assess Risk', icon: Shield, color: '#fbbf24' },
    { label: 'Remediate', icon: Code, color: '#34d399' },
    { label: 'Verify', icon: CheckCircle2, color: '#10b981' },
  ]

  return (
    <div className="relative py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50 rounded-2xl border border-white/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-bold text-cyan-400 mb-2">GIT SECURITY WORKFLOW</p>
          <p className="text-2xl font-black text-white">Continuous Git Repository Protection</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="rounded-lg border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: step.color }} />
                </div>
                <p className="text-sm font-bold text-white text-center">{step.label}</p>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-600 mx-auto mt-3" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Problem Card
function ProblemCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-red-500/20 bg-red-500/5 p-6 hover:border-red-500/40 transition-all"
    >
      <Icon className="w-6 h-6 text-red-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-400">{description}</p>
    </motion.div>
  )
}

// Capability Card
function CapabilityCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-6 hover:border-cyan-500/40 transition-all"
    >
      <Icon className="w-6 h-6 text-cyan-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
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

const problems = [
  {
    icon: AlertCircle,
    title: 'Repository Vulnerabilities',
    description: 'Open source and third-party dependencies introduce security risks to your Git repositories without continuous monitoring.',
  },
  {
    icon: Lock,
    title: 'Secrets Exposure',
    description: 'Accidental commits of API keys, credentials, and sensitive data expose your infrastructure to attacks.',
  },
  {
    icon: Shield,
    title: 'Misconfiguration Risk',
    description: 'Git workflows, permissions, and security settings are often misconfigured, creating compliance and security gaps.',
  },
]

const capabilities = [
  {
    icon: Eye,
    title: 'Repository Scanning',
    description: 'Continuously scan Git repositories for open source vulnerabilities and dependency risks.',
  },
  {
    icon: Lock,
    title: 'Secrets Detection',
    description: 'Detect and remediate leaked API keys, credentials, tokens, and sensitive data in real-time.',
  },
  {
    icon: AlertCircle,
    title: 'Misconfiguration Detection',
    description: 'Identify and fix Git workflow, permission, and security setting misconfigurations.',
  },
  {
    icon: Code,
    title: 'Automated Remediation',
    description: 'Auto-fix vulnerable dependencies, rotate leaked secrets, and apply security patches.',
  },
  {
    icon: CheckCircle2,
    title: 'Compliance Verification',
    description: 'Generate audit-ready evidence for OSS compliance, SBOM, and security posture verification.',
  },
  {
    icon: Shield,
    title: 'OpenSSF Alignment',
    description: 'Align with OpenSSF framework for secure software supply chain practices.',
  },
]

const faqs = [
  {
    question: 'What Git repositories does OpsMx support?',
    answer: 'OpsMx supports GitHub, GitLab, Bitbucket, and other Git platforms. We integrate with your existing workflow without requiring code changes.',
  },
  {
    question: 'How does OpsMx detect secrets in Git?',
    answer: 'We scan commit history, pull requests, and branch contents using pattern recognition and entropy analysis to detect exposed credentials, API keys, and sensitive data.',
  },
  {
    question: 'Can OpsMx remediate found issues automatically?',
    answer: 'Yes. OpsMx can automatically rotate leaked secrets, update vulnerable dependencies, fix misconfigurations, and create remediation pull requests.',
  },
  {
    question: 'Does OpsMx support OpenSSF framework?',
    answer: 'OpsMx is built on OpenSSF principles for secure software supply chain practices, helping you achieve SLSA levels and other framework requirements.',
  },
  {
    question: 'How fast are Git scans?',
    answer: 'OpsMx uses parallel scanning and intelligent indexing to scan repositories in minutes, with continuous monitoring for new commits.',
  },
  {
    question: 'Is historical scan data available?',
    answer: 'Yes. OpsMx maintains complete historical data of all scans, findings, and remediations for audit and compliance purposes.',
  },
]

export default function GitSecurityPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Seo route="/git-security-posture" />
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
              Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Git Security Posture</span>
            </h1>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Secure your Git code repositories against open source and third-party vulnerabilities, accidental exposure of secrets, and misconfigurations with OpsMx powered by OpenSSF.
            </p>
            <p className="text-lg text-slate-400 mb-8 font-semibold">Continuous protection for your entire Git supply chain.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/request-a-demo" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
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

      {/* Git Security Workflow */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <GitSecurityWorkflow />
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Git Security Challenges
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <ProblemCard key={idx} {...problem} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Git Security Capabilities
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, idx) => (
              <CapabilityCard key={idx} {...capability} />
            ))}
          </div>
        </div>
      </section>

      {/* OpenSSF Framework */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-black text-white mb-6">OpenSSF Aligned Security</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              OpsMx is built on OpenSSF principles for secure software supply chain practices. We help you achieve SLSA levels, implement secure development workflows, and maintain continuous security posture aligned with industry best practices.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {[
                { title: 'SLSA Framework', desc: 'Software supply chain maturity levels' },
                { title: 'Secure Workflows', desc: 'CI/CD security and automated remediation' },
                { title: 'Audit Ready', desc: 'Compliance evidence and reporting' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-6"
                >
                  <p className="font-bold text-white mb-2">{item.title}</p>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-black text-white mb-4">Secure Your Git Repositories Today</h2>
            <p className="text-lg text-slate-300 mb-8">Protect your code, prevent breaches, and maintain continuous security posture with OpsMx Git Security powered by OpenSSF.</p>
            <a href="/request-a-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20">
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
