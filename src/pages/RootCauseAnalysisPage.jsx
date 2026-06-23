import { motion } from 'framer-motion'
import { ArrowRight, Network, BrainCircuit, Timer, GitBranch, AlertTriangle, Search } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Instant Correlation',
    icon: Network,
    description: 'Automatically connect a failed deployment to the exact commit, config change, manifest diff, or dependency that introduced it, across your entire delivery graph.',
    color: '#818cf8',
  },
  {
    title: 'AI Diagnostic Engine',
    icon: BrainCircuit,
    description: 'A purpose-built model analyzes logs, events, and sync status to surface the most probable root cause with a confidence score, not just a wall of errors.',
    color: '#a78bfa',
  },
  {
    title: 'Accelerated MTTR',
    icon: Timer,
    description: 'Skip the war room. Engineers get a precise diagnosis and suggested fix in seconds, collapsing mean-time-to-resolution from hours to minutes.',
    color: '#22d3ee',
  },
]

const outcomes = [
  { title: 'End the Blame-Game War Room', description: 'AI pinpoints the failing component and the change that caused it, so teams skip hours of cross-team finger-pointing.' },
  { title: 'Diagnose Argo Sync Failures Instantly', description: 'Correlate GitOps sync errors to the exact manifest or config diff responsible, with a confidence score attached.' },
  { title: 'Collapse MTTR to Minutes', description: 'A precise diagnosis and suggested remediation arrive in seconds instead of hours of manual log spelunking.' },
  { title: 'Full Delivery-Graph Context', description: 'Every failure is mapped across commits, builds, manifests, and dependencies, never an isolated stack trace.' },
  { title: 'Learn From Every Incident', description: 'The engine improves with each resolved failure, getting sharper at recognizing recurring root-cause patterns.' },
  { title: 'Hand Engineers a Fix, Not a Puzzle', description: 'Suggested remediations come with the diagnosis, so the path from alert to resolution is immediate.' },
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

export default function RootCauseAnalysisPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6">
                <Search className="w-4 h-4" /> AI-Powered Root Cause Analysis
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Find the Root Cause{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">in Seconds, Not Hours.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                When an Argo CD deployment fails, OpsMx ISD instantly correlates the failure to the exact commit, config, or dependency responsible, using AI to deliver a precise diagnosis and accelerate your mean-time-to-resolution.
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
                  <h3 className="text-white font-semibold flex items-center gap-2"><GitBranch className="w-5 h-5 text-indigo-400" /> Argo Sync Failure</h3>
                  <span className="bg-rose-500/15 text-rose-400 text-xs px-2 py-1 rounded border border-rose-500/25 font-bold">DEGRADED</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-rose-500/20 mb-4">
                  <div className="flex items-center gap-2 text-rose-400 text-sm mb-2"><AlertTriangle className="w-4 h-4" /> Application: checkout-service</div>
                  <p className="text-xs text-slate-400 font-mono">SyncError: ComparisonError — rpc error: code = Unknown</p>
                </div>
                <div className="bg-indigo-500/5 p-4 rounded-lg border border-indigo-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-indigo-300 font-semibold text-sm flex items-center gap-2"><BrainCircuit className="w-4 h-4" /> AI Analysis</span>
                    <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">98% correlation</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-3">Suspected root cause identified in latest commit:</p>
                  <div className="bg-black/30 p-3 rounded font-mono text-xs border border-white/10">
                    <p className="text-slate-500"># deployment.yaml — commit a4f9c1</p>
                    <p className="text-rose-400">- memory: "512Mi"</p>
                    <p className="text-emerald-400">+ memory: "512"</p>
                    <p className="text-slate-400 mt-2">Invalid quantity — missing unit suffix.</p>
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
            From Failure to Diagnosis, Automatically
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
            <h2 className="text-4xl font-black text-white mb-4">Stop Guessing. Start Diagnosing.</h2>
            <p className="text-lg text-slate-300 mb-8">See how OpsMx ISD pinpoints the root cause of deployment failures in seconds.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
