/**
 * Announcement Bar Configuration
 *
 * Edit this file to change the promotional announcement that appears
 * at the top of every page. All content is read from this config.
 *
 * Set `enabled: false` to hide the announcement bar.
 */

export default {
  // Enable/disable the announcement bar
  enabled: true,

  // Badge label (e.g., "New", "Alert", "Limited Time")
  badge: 'New',

  // Main announcement message
  message: 'Download the OpsMx Regulatory BOM Reporting Solution Brief',

  // CTA button text
  buttonText: 'Download',

  // CTA button link (internal route or external URL)
  buttonLink: '/solution-briefs/regulatory-bom-reporting-suite',

  // Optional: Open link in new tab (true for external URLs)
  openInNewTab: false,

  // Optional: Dismissible for 7 days (set to false to always show)
  dismissible: true,
}

/**
 * EXAMPLE ANNOUNCEMENTS
 *
 * Webinar:
 * {
 *   badge: 'Webinar',
 *   message: 'Join our Webinar: Beyond SBOM — Every BOM. Every Regulation.',
 *   buttonText: 'Register',
 *   buttonLink: '/webinars/beyond-sbom',
 * }
 *
 * White Paper:
 * {
 *   badge: 'Paper',
 *   message: 'New: The State of Software Supply Chain Security Report',
 *   buttonText: 'Read Now',
 *   buttonLink: 'https://www.opsmx.com/whitepapers/supply-chain-2024',
 *   openInNewTab: true,
 * }
 *
 * Product Launch:
 * {
 *   badge: 'Launch',
 *   message: 'AI Penetration Testing is Here',
 *   buttonText: 'Learn More',
 *   buttonLink: '/ai-penetration-testing',
 * }
 *
 * Conference:
 * {
 *   badge: 'Event',
 *   message: 'See us at KubeCon North America — Booth 123',
 *   buttonText: 'Visit Booth',
 *   buttonLink: 'https://kccna.kubecon.io',
 *   openInNewTab: true,
 * }
 *
 * Limited Time Offer:
 * {
 *   badge: 'Offer',
 *   message: 'Start your free 30-day trial of OpsMx Active Defense',
 *   buttonText: 'Start Trial',
 *   buttonLink: '/trial',
 * }
 */
