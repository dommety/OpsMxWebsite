import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Briefcase, FileText, Users2, Award, Mail } from 'lucide-react'

const companyItems = [
  {
    icon: Users,
    label: 'Leadership',
    desc: 'Meet our executive team',
    href: '/company',
  },
  {
    icon: Briefcase,
    label: 'Investors',
    desc: 'Backed by leading venture firms',
    href: '/company',
  },
  {
    icon: FileText,
    label: 'Press Releases',
    desc: 'News and announcements',
    href: '#',
    external: true,
  },
  {
    icon: Users2,
    label: 'Partners',
    desc: 'Partner with OpsMx',
    href: '#',
    external: true,
  },
  {
    icon: Award,
    label: 'Careers',
    desc: 'Join our team',
    href: '#',
    external: true,
  },
  {
    icon: Mail,
    label: 'Contact Us',
    desc: 'Get in touch',
    href: '/contact',
  },
]

export default function CompanyDropdown({ onClose }) {
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
        Company
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
            className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-white/10 overflow-hidden z-50"
            style={{
              background: 'rgba(5, 7, 18, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <div className="py-2">
              {companyItems.map((item) => {
                const Icon = item.icon
                const Component = item.external ? 'a' : Link
                const linkProps = item.external
                  ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                  : { to: item.href, onClick: closeNow }

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Component
                      {...linkProps}
                      className="flex items-start gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-white/6 group"
                    >
                      <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {item.label}
                        </p>
                        <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </Component>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
