import { motion } from 'framer-motion'
import { ArrowRight, RotateCcw, Wrench, ShieldCheck, Activity, Zap, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Intelligent Rollbacks',
    icon: RotateCcw,
    description: 'Automatically revert to the last known-good deployment the instant a release breaches your risk thresholds, with zero manual intervention.',
    color: '#34d399',
  },
  {
    title: 'Config Auto-Correction',
    icon: Wrench,
    description: 'Detect and fix misconfigurations, drifted manifests, and policy violations on the fly, restoring desired state without paging an engineer.',
    color: '#22d3ee',
  },
  {
    title: 'Verified Recovery',
    icon: ShieldCheck,
    description: 'Every remediation is validated against live telemetry, confirming the system is truly healthy before the incident is marked resolved.',
    color: '#60a5fa',
  },
]

const outcomes = [
  { title: 'Stop Firefighting, Start Fixing', description: 'Automated remediation handles the routine recovery work so your engineers focus on building, not on 3 a.m. rollbacks.' },
  { title: 'Recover Without Manual Steps', description: 'When a deployment goes bad, the system reverts to the last known-good state automatically, with no human in the loop.' },
  { title: 'Self-Heal Configuration Drift', description: 'Drifted manifests and misconfigurations are detected and corrected on the fly, restoring desired state continuously.' },
  { title: 'Verify Before Declaring Victory', description: 'Recovery is confirmed against live telemetry, so an incident is only closed once the system is provably healthy.' },
  { title: 'Slash Downtime', description: 'Detection-to-recovery shrinks from manual minutes or hours to automated seconds, protecting your SLAs.' },
  { title: 'Build an Auditable Recovery Trail', description: 'Every automated action is logged with its trigger and outcome, giving you a clean post-incident record.' },
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

export default function OperationalRemediationPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" /> Automated Operational Remediation
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Stop Firefighting.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Start Fixing.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                OpsMx ISD doesn't just detect failures, it resolves them. Automatically roll back bad deployments, correct configuration drift, and verify recovery against live telemetry, all without manual intervention.
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
                  <h3 className="text-white font-semibold flex items-center gap-2"><Activity className="w-5 h-5 text-emerald-400" /> Remediation Console</h3>
                  <span className="bg-emerald-500/15 text-emerald-400 text-xs px-2 py-1 rounded border border-emerald-500/25 font-bold flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Auto-Healing</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-rose-500/10 p-3 rounded-lg border border-rose-500/30">
                    <div className="w-8 h-8 rounded-full bg-rose-500/15 flex items-center justify-center flex-shrink-0"><Zap className="w-4 h-4 text-rose-400" /></div>
                    <div className="flex-1"><p className="text-sm text-slate-200 font-medium">Deployment Busted</p><p className="text-xs text-rose-400">Error rate 14.2% — threshold 2%</p></div>
                    <span className="text-xs text-slate-500">T+0s</span>
                  </div>
                  <div className="flex justify-center"><div className="w-0.5 h-3 bg-white/10" /></div>
                  <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-lg border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0"><RotateCcw className="w-4 h-4 text-amber-400" /></div>
                    <div className="flex-1"><p className="text-sm text-slate-200 font-medium">Auto-Rollback Initiated</p><p className="text-xs text-slate-500">Reverting to v3.8.1 (last known-good)</p></div>
                    <span className="text-xs text-slate-500">T+3s</span>
                  </div>
                  <div className="flex justify-center"><div className="w-0.5 h-3 bg-white/10" /></div>
                  <div className="flex items-center gap-3 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-4 h-4 text-emerald-400" /></div>
                    <div className="flex-1"><p className="text-sm text-slate-200 font-medium">System Recovered</p><p className="text-xs text-emerald-400">Error rate 0.1% — verified via telemetry</p></div>
                    <span className="text-xs text-slate-500">T+22s</span>
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
            Detection Is Not Enough. Resolve It.
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
            <h2 className="text-4xl font-black text-white mb-4">Turn Outages Into Auto-Recoveries</h2>
            <p className="text-lg text-slate-300 mb-8">See how OpsMx ISD remediates production incidents automatically.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
