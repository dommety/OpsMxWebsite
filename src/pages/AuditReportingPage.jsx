import { motion } from 'framer-motion'
import { ArrowRight, Package, Lock, BrainCircuit, Cpu, CheckSquare, ShieldCheck, FileText } from 'lucide-react'
import Navbar from '../components/Navbar'

const bomTypes = [
  { title: 'SBOM', subtitle: 'Software', icon: Package, color: '#60a5fa', description: 'Deep inventory of open-source libraries, transitive dependencies, and license compliance verification.' },
  { title: 'CBOM', subtitle: 'Crypto', icon: Lock, color: '#22d3ee', description: 'Visibility into cryptographic standards, libraries, and algorithm compliance across all services.' },
  { title: 'AIBOM', subtitle: 'AI / Model', icon: BrainCircuit, color: '#a78bfa', description: 'Track LLM models, training datasets, and weight provenance. Essential for AI governance compliance.' },
  { title: 'HBOM', subtitle: 'Hardware', icon: Cpu, color: '#94a3b8', description: 'Identify underlying hardware architecture, firmware versions, and host system integrity.' },
  { title: 'QBOM', subtitle: 'Quantum', icon: CheckSquare, color: '#34d399', description: 'Assurance of post-quantum cryptographic readiness and algorithmic compliance.' },
]

const outcomes = [
  { title: 'Pass Audits in Minutes', description: 'Generate complete, regulator-mapped evidence packages on demand instead of scrambling for weeks before an assessment.' },
  { title: '360-Degree Visibility', description: 'One unified view spanning software, crypto, AI, hardware, and quantum readiness, not five disconnected point tools.' },
  { title: 'Regulatory Mapping Built In', description: 'Evidence is automatically correlated to NIST, SOC 2, HIPAA, and GDPR controls as it is collected.' },
  { title: 'Tamper-Proof Audit Trail', description: 'Every deployment produces cryptographically signed, immutable evidence that auditors can independently verify.' },
  { title: 'Continuous, Not Point-in-Time', description: 'Compliance posture is tracked on every release, so you are always audit-ready instead of quarterly-ready.' },
  { title: 'One-Click Exports', description: 'Produce PDF or JSON evidence packets for any release, control, or framework in a single action.' },
]

function BomCard({ item, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all">
      <div className="p-3 rounded-lg inline-flex mb-4" style={{ background: `${item.color}18`, border: `1px solid ${item.color}28` }}>
        <item.icon className="w-6 h-6" style={{ color: item.color }} />
      </div>
      <div className="flex items-baseline gap-2 mb-2">
        <h3 className="text-lg font-bold text-white">{item.title}</h3>
        <span className="text-xs text-slate-500">{item.subtitle}</span>
      </div>
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

export default function AuditReportingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" /> Automated Audit Readiness
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                The Everything Bill of Materials:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Total Transparency.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Pass audits in minutes, not months. Delivery Shield automates the generation, aggregation, and verification of SBOMs, CBOMs, AIBOMs, HBOMs, and QBOMs for every single release.
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
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-slate-200">Compliance Audit: <span className="text-blue-400">Q2 Release</span></h4>
                  <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded border border-emerald-500/20">READY</span>
                </div>
                <div className="space-y-3 font-mono text-sm text-slate-400">
                  {['SBOM (Software)', 'CBOM (Crypto)', 'AIBOM (AI/Model)', 'HBOM (Hardware)', 'QBOM (Quantum)'].map((row, i, arr) => (
                    <div key={row} className={`flex justify-between pb-2 ${i < arr.length - 1 ? 'border-b border-white/10' : ''}`}>
                      <span>{row}</span><span className="text-emerald-400">Verified</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* xBOM grid */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-black text-white mb-12 text-center">
            Unified Audit Intelligence
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bomTypes.map((item, idx) => <BomCard key={idx} item={item} index={idx} />)}
          </div>
        </div>
      </section>

      {/* Compliance log mockup */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-4xl font-black text-white mb-6">Continuous Audit Compliance</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Stop treating compliance as a point-in-time event. Delivery Shield creates a tamper-proof audit trail for every deployment, automatically mapping evidence to regulatory controls.
              </p>
              <ul className="space-y-3">
                {['Automatic evidence mapping to NIST / SOC 2 / HIPAA', 'Cryptographically signed attestations', 'Centralized audit portal for compliance officers'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-12 lg:mt-0">
              <div className="rounded-xl border border-white/10 bg-slate-950 p-6 font-mono text-sm space-y-3">
                <p><span className="text-blue-400">[AUDIT_LOG]</span> <span className="text-slate-300">Generating xBOM aggregate...</span></p>
                <p><span className="text-blue-400">[VALIDATION]</span> <span className="text-slate-300">Signature check for </span><span className="text-emerald-400">production_v2.0</span><span className="text-slate-300">... OK</span></p>
                <p><span className="text-blue-400">[MAPPING]</span> <span className="text-slate-300">Correlating SBOM to NIST 800-53... DONE</span></p>
                <p><span className="text-blue-400">[REPORT]</span> <span className="text-slate-300">Final Compliance Score: </span><span className="text-emerald-400 font-bold">99.8%</span></p>
                <div className="mt-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded">
                  <p className="text-emerald-400 font-bold">✓ Audit package ready — Q2 evidence exported.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/2">
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
            <h2 className="text-4xl font-black text-white mb-4">Pass Your Next Audit in Minutes</h2>
            <p className="text-lg text-slate-300 mb-8">See how Delivery Shield automates your entire compliance reporting workflow.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
