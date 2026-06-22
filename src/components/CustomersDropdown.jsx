import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Zap, Building2, TrendingUp } from 'lucide-react'

const customerItems = [
  {
    type: 'category',
    icon: Shield,
    label: 'AI for Security & Compliance',
    desc: 'Secure applications and infrastructure',
    href: '/case-studies',
    color: '#10b981',
  },
  {
    type: 'category',
    icon: Zap,
    label: 'AI for DevOps',
    desc: 'Accelerate software delivery',
    href: '/case-studies',
    color: '#f59e0b',
  },
  {
    type: 'divider',
  },
  {
    type: 'case-study',
    label: 'Enterprise Data Integration',
    company: 'Mid market',
    href: '#',
  },
  {
    type: 'case-study',
    label: 'Crypto Exchange',
    company: 'Financial Services',
    href: '#',
  },
  {
    type: 'case-study',
    label: 'Data Streaming Platform',
    company: 'Tech',
    href: '#',
  },
  {
    type: 'case-study',
    label: 'Fortune 500 Enterprise',
    company: 'Enterprise',
    href: '#',
  },
  {
    type: 'case-study',
    label: 'Health-Tech Startup',
    company: 'Healthcare',
    href: '#',
  },
  {
    type: 'case-study',
    label: 'Cisco',
    company: 'Case Study',
    href: '#',
  },
  {
    type: 'case-study',
    label: 'Interswitch',
    company: 'Case Study',
    href: '#',
  },
]

export default function CustomersDropdown({ onClose }) {
  const [isOpen, setIsOpen] = useState(false)
  const closeTimer = useRef(null)

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsOpen(true)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 150)
  }, [])

  const closeNow = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsOpen(false)
    onClose?.()
  }, [onClose])

  return (
    <div
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      className="relative"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-3.5 py-2 text-sm transition-colors rounded-lg ${
          isOpen
            ? 'text-white bg-white/6'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        Customers
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-80 rounded-xl border border-white/10 overflow-hidden z-50"
            style={{
              background: 'rgba(5, 7, 18, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <div className="py-2 max-h-96 overflow-y-auto">
              {customerItems.map((item, idx) => {
                if (item.type === 'divider') {
                  return (
                    <div key={`divider-${idx}`} className="my-2 border-t border-white/5" />
                  )
                }

                if (item.type === 'category') {
                  const Icon = item.icon
                  return (
                    <motion.div key={item.label} whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                      <Link
                        to={item.href}
                        onClick={closeNow}
                        className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-white/6 group"
                      >
                        <div
                          className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${item.color}20`, border: `1px solid ${item.color}35` }}
                        >
                          <Icon className="w-3 h-3" style={{ color: item.color }} strokeWidth={2} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                            {item.label}
                          </p>
                          <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  )
                }

                // case-study type
                return (
                  <motion.div key={item.label} whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 px-4 py-2 text-sm transition-colors hover:bg-white/6 group"
                    >
                      <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2 bg-cyan-400/60" />
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-300 group-hover:text-white transition-colors text-xs">
                          {item.label}
                        </p>
                        <p className="text-xs text-slate-500 group-hover:text-slate-400">
                          {item.company}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                )
              })}

              {/* View all link */}
              <div className="mt-2 pt-2 border-t border-white/5">
                <Link
                  to="/case-studies"
                  onClick={closeNow}
                  className="flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors hover:bg-white/6"
                >
                  View All Case Studies →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
