import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import announcement from '../data/announcement'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check if announcement is enabled
    if (!announcement.enabled) {
      setIsVisible(false)
      return
    }

    // Check localStorage for dismissal
    if (announcement.dismissible) {
      const dismissed = localStorage.getItem('announcement-dismissed')
      if (dismissed) {
        setIsVisible(false)
        return
      }
    }

    setIsVisible(true)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    if (announcement.dismissible) {
      const expirationDate = new Date()
      expirationDate.setDate(expirationDate.getDate() + 7)
      localStorage.setItem('announcement-dismissed', new Date().getTime().toString())
    }
  }

  if (!isMounted || !isVisible) {
    return null
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 w-full glass border-b border-white/5"
        style={{ height: '44px' }}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-4">
          {/* Left: Badge + Message */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Badge */}
            <div className="flex-shrink-0 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                {announcement.badge}
              </span>
            </div>

            {/* Message */}
            <p className="text-sm font-medium text-slate-300 truncate lg:truncate-none hover:text-slate-100 transition-colors">
              {announcement.message}
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={announcement.buttonLink}
              target={announcement.openInNewTab ? '_blank' : '_self'}
              rel={announcement.openInNewTab ? 'noopener noreferrer' : ''}
              className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/30 hover:text-cyan-300 transition-colors duration-150 border border-cyan-500/30 whitespace-nowrap"
              aria-label={`${announcement.buttonText}: ${announcement.message}`}
            >
              {announcement.buttonText}
            </a>

            {/* Dismiss Button */}
            {announcement.dismissible && (
              <button
                onClick={handleDismiss}
                className="p-1 text-slate-600 hover:text-slate-400 rounded-full transition-colors duration-150"
                aria-label="Dismiss announcement"
                title="Dismiss for 7 days"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: '44px' }} />
    </>
  )
}
