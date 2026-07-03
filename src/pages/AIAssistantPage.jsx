import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Brain, Shield, Zap } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'
import {
  promptExamples,
  capabilities,
  knowledgeGraphNodes,
  productCards,
  workflowSteps,
  conversations,
  enterpriseCards,
  differentiators,
  outcomes,
  faqItems,
} from '../data/aiAssistant'

function HeroAnimation() {
  const conversationSteps = [
    'What applications are affected by CVE-2026-12345?',
    '↓ AI searches...',
    '↓ Shows affected applications',
    '↓ Shows deployments',
    '↓ Shows runtime exposure',
    '↓ Recommends remediation',
    '↓ Generates PR',
    '↓ Verifies fix',
    '↓ Updates compliance dashboard',
  ]

  const [displayStep, setDisplayStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayStep((prev) => (prev + 1) % conversationSteps.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/50 to-slate-900/30 backdrop-blur-md">
        <div className="space-y-4">
          {conversationSteps.map((step, idx) => (
            <motion.div
              key={idx}
              animate={{
                opacity: displayStep === idx ? 1 : 0.3,
                x: displayStep === idx ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              className="text-sm text-slate-300 flex items-center gap-3"
            >
              {step.startsWith('↓') ? (
                <span className="text-cyan-400">→</span>
              ) : (
                <MessageCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              )}
              {step}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function PromptExamplesSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ask Anything About Your Software</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {promptExamples.map((prompt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors cursor-pointer group"
          >
            <p className="text-sm text-slate-300 group-hover:text-cyan-300 transition-colors">
              "{prompt}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function CapabilitiesSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">One AI Assistant.<br />Every Security Workflow.</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors"
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: cap.color }}>
              {cap.title}
            </h3>
            <ul className="space-y-2">
              {cap.items.map((item) => (
                <li key={item} className="text-sm text-slate-300 flex items-start gap-2">
                  <span style={{ color: cap.color }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function KnowledgeGraphSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Everything the AI Assistant Understands</h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-96 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Central node */}
          <motion.div
            animate={{ boxShadow: ['0 0 0 0 rgba(6, 182, 212, 0.7)', '0 0 0 60px rgba(6, 182, 212, 0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute z-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center"
          >
            <Brain className="w-8 h-8 text-white" strokeWidth={1.5} />
          </motion.div>

          {/* Floating nodes */}
          {knowledgeGraphNodes.map((node, idx) => (
            <motion.div
              key={idx}
              animate={{
                x: Math.cos((idx / knowledgeGraphNodes.length) * Math.PI * 2) * 120,
                y: Math.sin((idx / knowledgeGraphNodes.length) * Math.PI * 2) * 120,
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4 + (idx % 2),
                repeat: Infinity,
                delay: idx * 0.1,
              }}
              className="absolute w-12 h-12 rounded-full bg-slate-700/40 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm"
            >
              <span className="text-[9px] text-slate-300 text-center px-1 leading-tight">{node}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <p className="text-center text-slate-300 max-w-2xl mx-auto">
        The OpsMx AI Assistant has deep knowledge of your applications, infrastructure, security posture, compliance requirements, and operational workflows.
      </p>
    </div>
  )
}

function ProductsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Natural Language Across Every Product</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors group"
          >
            <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              {card.title}
            </h3>
            <ul className="space-y-2">
              {card.items.map((item) => (
                <li key={item} className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4 pt-4 border-t border-white/8">
              Ask questions instead of navigating dashboards.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function WorkflowSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">From Questions to Actions</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {workflowSteps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10"
          >
            <div className="text-sm font-bold text-cyan-300 mb-2">{step.label}</div>
            <p className="text-xs text-slate-400 leading-snug">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ConversationsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Example Conversations</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {conversations.map((conv, idx) => (
          <motion.div
            key={conv.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/4 space-y-4"
          >
            <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
              <p className="text-sm text-slate-300">
                <span className="font-bold text-cyan-300">User: </span>
                {conv.userMessage}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Assistant responds with:</p>
              {conv.responses.map((response, ridx) => (
                <motion.div
                  key={ridx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: ridx * 0.1, duration: 0.3 }}
                  className="text-sm text-slate-300 flex items-center gap-2"
                >
                  <span className="text-green-400">✓</span>
                  {response}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function EnterpriseSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Safe Enterprise AI</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {enterpriseCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors"
          >
            <h3 className="font-bold text-white mb-2">{card.title}</h3>
            <p className="text-sm text-slate-400">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DifferentiatorsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why OpsMx AI Assistant?</h2>

      <p className="text-center text-slate-300 max-w-3xl mx-auto mb-12">
        Unlike generic AI assistants, OpsMx has deep operational context across software, cloud, AI, delivery, and security workflows.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {differentiators.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors"
          >
            <h3 className="font-bold text-white mb-2">{card.title}</h3>
            <p className="text-sm text-slate-400">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function OutcomesSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Business Outcomes</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {outcomes.map((outcome, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-6 rounded-xl border border-white/8 bg-gradient-to-br from-cyan-500/10 to-green-500/10 hover:from-cyan-500/15 hover:to-green-500/15 transition-all text-center"
          >
            <p className="text-slate-300 font-medium text-sm">{outcome}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function FAQSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqItems.map((item, idx) => (
          <motion.details
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.02, duration: 0.3 }}
            className="group p-6 rounded-xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors cursor-pointer"
          >
            <summary className="flex items-center justify-between font-bold text-white">
              {item.q}
              <motion.span
                className="text-cyan-400 text-xl group-open:rotate-45"
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </summary>
            <p className="mt-4 text-slate-300 text-sm leading-relaxed">{item.a}</p>
          </motion.details>
        ))}
      </div>
    </div>
  )
}

export default function AIAssistantPage() {
  useEffect(() => {
    document.title = 'AI Assistant for Software Security & Remediation | OpsMx'
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-navy-950 pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Talk to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Software.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Use natural language to understand risk, diagnose issues, remediate vulnerabilities, investigate incidents, generate compliance reports, and automate security workflows across your entire software lifecycle.
          </p>
          <p className="text-lg text-slate-400">
            One assistant. Every platform. Every workflow.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <motion.a
            href="https://ai-rem-demo.remediation.opsmx.net/login"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Try the AI Assistant
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg border border-white/20 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-2"
          >
            Watch Demo
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="pt-16">
          <HeroAnimation />
        </div>
      </section>

      {/* Prompt Examples */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <PromptExamplesSection />
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <CapabilitiesSection />
      </section>

      {/* Knowledge Graph */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <KnowledgeGraphSection />
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ProductsSection />
      </section>

      {/* Workflow */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <WorkflowSection />
      </section>

      {/* Conversations */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ConversationsSection />
      </section>

      {/* Enterprise */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <EnterpriseSection />
      </section>

      {/* Differentiators */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <DifferentiatorsSection />
      </section>

      {/* Outcomes */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <OutcomesSection />
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <FAQSection />
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <FinalCTA
          headline="Stop Searching. Start Asking."
          subtitle="Use natural language to understand your software, investigate issues, remediate risk, and continuously improve security."
          buttonText="Request a Demo"
        />
      </section>
    </main>
  )
}
