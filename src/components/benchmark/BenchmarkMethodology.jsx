import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle } from 'lucide-react'

export default function BenchmarkMethodology({ steps = [] }) {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="space-y-3">
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-300">
          <span className="font-medium">Key Principle:</span> Every benchmark measures{' '}
          <span className="font-semibold">verified remediation</span>, not simply vulnerability detection. A fix only
          counts if it resolves the issue, compiles, passes all tests, and passes human review.
        </p>
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
          <motion.div
            key={step.step}
            className="rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden"
          >
            <button
              onClick={() => setExpanded(expanded === step.step ? null : step.step)}
              className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-cyan-400">{step.step}</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">{step.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{step.description.substring(0, 60)}...</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expanded === step.step ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </motion.div>
            </button>

            <AnimatePresence>
              {expanded === step.step && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-white/5"
                >
                  <div className="p-4 bg-white/[0.02]">
                    <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-lg p-6 mt-6">
        <h4 className="font-medium text-white mb-4">Acceptance Criteria for Verified Fix</h4>
        <div className="space-y-2">
          {[
            'Resolves the original vulnerability',
            'Code compiles without errors',
            'All existing tests pass',
            'No new test failures introduced',
            'Passes security scanning post-remediation',
            'Approved by human security engineer',
          ].map((criterion) => (
            <div key={criterion} className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-sm text-slate-300">{criterion}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
