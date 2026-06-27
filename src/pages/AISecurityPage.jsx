import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  BrainCircuit,
  Zap,
  ShieldCheck,
  Bot,
  Notebook,
  Layers,
  Shield,
  CheckCircle2,
  Lock,
  BarChart3,
  Workflow,
} from 'lucide-react'
import Navbar from '../components/Navbar'

// AI Security capability areas
const securityAreas = [
  {
    title: 'Secure AI-Generated Code',
    icon: Code2,
    description: 'AI coding tools can generate vulnerable code, insecure dependencies, exposed secrets, unsafe APIs, and policy violations.',
    capabilities: [
      'AI code security scanning',
      'SAST for AI-generated code',
      'SCA and dependency risk',
      'Secrets detection',
      'License and OSS risk',
      'AI-assisted code remediation',
    ],
    outcome: 'Help developers use AI coding tools safely without increasing application risk.',
    color: '#60a5fa',
  },
  {
    title: 'Secure AI Applications and APIs',
    icon: Shield,
    description: 'AI applications introduce new risks through APIs, data flows, prompts, plugins, and runtime behavior.',
    capabilities: [
      'API security testing',
      'DAST for AI applications',
      'Prompt injection testing',
      'Runtime risk correlation',
      'Application exposure analysis',
    ],
    outcome: 'Find and fix exploitable risks before AI applications reach production.',
    color: '#22d3ee',
  },
  {
    title: 'Model Security and Scanning',
    icon: BrainCircuit,
    description: 'Models can introduce risks through unsafe behavior, vulnerable artifacts, malicious models, and insecure dependencies.',
    capabilities: [
      'Model artifact scanning',
      'Model dependency analysis',
      'Model provenance checks',
      'Model risk assessment',
      'AI-BOM / model BOM support',
    ],
    outcome: 'Understand what models are being used, where they came from, and whether they introduce risk.',
    color: '#a78bfa',
  },
  {
    title: 'Dynamic Prompt & Model Testing',
    icon: Zap,
    description: 'Static checks are not enough. AI systems must be tested dynamically for unsafe behavior under real-world conditions.',
    capabilities: [
      'Prompt injection testing',
      'Jailbreak testing',
      'Unsafe output detection',
      'Data leakage testing',
      'Model behavior validation',
      'Red-team style AI security testing',
    ],
    outcome: 'Validate how AI systems behave under adversarial and real-world conditions.',
    color: '#fb7185',
  },
  {
    title: 'Secure Notebooks & AI Environments',
    icon: Notebook,
    description: 'Notebooks often contain secrets, credentials, datasets, model experiments, and ungoverned code.',
    capabilities: [
      'Notebook scanning',
      'Secrets detection in notebooks',
      'Dependency and package risk',
      'Data exposure checks',
      'Policy enforcement',
    ],
    outcome: 'Reduce risk in AI experimentation and data science workflows.',
    color: '#fbbf24',
  },
  {
    title: 'MCP Server Security',
    icon: Layers,
    description: 'MCP servers connect AI agents to tools, data, systems, and enterprise workflows. This creates new attack surfaces.',
    capabilities: [
      'MCP server inventory',
      'Tool permission analysis',
      'Secrets and credential exposure checks',
      'Access control validation',
      'Agent action governance',
      'Runtime monitoring',
    ],
    outcome: 'Help enterprises safely adopt MCP-based AI agents without exposing critical systems.',
    color: '#34d399',
  },
]

// Remediation workflow steps
const remediationSteps = [
  { stage: 'Detect', description: 'AI security risks across code, models, prompts, notebooks, APIs, and MCP servers' },
  { stage: 'Prioritize', description: 'By exposure, exploitability, business impact, and runtime context' },
  { stage: 'Diagnose', description: 'Root cause and ownership in AI workflows' },
  { stage: 'Remediate', description: 'Using AI-assisted fix generation and developer workflows' },
  { stage: 'Govern', description: 'Policies, approvals, and audit trails for AI changes' },
  { stage: 'Verify', description: 'Confirm that risk is actually reduced' },
]

// Outcomes
const outcomes = [
  { title: 'Ship AI-Generated Code Safely', description: 'Validate every line before it merges, so velocity never comes at the cost of security.' },
  { title: 'Block Hallucinated Dependencies', description: 'Catch non-existent packages before an attacker registers them with malware.' },
  { title: 'Govern AI Tool Usage', description: 'Know which AI tools, models, and versions are generating code across your org.' },
  { title: 'Surface Shadow AI', description: 'Discover unapproved AI systems and bring ungoverned AI under policy control.' },
  { title: 'Secure AI Applications', description: 'Detect prompt injection, API risks, and unsafe AI behavior before production.' },
  { title: 'Compliance & Audit Ready', description: 'Generate AI provenance, model lineage, and audit evidence for regulators.' },
]

