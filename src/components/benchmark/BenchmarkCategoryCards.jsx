import { motion } from 'framer-motion'
import { Code2, Binary, Package, Container, Cloud, Zap, Sparkles, Link, ChevronRight, TrendingUp } from 'lucide-react'

const iconMap = {
  Code2,
  Binary,
  Package,
  Container,
  Cloud,
  Zap,
  Sparkles,
  Link,
}

export default function BenchmarkCategoryCards({ categories = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category, idx) => {
        const Icon = iconMap[category.icon]
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-cyan-500/30 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 rounded bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-xs font-medium text-green-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {category.trend}
              </div>
            </div>

            <h3 className="font-medium text-white mb-3">{category.name}</h3>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-slate-400">Score</span>
                <span className="text-lg font-bold text-cyan-400">{category.score}</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                  style={{ width: `${category.score}%` }}
                />
              </div>
            </div>

            <div className="text-xs text-slate-400 mb-4">
              {category.cases.toLocaleString()} benchmark cases
            </div>

            <div className="text-xs text-slate-500 mb-4 pb-4 border-t border-white/5 pt-4">
              Updated {category.lastUpdated}
            </div>

            <button className="w-full flex items-center justify-between text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
              View Details
              <ChevronRight className="w-3 h-3" />
            </button>
          </motion.div>
        )
      })}
    </div>
  )
}
