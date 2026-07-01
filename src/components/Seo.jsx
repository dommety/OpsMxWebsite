// Seo.jsx — per-page <title> + meta via react-helmet-async.
// Usage in a page:  <Seo route="/secrets" />
// (title/description come from SeoConfig; canonical is derived from the route.)
// You can also override inline: <Seo title="…" description="…" canonical="…" />

import { Helmet } from 'react-helmet-async'
import { seoByRoute, SITE_URL } from '../seo/SeoConfig'

export default function Seo({ route, title, description, canonical }) {
  const cfg = (route && seoByRoute[route]) || {}
  const finalTitle = title || cfg.title || 'OpsMx Active Defense — Active Defense & Remediation Platform'
  const finalDesc = description || cfg.description || 'OpsMx Active Defense protects and remediates risk across software, AI, supply chains, cloud, runtime, and operations.'
  const finalCanonical = canonical || (route ? `${SITE_URL}${route}` : SITE_URL)

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:site_name" content="OpsMx" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
    </Helmet>
  )
}
