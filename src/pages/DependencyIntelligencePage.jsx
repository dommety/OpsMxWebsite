import { motion } from 'framer-motion'
import { ArrowRight, Search, Layers, Lock, ShieldCheck, Box, FileCode2, GitBranch, AlertTriangle, CheckCircle2, Activity } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Continuous SBOM Generation',
    icon: Search,
    description: 'Automatically generate and aggregate Software Bills of Materials at every stage of your pipeline, from source code to container image.',
    color: '#60a5fa',
  },
  {
    title: 'Deep Transitive Tracking',
    icon: Layers,
    description: "Map complex dependency trees. Don't just scan direct dependencies, identify risks hidden deep within nested, transitive components.",
    color: '#a78bfa',
  },
  {
    title: 'Automated Policy Enforcement',
    icon: Lock,
    description: 'Create intelligent deployment gates that automatically block releases containing unauthorized dependencies or critical CVEs based on your risk appetite.',
    color: '#34d399',
  },
]

const outcomes = [
  { title: 'X-Ray Vision Into Your Lineage', description: 'With 80% of modern apps built from open source, deep dependency tracking reveals the full software lineage you cannot see otherwise.' },
  { title: 'Catch Risk in Nested Chains', description: 'Critical CVEs like Log4Shell often hide in transitive dependencies. Deep tracking surfaces them before they ship.' },
  { title: 'Map CVEs to Real Impact', description: 'Connect open-source vulnerabilities to the specific applications and services they actually affect, not a generic alert list.' },
  { title: 'Cryptographic Artifact Integrity', description: 'Verify every artifact with signed attestations, so you know exactly what was built and that it was not tampered with.' },
  { title: 'A Searchable Dependency Database', description: 'Maintain one centralized, queryable record of every dependency deployed across your entire estate.' },
  { title: 'SLSA & EO Compliance', description: 'Satisfy SLSA framework levels and Executive Order mandates with evidence generated automatically in your pipeline.' },
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

export default function DependencyIntelligencePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" /> Next-Gen Supply Chain Security
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Secure Your Delivery with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Deep Dependency Intelligence</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                OpsMx Delivery Shield protects your software supply chain by automatically tracking dependencies, verifying SBOMs, and enforcing security policies before code ever reaches production.
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
                  <h3 className="text-white font-semibold flex items-center gap-2"><Layers className="w-5 h-5 text-blue-400" /> Dependency Graph Analysis</h3>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded border border-emerald-500/30">Live Scan</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-slate-950 p-3 rounded-lg border border-white/10">
                    <Box className="w-8 h-8 text-indigo-400 p-1.5 bg-indigo-500/10 rounded" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-slate-200">Payment-Service:v2.4</span>
                        <span className="text-xs text-slate-400">Critical Path</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full mt-2"><div className="bg-emerald-500 h-1.5 rounded-full w-full" /></div>
                    </div>
                  </div>
                  <div className="pl-6 border-l-2 border-white/10 ml-4 space-y-3">
                    <div className="flex items-center gap-4 bg-slate-950 p-3 rounded-lg border border-red-500/30 relative">
                      <div className="absolute -left-[26px] top-1/2 w-6 h-0.5 bg-white/10" />
                      <FileCode2 className="w-8 h-8 text-red-400 p-1.5 bg-red-500/10 rounded" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-slate-200">log4j-core:2.14.1</span>
                          <span className="flex items-center gap-1 text-xs text-red-400 font-bold"><AlertTriangle className="w-3 h-3" /> CVE-2021-44228</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Found in nested dependency chain</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-950 p-3 rounded-lg border border-white/10 relative">
                      <div className="absolute -left-[26px] top-1/2 w-6 h-0.5 bg-white/10" />
                      <GitBranch className="w-8 h-8 text-blue-400 p-1.5 bg-blue-500/10 rounded" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-slate-200">spring-web:5.3.9</span>
                          <span className="text-xs text-emerald-400">Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs text-slate-400">Policy Gate: <span className="text-red-400 font-medium">Blocked</span></span>
                  <span className="bg-blue-600/20 text-blue-400 text-xs px-3 py-1.5 rounded">View SBOM Report</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Blind Spots Are Your Biggest Vulnerability</h2>
            <p className="text-lg text-slate-300">
              Modern applications consist of 80% open-source components. Delivery Shield's advanced dependency intelligence gives you X-ray vision into your entire software lineage.
            </p>
          </motion.div>
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
            <h2 className="text-4xl font-black text-white mb-4">Take Control of Your Software Supply Chain</h2>
            <p className="text-lg text-slate-300 mb-8">Stop vulnerabilities before they deploy. See how Delivery Shield brings total visibility to your dependencies.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
