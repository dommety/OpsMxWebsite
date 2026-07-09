import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpDown, Trophy } from 'lucide-react'

export default function LLMLeaderboard({ leaderboard = [] }) {
  const [sortBy, setSortBy] = useState('verifiedFixRate')
  const [order, setOrder] = useState('desc')

  const handleSort = (column) => {
    if (sortBy === column) {
      setOrder(order === 'desc' ? 'asc' : 'desc')
    } else {
      setSortBy(column)
      setOrder('desc')
    }
  }

  const sorted = [...leaderboard].sort((a, b) => {
    const aVal = a[sortBy]
    const bVal = b[sortBy]
    const isNumeric = typeof aVal === 'number'
    if (order === 'desc') {
      return isNumeric ? bVal - aVal : bVal.localeCompare(aVal)
    } else {
      return isNumeric ? aVal - bVal : aVal.localeCompare(bVal)
    }
  })

  const columns = [
    { key: 'model', label: 'Model' },
    { key: 'verifiedFixRate', label: 'Verified Fix Rate', unit: '%' },
    { key: 'buildSuccess', label: 'Build Success', unit: '%' },
    { key: 'testsPassing', label: 'Tests Passing', unit: '%' },
    { key: 'falseFixRate', label: 'False Fix Rate', unit: '%' },
    { key: 'avgTimeToFix', label: 'Avg Time to Fix' },
    { key: 'estimatedCost', label: 'Estimated Cost' },
    { key: 'avgLatency', label: 'Avg Latency' },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                className={`text-left px-4 py-3 text-slate-400 font-medium cursor-pointer hover:text-slate-300 transition-colors ${
                  col.key === 'model' ? '' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  {col.label}
                  {col.key !== 'model' && (
                    <ArrowUpDown
                      className={`w-3 h-3 ${
                        sortBy === col.key ? 'text-cyan-400' : 'text-slate-600'
                      }`}
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((item, idx) => {
            const isBest = idx === 0
            return (
              <motion.tr
                key={item.model}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className={`border-b border-white/5 ${
                  isBest ? 'bg-cyan-500/10' : 'hover:bg-white/5'
                } transition-colors`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {isBest && <Trophy className="w-4 h-4 text-yellow-400" />}
                    <span className="font-medium text-white">{item.model}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-cyan-400 font-medium">{item.verifiedFixRate}%</td>
                <td className="px-4 py-3 text-green-400 font-medium">{item.buildSuccess}%</td>
                <td className="px-4 py-3 text-blue-400 font-medium">{item.testsPassing}%</td>
                <td className="px-4 py-3 text-red-400 font-medium">{item.falseFixRate}%</td>
                <td className="px-4 py-3 text-slate-300">{item.avgTimeToFix}</td>
                <td className="px-4 py-3 text-slate-300">{item.estimatedCost}</td>
                <td className="px-4 py-3 text-slate-300">{item.avgLatency}</td>
              </motion.tr>
            )
          })}
        </tbody>
      </table>
    </motion.div>
  )
}
