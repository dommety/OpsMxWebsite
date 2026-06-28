import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, GitBranch, CheckCircle2, Shield, Zap, Lock, AlertCircle, ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'

// SAST Workflow Animation
function SASTWorkflowAnimation() {
  const steps = [
    { label: 'Code Commit', icon: Code2 },
    { label: 'Static Analysis', icon: Shield },
    { label: 'Risk Prioritization', icon: AlertCircle },
    { label: 'Root Cause', icon: Zap },
    { label: 'AI Fix Guidance', icon: Code2 },
    { label: 'Pull Request', icon: GitBranch },
    { label: 'Verified Fix', icon: CheckCircle2 },
  ]

  return (
    <div className="relative py-16 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50 rounded-2xl border border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <p className="text-sm font-bold text-cyan-400 mb-2">SAST WORKFLOW</p>
            <p className="text-2xl font-black text-white mb-4">Find. Prioritize. Fix. Verify.</p>
            <p className="text-slate-300 text-sm leading-relaxed">OpsMx traces every code vulnerability from detection through verified remediation, with developer-ready guidance at each step.</p>
          </div>

          <div className="lg:w-2/3">
            <svg viewBox="0 0 700 300" className="w-full h-auto max-h-80">
              {steps.map((_, idx) => {
                if (idx < steps.length - 1) {
                  const startX = (idx / (steps.length - 1)) * 620 + 40
                  const endX = ((idx + 1) / (steps.length - 1)) * 620 + 40
                  return (
                    <motion.line
                      key={`line-${idx}`}
                      x1={startX}
                      y1="150"
                      x2={endX}
                      y2="150"
                      stroke="url(#sastGradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.25 }}
                    />
                  )
                }
                return null
              })}

              <defs>
                <linearGradient id="sastGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {steps.map((step, idx) => {
                const x = (idx / (steps.length - 1)) * 620 + 40
                const isLast = idx === steps.length - 1

                return (
                  <motion.g key={step.label}>
                    <motion.circle
                      cx={x}
                      cy="150"
                      r="20"
                      fill="none"
                      stroke={isLast ? '#10b981' : '#06b6d4'}
                      strokeWidth="2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.25, duration: 0.3 }}
                    />
                    <motion.circle
                      cx={x}
                      cy="150"
                      r="20"
                      fill="none"
                      stroke={isLast ? '#10b981' : '#06b6d4'}
                      strokeWidth="2"
                      opacity="0.3"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.4 }}
                      transition={{ delay: idx * 0.25, duration: 0.8, repeat: Infinity, repeatDelay: 0.4 }}
                    />

                    <motion.circle
                      cx={x}
                      cy="150"
                      r="14"
                      fill={isLast ? 'rgba(16, 185, 129, 0.15)' : 'rgba(6, 182, 212, 0.15)'}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.25, duration: 0.3 }}
                    />

                    <text
                      x={x}
                      y="210"
                      textAnchor="middle"
                      className="text-[10px] font-semibold fill-slate-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.25 + 0.15 }}
                    >
                      {step.label}
                    </text>
                  </motion.g>
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// Problem card
function ProblemCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
    >
      <div className="flex items-start gap-3 mb-3">
        <Icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-sm text-slate-300">{description}</p>
    </motion.div>
  )
}

// OpsMx capability card
function CapabilityCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-cyan-500/30 transition-all"
    >
      <Icon className="w-6 h-6 text-cyan-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-300 leading-snug">{description}</p>
    </motion.div>
  )
}

// Workflow step
function WorkflowStep({ label, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex gap-4"
    >
      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-white mb-1">{label}</h4>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
    </motion.div>
  )
}

// Experience card
function ExperienceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-4 hover:border-cyan-500/30 transition-all"
    >
      <Icon className="w-5 h-5 text-cyan-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-300">{description}</p>
    </motion.div>
  )
}

// Why OpsMx card
function WhyOpsMxCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-5 hover:border-cyan-500/30 transition-all"
    >
      <Icon className="w-5 h-5 text-cyan-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-300 leading-snug">{description}</p>
    </motion.div>
  )
}

// FAQ item
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
    title: 'Too Many Findings',
    description: 'Static analysis can produce large volumes of issues without enough context.',
  },
  {
    icon: Zap,
    title: 'Limited Prioritization',
    description: 'Teams need exploitability, reachability, runtime exposure, ownership, and business impact.',
  },
  {
    icon: Lock,
    title: 'No Remediation Workflow',
    description: 'A finding is not fixed until it is assigned, remediated, tested, merged, deployed, and verified.',
  },
]

