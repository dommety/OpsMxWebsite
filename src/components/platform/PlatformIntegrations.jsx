import { motion } from 'framer-motion'

const integrationGroups = [
  {
    category: 'Code', color: '#22d3ee',
    items: ['GitHub', 'GitLab', 'Bitbucket'],
  },
  {
    category: 'CI/CD', color: '#60a5fa',
    items: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Argo CD', 'Spinnaker'],
  },
  {
    category: 'Security', color: '#f87171',
    items: ['Snyk', 'Checkmarx', 'SonarQube', 'Semgrep', 'Wiz', 'Prisma Cloud'],
  },
  {
    category: 'Cloud', color: '#34d399',
    items: ['AWS', 'Azure', 'GCP'],
  },
  {
    category: 'Kubernetes', color: '#a78bfa',
    items: ['Kubernetes', 'Helm', 'Argo CD'],
  },
  {
    category: 'Collaboration', color: '#fbbf24',
    items: ['Jira', 'Slack', 'ServiceNow'],
  },
]

function IntegrationPill({ name, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -2, scale: 1.04 }}
      className="px-3 py-2 rounded-xl text-sm font-semibold text-center cursor-default"
      style={{ background: `${color}10`, border: `1px solid ${color}25`, color }}>
      {name}
    </motion.div>
  )
}

export default function PlatformIntegrations() {
  return (
    <section className="relative py-28 bg-navy-900/70 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 glass">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Integrations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Works With Your <span className="text-gradient-full">Existing Ecosystem</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            OpsMx Active Defense integrates with the tools your teams already use — no rip-and-replace required.
          </p>
        </motion.div>

        <div className="space-y-6">
          {integrationGroups.map((group, gi) => (
            <motion.div key={group.category}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: gi * 0.08 }}
              className="glass rounded-2xl border border-white/6 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color, boxShadow: `0 0 6px ${group.color}` }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: group.color }}>
                  {group.category}
                </span>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${group.color}30, transparent)` }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, ii) => (
                  <IntegrationPill key={item} name={item} color={group.color} index={gi * 6 + ii} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-slate-600 mt-8">
          + many more via webhook, API, and custom connectors
        </motion.p>
      </div>
    </section>
  )
}
