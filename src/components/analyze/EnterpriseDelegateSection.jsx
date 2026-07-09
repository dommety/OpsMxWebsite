import { motion } from 'framer-motion'
import { ArrowDown, Check, Download, ExternalLink } from 'lucide-react'
import { delegateCapabilities } from '../../data/analyzeAnything'

export default function EnterpriseDelegateSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 mt-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-3">Analyze Securely Using OpsMx Delegate</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          The OpsMx Delegate is a lightweight connector deployed inside your private network, VPC, Kubernetes cluster, or data center. It securely analyzes your environment without exposing source code, binaries, infrastructure configurations, or sensitive metadata outside your organization.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]"
        >
          <h4 className="text-sm font-semibold text-white mb-6">Architecture</h4>

          <div className="space-y-4 text-sm">
            {/* User Browser */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 rounded bg-blue-500/20 border border-blue-500/30 text-blue-300 font-medium min-w-fit">
                User Browser
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-4 h-4 text-slate-500" />
            </div>

            {/* OpsMx Cloud */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 rounded bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-medium min-w-fit">
                OpsMx Cloud
              </div>
            </div>

            <div className="flex justify-center">
              <div className="text-center">
                <ArrowDown className="w-4 h-4 text-slate-500 mx-auto" />
                <p className="text-xs text-slate-400 mt-1">Secure Encrypted Channel</p>
                <ArrowDown className="w-4 h-4 text-slate-500 mx-auto" />
              </div>
            </div>

            {/* OpsMx Delegate */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 rounded bg-purple-500/20 border border-purple-500/30 text-purple-300 font-medium min-w-fit">
                OpsMx Delegate
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-4 h-4 text-slate-500" />
            </div>

            {/* Private Environments */}
            <div className="bg-slate-900/50 rounded p-4 space-y-2 border border-slate-700/50">
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Private Environment</p>
              <div className="grid grid-cols-2 gap-2">
                {['AWS', 'Azure', 'GCP', 'Kubernetes', 'VMware', 'On-Prem'].map((env) => (
                  <div key={env} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                    {env}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
            <p className="text-xs font-semibold text-green-400">✓ No inbound firewall rules required</p>
            <p className="text-xs font-semibold text-green-400">✓ Only outbound encrypted connections</p>
          </div>
        </motion.div>

        {/* Capabilities & CTAs */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          {/* Capabilities */}
          <div className="p-6 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
            <h4 className="text-sm font-semibold text-white mb-4">Capabilities</h4>
            <div className="space-y-3">
              {delegateCapabilities.map((capability) => (
                <div key={capability} className="flex gap-3 items-start">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Deploy Delegate
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 font-medium text-sm hover:bg-cyan-500/10 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
