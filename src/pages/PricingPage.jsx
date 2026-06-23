import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'

// ─── DATA ────────────────────────────────────────────────────────────────────

const tabs = ['Security Pricing', 'DevOps/CD Pricing', 'OSS Support & Services']

const securityTiers = [
  {
    name: 'Free',
    subtitle: 'Complete Security for Solo Developers',
    description:
      'Secure your code, open-source, and AI projects at no cost—perfect for solo developers and creators starting their security journey.',
    cta: 'Start Free',
    ctaHref: 'https://www.opsmx.com/opsmx-delivery-shield-on-demand-scan-source-code/',
    highlighted: false,
    features: [
      'Solo devs, vibe coders, solopreneurs',
      '1 app + AI security',
      'Unified view + prioritization',
      'Limited suggestions',
      'Basic CI/CD + SCM',
      'Basic coverage',
      'Community support',
    ],
  },
  {
    name: 'For Teams',
    subtitle: 'Advanced Security for Growing Teams',
    description:
      'Advanced security and automation for small to mid-sized teams, with deeper integrations, team analytics, and faster issue resolution.',
    cta: 'Try Teams',
    ctaHref: 'https://www.opsmx.com/talk-to-an-application-security-expert/',
    highlighted: true,
    features: [
      'Small & mid-size dev / DevSecOps teams',
      'Multiple apps, team-wide security',
      'Unified + expanded reporting & analytics',
      'Expanded automation',
      'Popular toolchain integrations',
      'Standard team-level',
      'Enhanced OSS tracking',
      'Standard support',
    ],
  },
  {
    name: 'For Enterprise',
    subtitle: 'Advanced Modular Security for Enterprises',
    description:
      'Modular, scalable security with full automation, custom pipeline integrations, and robust governance—built for enterprise AppSec and large organizations.',
    cta: 'Contact Sales',
    ctaHref: 'https://www.opsmx.com/contact-us/',
    highlighted: false,
    features: [
      'Enterprise AppSec teams & large orgs',
      'Unlimited apps & enterprise-scale security',
      'Unified + enterprise dashboards, trend analysis',
      'Full auto-remediation (fix PRs, policy-based enforcement)',
      'Deep enterprise integrations + custom connectors',
      'Rich policy & compliance management',
      'Advanced OSS & AI model risk management',
      'Premium support + onboarding',
    ],
  },
]

const devopsTiers = [
  {
    name: 'Free',
    subtitle: '',
    description:
      'Effortless GitOps CD for solo developers—automate app and AI deployments on Kubernetes with community support and no DevOps hires.',
    cta: 'Start Free',
    ctaHref: 'https://www.opsmx.com/opsmx-delivery-shield-on-demand-scan-source-code/',
    highlighted: false,
    features: [
      'Solo devs & solopreneurs',
      'GitOps based delivery',
      'Central dashboard + limited auto-diagnose',
      'Limited via chat interface',
      'Community',
      'Basic security built-in',
    ],
  },
  {
    name: 'For Teams',
    subtitle: '',
    description:
      'Reliable, repeatable delivery for growing teams—streamline CI/CD, boost diagnostics, and reduce DevOps overhead with built-in support.',
    cta: 'Try Teams',
    ctaHref: 'https://www.opsmx.com/talk-to-an-application-security-expert/',
    highlighted: true,
    features: [
      'Small / mid-size dev & DevOps teams',
      'Repeatable deployments & custom workflows',
      'Deeper diagnostics, team-wide visibility',
      'More automation, faster issue resolution',
      'Some optional add-ons; basic integrations',
      'Standard business hours support',
      'Enhanced controls, best practices',
    ],
  },
  {
    name: 'For Enterprise',
    subtitle: '',
    description:
      'Reliable, repeatable delivery for growing teams—streamline CI/CD, boost diagnostics, and reduce DevOps overhead with built-in support.',
    cta: 'Contact Sales',
    ctaHref: 'https://www.opsmx.com/contact-us/',
    highlighted: false,
    features: [
      'Large enterprises with multicloud & compliance needs',
      'Multicloud/hybrid, complex deployment patterns',
      'Full observability, custom dashboards & analytics & More',
      'Full automation + policies for auto remediation/fixing',
      'Wide set of modular options (security, compliance, IDP, etc.), deep enterprise tool integration',
      '24×7 critical support, SLA, dedicated resources / onboarding',
      'Strong security & compliance modules, audit, enterprise governance & identity (IDP)',
    ],
  },
]

