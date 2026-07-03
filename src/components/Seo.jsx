// Seo.jsx — per-page <title> + meta + Open Graph + Twitter + JSON-LD schema
// via react-helmet-async.
// Usage in a page:  <Seo route="/secrets" />
// Homepage also emits WebSite/SearchAction + BreadcrumbList schema.
// Override inline if needed: <Seo title="…" description="…" canonical="…" image="…" />

import { Helmet } from 'react-helmet-async'
import { seoByRoute, SITE_URL, OG_IMAGE } from '../seo/SeoConfig'

export default function Seo({ route, title, description, canonical, image }) {
  const cfg = (route && seoByRoute[route]) || {}
  const finalTitle = title || cfg.title || 'OpsMx Active Defense — Active Defense & Remediation Platform'
  const finalDesc = description || cfg.description || 'OpsMx Active Defense protects and remediates risk across software, AI, supply chains, cloud, runtime, and operations.'
  const finalCanonical = canonical || (route ? `${SITE_URL}${route}` : SITE_URL)
  const finalImage = image || cfg.ogImage || OG_IMAGE
  const isHome = route === '/'

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: 'OpsMx',
    description: 'OpsMx Active Defense & Remediation Platform',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?s={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    ],
  }

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OpsMx" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={finalImage} />

      {/* Homepage-only structured data */}
      {isHome && (
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      )}
      {isHome && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  )
}