function SecurityAreaCard({ area, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all"
    >
      <div
        className="p-3 rounded-lg inline-flex mb-4"
        style={{ background: `${area.color}18`, border: `1px solid ${area.color}28` }}
      >
        <area.icon className="w-6 h-6" style={{ color: area.color }} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
      <p className="text-base text-slate-400 mb-4 leading-relaxed">{area.description}</p>
      <div className="mb-4 space-y-1">
        {area.capabilities.map((cap, i) => (
          <div key={i} className="text-xs text-slate-400 flex items-start gap-2">
            <span style={{ color: area.color }} className="mt-1 flex-shrink-0">
              •
            </span>
            <span>{cap}</span>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-white/10">
        <p className="text-xs text-cyan-300 italic">{area.outcome}</p>
      </div>
    </motion.div>
  )
}

function RemediationStep({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex flex-col items-center"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg mb-4">
        {index + 1}
      </div>
      <h4 className="text-lg font-bold text-white mb-2 text-center">{step.stage}</h4>
      <p className="text-sm text-slate-400 text-center max-w-xs">{step.description}</p>
      {index < remediationSteps.length - 1 && (
        <ArrowRight className="w-6 h-6 text-slate-600 mt-4 rotate-90" />
      )}
    </motion.div>
  )
}

function OutcomeCard({ outcome, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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

export default function AISecurityPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6">
              <BrainCircuit className="w-4 h-4" /> AI Security & Remediation
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              AI Security for Modern{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Software Delivery
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-4 leading-relaxed max-w-3xl mx-auto">
              Secure AI-generated code, models, prompts, notebooks, MCP servers, and AI-driven application workflows from development to production.
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
                Explore AI Security Use Cases
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 max-w-2xl mx-auto"
          >
            <p className="text-slate-300 leading-relaxed">
              <span className="font-bold text-white">AI is changing how software is built.</span> Developers are using AI coding assistants, teams are building AI applications, and enterprises are adopting models, prompts, notebooks, and MCP servers. This creates new security risks across code, data, model behavior, runtime access, and software supply chain.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              <span className="font-bold text-cyan-300">OpsMx provides the security and remediation workflow</span> needed to identify, prioritize, fix, govern, and verify AI-related risks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Areas */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-black text-white mb-4 text-center">AI Security Coverage</h2>
            <p className="text-xl text-slate-300 text-center max-w-2xl mx-auto">
              Comprehensive security across code, models, applications, data science workflows, and AI agents.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityAreas.map((area, idx) => (
              <SecurityAreaCard key={idx} area={area} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Remediation Workflow */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-4 text-center"
          >
            AI Security Remediation Workflow
          </motion.h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Finding AI security issues is not enough. OpsMx helps enterprises fix, govern, and verify remediation across the entire workflow.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {remediationSteps.map((step, idx) => (
              <RemediationStep key={idx} step={step} index={idx} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 rounded-xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">From Detection to Verified Fix</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" /> Detection & Prioritization
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• AI code vulnerability scanning</li>
                  <li>• Model risk and provenance analysis</li>
                  <li>• Prompt injection and jailbreak testing</li>
                  <li>• Notebook and environment scanning</li>
                  <li>• MCP server permission analysis</li>
                  <li>• Prioritization by business impact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Remediation & Verification
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• AI-assisted fix generation</li>
                  <li>• Automated code remediation</li>
                  <li>• Policy-driven governance</li>
                  <li>• Developer workflow integration</li>
                  <li>• Verification and audit trail</li>
                  <li>• Compliance evidence generation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-4 text-center"
          >
            Works Across Your Stack
          </motion.h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Integrates with your existing development and security tools without replacement.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Version Control', items: ['GitHub', 'GitLab', 'Bitbucket'] },
              { title: 'CI/CD & Automation', items: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Argo CD', 'Spinnaker'] },
              { title: 'Cloud Platforms', items: ['AWS', 'Azure', 'GCP'] },
              { title: 'Container & Kubernetes', items: ['Docker', 'Container Registries', 'Kubernetes'] },
              { title: 'AI & Model Tools', items: ['AI Coding Assistants', 'Model Registries', 'Notebook Platforms'] },
              { title: 'Ticketing & Workflows', items: ['Jira', 'ServiceNow', 'Slack'] },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="text-cyan-400">•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-4 text-center"
          >
            Outcomes You Can Measure
          </motion.h2>
          <p className="text-lg text-slate-300 text-center mb-12">
            Real impact on security, velocity, and compliance for AI-powered applications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, idx) => (
              <OutcomeCard key={idx} outcome={outcome} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-950/20 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Secure AI Innovation Without Slowing It Down
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              OpsMx helps security and engineering teams adopt AI safely by securing AI-generated code, AI applications, models, notebooks, prompts, MCP servers, and remediation workflows.
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
