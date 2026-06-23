import { motion } from 'framer-motion'
import { ArrowRight, Shield, Workflow, Rocket, GitMerge, Activity, Check, FileSpreadsheet } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    title: 'Delivery Shield: Risk Data',
    icon: Shield,
    description: 'Continuously ingests data from security scans, test suites, and source code to instantly calculate a unified Release Risk Score for every commit.',
    color: '#60a5fa',
  },
  {
    title: 'OpsMx ISD: Action',
    icon: Workflow,
    description: 'Intelligent Software Delivery takes the risk score and maps it to your ITSM policies, automating Jira and ServiceNow ticket creation and CAB approvals.',
    color: '#a78bfa',
  },
  {
    title: 'Continuous Delivery: Result',
    icon: Rocket,
    description: 'Low-risk changes deploy instantly to Spinnaker or ArgoCD. High-risk changes are intelligently routed for manual review with full audit context.',
    color: '#34d399',
  },
]

const outcomes = [
  { title: 'Kill the CAB Bottleneck', description: 'Automated, risk-based change management replaces manual Change Advisory Boards, removing the biggest delay in software delivery.' },
  { title: 'Auto-Approve Low Risk', description: 'Changes that pass every gate get auto-approved against policy, so developers ship without waiting on a meeting.' },
  { title: 'Route High Risk Intelligently', description: 'Only genuinely risky changes go to humans, and they arrive with full security, test, and audit context attached.' },
  { title: 'ITIL Compliance, Invisibly', description: 'ServiceNow and Jira tickets are generated automatically, satisfying ITIL without burdening engineers.' },
  { title: 'A Single Release Risk Score', description: 'Security scans, code quality, and test coverage collapse into one number that drives every deployment decision.' },
  { title: 'Full Audit Trail', description: 'Every change, its risk score, and its approval path are logged automatically for compliance and post-incident review.' },
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

export default function ChangeRiskPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-6">
                <GitMerge className="w-4 h-4" /> Continuous Release Governance
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Deploy Continuously.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Zero Change Risk.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Unleash developer velocity without sacrificing control. Combine Delivery Shield's real-time risk assessment with ISD's automated change management to eliminate manual CAB reviews and ship with confidence.
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
                    <h3 className="text-white font-semibold flex items-center gap-2"><Activity className="w-5 h-5 text-violet-400" /> Release Candidate: v4.12.0</h3>
                    <p className="text-xs text-slate-500 mt-1">Target: production-us-east</p>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded border border-emerald-500/20 font-bold">RISK: 14 (LOW)</span>
                </div>
                <div className="space-y-4">
                  <div className="relative pl-6 pb-4 border-l border-white/10 ml-3">
                    <div className="absolute w-6 h-6 bg-slate-950 rounded-full flex items-center justify-center -left-[13px] top-0 border border-white/10"><Shield className="w-3 h-3 text-blue-400" /></div>
                    <h4 className="text-sm font-medium text-slate-200 mb-1">Delivery Shield: Risk Assessment</h4>
                    <div className="bg-slate-950 rounded p-3 text-xs text-slate-400 border border-white/10 space-y-1">
                      {['Vulnerability Scan', 'Code Quality', 'Test Coverage'].map((t) => (
                        <div key={t} className="flex justify-between"><span className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-400" /> {t}</span><span className="text-emerald-400">Pass</span></div>
                      ))}
                    </div>
                  </div>
                  <div className="relative pl-6 pb-4 border-l border-white/10 ml-3">
                    <div className="absolute w-6 h-6 bg-slate-950 rounded-full flex items-center justify-center -left-[13px] top-0 border border-white/10"><FileSpreadsheet className="w-3 h-3 text-violet-400" /></div>
                    <h4 className="text-sm font-medium text-slate-200 mb-1">ISD: Automated ITSM</h4>
                    <div className="bg-violet-500/5 rounded p-3 text-xs text-slate-400 border border-violet-500/20">
                      <p className="text-slate-300 mb-1">Generating ServiceNow Change Request...</p>
                      <p className="font-mono text-violet-300">Ticket: CHG-994218</p>
                      <p className="text-emerald-400 mt-1 flex items-center gap-1"><Check className="w-3 h-3" /> Auto-approved (low-risk policy)</p>
                    </div>
                  </div>
                  <div className="relative pl-6 ml-3">
                    <div className="absolute w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center -left-[13px] top-0 border border-emerald-500/30 animate-pulse"><div className="w-2 h-2 bg-emerald-500 rounded-full" /></div>
                    <h4 className="text-sm font-medium text-slate-200">Spinnaker / ArgoCD Deployment</h4>
                    <p className="text-xs text-slate-500 mt-1">Initiating canary rollout to production...</p>
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
            DevOps Velocity Meets ITIL Compliance
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
            <h2 className="text-4xl font-black text-white mb-4">Eliminate Your CAB Bottleneck</h2>
            <p className="text-lg text-slate-300 mb-8">See how OpsMx automates change management without sacrificing governance.</p>
            <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
