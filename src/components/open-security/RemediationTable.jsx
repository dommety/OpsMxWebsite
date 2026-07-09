import { motion } from 'framer-motion'
import { CheckCircle, Clock, AlertCircle, ExternalLink } from 'lucide-react'

const statusConfig = {
  ready: { icon: CheckCircle, color: '#34d399', label: 'Ready' },
  recommended: { icon: AlertCircle, color: '#f59e0b', label: 'Recommended' },
  pending: { icon: Clock, color: '#06b6d4', label: 'Pending' },
}

export default function RemediationTable({ remediations = [] }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
      {remediations.map((rem, idx) => {
        const config = statusConfig[rem.status] || statusConfig.recommended
        const Icon = config.icon

        return (
          <motion.div
            key={rem.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/8 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4" style={{ color: config.color }} />
                  <p className="font-medium text-white">{rem.title}</p>
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{ color: config.color, background: `${config.color}20` }}
                  >
                    {config.label}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  <span className="font-mono text-cyan-400">{rem.id}</span>
                  {' • '}
                  <span>Complexity: {rem.complexity}</span>
                  {' • '}
                  <span>Impact: {rem.impact}</span>
                </p>
              </div>
              {rem.prUrl && (
                <a
                  href={rem.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded hover:bg-white/10 transition-colors text-cyan-400 hover:text-cyan-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
