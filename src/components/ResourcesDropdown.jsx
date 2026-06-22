import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BookOpen, FileText, Video, Zap,
  Shield, GitBranch, Layers, Award,
} from 'lucide-react'

const resourcesCategories = [
  {
    title: 'Documentation',
    icon: BookOpen,
    color: '#3b82f6',
    items: [
      { label: 'Scanning Source Code with OpsMx Delivery Shield', href: '#' },
      { label: 'Scanning Artifacts with OpsMx Delivery Shield', href: '#' },
      { label: 'Securing Your Lovable Application with OpsMx Delivery Shield', href: '#' },
      { label: 'OpsMx Intelligent Software Delivery for Argo', href: '#' },
      { label: 'OpsMx Intelligent Software Delivery for Spinnaker', href: '#' },
    ],
  },
  {
    title: 'Resources',
    icon: FileText,
    color: '#8b5cf6',
    items: [
      { label: 'Blogs', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Ebooks & Datasheets', href: '#' },
      { label: 'Customer Case Studies', href: '/case-studies' },
      { label: 'Video Hub', href: '/resources/videos' },
      { label: 'Events', href: '#' },
      { label: 'Docs', href: '#' },
      { label: 'News', href: '#' },
    ],
  },
  {
    title: 'Security Hub',
    icon: Shield,
    color: '#10b981',
    items: [
      { label: 'What is ASPM?', href: '#' },
      { label: 'What is DevSecOps?', href: '#' },
      { label: 'What is Application Security?', href: '#' },
      { label: 'Secured Software Delivery', href: '#' },
      { label: 'Software Supply Chain Security', href: '#' },
      { label: 'SAST vs DAST vs SCA', href: '#' },
      { label: 'OpsMx AppSec Community', href: '#' },
    ],
  },
  {
    title: 'DevOps Hub',
    icon: GitBranch,
    color: '#f59e0b',
    items: [
      { label: 'What is GitOps?', href: '#' },
      { label: 'What is Argo?', href: '#' },
      { label: 'What is Spinnaker?', href: '#' },
      { label: 'What is Continuous Delivery?', href: '#' },
      { label: 'Spinnaker Course', href: '#' },
      { label: 'Tutorials and Podcasts', href: '#' },
    ],
  },
]

export default function ResourcesDropdown({ onClose }) {
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
        Resources
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
            className="absolute top-full left-0 mt-1 w-max rounded-xl border border-white/10 overflow-hidden z-50"
            style={{
              background: 'rgba(5, 7, 18, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              maxWidth: '90vw',
            }}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <div className="grid grid-cols-4 gap-0 p-0">
              {resourcesCategories.map((category) => {
                const Icon = category.icon
                return (
                  <div
                    key={category.title}
                    className="p-5 border-r border-white/5 last:border-r-0"
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${category.color}20`, border: `1px solid ${category.color}35` }}
                      >
                        <Icon className="w-3 h-3" style={{ color: category.color }} strokeWidth={2} />
                      </div>
                      <h3
                        className="text-sm font-bold"
                        style={{ color: category.color }}
                      >
                        {category.title}
                      </h3>
                    </div>

                    {/* Category items */}
                    <div className="space-y-2">
                      {category.items.map((item) => {
                        const Component = item.href?.startsWith('/') ? Link : 'a'
                        const linkProps = item.href?.startsWith('/')
                          ? { to: item.href, onClick: closeNow }
                          : { href: item.href, target: '_blank', rel: 'noopener noreferrer' }

                        return (
                          <motion.div
                            key={item.label}
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.15 }}
                          >
                            <Component
                              {...linkProps}
                              className="block text-xs text-slate-400 hover:text-cyan-400 transition-colors leading-snug hover:underline"
                            >
                              {item.label}
                            </Component>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
