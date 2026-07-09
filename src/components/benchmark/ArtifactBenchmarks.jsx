import { motion } from 'framer-motion'
import { Package, TrendingUp, AlertCircle } from 'lucide-react'

export default function ArtifactBenchmarks({ artifacts = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {artifacts.map((artifact, idx) => (
        <motion.div
          key={artifact.type}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="p-5 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-purple-500/30 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-medium text-white">{artifact.type}</h3>
              <p className="text-xs text-slate-400 mt-1">
                {artifact.analyzed.toLocaleString()} analyzed
              </p>
            </div>
            <div className={`text-xs font-medium flex items-center gap-1 ${artifact.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              <TrendingUp className="w-3 h-3" />
              {artifact.trend}
            </div>
          </div>

          <div className="space-y-3 mb-4 pb-4 border-b border-white/5">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs text-slate-400">Avg Score</span>
                <span className="font-bold text-cyan-400">{artifact.avgScore}</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                  style={{ width: `${artifact.avgScore}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs text-slate-400">Remediation %</span>
                <span className="font-bold text-green-400">{artifact.remediationRate}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-green-400"
                  style={{ width: `${artifact.remediationRate}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-medium text-red-400">{artifact.criticalFindings.toLocaleString()}</span>
              {' '}critical findings
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
