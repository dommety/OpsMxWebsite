import { motion } from 'framer-motion'

export default function StatsFooter({ stats }) {
  const statItems = [
    { label: 'Artifacts Indexed', value: stats.artifactsIndexed },
    { label: 'Repositories', value: stats.repositories },
    { label: 'Docker Images', value: stats.dockerImages },
    { label: 'AI Models', value: stats.aiModels },
    { label: 'Pull Requests Generated', value: stats.pullRequestsGenerated },
    { label: 'Accepted PRs', value: stats.acceptedPRs },
    { label: 'Critical Vulnerabilities Fixed', value: stats.criticalVulnabilitiesFixed },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 px-6 border-t border-white/5 bg-gradient-to-r from-slate-900/50 to-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {statItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {item.value.toLocaleString()}
              </p>
              <p className="text-xs text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
