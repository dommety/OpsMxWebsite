import { Search, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SearchBar({ value, onChange, onSearch, suggestions = [], isLoading }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full"
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSearch()}
          placeholder="Search artifacts... (nginx, redis, kubernetes)"
          className="w-full pl-12 pr-10 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {suggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 rounded-lg bg-slate-900 border border-white/10 shadow-lg">
          <p className="text-xs font-medium text-slate-400 mb-2">Suggested searches:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  onChange(suggestion)
                  onSearch()
                }}
                className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
