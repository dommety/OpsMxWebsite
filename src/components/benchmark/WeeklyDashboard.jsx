import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function WeeklyDashboard({ kpis = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, idx) => {
        const isPositive = kpi.trend?.startsWith('+') ?? true
        return (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-5 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]"
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs font-medium text-slate-400">{kpi.label}</p>
              <div
                className={`flex items-center gap-1 text-xs font-medium ${
                  isPositive ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {kpi.trend}
              </div>
            </div>

            <div className="text-2xl font-bold text-white">
              {typeof kpi.value === 'number' && kpi.value > 100
                ? kpi.value.toLocaleString()
                : kpi.value}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
