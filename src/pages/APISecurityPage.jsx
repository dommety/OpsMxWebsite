import { motion } from 'framer-motion'
import { ArrowRight, Eye, FileCode2, ShieldAlert, ShieldCheck, Network, Terminal } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Shadow API Discovery',
    icon: Eye,
    description: 'Automatically map all active endpoints in your environment, identifying rogue or undocumented APIs that bypass your standard security review processes.',
    color: '#60a5fa',
  },
  {
    title: 'Contract Validation',
    icon: FileCode2,
    description: 'Ensure code matches the defined OpenAPI (Swagger) specs. Automatically block releases that introduce breaking changes or security-critical parameter schema drift.',
    color: '#a78bfa',
  },
  {
    title: 'Runtime Policy Gate',
    icon: ShieldAlert,
    description: 'Enforce API security policies at the deployment gate. Prevent insecurely configured endpoints, like exposed testing APIs, from reaching production clusters.',
    color: '#22d3ee',
  },
]

const outcomes = [
  { title: 'Eliminate Shadow APIs', description: 'Discover every endpoint actually running in your environment, including the ones no one documented or remembered to secure.' },
  { title: 'Catch Schema Drift Early', description: 'When code diverges from its OpenAPI contract, the release is blocked before an undocumented parameter becomes a breach.' },
  { title: 'Stop Exposed Endpoints', description: 'Testing and debug APIs never make it to production. The runtime gate enforces your policy on every deployment.' },
  { title: 'Continuous API Inventory', description: 'Maintain a live, always-current map of every endpoint, its authentication posture, and its risk level.' },
  { title: 'Faster Security Reviews', description: 'Automated contract and policy checks replace manual endpoint-by-endpoint review, freeing your AppSec team.' },
  { title: 'Audit-Ready Evidence', description: 'Generate proof that every API was validated, authenticated, and policy-compliant at the moment of release.' },
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

export default function APISecurityPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                <Network className="w-4 h-4" /> Enterprise API Security Posture
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Stop Shadow APIs{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">before they become breaches.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Modern applications are built on thousands of endpoints. Delivery Shield discovers, validates, and secures every API across your CI/CD pipeline, ensuring no endpoint goes unprotected.
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
                    <Terminal className="w-4 h-4" /> API Security Scan Engine
                  </h3>
                  <span className="text-blue-400 font-mono text-xs animate-pulse">MONITORING</span>
                </div>
                <div className="p-4 bg-slate-950 rounded-lg border border-blue-500/20">
                  <p className="text-blue-400 font-mono text-sm mb-3">ENDPOINT: /v1/user-data</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400"><span>Authentication Check</span><span className="text-emerald-400">Passed</span></div>
                    <div className="flex items-center justify-between text-xs text-slate-400"><span>OAS Contract Validation</span><span className="text-rose-400">FAILED</span></div>
                    <div className="bg-rose-500/10 p-3 rounded text-rose-300 font-mono text-[11px] border border-rose-500/20">
                      Critical Risk: API schema drift detected. Undocumented parameter 'admin_override' discovered.
                    </div>
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
            Full API Lifecycle Protection
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
            <h2 className="text-4xl font-black text-white mb-4">Eliminate Your API Blind Spots</h2>
            <p className="text-lg text-slate-300 mb-8">Discover every endpoint, validate every contract, and gate every deployment.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
