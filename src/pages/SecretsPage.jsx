import { motion } from 'framer-motion'
import { ArrowRight, Fingerprint, FileCode2, GitMerge, ShieldCheck, Search, Terminal } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Pattern & Entropy Scanning',
    icon: Fingerprint,
    description: "Advanced heuristics find secrets that aren't just obvious strings. Detect high-entropy keys, tokens, and credentials hidden deep within your repo history.",
    color: '#f87171',
  },
  {
    title: 'Artifact Inspection',
    icon: FileCode2,
    description: "Don't just scan code. Scan your compiled images, layers, and configuration files to ensure no secrets were bundled during the build process.",
    color: '#60a5fa',
  },
  {
    title: 'Pipeline Enforcement',
    icon: GitMerge,
    description: 'Integrate as a build-breaking gate. If a secret is detected, block the deployment and alert the security team before the artifact ever reaches a registry.',
    color: '#34d399',
  },
]

const outcomes = [
  { title: 'Stop Credential Leaks at the Source', description: 'Catch hard-coded API keys, passwords, and tokens before they ever leave a developer machine or land in a registry.' },
  { title: 'Eliminate Secret Sprawl', description: 'Surface every credential scattered across repos, branches, container layers, and config files in one unified view.' },
  { title: 'Automated Vault Remediation', description: 'Replace detected secrets with secure vault references automatically, turning a critical finding into a one-click fix.' },
  { title: 'Shrink Your Breach Window', description: 'A leaked key is a live threat. Detect and revoke in minutes instead of discovering it months later in a breach report.' },
  { title: 'Provable Audit Trails', description: 'Show auditors exactly when a secret was introduced, detected, and remediated, with a complete tamper-evident history.' },
  { title: 'Developer-Friendly Guardrails', description: 'Block only what matters. Tuned detection keeps false positives low so developers trust the gate instead of bypassing it.' },
]

function FeatureCard({ item, index }) {
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
        style={{ background: `${item.color}18`, border: `1px solid ${item.color}28` }}
      >
        <item.icon className="w-6 h-6" style={{ color: item.color }} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
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

export default function SecretsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" /> Secrets &amp; Credential Protection
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Secrets are the keys to your kingdom.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Don't leak them.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Hard-coded API keys, passwords, and tokens are your biggest liability. OpsMx Delivery Shield automatically detects, prevents, and remediates secret leaks in your code and container artifacts before they reach production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.opsmx.com/talk-to-an-application-security-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  Get a Demo <ArrowRight className="w-4 h-4" />
                </a>
                <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                  See How It Works
                </button>
              </div>
            </motion.div>

            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 lg:mt-0"
            >
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-slate-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                    <Terminal className="w-4 h-4" /> Secret Detection Engine
                  </h3>
                  <span className="text-rose-400 font-mono text-xs animate-pulse">DETECTED</span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-950 rounded-lg border border-rose-500/30">
                    <p className="text-rose-400 font-mono text-sm flex items-start gap-2">
                      <span className="opacity-50">04:12:01</span> [WARN] High Entropy String in{' '}
                      <code className="bg-white/10 px-1 rounded">db-config.js</code>
                    </p>
                    <div className="mt-3 p-3 bg-white/5 rounded font-mono text-xs text-slate-300">
                      <span className="text-rose-400">const</span> API_KEY ={' '}
                      <span className="text-emerald-400">"AIzaSyD-7b89...f9a"</span>;
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Automated Remediation</p>
                      <p className="text-xs text-slate-400">Replaced with Vault Reference...</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Multi-Layer Secret Detection
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, idx) => (
              <FeatureCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            What You Get
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, idx) => (
              <OutcomeCard key={idx} outcome={outcome} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-cyan-950/20 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">Audit Your Secrets Posture Today</h2>
            <p className="text-lg text-slate-300 mb-8">
              See how many credentials are hiding in your codebase before attackers do.
            </p>
            <a
              href="https://www.opsmx.com/talk-to-an-application-security-expert/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2"
            >
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
