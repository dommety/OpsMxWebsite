import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const lifecycleSteps = [
  { label: 'Detect', color: '#22d3ee', delay: 0 },
  { label: 'Diagnose', color: '#60a5fa', delay: 0.15 },
  { label: 'Prioritize', color: '#a78bfa', delay: 0.3 },
  { label: 'Remediate', color: '#34d399', delay: 0.45 },
  { label: 'Verify', color: '#fbbf24', delay: 0.6 },
  { label: 'Govern', color: '#f472b6', delay: 0.75 },
]

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 grid-pattern opacity-60" />
  )
}

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`
        ctx.fill()
      })

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

function FlowDiagram() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Outer glow orb */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-electric-500/5 to-transparent rounded-3xl blur-2xl" />

      {/* Glass panel */}
      <div className="relative glass-strong rounded-2xl p-6 border border-white/10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="ml-2 text-xs text-slate-500 font-mono">active-defense.engine</span>
        </div>

        {/* Flow nodes grid */}
        <div className="grid grid-cols-3 gap-3">
          {lifecycleSteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + step.delay, duration: 0.4, ease: 'easeOut' }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    `0 0 8px ${step.color}40`,
                    `0 0 20px ${step.color}60`,
                    `0 0 8px ${step.color}40`,
                  ],
                }}
                transition={{ duration: 2, delay: step.delay, repeat: Infinity }}
                className="rounded-xl p-3 border flex flex-col items-center gap-1.5 cursor-default"
                style={{
                  background: `${step.color}10`,
                  borderColor: `${step.color}30`,
                }}
              >
                {/* Pulse ring */}
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: `${step.color}20` }}
                    animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                    transition={{ duration: 1.8, delay: step.delay, repeat: Infinity }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: step.color, boxShadow: `0 0 8px ${step.color}` }}
                  />
                </div>
                <span className="text-[11px] font-semibold" style={{ color: step.color }}>
                  {step.label}
                </span>
              </motion.div>

              {/* Connector arrows */}
              {i < lifecycleSteps.length - 1 && (i + 1) % 3 !== 0 && (
                <motion.div
                  className="absolute top-1/2 -right-1.5 -translate-y-1/2 z-10"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.2, delay: step.delay, repeat: Infinity }}
                >
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom status bar */}
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-slate-500 font-mono">Context Engine active</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-600 font-mono">
            <span><span className="text-emerald-400">247</span> risks resolved</span>
            <span><span className="text-cyan-400">3</span> active</span>
          </div>
        </div>
      </div>

      {/* Floating metric chips */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute -left-8 top-1/4 glass rounded-xl px-3 py-2 text-xs border border-white/10"
        style={{ animation: 'float 5s ease-in-out infinite' }}
      >
        <div className="text-slate-400">Remediation</div>
        <div className="text-emerald-400 font-bold text-lg">94%</div>
        <div className="text-slate-500">auto-resolved</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6 }}
        className="absolute -right-8 bottom-1/4 glass rounded-xl px-3 py-2 text-xs border border-white/10"
        style={{ animation: 'float 6s ease-in-out infinite 1s' }}
      >
        <div className="text-slate-400">Mean time to fix</div>
        <div className="text-cyan-400 font-bold text-lg">4.2h</div>
        <div className="text-slate-500">vs 14 days avg</div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      <AnimatedGrid />
      <ParticleCanvas />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/8 via-transparent to-transparent" style={{ backgroundPosition: '30% 50%' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-electric-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 glass px-4 py-2 rounded-full border border-cyan-400/20"
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                Active Defense & Remediation Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">OpsMx</span>
              <br />
              <span className="text-gradient-full">Active Defense</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              Continuously detect, diagnose, prioritize, remediate, verify, and govern risks
              across software, AI, supply chains, cloud, runtime, and operations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all duration-200 shadow-xl shadow-cyan-500/25">
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-300 glass border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200">
                <Play className="w-4 h-4 text-cyan-400" />
                Explore Platform
              </button>
            </motion.div>

            {/* Lifecycle mini-strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="mt-12 flex flex-wrap items-center gap-1.5"
            >
              {lifecycleSteps.map((step, i) => (
                <span key={step.label} className="flex items-center gap-1.5">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-md"
                    style={{ color: step.color, background: `${step.color}15`, border: `1px solid ${step.color}25` }}
                  >
                    {step.label}
                  </span>
                  {i < lifecycleSteps.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-slate-700" />
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <FlowDiagram />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  )
}
