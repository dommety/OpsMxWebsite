import { motion } from 'framer-motion'
import { Users, FileCheck, Hand, ScrollText, AlertOctagon, Server, BarChart3, Lock } from 'lucide-react'

const controls = [
  { icon: Users, title: 'RBAC & Tenancy', color: '#22d3ee',
    desc: 'Fine-grained role-based access control with full multi-tenant isolation.' },
  { icon: FileCheck, title: 'Policy-Based Approvals', color: '#a78bfa',
    desc: 'Route remediations through configurable approval workflows before execution.' },
  { icon: Hand, title: 'Human-in-the-Loop', color: '#34d399',
    desc: 'Every automated action can require human review, approval, or override.' },
  { icon: ScrollText, title: 'Audit Trails', color: '#60a5fa',
    desc: 'Immutable, timestamped audit logs for every detection, diagnosis, and remediation.' },
  { icon: AlertOctagon, title: 'Exception Management', color: '#fbbf24',
    desc: 'Track, justify, and time-bound exceptions with full governance visibility.' },
  { icon: Server, title: 'SaaS or Self-Hosted', color: '#f472b6',
    desc: 'Deploy in your cloud, your datacenter, or as a fully managed SaaS service.' },
  { icon: BarChart3, title: 'Compliance Reporting', color: '#22d3ee',
    desc: 'Generate audit-ready reports aligned to SOC 2, ISO 27001, PCI-DSS, NIST.' },
  { icon: Lock, title: 'Secure Integrations', color: '#a78bfa',
    desc: 'All data in transit encrypted, credentials stored in your vault, zero trust posture.' },
]

function EnterpriseCard({ control, index }) {
  const Icon = control.icon
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="relative group glass rounded-2xl border border-white/7 p-5 cursor-default overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 0% 0%, ${control.color}06, transparent 60%)` }} />
      <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
        style={{ background: `${control.color}15`, border: `1px solid ${control.color}30` }}>
        <Icon className="w-4 h-4" style={{ color: control.color }} strokeWidth={1.5} />
      </div>
      <h3 className="font-semibold text-white mb-1.5 text-sm">{control.title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{control.desc}</p>
    </motion.div>
  )
}

export default function PlatformEnterprise() {
  return (
    <section className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 glass">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Enterprise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Built for <span className="text-gradient-full">Enterprise Control</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Governance, compliance, and deployment flexibility designed for regulated, security-conscious enterprises.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {controls.map((control, i) => <EnterpriseCard key={control.title} control={control} index={i} />)}
        </div>
      </div>
    </section>
  )
}
