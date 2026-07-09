import { useState } from 'react'
import { Upload, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const placeholders = {
  github: 'https://github.com/username/repo',
  docker: 'nginx:latest or docker pull nginx:latest',
  binary: 'Click to select a file...',
  'ai-model': 'https://huggingface.co/meta-llama/Llama-2-7b',
  helm: 'https://github.com/charts/repo/redis',
  k8s: 'Paste YAML or select file...',
  terraform: 'https://github.com/username/terraform-repo',
  other: 'Enter URL or description...',
}

export default function ArtifactInput({ artifactType, onInput, value, onAnalyze, isLoading, requiresAuth }) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    if (artifactType === 'binary' || artifactType === 'k8s') {
      const file = e.dataTransfer.files[0]
      if (file) {
        onInput(file.name)
      }
    }
  }

  if (artifactType === 'binary' || artifactType === 'k8s') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
          isDragging
            ? 'border-cyan-500 bg-cyan-500/10'
            : 'border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/8'
        }`}
      >
        <Upload className="w-8 h-8 mx-auto mb-3 text-slate-400" />
        <p className="text-sm font-medium mb-2">Drag and drop your file here</p>
        <p className="text-xs text-slate-400 mb-4">or click to browse</p>
        <input
          type="file"
          onChange={(e) => onInput(e.target.files[0]?.name || '')}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="inline-block px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 cursor-pointer transition-colors text-sm font-medium">
          Select File
        </label>
        {value && <p className="text-xs text-cyan-400 mt-4">Selected: {value}</p>}
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onInput(e.target.value)}
          placeholder={placeholders[artifactType]}
          className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
        />
        <motion.button
          onClick={onAnalyze}
          disabled={!value || isLoading || requiresAuth}
          whileHover={!isLoading && value && !requiresAuth ? { scale: 1.05 } : {}}
          whileTap={!isLoading && value && !requiresAuth ? { scale: 0.95 } : {}}
          className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all ${
            requiresAuth
              ? 'bg-slate-600 text-slate-300 cursor-not-allowed'
              : isLoading || !value
                ? 'bg-slate-600 text-slate-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-lg hover:shadow-cyan-500/30'
          }`}
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              Analyze
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </div>
      {requiresAuth && (
        <p className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded px-3 py-2">
          ⓘ Sign in to analyze artifacts
        </p>
      )}
    </motion.div>
  )
}
