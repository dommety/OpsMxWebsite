import { motion } from 'framer-motion'
import { Code2, Package, Download, Zap, Box, Cube, Layers, FileText } from 'lucide-react'
import { artifactTypes } from '../../data/openSecurityIntelligence'

const iconMap = {
  Code2,
  Package,
  Download,
  Zap,
  Box,
  Cube,
  Layers,
  FileText,
}

export default function ArtifactTypeSelector({ selected, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {artifactTypes.map((type, idx) => {
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
            className={`p-4 rounded-lg border-2 transition-all ${
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
  )
}
