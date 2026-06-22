import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'

const alerts = [
  { id: 1, sev: 'CRITICAL', msg: 'CVE-2024-3094 in libxz', time: '2s ago' },
  { id: 2, sev: 'HIGH', msg: 'S3 bucket publicly exposed', time: '14s ago' },
  { id: 3, sev: 'HIGH', msg: 'Kubernetes pod running as root', time: '31s ago' },
  { id: 4, sev: 'MEDIUM', msg: 'Deprecated API endpoint in prod', time: '1m ago' },
  { id: 5, sev: 'HIGH', msg: 'SAST: SQL injection in auth.js', time: '2m ago' },
  { id: 6, sev: 'CRITICAL', msg: 'Privilege escalation in workflow', time: '3m ago' },
  { id: 7, sev: 'MEDIUM', msg: 'Unencrypted secrets in CI logs', time: '5m ago' },
  { id: 8, sev: 'LOW', msg: 'Image missing vulnerability scan', time: '8m ago' },
]

const sevColors = {
  CRITICAL: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' },
  HIGH: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' },
  MEDIUM: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
  LOW: { bg: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/20' },
}

const outcomes = [
  { label: 'Root cause identified', color: 'text-cyan-400' },
  { label: 'Owner assigned automatically', color: 'text-cyan-400' },
  { label: 'Fix generated & reviewed', color: 'text-emerald-400' },
  { label: 'PR created and merged', color: 'text-emerald-400' },
  { label: 'Verification passed', color: 'text-emerald-400' },
  { label: 'Audit trail recorded', color: 'text-violet-400' },
]

export default function ProblemSection() {
  return (
    <section className="relative py-28 bg-navy-900/60 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 glass">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">The Problem</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            Detection Alone{' '}
            <span className="text-gradient-cyan">Creates Backlogs</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Most tools generate alerts, findings, and dashboards. OpsMx helps teams understand what matters,
            why it happened, how to fix it, and whether the fix worked.
          </p>
        </motion.div>

        {/* Two-panel visual */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left — Alert Storm */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-strong rounded-2xl border border-red-500/10 overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5 bg-red-500/5">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">Alert Queue</span>
                <span className="ml-auto text-xs text-slate-500 font-mono">4,892 open</span>
              </div>
              <div className="p-4 space-y-2 max-h-80 overflow-hidden relative">
                {alerts.map((alert, i) => {
                  const c = sevColors[alert.sev]
                  return (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className={`flex items-center gap-3 p-2.5 rounded-lg border ${c.bg} ${c.border}`}
                    >
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${c.bg} ${c.text} border ${c.border} whitespace-nowrap`}>
                        {alert.sev}
                      </span>
                      <span className="text-xs text-slate-300 flex-1 truncate">{alert.msg}</span>
                      <span className="text-[10px] text-slate-600 whitespace-nowrap">{alert.time}</span>
                    </motion.div>
                  )
                })}
                {/* Bottom fade indicating more */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy-800/90 to-transparent flex items-end justify-center pb-3">
                  <span className="text-xs text-slate-500">+ 4,884 more findings...</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-center text-xs text-slate-600">Without OpsMx: thousands of signals, no clear path forward</div>
          </motion.div>

          {/* Arrow */}
          <div className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-12 h-12 rounded-full glass border border-cyan-400/20 flex items-center justify-center glow-cyan"
            >
              <ArrowRight className="w-5 h-5 text-cyan-400" />
            </motion.div>
          </div>

          {/* Right — Clean Remediation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-strong rounded-2xl border border-emerald-500/10 overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5 bg-emerald-500/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">Active Defense</span>
                <span className="ml-auto text-xs font-mono text-slate-500">Context Engine</span>
              </div>
              <div className="p-5 space-y-3">
                {/* Priority item */}
                <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-400">P1 — Critical Risk</span>
                    <span className="text-[10px] text-slate-500 font-mono">Runtime verified</span>
                  </div>
                  <p className="text-sm text-white font-medium mb-1">libxz backdoor in 3 production containers</p>
                  <p className="text-xs text-slate-400">Owner: Platform Team · Blast radius: 3 services · ETA: 12 min</p>
                </div>

                {/* Remediation flow */}
                <div className="space-y-2">
                  {outcomes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2.5"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                      >
                        <CheckCircle2 className={`w-4 h-4 ${item.color}`} />
                      </motion.div>
                      <span className={`text-sm ${item.color}`}>{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Result */}
                <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-400">Risk resolved & verified</span>
                  <span className="text-xs text-slate-400 font-mono">14 min end-to-end</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-center text-xs text-slate-600">With OpsMx: one prioritized action, automated path to verified fix</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
