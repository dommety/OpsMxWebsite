import { motion } from 'framer-motion'
import { ArrowRight, Gavel, FileJson2, Users, Server, Network, Shield, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Dynamic Admission Control',
    icon: Gavel,
    description: 'Integrate seamlessly with OPA Gatekeeper or Kyverno. Intercept K8s API requests to instantly block deployments containing vulnerabilities or misconfigurations.',
    color: '#34d399',
  },
  {
    title: 'Manifest & Helm Scanning',
    icon: FileJson2,
    description: 'Scan raw YAMLs and Helm charts during the CI phase. Catch missing resource limits, root privileges, or exposed node ports before code hits the cluster.',
    color: '#22d3ee',
  },
  {
    title: 'RBAC & Drift Governance',
    icon: Users,
    description: 'Continuously monitor clusters for configuration drift and over-permissive RBAC roles. Get instant alerts if runtime state diverges from your source of truth.',
    color: '#60a5fa',
  },
]

const outcomes = [
  { title: 'Block Bad Deploys at the Gate', description: 'Admission control rejects privileged containers, unsigned images, and policy violations before they ever schedule.' },
  { title: 'Enforce Pod Security Standards', description: 'Baseline or Restricted PSS is applied automatically, preventing privilege escalation and unauthorized capabilities.' },
  { title: 'Catch Misconfigs in CI', description: 'Manifest and Helm scanning surfaces missing limits, root privileges, and exposed ports before the cluster sees them.' },
  { title: 'Stop Configuration Drift', description: 'Continuous monitoring alerts the moment runtime state diverges from your declared source of truth.' },
  { title: 'Verify Image Signatures', description: 'Only cryptographically signed images from trusted registries are allowed to run in production namespaces.' },
  { title: 'Automated CIS Benchmarks', description: 'Map cluster configuration to CIS and industry frameworks continuously, with no manual benchmarking overhead.' },
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

export default function ClusterSecurityPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                <Server className="w-4 h-4" /> Kubernetes Infrastructure Security
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Enforce Zero-Trust{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Cluster Security</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                OpsMx Delivery Shield provides powerful admission control, continuous configuration scanning, and runtime governance to ensure only secure, compliant workloads ever run in your Kubernetes clusters.
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
                  <h3 className="text-white font-semibold flex items-center gap-2"><Network className="w-5 h-5 text-emerald-400" /> Admission Webhook</h3>
                  <span className="bg-cyan-500/10 text-cyan-400 text-xs px-2 py-1 rounded border border-cyan-500/30 flex items-center gap-1"><Shield className="w-3 h-3" /> OPA Gatekeeper</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-white/10 mb-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Deployment Request</p>
                  <div className="font-mono text-sm text-slate-300 bg-black/30 p-3 rounded">
                    <span className="text-emerald-400">kind</span>: Deployment<br />
                    <span className="text-emerald-400">name</span>: payment-gateway<br />
                    <span className="text-rose-400 bg-rose-500/10 px-1 rounded">securityContext:</span><br />
                    <span className="text-rose-400 bg-rose-500/10 px-1 rounded ml-4">privileged: true</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /><p className="text-xs text-slate-300 font-mono">RequireImageSignature - PASS</p></div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /><p className="text-xs text-slate-300 font-mono">DenyLatestTag - PASS</p></div>
                  <div className="flex items-start gap-3"><span className="text-rose-400 text-sm leading-none mt-0.5">✕</span><div><p className="text-xs text-rose-400 font-mono font-bold">DenyPrivilegedContainers - FAIL</p><p className="text-[10px] text-slate-500 mt-0.5">Violates Pod Security Standards (Restricted).</p></div></div>
                </div>
                <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 p-3 rounded-lg">
                  <Shield className="w-5 h-5 text-rose-400" /><span className="text-sm font-semibold text-rose-400">Deployment Rejected</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-black text-white mb-12 text-center">
            Stop Misconfigurations Before They Deploy
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
            <h2 className="text-4xl font-black text-white mb-4">Don't Leave Your Clusters Exposed</h2>
            <p className="text-lg text-slate-300 mb-8">Implement enterprise-grade Kubernetes security without disrupting developer velocity.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
