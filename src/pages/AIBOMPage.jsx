import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Box, Code2, Database, Shield, GitBranch, Zap, CheckCircle2, ChevronDown, Cloud } from 'lucide-react'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'

// AI-BOM Supply Chain Animation
function AIBOMAnimation() {
  const steps = [
    { label: 'Models', icon: Box },
    { label: 'Prompts', icon: Code2 },
    { label: 'Datasets', icon: Database },
    { label: 'Agents', icon: Zap },
    { label: 'MCP Servers', icon: Shield },
    { label: 'Applications', icon: GitBranch },
    { label: 'Deployments', icon: Cloud },
    { label: 'Governance', icon: CheckCircle2 },
  ]

  return (
    <div className="relative py-16 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50 rounded-2xl border border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <p className="text-sm font-bold text-purple-400 mb-2">AI-BOM DISCOVERY</p>
            <p className="text-2xl font-black text-white mb-4">Know Your AI Supply Chain</p>
            <p className="text-slate-300 text-sm leading-relaxed">OpsMx continuously discovers and catalogs every AI asset across your environment—from foundation models to runtime deployments and governance evidence.</p>
          </div>

          <div className="lg:w-2/3">
            <svg viewBox="0 0 600 500" className="w-full h-auto max-h-96">
              {steps.map((_, idx) => {
                if (idx < steps.length - 1) {
                  const startY = (idx / (steps.length - 1)) * 420 + 40
                  const endY = ((idx + 1) / (steps.length - 1)) * 420 + 40
                  return (
                    <motion.line
                      key={`line-${idx}`}
                      x1="300"
                      y1={startY}
                      x2="300"
                      y2={endY}
                      stroke="url(#aiGradient)"
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
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {steps.map((step, idx) => {
                const y = (idx / (steps.length - 1)) * 420 + 40
                const isLast = idx === steps.length - 1

                return (
                  <motion.g key={step.label}>
                    <motion.circle
                      cx="300"
                      cy={y}
                      r="22"
                      fill="none"
                      stroke={isLast ? '#10b981' : '#a78bfa'}
                      strokeWidth="2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.25, duration: 0.3 }}
                    />
                    <motion.circle
                      cx="300"
                      cy={y}
                      r="22"
                      fill="none"
                      stroke={isLast ? '#10b981' : '#a78bfa'}
                      strokeWidth="2"
                      opacity="0.2"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.6 }}
                      transition={{ delay: idx * 0.25, duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                    />

                    <motion.circle
                      cx="300"
                      cy={y}
                      r="16"
                      fill={isLast ? 'rgba(16, 185, 129, 0.15)' : 'rgba(167, 139, 250, 0.15)'}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.25, duration: 0.3 }}
                    />

                    <text
                      x="340"
                      y={y}
                      textAnchor="start"
                      className="text-[12px] font-semibold fill-slate-300"
                      dy="0.3em"
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

// Asset Inventory Card
function AssetCard({ icon: Icon, title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-5 hover:border-purple-500/30 transition-all"
    >
      <Icon className="w-5 h-5 text-purple-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
            <span className="text-purple-400 font-bold mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// Beyond AI Inventory Card
function GovernanceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-purple-500/30 transition-all"
    >
      <Icon className="w-6 h-6 text-purple-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-300">{description}</p>
    </motion.div>
  )
}

// Why OpsMx Card
function WhyOpsMxCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-purple-500/30 transition-all"
    >
      <Icon className="w-6 h-6 text-purple-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-300 leading-snug">{description}</p>
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

const assetCategories = [
  {
    icon: Box,
    title: 'Models',
    items: ['Foundation models', 'Fine-tuned models', 'Open-source models', 'Hosted models', 'Model versions', 'Hashes'],
  },
  {
    icon: Code2,
    title: 'Prompts',
    items: ['System prompts', 'Prompt templates', 'Prompt chains', 'Prompt versions', 'Owners', 'Repositories'],
  },
  {
    icon: Database,
    title: 'Datasets',
    items: ['Training datasets', 'Fine-tuning datasets', 'RAG knowledge bases', 'Embeddings', 'Vector databases', 'Data lineage'],
  },
  {
    icon: Zap,
    title: 'Agents',
    items: ['AI agents', 'Autonomous workflows', 'Tool orchestration', 'Agent ownership', 'Policies'],
  },
  {
    icon: Shield,
    title: 'MCP Servers',
    items: ['MCP servers', 'Available tools', 'Permissions', 'Authentication', 'Connected systems'],
  },
  {
    icon: GitBranch,
    title: 'AI Applications',
    items: ['Business applications', 'Internal copilots', 'Customer-facing AI', 'Application ownership'],
  },
  {
    icon: Cloud,
    title: 'APIs',
    items: ['Inference APIs', 'LLM endpoints', 'REST APIs', 'Authentication', 'Rate limits'],
  },
  {
    icon: Code2,
    title: 'Frameworks',
    items: ['LangChain', 'LlamaIndex', 'Semantic Kernel', 'OpenAI SDK', 'Anthropic SDK', 'Google GenAI'],
  },
  {
    icon: Cloud,
    title: 'Deployments',
    items: ['Cloud', 'Kubernetes', 'Containers', 'Serverless', 'Regions', 'Environments'],
  },
  {
    icon: CheckCircle2,
    title: 'Runtime',
    items: ['Inference services', 'Scaling', 'Usage', 'Latency', 'Versions', 'Health'],
  },
  {
    icon: Shield,
    title: 'Governance',
    items: ['Risk classification', 'Approvals', 'Model cards', 'Owners', 'Exceptions', 'Policies'],
  },
  {
    icon: Zap,
    title: 'Security',
    items: ['Prompt injection', 'Jailbreak', 'Data leakage', 'Model integrity', 'Secrets', 'API exposure'],
  },
]

const governanceCards = [
  { icon: Box, title: 'Discover', description: 'Automatically identify AI assets across your environment.' },
  { icon: Database, title: 'Classify', description: 'Understand ownership, business context, and sensitivity.' },
  { icon: Shield, title: 'Secure', description: 'Identify AI security risks and policy violations.' },
  { icon: CheckCircle2, title: 'Govern', description: 'Maintain approvals, model lineage, and policy evidence.' },
  { icon: Zap, title: 'Remediate', description: 'Assign owners, generate remediation guidance, and track fixes.' },
  { icon: Cloud, title: 'Verify', description: 'Continuously validate that governance controls remain effective.' },
]

const whyOpsMx = [
  { icon: Box, title: 'Complete AI Visibility', description: 'Inventory every AI asset—not just models.' },
  { icon: Zap, title: 'Continuous Discovery', description: 'Automatically detect changes as AI systems evolve.' },
  { icon: GitBranch, title: 'Built for Agentic AI', description: 'Track agents, MCP servers, tool permissions, and autonomous workflows.' },
  { icon: Shield, title: 'Security Context', description: 'Correlate AI assets with vulnerabilities, APIs, secrets, identities, and runtime exposure.' },
  { icon: CheckCircle2, title: 'Governance Workflow', description: 'Assign owners, approvals, reviews, remediation tasks, and verification.' },
  { icon: Cloud, title: 'Enterprise Reporting', description: 'Generate executive dashboards and audit-ready evidence.' },
]

const complianceFrameworks = [
  { name: 'EU AI Act', inventory: true, visibility: true, governance: true, audit: true },
  { name: 'NIST AI RMF', inventory: true, visibility: true, governance: true, audit: true },
  { name: 'ISO/IEC 42001', inventory: true, visibility: true, governance: true, audit: true },
  { name: 'OWASP Top 10 for LLM', inventory: true, visibility: true, governance: true, audit: true },
  { name: 'OWASP Agentic AI', inventory: true, visibility: true, governance: true, audit: true },
  { name: 'OWASP MCP Security', inventory: true, visibility: true, governance: true, audit: true },
  { name: 'Executive Order 14110', inventory: true, visibility: true, governance: true, audit: true },
  { name: 'Enterprise AI Governance', inventory: true, visibility: true, governance: true, audit: true },
]

const integrations = [
  'OpenAI', 'Anthropic', 'Azure OpenAI', 'Amazon Bedrock', 'Google Vertex AI', 'Ollama', 'Hugging Face',
  'LangChain', 'LlamaIndex', 'Semantic Kernel', 'Pinecone', 'Weaviate', 'Milvus',
  'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud',
]

const faqs = [
  {
    question: 'What is an AI Bill of Materials?',
    answer: 'An AI Bill of Materials (AI-BOM) is a comprehensive inventory of every AI asset in an organization—from foundation models and prompts to datasets, agents, MCP servers, deployments, and runtime environments. Unlike traditional SBOMs that catalog software packages, AI-BOMs capture the complete AI supply chain.',
  },
  {
    question: 'Why is AI-BOM different from SBOM?',
    answer: 'Traditional SBOMs inventory software packages and dependencies. AI-BOMs go further to catalog AI-specific assets like foundation models, fine-tuned models, prompts, agents, MCP servers, datasets, and governance controls. AI-BOMs are dynamic and continuous, not static snapshots.',
  },
  {
    question: 'What assets belong in an AI-BOM?',
    answer: 'Models (foundation, fine-tuned, open-source), prompts (system, templates, chains), datasets (training, fine-tuning, RAG), agents, MCP servers, AI applications, APIs, frameworks, deployments, runtime services, governance evidence, and security controls.',
  },
  {
    question: 'How does OpsMx discover AI assets?',
    answer: 'OpsMx uses continuous discovery across code repositories, package managers, container registries, cloud environments, Kubernetes clusters, and runtime monitoring to automatically identify AI assets, catalog their configurations, and detect changes.',
  },
  {
    question: 'Can OpsMx inventory AI agents and MCP servers?',
    answer: 'Yes. OpsMx specifically tracks agentic AI systems including autonomous agents, their workflows, tool orchestration, MCP servers, available tools, permissions, authentication, and connections to enterprise systems.',
  },
  {
    question: 'How does AI-BOM support AI governance?',
    answer: 'AI-BOM provides the foundation for governance by enabling ownership assignment, model approvals, risk classification, compliance mapping, audit evidence generation, remediation tracking, and continuous verification of governance controls.',
  },
  {
    question: 'What regulations require AI inventory?',
    answer: 'The EU AI Act, Executive Order 14110, NIST AI RMF, and emerging enterprise AI governance frameworks all require organizations to maintain comprehensive inventories of AI systems and demonstrate governance controls.',
  },
  {
    question: 'Can OpsMx generate audit-ready AI governance reports?',
    answer: 'Yes. OpsMx generates executive dashboards, audit logs, compliance mapping, risk registers, remediation evidence, and governance audit trails that satisfy regulatory and enterprise audit requirements.',
  },
]

export default function AIBOMPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Seo route="/ai-bom" />
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
              AI Bill of Materials <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">for Modern AI Applications</span>
            </h1>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Continuously discover, inventory, govern, and report every AI asset—from foundation models and prompts to datasets, agents, MCP servers, deployments, APIs, and runtime environments.
            </p>
            <p className="text-lg text-slate-400 mb-8 font-semibold">Know your AI. Govern your AI. Secure your AI.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold hover:from-purple-400 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2">
                See AI-BOM Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all">
                Explore AI Governance
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI-BOM Animation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AIBOMAnimation />
        </div>
      </section>

      {/* Why AI-BOM Matters */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-6">Why AI-BOM Matters</h2>
            <p className="text-lg text-slate-300 mb-6">Traditional SBOMs inventory software. Modern AI applications require visibility into models, prompts, agents, datasets, MCP servers, and more. Without an AI-BOM, organizations cannot answer:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Which models are deployed?',
                'Which prompts are in production?',
                'Which datasets trained the model?',
                'Which AI agents have privileged access?',
                'Which MCP servers expose enterprise systems?',
                'Which applications use this model?',
                'Which model versions are running?',
                'Which risks remain unresolved?',
              ].map((q, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{q}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Complete AI Asset Inventory */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Complete AI Asset Inventory
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assetCategories.map((cat, idx) => (
              <AssetCard key={idx} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Beyond AI Inventory */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-4 text-center"
          >
            Beyond AI Inventory
          </motion.h2>
          <p className="text-center text-slate-300 mb-12 max-w-3xl mx-auto">Inventory alone is not governance. OpsMx transforms AI-BOM into a complete AI governance platform.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {governanceCards.map((card, idx) => (
              <GovernanceCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Governance Dashboard */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            AI Governance Dashboard
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Models', 'Datasets', 'Prompts', 'Agents', 'MCP Servers', 'Applications', 'Deployments', 'Policy Violations', 'Critical Risks', 'Compliance Score', 'Verified Fixes', 'AI-BOM Coverage'].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-lg border border-white/10 bg-white/5 p-4 hover:border-purple-500/30 transition-all text-center"
              >
                <p className="text-xs font-semibold text-white">{metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Security & Compliance */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            AI Security & Compliance
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-bold text-white">Framework</th>
                  <th className="text-center py-3 px-4 font-bold text-white">AI Inventory</th>
                  <th className="text-center py-3 px-4 font-bold text-white">Risk Visibility</th>
                  <th className="text-center py-3 px-4 font-bold text-white">Governance Evidence</th>
                  <th className="text-center py-3 px-4 font-bold text-white">Audit Reporting</th>
                </tr>
              </thead>
              <tbody>
                {complianceFrameworks.map((framework, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-slate-300 font-semibold">{framework.name}</td>
                    <td className="py-4 px-4 text-center">{framework.inventory && <CheckCircle2 className="w-4 h-4 text-green-400 mx-auto" />}</td>
                    <td className="py-4 px-4 text-center">{framework.visibility && <CheckCircle2 className="w-4 h-4 text-green-400 mx-auto" />}</td>
                    <td className="py-4 px-4 text-center">{framework.governance && <CheckCircle2 className="w-4 h-4 text-green-400 mx-auto" />}</td>
                    <td className="py-4 px-4 text-center">{framework.audit && <CheckCircle2 className="w-4 h-4 text-green-400 mx-auto" />}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why OpsMx AI-BOM */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Why OpsMx AI-BOM
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyOpsMx.map((item, idx) => (
              <WhyOpsMxCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Works Across Your AI Stack
          </motion.h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {integrations.map((integration) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-slate-300 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all"
              >
                {integration}
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
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">Know Every AI Asset. Govern Every AI System.</h2>
            <p className="text-lg text-slate-300 mb-8">Automatically generate AI Bills of Materials covering models, prompts, datasets, agents, MCP servers, deployments, and runtime environments—while continuously supporting AI governance and compliance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold hover:from-purple-400 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all">
                Explore AI Governance
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
