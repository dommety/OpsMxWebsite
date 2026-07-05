import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, CheckCircle, AlertCircle, Lock, Shield, Code2, Package, Cloud, Server, Cuboid, GitMerge, Scale } from 'lucide-react'
import Navbar from '../components/Navbar'
import FinalCTA from '../components/FinalCTA'
import {
  workflowSteps,
  governanceCards,
  integrations,
  problemCards,
  beforeAfterComparison,
  whyOpsMxCards,
  outcomes,
  faqItems,
} from '../data/fixRisk'

// ─── Remediation Sections Data ───────────────────────────────────────────

const remediationSections = [
  {
    id: 'code-remediation',
    title: 'Code Remediation',
    description: 'AI code fix suggestions, PR automation, secure code patches, root cause diagnosis, and fix verification.',
    icon: Code2,
    color: '#22d3ee',
  },
  {
    id: 'dependency-remediation',
    title: 'Dependency Remediation',
    description: 'Dependency upgrades, package fixes, container image remediation, SBOM/X-BOM updates, and integrity verification.',
    icon: Package,
    color: '#a78bfa',
  },
  {
    id: 'cloud-iac-remediation',
    title: 'Cloud & IaC Remediation',
    description: 'Cloud misconfiguration fixes, Terraform, CloudFormation, ARM/Bicep, cloud API updates, IAM, and security group remediation.',
    icon: Cloud,
    color: '#34d399',
  },
  {
    id: 'infrastructure-network-remediation',
    title: 'Infrastructure & Network Remediation',
    description: 'F5, WAF, firewalls, API gateways, load balancers, DNS, reverse proxies, CDN, and network policy remediation.',
    icon: Server,
    color: '#60a5fa',
  },
  {
    id: 'kubernetes-remediation',
    title: 'Kubernetes Remediation',
    description: 'Cluster fixes, workload remediation, manifests, Helm charts, admission policies, namespace controls, and runtime configuration.',
    icon: Cuboid,
    color: '#06b6d4',
  },
  {
    id: 'operations-delivery-remediation',
    title: 'Operations & Delivery Remediation',
    description: 'Pipeline failure diagnosis, deployment failure fixes, incident remediation, rollback / roll-forward guidance, release issues, and policy gate remediation.',
    icon: GitMerge,
    color: '#fbbf24',
  },
  {
    id: 'compliance-remediation',
    title: 'Compliance Remediation',
    description: 'Policy violations, missing evidence, control remediation, exceptions, audit findings, and regulatory reporting gaps.',
    icon: Scale,
    color: '#ec4899',
  },
]

// ─── Hero Section ───────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 w-fit">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">Fix Risk Platform</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Fix Risk with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Remediation Agents & Governed Workflows</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl">
          Remediate code, dependency, cloud, infrastructure, network, Kubernetes, operations, delivery, and compliance risks — then verify that fixes actually work.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-4 pt-8">
        <motion.a
          href="https://www.opsmx.com/talk-to-an-application-security-expert/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
        >
          Request a Demo
        </motion.a>
        <motion.a
          href="https://ssd.sandbox.opsmx.org/login?redir=/ui/application"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-lg border border-cyan-500/50 text-cyan-300 font-bold hover:bg-cyan-500/10 transition-all"
        >
          Try Remediation
        </motion.a>
      </div>
    </section>
  )
}

// ─── Remediation Sections ───────────────────────────────────────────────

function RemediationSectionsComponent() {
  return (
    <div className="space-y-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Remediation Across All Risk Domains</h2>
        <p className="text-lg text-slate-400 mb-12">Fix security, compliance, and operational risks with domain-specific remediation agents.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remediationSections.map((section, idx) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="p-6 rounded-xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors scroll-mt-24"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${section.color}20`, border: `1px solid ${section.color}40` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: section.color }} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{section.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ─── Governance Section ─────────────────────────────────────────────────

function GovernanceSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-8">
      <div>
        <h2 className="text-4xl font-bold mb-4">Governed Remediation, Not Blind Automation</h2>
        <p className="text-lg text-slate-400 max-w-3xl">
          OpsMx remediation workflows combine AI-assisted recommendations with human approval, policy guardrails, change controls, audit evidence, and verification.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {governanceCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-6 rounded-xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
            <p className="text-slate-300 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── Problem Section ────────────────────────────────────────────────────

function ProblemSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Security teams do not need more findings. They need fixes.</h2>
        <p className="text-slate-300 text-lg max-w-3xl">
          Modern scanners identify thousands of risks across code, open source, containers, cloud, Kubernetes, APIs, and delivery pipelines. But risk is not reduced until the right owner fixes the issue, the change is approved, the system is redeployed, and the fix is verified.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {problemCards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
            <p className="text-slate-300">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── Workflow Section ───────────────────────────────────────────────────

function WorkflowSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The OpsMx Remediation Workflow</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {workflowSteps.map((step, idx) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold text-sm">
                {step.step}
              </div>
              <h3 className="font-bold text-white">{step.label}</h3>
            </div>
            <p className="text-xs text-slate-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── Comparison Section ─────────────────────────────────────────────────

function ComparisonSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">From Root Cause to Verified Fix</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-red-400 mb-6">Before OpsMx</h3>
          <ul className="space-y-3">
            {beforeAfterComparison.before.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-green-400 mb-6">After OpsMx</h3>
          <ul className="space-y-3">
            {beforeAfterComparison.after.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// ─── Integrations Section ───────────────────────────────────────────────

function IntegrationsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Works Across Your Security and Delivery Stack</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {integrations.map((tool) => (
          <motion.div
            key={tool}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-medium hover:border-white/20 hover:bg-white/10 transition-colors"
          >
            {tool}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── Why OpsMx Section ──────────────────────────────────────────────────

function WhyOpsMxSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why OpsMx for Remediation?</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {whyOpsMxCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
            <p className="text-slate-300 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── Outcomes Section ───────────────────────────────────────────────────

function OutcomesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Business Outcomes</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {outcomes.map((outcome) => (
          <motion.div
            key={outcome}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-xl border border-white/8 bg-gradient-to-br from-cyan-500/10 to-green-500/10 hover:from-cyan-500/15 hover:to-green-500/15 transition-all text-center"
          >
            <p className="text-slate-300 font-medium text-sm">{outcome}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── FAQ Section ────────────────────────────────────────────────────────

function FAQSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>

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
    </section>
  )
}

// ─── Main Page ──────────────────────────────────────────────────────────

export default function FixRiskPage() {
  useEffect(() => {
    document.title = 'Fix Risk with Remediation Agents & Governed Workflows | OpsMx'
  }, [])

  useEffect(() => {
    // Handle hash-based navigation for deep linking
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-navy-950">
      <Navbar />
      <Hero />
      <RemediationSectionsComponent />
      <section className="border-t border-white/5 bg-navy-950">
        <GovernanceSection />
      </section>
      <section className="border-t border-white/5">
        <ProblemSection />
      </section>
      <section className="border-t border-white/5 bg-navy-950">
        <WorkflowSection />
      </section>
      <section className="border-t border-white/5">
        <ComparisonSection />
      </section>
      <section className="border-t border-white/5 bg-navy-950">
        <IntegrationsSection />
      </section>
      <section className="border-t border-white/5">
        <WhyOpsMxSection />
      </section>
      <section className="border-t border-white/5 bg-navy-950">
        <OutcomesSection />
      </section>
      <section className="border-t border-white/5">
        <FAQSection />
      </section>
      <FinalCTA />
    </div>
  )
}
