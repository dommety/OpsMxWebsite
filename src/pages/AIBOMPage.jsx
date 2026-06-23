import { motion } from 'framer-motion'
import { ArrowRight, Layers, ShieldCheck, FileText, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Model Transparency',
    icon: Layers,
    description: 'Automatically extract detailed inventories of ML frameworks, model dependencies, and architecture configurations directly from your pipelines.',
    color: '#60a5fa',
  },
  {
    title: 'Artifact Security',
    icon: ShieldCheck,
    description: 'Scan model weights such as Pickle or PyTorch files for embedded malicious code, serialization attacks, and environment vulnerabilities.',
    color: '#a78bfa',
  },
  {
    title: 'Regulatory Compliance',
    icon: FileText,
    description: 'Generate compliance-ready reports mapping to emerging AI acts, NIST AI RMF, and regional mandates like SEBI and RBI in financial sectors.',
    color: '#34d399',
  },
]

const outcomes = [
  { title: 'See Inside Your AI Stack', description: 'Inventory every model, framework, and dependency in your pipelines, closing the blind spots traditional SBOMs leave behind.' },
  { title: 'Catch Malicious Model Weights', description: 'Deep scans of serialized model files detect arbitrary-code-execution payloads before a poisoned model reaches production.' },
  { title: 'Track Data and Model Lineage', description: 'Connect training data, code commits, and model artifacts into one verifiable graph for full provenance.' },
  { title: 'Prove AI Governance', description: 'Generate the evidence regulators demand for AI systems, mapped to NIST AI RMF and emerging AI legislation.' },
  { title: 'Govern Open-Source Models', description: 'Verify the lineage and integrity of third-party and open-source models before they enter your environment.' },
  { title: 'Continuous AI Assurance', description: 'AI-BOM updates as models, datasets, and pipelines evolve, so your governance is always current, not point-in-time.' },
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

export default function AIBOMPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" /> New: Delivery Shield for AI
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Govern and Secure Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">AI Supply Chain</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Generate comprehensive AI Bills of Materials. Track model lineage, scan for vulnerabilities, ensure regulatory compliance, and deploy AI with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                Get a Demo <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200">See How It Works</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lineage mockup */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 text-blue-400 font-semibold uppercase tracking-wide text-sm mb-3">
                <Clock className="w-5 h-5" /> Continuous Governance
              </div>
              <h2 className="text-4xl font-black text-white mb-6">Automated Lineage Tracking</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Manually tracking which dataset trained which model version is impossible at scale. OpsMx automatically connects training data, code commits, and model artifacts into a single verifiable graph.
              </p>
              <ul className="space-y-3">
                {['Cryptographic hashing of datasets', 'Native CI/CD pipeline integration', 'Version control for model parameters'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-12 lg:mt-0">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-4">
                  <div className="bg-slate-950 border border-white/10 rounded-lg p-4 flex items-center justify-between">
                    <span className="text-slate-300 font-mono text-sm">Data: S3://bucket/data_v2</span>
                    <span className="text-emerald-400 font-mono text-xs">SHA: a1b2...</span>
                  </div>
                  <div className="w-0.5 h-5 bg-white/10 mx-auto" />
                  <div className="bg-slate-950 border border-blue-500/40 rounded-lg p-4 flex items-center justify-between">
                    <span className="text-white font-semibold">Training Run #402</span>
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded border border-blue-500/30">Databricks</span>
                  </div>
                  <div className="w-0.5 h-5 bg-white/10 mx-auto" />
                  <div className="bg-slate-950 border border-white/10 rounded-lg p-4 flex items-center justify-between">
                    <span className="text-slate-300 font-mono text-sm">Artifact: model_weights.pt</span>
                    <span className="text-emerald-400 font-mono text-xs">SAFE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-black text-white mb-12 text-center">
            Inside the OpsMx AI-BOM
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, idx) => <FeatureCard key={idx} item={item} index={idx} />)}
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
            <h2 className="text-4xl font-black text-white mb-4">Secure Your AI Deployments</h2>
            <p className="text-lg text-slate-300 mb-8">Join enterprises using OpsMx Delivery Shield to enforce AI governance and accelerate adoption safely.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
