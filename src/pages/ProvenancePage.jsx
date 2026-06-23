import { motion } from 'framer-motion'
import { ArrowRight, FileBadge, ShieldCheck, Key, Fingerprint, GitCommitHorizontal, Hammer, Lock } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Automated Attestations',
    icon: FileBadge,
    description: 'Automatically generate cryptographic, in-toto formatted attestations for every build, mapping the exact source code, build runner, and dependencies used.',
    color: '#a78bfa',
  },
  {
    title: 'SLSA Compliance',
    icon: ShieldCheck,
    description: 'Achieve SLSA Level 2 and Level 3 attestations natively within your CI/CD pipeline, satisfying federal supply chain security mandates without extra tooling.',
    color: '#22d3ee',
  },
  {
    title: 'Sigstore Integration',
    icon: Key,
    description: 'Leverage keyless signing via Sigstore and Cosign to create unforgeable, transparently logged signatures tied to your build identity, with no key management.',
    color: '#34d399',
  },
]

const outcomes = [
  { title: 'Trust Every Artifact', description: "If you don't know exactly how a container was built, you cannot trust it. Provenance gives you a tamper-proof build history." },
  { title: 'Meet Federal Mandates', description: 'SLSA Level 3 attestations are generated natively, satisfying EO 14028 and federal supply chain requirements out of the box.' },
  { title: 'Keyless, Unforgeable Signing', description: 'Sigstore-backed signatures are tied to your build identity and logged transparently, with zero key management burden.' },
  { title: 'Verify the Whole Chain', description: 'Source, build environment, and signature are each verified, so a tampered step anywhere breaks the chain visibly.' },
  { title: 'Block Untrusted Releases', description: 'Deployments without valid provenance are stopped at the gate, preventing unverified artifacts from reaching production.' },
  { title: 'Audit on Demand', description: 'Produce the complete, signed lineage of any artifact instantly for auditors and incident responders.' },
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

export default function ProvenancePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-6">
                <Fingerprint className="w-4 h-4" /> Software Supply Chain Provenance
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Establish Absolute Trust with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Verifiable Provenance</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                OpsMx Delivery Shield guarantees the integrity of your software supply chain by automatically generating, tracking, and verifying cryptographic attestations. Ensure every artifact deployed has a tamper-proof history.
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
                  <h3 className="text-white font-semibold flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-cyan-400" /> Provenance Attestation</h3>
                  <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2 py-1 rounded border border-cyan-500/30 flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Signature Valid</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-white/10 mb-4">
                  <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Subject Artifact</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-slate-200 font-mono">auth-service:v4.2.1-sha256:8f43c2...</p>
                    <span className="text-xs bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded border border-violet-500/30">SLSA L3</span>
                  </div>
                </div>
                <div className="relative pl-6 space-y-5 before:absolute before:inset-y-0 before:left-2.5 before:w-0.5 before:bg-white/10">
                  {[
                    { icon: GitCommitHorizontal, label: 'Source Repository', value: 'github.com/org/auth-service @ main', hi: false },
                    { icon: Hammer, label: 'Build Environment', value: 'GitHub Actions (Hosted Runner)', hi: false },
                    { icon: Key, label: 'Cryptographic Signature (Sigstore)', value: 'Issuer: token.actions.githubusercontent.com', hi: true },
                  ].map((it, i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-[30px] p-1 bg-slate-950 rounded-full border-2 ${it.hi ? 'border-cyan-400' : 'border-white/15'}`}>
                        <it.icon className={`w-3 h-3 ${it.hi ? 'text-cyan-400' : 'text-slate-400'}`} />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className={`text-sm font-medium ${it.hi ? 'text-cyan-400' : 'text-slate-200'}`}>{it.label}</p>
                          <p className="text-xs text-slate-400 font-mono mt-1">{it.value}</p>
                        </div>
                        {it.hi ? <Lock className="w-4 h-4 text-cyan-400" /> : <span className="text-xs text-cyan-400">Verified</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-black text-white mb-12 text-center">
            Integrity from Code to Cluster
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
            <h2 className="text-4xl font-black text-white mb-4">Prove the Integrity of Every Artifact</h2>
            <p className="text-lg text-slate-300 mb-8">Start generating tamper-proof provenance records for your supply chain today.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
