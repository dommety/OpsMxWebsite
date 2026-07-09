import { motion } from 'framer-motion'
import { Code2, Package, Download, Zap, Box, Container, Layers, FileText, FileJson, Cloud, Server, Cpu, Building2, BarChart3, Settings, ChevronDown } from 'lucide-react'
import { analysisTargetTypes } from '../../data/analyzeAnything'

const iconMap = {
  Code2, Package, Download, Zap, Box, Container, Layers, FileText, FileJson, Cloud, Server, Cpu, Building2, BarChart3, Settings,
}

export default function TargetTypeSelector({ selected, onSelect }) {
  const allTypes = [...analysisTargetTypes.artifacts, ...analysisTargetTypes.environments]
  const categories = ['Software Artifacts', 'Running Environments']

  return (
    <div>
      {categories.map((category) => {
        const types = allTypes.filter((t) => t.category === category)
        return (
          <div key={category} className="mb-8">
            <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {types.map((type, idx) => {
                const Icon = iconMap[type.icon]
                return (
                  <motion.button
                    key={type.id}
                    onClick={() => onSelect(type.id)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      selected === type.id
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
                    }`}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: type.color }} />
                    <p className="text-xs font-medium text-center">{type.label}</p>
                  </motion.button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
