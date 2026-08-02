import { Code, Package, Wrench, Send, Cloud, Server, ArrowRight, RotateCcw } from 'lucide-react'

const colorMap = {
  cyan: 'text-cyan-400',
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
  emerald: 'text-emerald-400',
  yellow: 'text-yellow-400',
}

export default function SourceToProductionPipeline() {
  const stages = [
    { icon: Code, label: 'Code', color: colorMap.cyan },
    { icon: Package, label: 'Dependencies', color: colorMap.blue },
    { icon: Wrench, label: 'Build', color: colorMap.purple },
    { icon: Send, label: 'Deploy', color: colorMap.pink },
    { icon: Cloud, label: 'Cloud/K8s', color: colorMap.emerald },
    { icon: Server, label: 'Runtime', color: colorMap.yellow },
  ]

  return (
    <div className="space-y-4 mb-10 lg:mb-12">
      {/* Pipeline stages */}
      <div
        className="flex flex-wrap items-center gap-2"
        role="img"
        aria-label="OpsMx unified context connects from Code through Dependencies, Build, Deploy, Cloud and Kubernetes, to Runtime with continuous remediation feedback"
      >
        {stages.map((stage, i) => {
          const Icon = stage.icon
          const isLast = i === stages.length - 1

          return (
            <div key={stage.label} className="flex items-center gap-2">
              {/* Stage icon and label */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded border border-white/10 bg-white/[0.03] hover:bg-white/5 transition-colors">
                  <Icon className={`w-4 h-4 ${stage.color}`} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-slate-400 mt-1.5 whitespace-nowrap text-center leading-tight">
                  {stage.label}
                </span>
              </div>

              {/* Arrow or loop indicator */}
              {!isLast ? (
                <ArrowRight className="w-4 h-4 text-slate-600 mx-1 flex-shrink-0" />
              ) : (
                <RotateCcw className="w-4 h-4 text-slate-600 mx-1 opacity-60 flex-shrink-0" />
              )}
            </div>
          )
        })}
      </div>

      {/* Caption */}
      <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
        Unified context from source to production enables OpsMx to prioritize real exposure, generate the appropriate remediation, and verify the result.
      </p>
    </div>
  )
}