import { motion } from 'framer-motion'

export default function SecurityGauge({ score, size = 'md' }) {
  const getColor = (score) => {
    if (score >= 80) return '#34d399' // green
    if (score >= 60) return '#f59e0b' // amber
    if (score >= 40) return '#f97316' // orange
    return '#ef4444' // red
  }

  const getLabel = (score) => {
    if (score >= 80) return 'Secure'
    if (score >= 60) return 'Moderate'
    if (score >= 40) return 'At Risk'
    return 'Critical'
  }

  const color = getColor(score)
  const label = getLabel(score)
  const radius = size === 'lg' ? 45 : 30
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-3xl',
    lg: 'text-5xl',
  }

  const labelSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col items-center justify-center ${sizeClasses[size]}`}
    >
      <svg viewBox="0 0 120 120" className="transform -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="3"
          fill="none"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          strokeLinecap="round"
        />
      </svg>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute flex flex-col items-center"
      >
        <span className={`font-bold ${textSizes[size]}`} style={{ color }}>
          {score}
        </span>
        <span className={`${labelSizes[size]} text-slate-400 mt-0.5`}>{label}</span>
      </motion.div>
    </motion.div>
  )
}
