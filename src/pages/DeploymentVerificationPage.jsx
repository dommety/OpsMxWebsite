import { motion } from 'framer-motion'
import { ArrowRight, Database, Microscope, ShieldAlert, BarChart2, Activity, TrendingUp, RotateCcw } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Multi-Source Telemetry',
    icon: Database,
    description: 'Ingest metrics, logs, and traces from your entire observability stack simultaneously. Normalize data from Datadog, Prometheus, Splunk, and more.',
    color: '#22d3ee',
  },
  {
    title: 'Automated Canary Analysis',
    icon: Microscope,
    description: 'Eliminate eyeballing. A statistical engine compares hundreds of performance vectors between canary and baseline deployments over set time windows.',
    color: '#2dd4bf',
  },
  {
    title: 'Zero-Touch Rollbacks',
    icon: ShieldAlert,
    description: 'When performance risk exceeds your threshold, Delivery Shield automatically signals Argo or Spinnaker to reroute traffic and terminate the canary.',
    color: '#60a5fa',
  },
]

const outcomes = [
  { title: 'Catch Bad Deploys Early', description: 'Behavioral anomalies surface during the canary window, before a regression ever reaches your full user base.' },
  { title: 'Replace Hope With Statistics', description: 'A weighted scoring engine compares canary to baseline across hundreds of metrics instead of manual dashboard-watching.' },
  { title: 'Automatic, Instant Rollback', description: 'When a canary fails its score, traffic drains and the release reverts with no human in the loop.' },
  { title: 'Reduce Alert Noise', description: 'Models account for natural traffic spikes and seasonality, so you never roll back a healthy release by mistake.' },
  { title: 'Works With Your Stack', description: 'Native integration with Datadog, Prometheus, New Relic, and more means no new telemetry pipeline to build.' },
  { title: 'Post-Rollout Validation', description: 'Verification continues after 100% rollout, watching for subtle degradations that only appear at full scale.' },
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

export default function DeploymentVerificationPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-6">
                <BarChart2 className="w-4 h-4" /> Automated Canary Analysis
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Stop Bad Deployments{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Before Users Notice.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Delivery Shield's Deployment Assessment and Risk module analyzes real-time application behavior during canary releases, instantly detecting performance anomalies to orchestrate zero-touch rollbacks.
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
                  <div>
                    <h3 className="text-white font-semibold flex items-center gap-2"><Activity className="w-5 h-5 text-teal-400" /> Canary: v2.1.4</h3>
                    <p className="text-xs text-slate-500 mt-1">15m window vs Baseline</p>
                  </div>
                  <span className="bg-rose-500/10 text-rose-400 text-xs px-2 py-1 rounded border border-rose-500/20 font-bold animate-pulse">SCORE: 42 (FAIL)</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-950 rounded-lg p-4 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">CPU Utilization</span>
                      <span className="text-xs text-emerald-400">✓ PASS</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-black/30 rounded p-2 text-center border border-white/10"><p className="text-[10px] text-slate-500 uppercase">Baseline</p><p className="text-lg text-slate-200 font-mono">34.2%</p></div>
                      <div className="bg-black/30 rounded p-2 text-center border border-emerald-500/20"><p className="text-[10px] text-slate-500 uppercase">Canary</p><p className="text-lg text-emerald-400 font-mono">35.1%</p></div>
                    </div>
                  </div>
                  <div className="bg-rose-500/5 rounded-lg p-4 border border-rose-500/30 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-rose-500" />
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-200">P99 Latency</span>
                      <span className="text-xs text-rose-400 font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" /> ANOMALY</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-black/30 rounded p-2 text-center border border-white/10"><p className="text-[10px] text-slate-500 uppercase">Baseline</p><p className="text-lg text-slate-200 font-mono">124ms</p></div>
                      <div className="bg-rose-500/10 rounded p-2 text-center border border-rose-500/30"><p className="text-[10px] text-rose-400 uppercase">Canary</p><p className="text-lg text-rose-400 font-mono font-bold">485ms</p></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                    <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/30"><RotateCcw className="w-4 h-4 text-rose-400" /></div>
                    <div><p className="text-sm text-slate-200 font-medium">Auto-Rollback Triggered</p><p className="text-xs text-slate-500">Traffic drained from canary pods.</p></div>
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
            Replace Hope With Mathematical Certainty
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
            <h2 className="text-4xl font-black text-white mb-4">Stop Pushing Risky Code to Everyone</h2>
            <p className="text-lg text-slate-300 mb-8">See how intelligent telemetry assessment safeguards every release.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
