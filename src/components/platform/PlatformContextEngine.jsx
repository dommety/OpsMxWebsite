import { motion } from 'framer-motion'
import { Cpu, CheckCircle2 } from 'lucide-react'

const graphNodes = [
  { id: 'apps', label: 'Applications', x: 50, y: 12, color: '#22d3ee', r: 6 },
  { id: 'services', label: 'Services', x: 25, y: 28, color: '#60a5fa', r: 5 },
  { id: 'apis', label: 'APIs', x: 75, y: 28, color: '#a78bfa', r: 5 },
  { id: 'code', label: 'Code', x: 12, y: 50, color: '#34d399', r: 4.5 },
  { id: 'deps', label: 'Dependencies', x: 38, y: 50, color: '#f472b6', r: 5 },
  { id: 'pipelines', label: 'Pipelines', x: 62, y: 50, color: '#fbbf24', r: 4.5 },
  { id: 'cloud', label: 'Cloud', x: 88, y: 50, color: '#34d399', r: 5 },
  { id: 'k8s', label: 'Kubernetes', x: 22, y: 72, color: '#60a5fa', r: 5 },
  { id: 'containers', label: 'Containers', x: 50, y: 80, color: '#22d3ee', r: 4.5 },
  { id: 'runtime', label: 'Runtime', x: 76, y: 72, color: '#a78bfa', r: 5 },
  { id: 'threat', label: 'Threat Intel', x: 38, y: 93, color: '#f87171', r: 4.5 },
  { id: 'owners', label: 'Owners', x: 62, y: 93, color: '#fbbf24', r: 4.5 },
]

const edges = [
  ['apps','services'],['apps','apis'],['apps','deps'],
  ['services','code'],['services','k8s'],['apis','pipelines'],
  ['deps','code'],['deps','containers'],
  ['pipelines','cloud'],['cloud','runtime'],
  ['k8s','containers'],['containers','runtime'],
  ['runtime','threat'],['owners','apps'],['owners','pipelines'],
  ['threat','deps'],
]

const outputs = [
  { label: 'Prioritization', color: '#22d3ee' },
  { label: 'Diagnosis', color: '#a78bfa' },
  { label: 'Remediation', color: '#34d399' },
  { label: 'Verification', color: '#fbbf24' },
  { label: 'Governance', color: '#f472b6' },
]

const capabilities = [
  'Context discovery across all layers',
  'Relationship and dependency mapping',
  'Real-time context serving',
  'Token optimization for AI workflows',
  'Business impact mapping',
  'Ownership and team assignment',
  'Blast radius analysis',
]

export default function PlatformContextEngine() {
  return (
    <section className="relative py-28 bg-navy-900/60 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/6 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-violet-400/20 glass">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-semibold text-violet-400 tracking-wider uppercase">Intelligence Layer</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            The OpsMx <span className="text-gradient-violet">Context Engine</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            The intelligence layer that makes remediation safe and precise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animated graph */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl border border-white/8 p-6">
            <div className="relative w-full" style={{ paddingBottom: '90%' }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Edges */}
                {edges.map(([a, b], i) => {
                  const na = graphNodes.find(n => n.id === a)
                  const nb = graphNodes.find(n => n.id === b)
                  return (
                    <motion.line key={`${a}-${b}`}
                      x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                      stroke={na.color} strokeWidth="0.35" strokeOpacity="0.25" strokeDasharray="2 2"
                      initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: i * 0.05 }} />
                  )
                })}
                {/* Animated pulses */}
                {edges.slice(0, 8).map(([a, b], i) => {
                  const na = graphNodes.find(n => n.id === a)
                  const nb = graphNodes.find(n => n.id === b)
                  return (
                    <motion.circle key={`p-${a}-${b}`} r="0.7" fill={na.color}
                      animate={{ cx: [na.x, nb.x, na.x], cy: [na.y, nb.y, na.y], opacity: [0, 1, 0] }}
                      transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }} />
                  )
                })}
                {/* Nodes */}
                {graphNodes.map((node, i) => (
                  <g key={node.id}>
                    <motion.circle cx={node.x} cy={node.y} r={node.r + 1.5}
                      fill="none" stroke={node.color} strokeWidth="0.3"
                      animate={{ r: [node.r + 1.5, node.r + 3.5], opacity: [0.4, 0] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }} />
                    <motion.circle cx={node.x} cy={node.y} r={node.r}
                      fill={`${node.color}20`} stroke={node.color} strokeWidth="0.5" strokeOpacity="0.7"
                      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.08 + 0.4, type: 'spring' }} />
                    <text x={node.x} y={node.y + node.r + 2.8} textAnchor="middle"
                      fontSize="2.8" fill={node.color} opacity="0.9" fontWeight="600" fontFamily="Inter, sans-serif">
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Output strip */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">Feeds into</p>
              <div className="flex flex-wrap gap-2">
                {outputs.map(o => (
                  <span key={o.label} className="text-[10px] font-semibold px-2 py-0.5 rounded-md"
                    style={{ color: o.color, background: `${o.color}12`, border: `1px solid ${o.color}25` }}>
                    {o.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-slate-400 text-lg leading-relaxed mb-8">
              The Context Engine continuously discovers, correlates, serves, and optimizes context across your software ecosystem.
              It gives every diagnostic and remediation workflow the information needed to act safely.
            </motion.p>

            <div className="space-y-2.5 mb-10">
              {capabilities.map((cap, i) => (
                <motion.div key={cap} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{cap}</span>
                </motion.div>
              ))}
            </div>

            {/* Stat chips */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '13', unit: 'node types', color: '#22d3ee' },
                { val: '<50ms', unit: 'context latency', color: '#a78bfa' },
                { val: '100%', unit: 'ownership coverage', color: '#34d399' },
                { val: 'Live', unit: 'continuous updates', color: '#fbbf24' },
              ].map(s => (
                <div key={s.unit} className="glass rounded-xl p-3 border border-white/6">
                  <div className="text-2xl font-black" style={{ color: s.color }}>{s.val}</div>
                  <div className="text-xs text-slate-500">{s.unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
