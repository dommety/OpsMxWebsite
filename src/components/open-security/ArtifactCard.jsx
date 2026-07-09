import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'
import SecurityGauge from './SecurityGauge'

export default function ArtifactCard({ artifact, onView, idx = 0 }) {
  const trend = artifact.trend
  const isImproving = trend[trend.length - 1] >= trend[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      whileHover={{ scale: 1.02 }}
      onClick={onView}
      className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/8 hover:border-cyan-500/50 cursor-pointer transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-white mb-1">{artifact.name}</h3>
          <p className="text-xs text-slate-400">{artifact.type}</p>
        </div>
        <div className="flex-shrink-0">
          <SecurityGauge score={artifact.score} size="sm" />
        </div>
      </div>

      {/* Vulnerability counts */}
      <div className="flex items-center gap-3 mb-4 text-xs">
        {artifact.critical > 0 && <span className="px-2 py-1 rounded bg-red-500/20 text-red-400">🔴 {artifact.critical}</span>}
        {artifact.high > 0 && <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-400">🟠 {artifact.high}</span>}
        {artifact.medium > 0 && <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">🟡 {artifact.medium}</span>}
      </div>

      {/* Trend */}
      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-400">Last scanned: {artifact.lastScanned.toLocaleTimeString()}</span>
        <div className="flex items-center gap-1">
          {isImproving ? (
            <>
              <TrendingUp className="w-3 h-3 text-green-400" />
              <span className="text-green-400">+{artifact.trend[trend.length - 1] - trend[0]}</span>
            </>
          ) : (
            <>
              <TrendingDown className="w-3 h-3 text-red-400" />
              <span className="text-red-400">{artifact.trend[trend.length - 1] - trend[0]}</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
