import { motion } from 'framer-motion'
import { Upload, AlertCircle } from 'lucide-react'
import { inputFormConfigs, analysisTargetTypes } from '../../data/analyzeAnything'

export default function DynamicInputForm({ selectedType, values, onChange, onAnalyze, isAnalyzing, user }) {
  const config = inputFormConfigs[selectedType]
  const isEnvironment = analysisTargetTypes.environments.some((e) => e.id === selectedType)

  if (!config) {
    return <div className="text-slate-400 text-sm">No configuration for this target type</div>
  }

  const renderField = (field) => {
    const value = values[field.name] || ''

    if (field.type === 'textarea') {
      return (
        <textarea
          key={field.name}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          placeholder={field.placeholder}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
          rows="4"
        />
      )
    }

    if (field.type === 'select') {
      return (
        <select
          key={field.name}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none transition-colors text-sm"
        >
          <option value="">{field.label}</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )
    }

    if (field.type === 'file') {
      return (
        <div
          key={field.name}
          className="relative border-2 border-dashed border-white/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors cursor-pointer bg-white/[0.02]"
        >
          <input
            type="file"
            accept={field.accept}
            onChange={(e) => onChange(field.name, e.target.files?.[0]?.name || '')}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center gap-2">
            <Upload className="w-5 h-5 text-slate-400" />
            <p className="text-sm text-slate-400">
              {value ? <span className="text-cyan-400">{value}</span> : <span>Click to upload or drag and drop</span>}
            </p>
          </div>
        </div>
      )
    }

    return (
      <input
        key={field.name}
        type={field.type}
        value={value}
        onChange={(e) => onChange(field.name, e.target.value)}
        placeholder={field.placeholder}
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
      />
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      {config.fields.map((field) => (
        <div key={field.name}>
          <label className="text-xs font-medium text-slate-300 mb-2 block">{field.label}</label>
          {renderField(field)}
        </div>
      ))}

      {/* Environment connectivity info */}
      {isEnvironment && config.delegate && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 rounded-lg border border-blue-500/20 bg-blue-500/5"
        >
          <div className="flex gap-2 items-start mb-3">
            <AlertCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-blue-300">
              <p className="font-medium mb-1">Enterprise Connectivity</p>
              <p>Use the OpsMx Delegate for secure analysis of private environments without exposing sensitive data.</p>
            </div>
          </div>
          <button className="text-xs text-blue-400 hover:text-blue-300 font-medium">
            Learn more about OpsMx Delegate →
          </button>
        </motion.div>
      )}

      {/* CTA Button */}
      <button
        onClick={onAnalyze}
        disabled={isAnalyzing || !user}
        className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
          user
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50'
            : 'bg-slate-800 text-slate-400 cursor-not-allowed'
        }`}
      >
        {isAnalyzing ? 'Analyzing...' : config.button || 'Analyze'}
      </button>

      {!user && (
        <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
          <p className="text-xs text-amber-400">Sign in to analyze targets</p>
        </div>
      )}
    </motion.div>
  )
}
