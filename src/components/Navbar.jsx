import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import MegaMenu from './MegaMenu'
import SolutionsMegaMenu from './SolutionsMegaMenu'
import ResourcesMegaMenu from './ResourcesMegaMenu'
import CustomersMegaMenu from './CustomersMegaMenu'
import CompanyDropdown from './CompanyDropdown'
import Logo from './Logo'

// Which nav link has a mega menu and which type
const navLinks = [
  { label: 'Products',   mega: 'products',   href: '#' },
  { label: 'Solutions',  mega: 'solutions',  href: '/solutions' },
  { label: 'Customers',  mega: 'customers',  href: 'https://www.opsmx.com/customer-case-study/' },
  { label: 'Pricing',    href: '/pricing' },
  { label: 'Resources',  mega: 'resources',  href: 'https://www.opsmx.com/guides-datasheets/' },
  { label: 'Company',    isDropdown: true },
]

export default function Navbar() {
  // null | 'products' | 'solutions'
  const [openMenu, setOpenMenu] = useState(null)
  const closeTimer = useRef(null)

  const openWith = useCallback((which) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(which)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 130)
  }, [])

  const closeNow = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(null)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Logo size="md" href="/" onClick={closeNow} className="flex-shrink-0" />

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = link.mega && openMenu === link.mega

              // Company dropdown
              if (link.isDropdown && link.label === 'Company') {
                return (
                  <CompanyDropdown key={link.label} onClose={closeNow} />
                )
              }

              // Mega menus (Products, Solutions, Customers, Resources)
              if (link.mega) {
                return (
                  <div
                    key={link.label}
                    onMouseEnter={() => openWith(link.mega)}
                    onMouseLeave={scheduleClose}
                    className="relative"
                  >
                    <button
                      onClick={() => setOpenMenu(o => o === link.mega ? null : link.mega)}
                      className={`flex items-center gap-1 px-3.5 py-2 text-sm transition-colors rounded-lg ${
                        isActive
                          ? 'text-white bg-white/6'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                      <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-3 h-3" />
                      </motion.div>
                    </button>
                  </div>
                )
              }

              // Regular links (Pricing)
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center gap-1 px-3.5 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors px-3 py-2">
              Sign In
            </button>
            <button className="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-electric-500 text-white hover:from-cyan-400 hover:to-electric-400 transition-all duration-200 shadow-lg shadow-cyan-500/20">
              Request Demo
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Products mega menu */}
      <AnimatePresence>
        {openMenu === 'products' && (
          <MegaMenu
            onClose={closeNow}
            onMouseEnter={() => openWith('products')}
            onMouseLeave={scheduleClose}
          />
        )}
      </AnimatePresence>

      {/* Solutions mega menu */}
      <AnimatePresence>
        {openMenu === 'solutions' && (
          <SolutionsMegaMenu
            onClose={closeNow}
            onMouseEnter={() => openWith('solutions')}
            onMouseLeave={scheduleClose}
          />
        )}
      </AnimatePresence>

      {/* Resources mega menu */}
      <AnimatePresence>
        {openMenu === 'resources' && (
          <ResourcesMegaMenu
            onClose={closeNow}
            onMouseEnter={() => openWith('resources')}
            onMouseLeave={scheduleClose}
          />
        )}
      </AnimatePresence>

      {/* Customers mega menu */}
      <AnimatePresence>
        {openMenu === 'customers' && (
          <CustomersMegaMenu
            onClose={closeNow}
            onMouseEnter={() => openWith('customers')}
            onMouseLeave={scheduleClose}
          />
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm -z-10"
            onClick={closeNow}
          />
        )}
      </AnimatePresence>
    </>
  )
}
