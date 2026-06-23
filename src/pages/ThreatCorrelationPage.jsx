import { motion } from 'framer-motion'
import { ArrowRight, RadioReceiver, GitCommit, Crosshair, Satellite, AlertOctagon, Server, Box, ArrowDown } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Live Feed Ingestion',
    icon: RadioReceiver,
    description: 'Continuously ingest data from NVD, CISA KEV, Exploit DB, and commercial threat intelligence feeds to stay ahead of zero-days.',
    color: '#a78bfa',
  },
  {
    title: 'Contextual Blast Radius',
    icon: GitCommit,
    description: "Don't just flag a vulnerability, map it. Instantly know which repository, build, artifact, and running Kubernetes pod is affected.",
    color: '#d946ef',
  },
  {
    title: 'Prioritized Remediation',
    icon: Crosshair,
    description: 'Focus your engineers on the vulnerabilities that pose real, exploitable danger to your internet-facing production workloads.',
    color: '#22d3ee',
  },
]

const outcomes = [
  { title: 'End the Zero-Day Panic Drill', description: 'The moment a CVE is published, see your exact exposure across every environment in seconds, not days of spreadsheet work.' },
  { title: 'Cut Through CVE Noise', description: 'Correlation to your live inventory filters thousands of alerts down to the handful that actually threaten production.' },
  { title: 'Know Your Blast Radius', description: 'Map every vulnerable component to the specific repo, build, artifact, and pod running it, with full deployment context.' },
  { title: 'Prioritize by Real Exposure', description: 'Internet-facing, exploitable workloads rise to the top; internal, mitigated ones drop down automatically.' },
  { title: 'Trigger Remediation Instantly', description: 'Route confirmed production exposure straight into remediation workflows the moment it is detected.' },
  { title: 'Always-On Intelligence', description: 'Live feeds keep your correlation current around the clock, so nothing new slips past between scans.' },
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

export default function ThreatCorrelationPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6">
                <Crosshair className="w-4 h-4" /> Context-Aware Vulnerability Management
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Instantly Map Global Threats to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Live Environments</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Stop the zero-day panic drill. OpsMx Delivery Shield automatically ingests real-time threat intelligence and correlates it against your live application inventory to reveal your exact blast radius in seconds.
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
                  <h3 className="text-white font-semibold flex items-center gap-2"><Satellite className="w-5 h-5 text-purple-400" /> Threat Correlation Engine</h3>
                  <span className="bg-purple-500/15 text-purple-400 text-xs px-2 py-1 rounded border border-purple-500/25 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" /> Live Sync</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-white/10 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm"><AlertOctagon className="w-4 h-4" /> THREAT INGESTED</div>
                    <span className="text-xs text-slate-500">0.2s ago</span>
                  </div>
                  <div className="text-white font-mono text-sm">CVE-2026-99341 (CISA KEV)</div>
                  <div className="text-slate-400 text-xs mt-1">Target: spring-cloud-function-context &lt;= 3.2.2</div>
                </div>
                <div className="relative h-8 flex justify-center items-center">
                  <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500/50 to-purple-500/50" />
                  <ArrowDown className="w-5 h-5 text-purple-400 relative z-10 bg-slate-950 rounded-full p-0.5 border border-purple-500/30" />
                </div>
                <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2 mt-2">Correlated Matches (2)</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-rose-500/10 p-3 rounded-lg border border-rose-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-rose-500/10 flex items-center justify-center"><Server className="w-4 h-4 text-rose-400" /></div>
                      <div><p className="text-sm font-medium text-slate-200">payment-gateway-api</p><p className="text-xs text-rose-400/80">aws-us-east-prod</p></div>
                    </div>
                    <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-bold border border-rose-500/30">High Risk</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950 p-3 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center"><Box className="w-4 h-4 text-slate-400" /></div>
                      <div><p className="text-sm font-medium text-slate-200">customer-profile-dev</p><p className="text-xs text-slate-500">dev-sandbox-alpha</p></div>
                    </div>
                    <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-bold border border-amber-500/30">Mitigated</span>
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
            Prioritize What Actually Matters
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
            <h2 className="text-4xl font-black text-white mb-4">Know Your Blast Radius in Seconds</h2>
            <p className="text-lg text-slate-300 mb-8">See how Delivery Shield correlates global threats to your live environment.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