const ossTiers = [
  {
    name: 'Argo OSS Support',
    subtitle: 'Argo, made enterprise-ready.',
    description: '',
    cta: 'Contact Sales',
    ctaHref: 'https://www.opsmx.com/contact-us/',
    highlighted: false,
    features: [
      'Certified builds with hardened security patches',
      'SLA-backed support for incidents and bug fixes',
      'Guided upgrades, scaling, and high availability',
      'Integration help with IDPs, policies, and enterprise toolchains',
      'Expert GitOps consulting and best practices',
    ],
  },
  {
    name: 'Spinnaker OSS Support',
    subtitle: 'Spinnaker support without the risk.',
    description: '',
    cta: 'Contact Sales',
    ctaHref: 'https://www.opsmx.com/contact-us/',
    highlighted: false,
    features: [
      'Security patches and backports for vulnerabilities',
      'On-demand fixes before upstream merges land',
      'Upgrade assistance and lifecycle planning',
      'Multi-cloud and hybrid deployment expertise',
      'Custom extensions, integrations, and tuning',
    ],
  },
  {
    name: 'Custom DevOps & Security Agents',
    subtitle: 'AI agents, built for your enterprise.',
    description: '',
    cta: 'Contact Sales',
    ctaHref: 'https://www.opsmx.com/contact-us/',
    highlighted: false,
    features: [
      'Design and customize agents for CI/CD and AppSec workflows',
      'AI-driven remediation and policy enforcement tailored to your org',
      'In-IDE copilots that guide developers with security and compliance fixes',
      'Operational AI agents for anomaly detection and diagnostics',
      'Human-in-the-loop workflows blending automation with approvals',
    ],
  },
]

const tiersByTab = [securityTiers, devopsTiers, ossTiers]

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function PricingCard({ tier, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 ${
        tier.highlighted
          ? 'border-cyan-500/40 bg-gradient-to-b from-cyan-950/60 to-navy-900/80 shadow-lg shadow-cyan-500/10'
          : 'border-white/8 bg-gradient-to-b from-white/4 to-white/2'
      }`}
    >
      {/* Highlighted badge */}
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-electric-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
        {tier.subtitle && (
          <p className="text-sm font-semibold text-slate-300 mb-3">{tier.subtitle}</p>
        )}
        {tier.description && (
          <p className="text-sm text-slate-400 leading-relaxed">{tier.description}</p>
        )}
      </div>

      {/* CTA button */}
      <div className="mb-8">
        <a
          href={tier.ctaHref}
          className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 border ${
            tier.highlighted
              ? 'border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400'
              : 'border-white/20 text-white hover:bg-white/8 hover:border-white/30'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(255,200,80,0.08), rgba(255,150,40,0.04))',
          }}
        >
          {tier.cta}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-cyan-400" strokeWidth={2.5} />
            </div>
            <span className="text-sm text-slate-300 leading-snug">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState(0)

  const currentTiers = tiersByTab[activeTab]

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-electric-500/3 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/8 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Modular and Affordable Pricing
          </motion.h1>

          {/* Tab switcher */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded-2xl p-1.5 mt-8"
          >
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === i
                    ? 'text-slate-900 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-white"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentTiers.map((tier, i) => (
                <PricingCard key={tier.name} tier={tier} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 overflow-hidden border-t border-white/6">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ship Secure Faster
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 mb-8 text-lg"
          >
            Talk to our team about the right plan for your organization.
          </motion.p>
          <motion.a
            href="https://www.opsmx.com/talk-to-an-application-security-expert/"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* Footer note */}
      <div className="border-t border-white/6 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            All plans include a free trial. No credit card required to start.{' '}
            <a
              href="https://www.opsmx.com/contact-us/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Contact us
            </a>{' '}
            for custom enterprise agreements.
          </p>
        </div>
      </div>
    </div>
  )
}
