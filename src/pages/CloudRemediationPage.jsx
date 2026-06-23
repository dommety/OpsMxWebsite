import { motion } from 'framer-motion'
import { ArrowRight, GitBranch, ShieldCheck, Cloud, Zap } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'IaC Drift Correction',
    icon: GitBranch,
    description: "Don't let manual hotfixes ruin your Terraform integrity. Automatically re-apply IaC state to bring resources back into compliant alignment.",
    color: '#60a5fa',
  },
  {
    title: 'Compliance Auto-Fix',
    icon: ShieldCheck,
    description: 'Instantly resolve CIS Benchmark violations like unencrypted databases, open SSH ports, and overly permissive IAM roles.',
    color: '#22d3ee',
  },
  {
    title: 'Multi-Cloud Unified',
    icon: Cloud,
    description: 'A single remediation policy engine that works across AWS, Azure, and Google Cloud environments without needing vendor-specific scripts.',
    color: '#a78bfa',
  },
]

const outcomes = [
  { title: 'Close the Detection-to-Fix Gap', description: 'Remediation bridges the space between an alert and a resolution, patching misconfigurations automatically instead of queuing tickets.' },
  { title: 'Self-Healing Infrastructure', description: 'When a resource drifts from its IaC definition, desired state is re-applied automatically, keeping Terraform integrity intact.' },
  { title: 'Fix CIS Violations Instantly', description: 'Unencrypted databases, open SSH ports, and permissive IAM roles are corrected the moment they are detected.' },
  { title: 'One Policy, Every Cloud', description: 'A unified engine enforces the same guardrails across AWS, Azure, and GCP, with no vendor-specific scripting to maintain.' },
  { title: 'Remediate in Milliseconds', description: 'Automated policies resolve issues in well under a second, shrinking your exposure window to near zero.' },
  { title: 'Manage Stability, Not Alerts', description: 'Stop drowning in a backlog of findings and start operating from a continuously compliant baseline.' },
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

export default function CloudRemediationPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" /> Automated Cloud Remediation
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Stop Chasing Alerts.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Start Fixing Issues.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Delivery Shield bridges the gap between detection and resolution. Automatically patch cloud misconfigurations, fix IaC drift, and enforce compliance across AWS, Azure, and GCP, instantly.
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
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-slate-500 ml-2 font-mono text-xs">Remediation_Engine.log</span>
                </div>
                <div className="space-y-2 font-mono text-xs text-slate-300 bg-slate-950 rounded-lg p-4 border border-white/10">
                  <p><span className="text-cyan-400">INFO</span> [Detector] Drift detected in <span className="text-white">Terraform: s3-bucket-private</span></p>
                  <p><span className="text-red-400">ALERT</span> [Policy] Public Read Access detected on production bucket</p>
                  <p><span className="text-cyan-400">INFO</span> [Remediator] Triggering policy: <span className="text-white">ENFORCE_PRIVATE_ACCESS</span></p>
                  <div className="pl-4 border-l border-white/10 my-2 text-emerald-400 space-y-1">
                    <p>✔ Applying ACL override...</p>
                    <p>✔ Blocking Public Read...</p>
                  </div>
                  <p><span className="text-emerald-400">SUCCESS</span> [Finalize] Environment remediated in 140ms</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-black text-white mb-12 text-center">
            From Detection to Resolution, Automatically
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
            <h2 className="text-4xl font-black text-white mb-4">Stop Managing Vulnerabilities. Start Managing Stability.</h2>
            <p className="text-lg text-slate-300 mb-8">See how Delivery Shield remediates cloud misconfigurations automatically across every provider.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              See Remediation in Action <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
