import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import { columns, BADGES } from '../data/solutions'

// ─── Badge chip ───────────────────────────────────────────────────────────────

function Badge({ type }) {
  const cfg = BADGES[type]
  if (!cfg) return null
  return (
    <span className={`inline-flex items-center text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border} ml-1.5 leading-none`}>
      {cfg.label}
    </span>
  )
}

// ─── Solution item row ────────────────────────────────────────────────────────

function SolutionItem({ item }) {
  const Icon = item.icon
  return (
    <motion.div whileHover={{ x: 2 }}>
      <Link
        to={`/solutions/${item.slug}`}
        className="flex items-start gap-2.5 px-2 py-1.5 rounded-lg group hover:bg-white/4 transition-colors duration-150"
      >
        <div
          className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: `${item.color}18`, border: `1px solid ${item.color}28` }}
        >
          <Icon className="w-3 h-3" style={{ color: item.color }} strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center flex-wrap gap-x-1 leading-tight">
            <span className="text-[12px] font-bold text-white transition-colors">
              {item.title}
            </span>
            {item.badge && <Badge type={item.badge} />}
          </div>
          <p className="text-[11px] font-medium text-slate-300 group-hover:text-slate-100 transition-colors leading-snug mt-0.5 line-clamp-1">
            {item.desc}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

// ─── Column ───────────────────────────────────────────────────────────────────

function Column({ col }) {
  return (
    <div className="flex flex-col min-w-0">
      {/* Column header */}
      <div className="px-2 pb-2 mb-1 border-b border-white/6">
        <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: col.color }}>
          {col.heading}
        </p>
        <p className="text-[10px] font-medium text-slate-400 leading-snug">{col.desc}</p>
      </div>

      {/* Items */}
      <div className="flex-1 space-y-0.5 overflow-y-auto max-h-[420px] pr-1 scrollbar-thin">
        {col.items.map(item => (
          <SolutionItem key={item.slug} item={item} />
        ))}
      </div>

      {/* Ribbon (Remediation column only) */}
      {col.ribbon && (
        <div className="mt-3 pt-2.5 border-t border-white/6">
          <div className="flex items-center gap-1.5 px-2">
            <Zap className="w-3 h-3 text-emerald-400 flex-shrink-0" />
            <p className="text-[10px] font-bold text-emerald-400">{col.ribbonLabel || 'Platform capabilities'}</p>
          </div>
          <p className="text-[10px] font-medium text-slate-400 mt-0.5 px-2 leading-relaxed">{col.ribbon}</p>
        </div>
      )}
    </div>
  )
}

// ─── Main mega menu ───────────────────────────────────────────────────────────

export default function SolutionsMegaMenu({ onClose, onMouseEnter, onMouseLeave }) {
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="fixed top-16 left-0 right-0 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="mx-4 lg:mx-8 xl:mx-auto xl:max-w-6xl rounded-2xl border border-white/8 overflow-hidden"
        style={{
          background: 'rgba(5, 7, 18, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/6">
          <div>
            <p className="text-sm font-bold text-white">Solutions</p>
            <p className="text-[11px] font-medium text-slate-300 mt-0.5">
              Find, prioritize, remediate, and verify risk across security, compliance, and operations.
            </p>
          </div>
          <Link
            to="/solutions"
            onClick={onClose}
            className="flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors group whitespace-nowrap"
          >
            View all solutions
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3-column grid — col 1 slightly wider */}
        <div className="grid p-4 gap-4" style={{ gridTemplateColumns: '1.25fr 1fr 1fr' }}>
          {columns.map(col => (
            <Column key={col.id} col={col} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
