import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'

const pricingTiers = [
  {
    name: 'Starter',
    description: 'For small teams getting started with security',
    price: 'Custom',
    cta: 'Request Demo',
    highlighted: false,
    features: [
      { name: 'SAST scanning', included: true },
      { name: 'SCA & dependency tracking', included: true },
      { name: 'Basic CSPM', included: true },
      { name: 'Up to 5 applications', included: true },
      { name: 'Community support', included: true },
      { name: 'Advanced DAST', included: false },
      { name: 'Runtime threat detection', included: false },
      { name: 'Remediation agents', included: false },
    ],
  },
  {
    name: 'Professional',
    description: 'For growing teams scaling security',
    price: 'Custom',
    cta: 'Request Demo',
    highlighted: true,
    features: [
      { name: 'All Starter features', included: true },
      { name: 'Advanced DAST & API security', included: true },
      { name: 'Kubernetes security scanning', included: true },
      { name: 'IaC scanning & remediation', included: true },
      { name: 'Up to 50 applications', included: true },
      { name: 'Priority support', included: true },
      { name: 'Runtime threat detection', included: true },
      { name: 'Basic remediation agents', included: true },
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large-scale security operations',
    price: 'Custom',
    cta: 'Contact Sales',
    highlighted: false,
    features: [
      { name: 'All Professional features', included: true },
      { name: 'Unlimited applications', included: true },
      { name: 'Full remediation suite', included: true },
      { name: 'AI-powered risk assessment', included: true },
      { name: 'Supply chain integrity', included: true },
      { name: 'Dedicated support & SLA', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'On-premise deployment', included: true },
    ],
  },
]

const faqs = [
  {
    question: 'How is OpsMx priced?',
    answer: 'OpsMx pricing is based on the number of applications, deployment environments, and features you need. We offer flexible pricing tiers to fit teams of all sizes.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes, we offer a free trial to help you evaluate OpsMx. Contact our sales team to get started with a demo.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Absolutely. You can change your plan at any time as your needs evolve. We\'ll adjust your billing accordingly.',
  },
  {
    question: 'What support is included?',
    answer: 'All plans include email support. Professional and Enterprise plans include priority support with guaranteed response times and dedicated support engineers.',
  },
  {
    question: 'Do you offer annual billing discounts?',
    answer: 'Yes, we offer discounts for annual commitments. Contact sales to discuss volume and term discounts.',
  },
  {
    question: 'How does the Remediation Control Plane work?',
    answer: 'OpsMx automatically detects security issues and provides AI-assisted remediation recommendations, or can auto-remediate with your approval. This saves your team time and reduces manual work.',
  },
]

function PricingCard({ tier }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${
        tier.highlighted
          ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-2xl shadow-cyan-500/20 ring-1 ring-cyan-500/50 scale-105'
          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
      }`}
    >
      {tier.highlighted && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />
      )}

      <div className="p-8">
        {tier.highlighted && (
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50">
            <p className="text-xs font-bold text-cyan-400">MOST POPULAR</p>
          </div>
        )}

        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-sm text-slate-400 mb-6">{tier.description}</p>

        <div className="mb-8">
          <p className="text-4xl font-black text-white mb-1">{tier.price}</p>
          {tier.price === 'Custom' && (
            <p className="text-xs text-slate-500">Tailored to your needs</p>
          )}
        </div>

        <button
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 mb-8 ${
            tier.highlighted
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/20'
              : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30'
          }`}
        >
          {tier.cta}
        </button>

        <div className="space-y-4">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              {feature.included ? (
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
              )}
              <span
                className={`text-sm ${
                  feature.included ? 'text-slate-300' : 'text-slate-500 line-through'
                }`}
              >
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <motion.div
      className="border-b border-white/10 py-6"
      initial={false}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left group"
      >
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-slate-400 mt-4">{faq.answer}</p>
      </motion.div>
    </motion.div>
  )
}

export default function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                Simple, Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Pricing</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Scale security across your entire software delivery lifecycle. No hidden fees. Pay for what you use.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, idx) => (
                <PricingCard key={idx} tier={tier} />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-12 text-center">Feature Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-white">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-cyan-400">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-300">SAST & SCA</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-300">DAST & API Security</td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-300">Cloud & Runtime Security</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-300">Remediation Agents</td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-300">AI Risk Assessment</td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-300">Dedicated Support</td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-6 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-12 text-center">Frequently Asked Questions</h2>
            <div className="border-t border-white/10">
              {faqs.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  faq={faq}
                  isOpen={openFAQ === idx}
                  onToggle={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12"
            >
              <h2 className="text-3xl font-black text-white mb-4">Ready to transform security?</h2>
              <p className="text-lg text-slate-300 mb-8">
                Talk to our team about the right plan for your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                  Request Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
