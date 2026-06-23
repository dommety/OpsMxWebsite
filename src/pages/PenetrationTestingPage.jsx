import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Filter, Zap, ShieldCheck, Target, Activity, AlertOctagon } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'AI Exploit Simulation',
    icon: Cpu,
    description: 'AI agents dynamically construct attack payloads in a sandboxed, production-replica environment to confirm whether a vulnerability can actually be breached.',
    color: '#f87171',
  },
  {
    title: 'False Positive Elimination',
    icon: Filter,
    description: 'Stop wasting time on theoretical vulnerabilities. Delivery Shield filters out issues that are unreachable, patched, or non-exploitable in your environment.',
    color: '#a78bfa',
  },
  {
    title: 'Automated Triage',
    icon: Zap,
    description: 'Receive prioritized fix lists. Instead of raw vulnerability data, get a verified, actionable plan that puts the most dangerous threats at the top.',
    color: '#34d399',
  },
]

const outcomes = [
  { title: 'Hunt Real Threats, Not Noise', description: 'Validation confirms which findings are genuinely exploitable, so your team fixes the few that matter instead of triaging thousands.' },
  { title: 'Cut False Positives by 95%', description: 'Sandbox exploitation proves reachability. Unreachable and already-patched issues drop out of the queue automatically.' },
  { title: 'Continuous, Not Quarterly', description: 'Pen testing runs inside your pipeline on every release instead of once a quarter, closing the window attackers exploit.' },
  { title: 'Mapped to Known Frameworks', description: 'Every confirmed exploit is tied to OWASP Top 10 and MITRE ATT&CK so your reporting speaks the language auditors expect.' },
  { title: 'Evidence You Can Hand Over', description: 'Each test produces a full evidence package, turning a pen-test finding into shareable proof for compliance teams.' },
  { title: 'Shift Security Left', description: 'Developers see exploitable findings at build time, with the exact payload and path, so fixes happen before merge.' },
]

function FeatureCard({ item, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all">
      <div className="p-3 rounded-lg inline-flex mb-4" style={{ background: `${item.color}18`, border: `1px solid ${item.color}28` }}>
        <item.icon className="w-6 h-6" style={{ color: item.color }} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
    </motion.div>
  )
}

function OutcomeCard({ outcome, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1 flex-shrink-0" />
        <h3 className="text-sm font-bold text-white">{outcome.title}</h3>
      </div>
      <p className="text-sm text-slate-400">{outcome.description}</p>
    </motion.div>
  )
}

export default function PenetrationTestingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold mb-6">
                <Target className="w-4 h-4" /> AI-Assisted Penetration Testing
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Stop chasing ghosts.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Hunt actual threats.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Vulnerability scanners overwhelm you with noise. Delivery Shield's AI-assisted pen testing validates which vulnerabilities are truly exploitable, filtering out 95% of false positives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                  Get a Demo <ArrowRight className="w-4 h-4" />
                </a>
                <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200">See How It Works</button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-12 lg:mt-0">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <h3 className="text-slate-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                    <Activity className="w-4 h-4" /> Threat Analysis Engine
                  </h3>
                  <span className="text-red-400 font-mono text-xs animate-pulse">ANALYZING</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <span className="text-slate-600 font-mono text-sm line-through">CVE-2023-XXXX (False Positive)</span>
                    </div>
                    <span className="text-slate-700 text-sm">✕</span>
                  </div>
                  <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-red-400 font-mono text-sm font-bold flex items-center gap-2"><AlertOctagon className="w-4 h-4" /> CRITICAL: EXPLOITABLE</span>
                      <span className="text-red-400 text-xs font-mono">CONFIDENCE: 98%</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">Path: /api/v1/auth/reset-token</p>
                    <div className="bg-slate-950 p-2 rounded text-[11px] font-mono text-emerald-400">// Validated: AI successfully injected payload in sandbox.</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <span className="text-slate-600 font-mono text-sm line-through">CVE-2024-YYYY (Unreachable Path)</span>
                    </div>
                    <span className="text-slate-700 text-sm">✕</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-black text-white mb-12 text-center">
            AI That Attacks So Attackers Can't
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, idx) => <FeatureCard key={idx} item={item} index={idx} />)}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-black text-white mb-12 text-center">
            What You Get
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, idx) => <OutcomeCard key={idx} outcome={outcome} index={idx} />)}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-cyan-950/20 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl font-black text-white mb-4">Know Your Real Attack Surface</h2>
            <p className="text-lg text-slate-300 mb-8">Stop drowning in false positives. Get confirmed, actionable exploits in minutes.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
