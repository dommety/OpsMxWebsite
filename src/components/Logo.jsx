import { Link } from 'react-router-dom'

/**
 * OpsMx official logo component.
 *
 * size:
 *   "sm"  — 28px tall  (mobile nav, footer compact)
 *   "md"  — 36px tall  (navbar default)
 *   "lg"  — 48px tall  (hero, footer brand section)
 *
 * href:  wraps in a Link when provided
 * className: additional wrapper classes
 *
 * To swap in the real PNG once available:
 *   Change LOGO_SRC below from the SVG path to "/logo/opsmx-logo.png"
 *   and everything updates site-wide automatically.
 */

// Prefix with Vite's BASE_URL so it works under "/" in dev and "/opsmx/" in prod
const LOGO_SRC = `${import.meta.env.BASE_URL}logo/OpsMx-Logo-White.webp`
const ALT     = 'OpsMx logo'

const heights = {
  sm: 28,
  md: 36,
  lg: 48,
}

export default function Logo({ size = 'md', href, className = '', onClick }) {
  const h = heights[size] ?? heights.md

  const img = (
    <img
      src={LOGO_SRC}
      alt={ALT}
      height={h}
      style={{
        height: h,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        maxWidth: '100%',
        // Ensure white text stays white on dark backgrounds
        filter: 'none',
      }}
      draggable={false}
    />
  )

  if (href) {
    return (
      <Link to={href} className={`inline-flex items-center ${className}`} onClick={onClick}>
        {img}
      </Link>
    )
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      {img}
    </span>
  )
}