const capabilities = [
  {
    icon: Code2,
    title: 'Detect Code Vulnerabilities',
    description: 'Scan source code for insecure patterns, injection risks, authentication flaws, unsafe data handling, and policy violations.',
  },
  {
    icon: AlertCircle,
    title: 'Prioritize Real Risk',
    description: 'Reduce noise by correlating findings with reachability, application criticality, runtime exposure, dependencies, APIs, and business context.',
  },
  {
    icon: Shield,
    title: 'Diagnose Root Cause',
    description: 'Show developers where the issue originates, how data flows through the code, and what needs to change.',
  },
  {
    icon: Zap,
    title: 'Remediate Faster',
    description: 'Generate developer-ready fix guidance, create pull requests or tickets, and route work to the right owners.',
  },
  {
    icon: CheckCircle2,
    title: 'Verify Fixes',
    description: 'Re-scan code, validate remediation, and preserve evidence for security, engineering, and compliance teams.',
  },
]

const workflowSteps = [
  { label: 'Detect', description: 'Find code vulnerabilities early in development.' },
  { label: 'Prioritize', description: 'Focus on reachable, exploitable, business-critical issues.' },
  { label: 'Diagnose', description: 'Identify root cause, ownership, and impacted services.' },
  { label: 'Remediate', description: 'Generate fix guidance and coordinate developer workflow.' },
  { label: 'Govern', description: 'Apply policy checks, approvals, and release guardrails.' },
  { label: 'Verify', description: 'Confirm the vulnerability is fixed and maintain audit evidence.' },
]

const experiences = [
  { icon: Code2, title: 'Pull Request Scanning', description: 'Find vulnerabilities before insecure code is merged.' },
  { icon: GitBranch, title: 'CI/CD Integration', description: 'Scan every build and enforce policy in software delivery pipelines.' },
  { icon: Zap, title: 'IDE-Ready Guidance', description: 'Provide remediation guidance where developers work.' },
  { icon: Lock, title: 'Ticketing Integration', description: 'Create and track remediation work in Jira, ServiceNow, or existing workflows.' },
  { icon: Shield, title: 'Policy Gates', description: 'Block high-risk changes while allowing low-risk development to continue.' },
  { icon: CheckCircle2, title: 'Fix Verification', description: 'Confirm that vulnerabilities are actually remediated.' },
]

const aiCodeCards = [
  {
    icon: Code2,
    title: 'AI-Generated Code',
    description: 'Scan code created by GitHub Copilot, Cursor, Claude Code, Gemini Code Assist, Amazon Q, and other AI coding assistants.',
  },
  {
    icon: AlertCircle,
    title: 'Detect Vulnerabilities',
    description: 'Identify injection vulnerabilities, insecure authentication, unsafe deserialization, SSRF, XSS, and insecure coding patterns.',
  },
  {
    icon: Lock,
    title: 'Detect AI-Introduced Secrets',
    description: 'Find credentials, API keys, connection strings, cloud tokens, and other secrets accidentally generated into source code.',
  },
  {
    icon: Zap,
    title: 'Developer-Ready Fixes',
    description: 'Generate remediation guidance that developers can review before merging AI-generated code.',
  },
]

const whyOpsMx = [
  {
    icon: CheckCircle2,
    title: 'Remediation-First SAST',
    description: 'OpsMx helps move findings to verified fixes instead of stopping at detection.',
  },
  {
    icon: Code2,
    title: 'Code-to-Cloud Context',
    description: 'Correlate source code findings with runtime, cloud, Kubernetes, APIs, dependencies, ownership, and deployment context.',
  },
  {
    icon: Zap,
    title: 'AI-Assisted Fix Guidance',
    description: 'Provide developer-ready remediation recommendations and reduce manual investigation.',
  },
  {
    icon: Shield,
    title: 'Workflow Orchestration',
    description: 'Route issues to application owners, developers, platform teams, and approvers.',
  },
  {
    icon: AlertCircle,
    title: 'Verified Remediation',
    description: 'Confirm fixes through re-testing and preserve evidence for audit and compliance.',
  },
  {
    icon: GitBranch,
    title: 'Unified AppSec Platform',
    description: 'Connect SAST with SCA, secrets, API security, AI security, penetration testing, SBOM/X-BOM, and compliance reporting.',
  },
]

const languages = [
  'Java', 'JavaScript', 'TypeScript', 'Python', 'Go', 'C#', 'C/C++', 'Kotlin',
  'PHP', 'Ruby', 'Scala', 'Terraform / IaC',
]

const integrations = [
  'GitHub', 'GitLab', 'Bitbucket', 'Azure DevOps', 'Jenkins', 'GitHub Actions',
  'GitLab CI', 'Argo CD', 'Spinnaker', 'Jira', 'ServiceNow', 'Slack',
  'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP',
]

const outcomes = [
  'Reduce noisy findings',
  'Improve developer productivity',
  'Shorten remediation cycles',
  'Increase verified fixes',
  'Strengthen release governance',
  'Improve audit readiness',
]

