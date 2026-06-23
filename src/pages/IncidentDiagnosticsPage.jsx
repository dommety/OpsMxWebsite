import { motion } from 'framer-motion'
import { ArrowRight, GitMerge, MapPin, Timer, Flame, CheckCircle2, XCircle, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Pipeline Correlation',
    icon: GitMerge,
    description: 'Stitch together signals from across your build, test, and deploy stages into a single incident timeline, so you see the whole story, not isolated alerts.',
    color: '#818cf8',
  },
  {
    title: 'Instant Failure Point',
    icon: MapPin,
    description: 'Pinpoint the exact stage, step, and service where a pipeline broke down, eliminating the manual hunt across dashboards and logs.',
    color: '#a78bfa',
  },
  {
    title: 'Hours to Minutes',
    icon: Timer,
    description: 'Turn chaotic incident response into a guided, data-driven resolution. Slash diagnostic time so your engineers can fix and move on.',
    color: '#22d3ee',
  },
]

const outcomes = [
  { title: 'Stop Firefighting, Start Resolving', description: 'A single correlated incident view replaces frantic dashboard-hopping during a production outage.' },
  { title: 'See the Whole Pipeline Story', description: 'Build, test, and deploy signals stitch into one timeline, so you understand cause and sequence at a glance.' },
  { title: 'Find the Failure Point Instantly', description: 'The exact failing stage, step, and service are surfaced automatically, no manual log correlation required.' },
  { title: 'Cut Diagnostic Time Drastically', description: 'Guided, data-driven resolution collapses incident triage from hours of investigation to minutes.' },
  { title: 'Unify Your Tooling Signals', description: 'Disparate CI/CD and observability tools feed one incident map instead of five disconnected consoles.' },
  { title: 'Reduce On-Call Burnout', description: 'Clear diagnostics and guided next steps mean less 3 a.m. guesswork and calmer incident response.' },
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

export default function IncidentDiagnosticsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6">
                <Flame className="w-4 h-4" /> Intelligent Incident Diagnostics
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Stop Firefighting.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Start Resolving.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                When a deployment breaks, OpsMx ISD correlates signals across your entire pipeline into a single incident map, pinpointing the exact failure point so your team resolves issues in minutes, not hours.
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
                  <h3 className="text-white font-semibold flex items-center gap-2"><MapPin className="w-5 h-5 text-indigo-400" /> Pipeline Incident Map</h3>
                  <span className="bg-rose-500/15 text-rose-400 text-xs px-2 py-1 rounded border border-rose-500/25 font-bold">INCIDENT #4471</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <div className="flex-1"><p className="text-sm text-slate-200 font-medium">Build</p><p className="text-xs text-slate-500">Compiled &amp; cached — 2m 14s</p></div>
                    <span className="text-xs text-emerald-400">Pass</span>
                  </div>
                  <div className="flex justify-center"><div className="w-0.5 h-3 bg-white/10" /></div>
                  <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <div className="flex-1"><p className="text-sm text-slate-200 font-medium">Test</p><p className="text-xs text-slate-500">428 passed — 5m 02s</p></div>
                    <span className="text-xs text-emerald-400">Pass</span>
                  </div>
                  <div className="flex justify-center"><div className="w-0.5 h-3 bg-rose-500/40" /></div>
                  <div className="flex items-center gap-3 bg-rose-500/10 p-3 rounded-lg border border-rose-500/30 relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1 bg-rose-500" />
                    <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    <div className="flex-1"><p className="text-sm text-slate-200 font-medium">Deploy</p><p className="text-xs text-rose-400">Readiness probe timeout — svc:payments</p></div>
                    <span className="text-xs text-rose-400 font-bold flex items-center gap-1"><Clock className="w-3 h-3" /> FAILED</span>
                  </div>
                </div>
                <div className="mt-4 bg-indigo-500/5 p-3 rounded-lg border border-indigo-500/20">
                  <p className="text-xs text-indigo-300"><span className="font-semibold">Failure point isolated:</span> Deploy → payments → readiness probe exceeded 30s threshold.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-black text-white mb-12 text-center">
            One Map for the Entire Incident
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
            <h2 className="text-4xl font-black text-white mb-4">Resolve Incidents in Minutes</h2>
            <p className="text-lg text-slate-300 mb-8">See how OpsMx ISD turns chaotic incident response into guided resolution.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
