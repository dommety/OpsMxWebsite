import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap } from 'lucide-react'

const signals = [
  { label: 'Code', color: '#22d3ee', x: 8, y: 20 },
  { label: 'AI', color: '#a78bfa', x: 8, y: 38 },
  { label: 'Supply Chain', color: '#f472b6', x: 8, y: 56 },
  { label: 'Cloud', color: '#34d399', x: 8, y: 74 },
  { label: 'Runtime', color: '#60a5fa', x: 8, y: 55 },
  { label: 'Operations', color: '#fbbf24', x: 8, y: 73 },
]

const pipeline = [
  { label: 'Signals', color: '#94a3b8', x: 8 },
  { label: 'Context Engine', color: '#22d3ee', x: 28 },
  { label: 'Diagnostics', color: '#a78bfa', x: 48 },
  { label: 'Remediation', color: '#34d399', x: 68 },
  { label: 'Verification', color: '#fbbf24', x: 82 },
  { label: 'Governance', color: '#f472b6', x: 96 },
]

function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.4, opacity: Math.random() * 0.4 + 0.1,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34,211,238,${p.opacity})`; ctx.fill()
      })
      for (let i = 0; i < particles.length; i++)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(34,211,238,${0.06 * (1 - d / 100)})`; ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

function ArchDiagram() {
  const nodes = [
    { label: 'Code', color: '#22d3ee' }, { label: 'AI', color: '#a78bfa' },
    { label: 'Supply Chain', color: '#f472b6' }, { label: 'Cloud', color: '#34d399' },
    { label: 'Runtime', color: '#60a5fa' }, { label: 'Ops', color: '#fbbf24' },
  ]
  const stages = [
    { label: 'Context Engine', color: '#22d3ee', icon: '⬡' },
    { label: 'Diagnostics', color: '#a78bfa', icon: '◈' },
    { label: 'Remediation', color: '#34d399', icon: '⚙' },
    { label: 'Verification', color: '#fbbf24', icon: '✓' },
    { label: 'Governance', color: '#f472b6', icon: '⊞' },
  ]

  return (
    <div className="relative w-full glass-strong rounded-2xl border border-white/8 p-5 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/5">
        <div className="w-2 h-2 rounded-full bg-red-400" /><div className="w-2 h-2 rounded-full bg-yellow-400" /><div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="ml-2 text-[11px] text-slate-500 font-mono">platform.architecture</span>
        <div className="ml-auto flex items-center gap-1.5">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
          <span className="text-[10px] text-slate-600 font-mono">live</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Signal nodes */}
        <div className="flex flex-col gap-1.5 flex-shrink-0">
          <div className="text-[9px] font-semibold text-slate-600 uppercase tracking-wider mb-1">Signals</div>
          {nodes.map((n, i) => (
            <motion.div key={n.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-semibold"
              style={{ background: `${n.color}12`, border: `1px solid ${n.color}25`, color: n.color }}>
              <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: n.color }} animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }} />
              {n.label}
            </motion.div>
          ))}
        </div>

        {/* Flow arrow */}
        <div className="flex flex-col items-center gap-0.5">
          <motion.div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #22d3ee40, #22d3ee)' }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6 }} />
          <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
            <ArrowRight className="w-3 h-3 text-cyan-400" />
          </motion.div>
        </div>

        {/* Pipeline stages */}
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto">
          {stages.map((s, i) => (
            <div key={s.label} className="flex items-center gap-1.5 flex-shrink-0">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.12 }}
                whileHover={{ y: -2 }}
                className="flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl cursor-default"
                style={{ background: `${s.color}12`, border: `1px solid ${s.color}30` }}>
                <motion.div animate={{ boxShadow: [`0 0 4px ${s.color}40`, `0 0 12px ${s.color}80`, `0 0 4px ${s.color}40`] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold" style={{ color: s.color, background: `${s.color}20` }}>
                  {s.icon}
                </motion.div>
                <span className="text-[9px] font-semibold whitespace-nowrap" style={{ color: s.color }}>{s.label}</span>
              </motion.div>
              {i < stages.length - 1 && (
                <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1, delay: i * 0.15, repeat: Infinity }}>
                  <ArrowRight className="w-2.5 h-2.5 text-slate-700" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom telemetry */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
        <div className="flex items-center gap-3 text-slate-600">
          <span><span className="text-emerald-400">1,247</span> signals/min</span>
          <span><span className="text-cyan-400">89ms</span> avg latency</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <span><span className="text-violet-400">312</span> active contexts</span>
          <span><span className="text-emerald-400">99.8%</span> uptime</span>
        </div>
      </div>
    </div>
  )
}

export default function PlatformHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950 pt-16">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <ParticleCanvas />
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-radial from-violet-500/4 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 glass px-4 py-2 rounded-full border border-cyan-400/20">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Platform Overview</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="text-white">The Platform Behind</span>
              <br />
              <span className="text-gradient-full">Active Defense</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-slate-300 leading-relaxed mb-3">
              OpsMx Active Defense continuously detects, diagnoses, remediates, verifies, and governs risk across modern software systems.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-slate-500 leading-relaxed mb-10">
              Powered by the OpsMx Context Engine and Remediation Factory, the platform connects signals from code, AI, supply chain, cloud, runtime, and operations — then turns them into verified action.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all shadow-xl shadow-cyan-500/25">
                Request a Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-300 glass border border-white/10 hover:border-white/20 hover:text-white transition-all">
                <Play className="w-4 h-4 text-cyan-400" /> Explore Capabilities
              </button>
            </motion.div>
          </div>

          {/* Right — Architecture diagram */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.35 }}>
            <ArchDiagram />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  )
}
