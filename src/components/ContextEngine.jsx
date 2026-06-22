import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'

const graphNodes = [
  { id: 'apps', label: 'Applications', x: 50, y: 18, color: '#22d3ee', r: 28 },
  { id: 'apis', label: 'APIs', x: 20, y: 35, color: '#60a5fa', r: 22 },
  { id: 'code', label: 'Code', x: 80, y: 32, color: '#a78bfa', r: 22 },
  { id: 'deps', label: 'Dependencies', x: 12, y: 58, color: '#f472b6', r: 20 },
  { id: 'pipelines', label: 'Pipelines', x: 35, y: 65, color: '#fbbf24', r: 22 },
  { id: 'cloud', label: 'Cloud', x: 65, y: 62, color: '#34d399', r: 24 },
  { id: 'k8s', label: 'Kubernetes', x: 88, y: 55, color: '#60a5fa', r: 20 },
  { id: 'runtime', label: 'Runtime', x: 78, y: 78, color: '#22d3ee', r: 20 },
  { id: 'services', label: 'Biz Services', x: 40, y: 85, color: '#f472b6', r: 22 },
  { id: 'owners', label: 'Owners', x: 18, y: 80, color: '#34d399', r: 20 },
]

const edges = [
  ['apps', 'apis'], ['apps', 'code'], ['apps', 'pipelines'],
  ['apis', 'deps'], ['code', 'deps'], ['pipelines', 'cloud'],
  ['cloud', 'k8s'], ['k8s', 'runtime'], ['runtime', 'services'],
  ['services', 'owners'], ['owners', 'pipelines'], ['deps', 'owners'],
  ['cloud', 'runtime'], ['apis', 'pipelines'],
]

const outputs = [
  { label: 'Diagnostics Engine', color: '#22d3ee', delay: 0 },
  { label: 'Remediation Factory', color: '#34d399', delay: 0.2 },
  { label: 'Verification Engine', color: '#fbbf24', delay: 0.4 },
  { label: 'Governance Framework', color: '#a78bfa', delay: 0.6 },
]

function KnowledgeGraph() {
  const svgRef = useRef(null)

  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full" />

      <svg ref={svgRef} viewBox="0 0 100 100" className="w-full h-full">
        {/* Edges */}
        {edges.map(([a, b], i) => {
          const na = graphNodes.find(n => n.id === a)
          const nb = graphNodes.find(n => n.id === b)
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke={na.color}
              strokeWidth="0.4"
              strokeOpacity="0.25"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.06 }}
            />
          )
        })}

        {/* Animated data pulses along edges */}
        {edges.slice(0, 6).map(([a, b], i) => {
          const na = graphNodes.find(n => n.id === a)
          const nb = graphNodes.find(n => n.id === b)
          return (
            <motion.circle
              key={`pulse-${a}-${b}`}
              r="0.8"
              fill={na.color}
              initial={{ cx: na.x, cy: na.y, opacity: 0 }}
              animate={{
                cx: [na.x, nb.x, na.x],
                cy: [na.y, nb.y, na.y],
                opacity: [0, 0.9, 0],
              }}
              transition={{ duration: 2.5, delay: i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          )
        })}

        {/* Nodes */}
        {graphNodes.map((node, i) => (
          <g key={node.id}>
            {/* Pulse ring */}
            <motion.circle
              cx={node.x} cy={node.y} r={node.r / 10 + 1}
              fill="none"
              stroke={node.color}
              strokeWidth="0.3"
              animate={{ r: [node.r / 10 + 1, node.r / 10 + 3], opacity: [0.5, 0] }}
              transition={{ duration: 2, delay: i * 0.25, repeat: Infinity }}
            />
            {/* Node circle */}
            <motion.circle
              cx={node.x} cy={node.y} r={node.r / 10}
              fill={`${node.color}25`}
              stroke={node.color}
              strokeWidth="0.5"
              strokeOpacity="0.6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.5, type: 'spring' }}
            />
            {/* Label */}
            <text
              x={node.x} y={node.y + node.r / 10 + 2.5}
              textAnchor="middle"
              fontSize="2.8"
              fill={node.color}
              opacity="0.9"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Center label */}
        <text x="50" y="50.5" textAnchor="middle" fontSize="3" fill="white" opacity="0.5" fontWeight="700" fontFamily="Inter, sans-serif">
          Context
        </text>
        <text x="50" y="54" textAnchor="middle" fontSize="2.5" fill="white" opacity="0.3" fontFamily="Inter, sans-serif">
          Engine
        </text>
      </svg>
    </div>
  )
}

export default function ContextEngine() {
  return (
    <section className="relative py-28 bg-navy-900/70 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-violet-400/20 glass">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-semibold text-violet-400 tracking-wider uppercase">Intelligence Layer</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Powered by the{' '}
            <span className="text-gradient-violet">OpsMx Context Engine</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            The intelligence layer behind every active defense decision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl border border-white/8 p-8"
          >
            <KnowledgeGraph />
          </motion.div>

          {/* Right side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-400 text-lg leading-relaxed mb-10"
            >
              The Context Engine continuously discovers, correlates, serves, and optimizes context
              across applications, code, APIs, dependencies, pipelines, cloud resources, Kubernetes,
              runtime systems, and business ownership.
            </motion.p>

            {/* Output engines */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">
                Powers Every Layer
              </p>
              {outputs.map((out, i) => (
                <motion.div
                  key={out.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: out.delay, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 cursor-default"
                >
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: out.color, boxShadow: `0 0 8px ${out.color}` }}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
                  />
                  <span className="font-semibold text-white">{out.label}</span>
                  <div className="ml-auto">
                    <motion.div
                      className="w-16 h-1 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${out.color}, transparent)` }}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
