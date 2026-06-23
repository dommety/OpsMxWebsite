import { motion } from 'framer-motion'
import { ArrowRight, SearchCheck, SlidersHorizontal, Lock, Scale, Gavel, CheckCircle2, ShieldAlert } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Deep License Discovery',
    icon: SearchCheck,
    description: 'Generate highly accurate SBOMs to uncover all licenses, even those buried in transitive dependencies or nested within container layers.',
    color: '#fbbf24',
  },
  {
    title: 'Policy as Code',
    icon: SlidersHorizontal,
    description: 'Define clear allowlists like MIT and Apache 2.0 and denylists like GPL and AGPL that apply universally across all your CI/CD pipelines.',
    color: '#60a5fa',
  },
  {
    title: 'Automated Enforcement',
    icon: Lock,
    description: 'Stop manual legal reviews. Delivery Shield acts as an automated release gate, instantly failing deployments that violate your license policies.',
    color: '#34d399',
  },
]

const outcomes = [
  { title: 'Protect Your Proprietary IP', description: 'Prevent copyleft licenses like GPL and AGPL from legally forcing you to open-source your own code.' },
  { title: 'Catch Risk in Transitive Deps', description: 'A restrictive license hidden five layers deep is still your liability. Deep discovery surfaces every one.' },
  { title: 'Invisible to Developers', description: 'Compliance runs automatically at the gate, so engineers ship fast without manual legal sign-off on every build.' },
  { title: 'M&A and Audit Ready', description: 'Generate comprehensive license reports for legal teams, auditors, and due-diligence in minutes, not weeks.' },
  { title: 'Resolve Dual-License Ambiguity', description: 'Detect dual-licensed components and prompt developers to select the compliant option before release.' },
  { title: 'Continuous, Not Point-in-Time', description: 'License validation runs on every pipeline execution, so a new dependency never slips through between audits.' },
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

export default function LicenseRiskPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-6">
                <Scale className="w-4 h-4" /> Legal Compliance &amp; IP Protection
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Protect Your IP from{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Open Source License Risk</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                OpsMx Delivery Shield automatically discovers, tracks, and governs open-source licenses across your entire software supply chain, ensuring copyleft and restrictive licenses never make it to production.
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
                  <h3 className="text-white font-semibold flex items-center gap-2"><Gavel className="w-5 h-5 text-amber-400" /> License Policy Enforcement</h3>
                  <span className="bg-amber-500/15 text-amber-400 text-xs px-2 py-1 rounded border border-amber-500/25">Release Gate Active</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-slate-950 p-3.5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 rounded-md"><CheckCircle2 className="w-5 h-5 text-emerald-400" /></div>
                      <div><p className="text-sm font-medium text-slate-200">react-dom:18.2.0</p><p className="text-xs text-slate-500">Direct Dependency</p></div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-white/10 text-slate-300 text-xs px-2.5 py-1 rounded-md font-mono border border-white/10">MIT</span>
                      <p className="text-xs text-emerald-400 mt-1">Permissive</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-rose-500/10 p-3.5 rounded-lg border border-rose-500/30 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500" />
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-rose-500/10 rounded-md"><ShieldAlert className="w-5 h-5 text-rose-400" /></div>
                      <div><p className="text-sm font-medium text-slate-200">ghostscript-core:9.55</p><p className="text-xs text-slate-400">Transitive (via pdf-generator)</p></div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-rose-500/20 text-rose-300 text-xs px-2.5 py-1 rounded-md font-mono border border-rose-500/30">AGPL-3.0</span>
                      <p className="text-xs text-rose-400 mt-1 font-semibold">Blocked</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950 p-3.5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 rounded-md"><CheckCircle2 className="w-5 h-5 text-emerald-400" /></div>
                      <div><p className="text-sm font-medium text-slate-200">axios:1.6.0</p><p className="text-xs text-slate-500">Direct Dependency</p></div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-white/10 text-slate-300 text-xs px-2.5 py-1 rounded-md font-mono border border-white/10">Apache-2.0</span>
                      <p className="text-xs text-emerald-400 mt-1">Permissive</p>
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
            Compliance Without Slowing Developers
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
            <h2 className="text-4xl font-black text-white mb-4">Don't Let Open Source Put Your IP at Risk</h2>
            <p className="text-lg text-slate-300 mb-8">Automate legal compliance and ship software with confidence.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