const faqs = [
  {
    question: 'What is Static Application Security Testing?',
    answer: 'Static Application Security Testing, or SAST, analyzes source code before an application runs to identify security vulnerabilities, insecure coding patterns, and policy violations early in development.',
  },
  {
    question: 'How is SAST different from DAST?',
    answer: 'SAST analyzes source code, while Dynamic Application Security Testing, or DAST, tests a running application from the outside. OpsMx connects SAST, DAST, and other AppSec signals into a remediation workflow.',
  },
  {
    question: 'Why do SAST tools produce false positives?',
    answer: 'SAST tools analyze code patterns without always knowing runtime context, reachability, exploitability, or business impact. OpsMx helps reduce noise by correlating SAST findings with code-to-cloud context.',
  },
  {
    question: 'How does OpsMx prioritize SAST findings?',
    answer: 'OpsMx prioritizes SAST findings using severity, reachability, runtime exposure, asset criticality, ownership, business impact, and remediation status.',
  },
  {
    question: 'Can OpsMx help remediate SAST vulnerabilities?',
    answer: 'Yes. OpsMx helps generate developer-ready remediation guidance, route findings to owners, track fixes, and verify that vulnerabilities are resolved.',
  },
  {
    question: 'Does OpsMx scan AI-generated code?',
    answer: 'Yes. OpsMx Static Application Security Testing analyzes both developer-written and AI-generated code to identify vulnerabilities, prioritize risk, generate remediation guidance, and verify fixes before deployment.',
  },
  {
    question: 'Can OpsMx detect insecure code produced by AI coding assistants?',
    answer: 'Yes. OpsMx applies static code analysis and remediation workflows regardless of whether code is written by developers or generated by AI coding assistants.',
  },
  {
    question: 'Does OpsMx integrate with CI/CD pipelines?',
    answer: 'Yes. OpsMx is designed to integrate with modern DevSecOps pipelines, source code repositories, ticketing systems, and deployment workflows.',
  },
  {
    question: 'How does OpsMx verify that SAST findings are fixed?',
    answer: 'OpsMx verifies fixes by re-scanning, validating remediation status, tracking approvals, and preserving audit evidence.',
  },
]

export default function SASTPage() {
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
              Static Application Security Testing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">That Drives Remediation</span>
            </h1>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Find vulnerabilities in source code, prioritize what matters, understand root cause, generate developer-ready fixes, and verify remediation across your secure software delivery workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all">
                See Remediation Workflow
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SAST Workflow Animation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SASTWorkflowAnimation />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">Finding Vulnerabilities Is Only the Beginning</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">Traditional SAST tools generate findings, but security and engineering teams still need to know which vulnerabilities matter, who owns them, how to fix them, and whether the fix worked.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <ProblemCard key={idx} {...problem} />
            ))}
          </div>
        </div>
      </section>

      {/* What OpsMx Provides */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            SAST Across the Full Remediation Workflow
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((cap, idx) => (
              <CapabilityCard key={idx} {...cap} />
            ))}
          </div>
        </div>
      </section>

      {/* Remediation Workflow */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            From SAST Finding to Verified Fix
          </motion.h2>
          <div className="space-y-4">
            {workflowSteps.map((step, idx) => (
              <WorkflowStep key={idx} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Developer Experience */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-4 text-center"
          >
            Built for Developers. Governed for Enterprises.
          </motion.h2>
          <p className="text-center text-slate-300 mb-12 max-w-3xl mx-auto">OpsMx brings SAST scanning, remediation guidance, and governance controls directly into developer workflows without slowing down secure software delivery.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* AI-Generated Code Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4 text-center">Secure Every Line of Code — Whether Written by Developers or AI</h2>
            <p className="text-center text-slate-300 max-w-3xl mx-auto">Modern engineering teams increasingly use AI coding assistants to accelerate software delivery. While AI improves productivity, it can also introduce insecure coding patterns, vulnerable dependencies, hardcoded secrets, and unsafe API usage. OpsMx applies the same Static Application Security Testing and remediation workflow to both human-written and AI-generated code.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {aiCodeCards.map((card, idx) => (
              <CapabilityCard key={idx} {...card} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-2">Using GitHub Copilot, Cursor, Claude Code, or other AI coding assistants?</h3>
            <p className="text-slate-300 mb-4">OpsMx helps secure AI-generated code using the same SAST analysis, prioritization, remediation, and verification workflow as developer-written code.</p>
            <a href="/opsmx/ai-security" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
              Learn about AI Code Security
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why OpsMx */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Why OpsMx for SAST?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyOpsMx.map((item, idx) => (
              <WhyOpsMxCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Scan the Languages Your Teams Use
          </motion.h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {languages.map((lang, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-slate-300 text-center hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
              >
                {lang}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-6">Confirm language support with the OpsMx team before publishing.</p>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Works with Your DevSecOps Stack
          </motion.h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {integrations.map((integration) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-slate-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
              >
                {integration}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Outcomes Security and Engineering Leaders Can Measure
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{outcome}</span>
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
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-cyan-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">Move Beyond Static Analysis</h2>
            <p className="text-lg text-slate-300 mb-8">Detect code vulnerabilities, prioritize real risk, automate remediation, and verify fixes with OpsMx.</p>
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
