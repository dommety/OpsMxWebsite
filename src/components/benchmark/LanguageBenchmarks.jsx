import { motion } from 'framer-motion'
import { Code2, TrendingUp } from 'lucide-react'

export default function LanguageBenchmarks({ languages = [] }) {
  const sorted = [...languages].sort((a, b) => b.avgScore - a.avgScore)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sorted.map((lang, idx) => (
        <motion.div
          key={lang.language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="p-5 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-blue-500/30 transition-all"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-blue-400" />
            <h3 className="font-medium text-white">{lang.language}</h3>
          </div>

          <div className="space-y-3 mb-4 pb-4 border-b border-white/5">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs text-slate-400">Avg Security Score</span>
                <span className="font-bold text-blue-400">{lang.avgScore}</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                  style={{ width: `${lang.avgScore}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs text-slate-400">Remediation Rate</span>
                <span className="font-bold text-green-400">{lang.remediationRate}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-green-400"
                  style={{ width: `${lang.remediationRate}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs text-slate-400">Build Success</span>
                <span className="font-bold text-amber-400">{lang.buildSuccess}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
                  style={{ width: `${lang.buildSuccess}%` }}
                />
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400">
            <span className="font-medium text-slate-300">Common Vulns:</span>
            <p className="mt-1">{lang.commonVulns}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
