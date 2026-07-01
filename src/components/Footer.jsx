// Footer.jsx — OpsMx merged footer
// New-stack product pillars (React Router <Link>) + WordPress columns (<a>) + orphan recovery.
// ---------------------------------------------------------------------------
// CONFIRMED (Ayush): all 19 new-stack product pages go live WITH the homepage and are
// served by the Worker -> product links point to the new-stack ROUTES (no 404 risk).
//
// LINK TYPES (do not mix these up):
//   - internal:true  -> React Router <Link to="/route">. Renders a crawlable <a href>,
//     and auto-applies the /opsmx/ basename on staging (and "/" at production root).
//     REQUIRED for the 19 new-stack routes — a plain <a href="/secrets"> would drop the
//     /opsmx/ prefix on staging and 404.
//   - internal:false -> plain <a href="https://www.opsmx.com/..."> (full load to WordPress).
//     REQUIRED for WP links — a <Link> would try to client-route inside the SPA and 404.
//
// SEO-SAFE ACCORDION: desktop shows all columns open; mobile collapses into tappable
//   sections. Every link is ALWAYS in the DOM — the accordion only toggles CSS visibility
//   (hidden/block). Never switch to `{open && <ul>}`: that removes links from the DOM and
//   kills the internal-linking benefit. Links stay in view-source whether open or closed.
//
// MUST render inside the Router (it uses <Link>). It already is (part of the app layout).
// ---------------------------------------------------------------------------

import { useState } from "react";
import { Link } from "react-router-dom";

// ---- PRODUCT: the 19 new-stack pages, grouped by the 4 homepage pillars (internal routes)
const productPillars = [
  {
    title: "Code & AI",
    links: [
      { label: "Secrets", to: "/secrets" },
      { label: "AI Security", to: "/ai-security" },
      { label: "API Security", to: "/api-security" },
      { label: "Penetration Testing", to: "/penetration-testing" },
    ],
  },
  {
    title: "Supply Chain",
    links: [
      { label: "XBOM", to: "/xbom" },
      { label: "AI-BOM", to: "/ai-bom" },
      { label: "Dependency Intelligence", to: "/dependency-intelligence" },
      { label: "License Risk", to: "/license-risk" },
      { label: "Provenance", to: "/provenance" },
      { label: "Audit Reporting", to: "/audit-reporting" },
    ],
  },
  {
    title: "Cloud & Runtime",
    links: [
      { label: "Cluster Security", to: "/cluster-security" },
      { label: "Workload Security", to: "/workload-security" },
      { label: "Threat Correlation", to: "/threat-correlation" },
      { label: "Cloud Remediation", to: "/cloud-remediation" },
    ],
  },
  {
    title: "Operations",
    links: [
      { label: "Change Risk", to: "/change-risk" },
      { label: "Deployment Verification", to: "/deployment-verification" },
      { label: "Root Cause Analysis", to: "/root-cause-analysis" },
      { label: "Incident Diagnostics", to: "/incident-diagnostics" },
      { label: "Operational Remediation", to: "/operational-remediation" },
    ],
  },
];

// ---- WORDPRESS columns (existing pages that stay on WP; plain <a href>)
const wpColumns = [
  {
    title: "Use Cases",
    links: [
      { label: "AI-Driven Operations and Diagnostics", href: "https://www.opsmx.com/ai-driven-operations-and-diagnostics/" },
      { label: "Apps and AI Workflows", href: "https://www.opsmx.com/apps-and-ai-workflows/" },
      { label: "Policy & Governance for Software & AI", href: "https://www.opsmx.com/secure-continuous-delivery/isd-for-argo/policy-and-governance/" },
      { label: "GitOps: Argo CD & Support", href: "https://www.opsmx.com/secure-continuous-delivery/isd-for-argo/" },
      { label: "CD: Spinnaker & Support", href: "https://www.opsmx.com/secure-continuous-delivery/isd-for-spinnaker/" },
      { label: "Internal Developer Portal (IDP)", href: "https://www.opsmx.com/internal-developer-portal/" },
      { label: "SBOM Compliance for SEBI CSCRF", href: "https://www.opsmx.com/sebi-cscrf-sbom/" },
      { label: "Secure Software Delivery with DevSecOps", href: "https://www.opsmx.com/devsecops/" },
      { label: "Secure GitOps for Regulated Pipelines", href: "https://www.opsmx.com/secure-and-compliant-gitops/" },
      { label: "Securing AI-Generated Code", href: "https://www.opsmx.com/secure-ai-generated-code/" },
      { label: "Securing AI Models", href: "https://www.opsmx.com/secure-ai-models-llms/" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Blogs", href: "https://www.opsmx.com/blog/" },
      { label: "Webinars", href: "https://www.opsmx.com/webinars/" },
      { label: "eBooks & Datasheets", href: "https://www.opsmx.com/guides-datasheets/" },
      { label: "Customer Case Studies", href: "https://www.opsmx.com/customer-case-study/" },
      { label: "Video Hub", href: "https://www.opsmx.com/videos/" },
      { label: "Docs", href: "https://docs.opsmx.com/", external: true },
      { label: "What is ASPM?", href: "https://www.opsmx.com/what-is-application-security-posture-management/" },
      { label: "What is DevSecOps?", href: "https://www.opsmx.com/what-is-devsecops/" },
      { label: "What is GitOps?", href: "https://www.opsmx.com/what-is-gitops/" },
      { label: "What is Argo?", href: "https://www.opsmx.com/what-is-argocd/" },
      { label: "What is Spinnaker?", href: "https://www.opsmx.com/what-is-spinnaker/" },
      { label: "What is Continuous Delivery?", href: "https://www.opsmx.com/what-is-continuous-delivery/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Leadership", href: "https://www.opsmx.com/company/#aboutopsmx" },
      { label: "Investors", href: "https://www.opsmx.com/company/#investors" },
      { label: "Press Releases", href: "https://www.opsmx.com/news/" },
      { label: "Partners", href: "https://www.opsmx.com/opsmx-partner-program/" },
      { label: "Careers", href: "https://www.opsmx.com/careers/" },
      { label: "Contact Us", href: "https://www.opsmx.com/contact-us/" },
      { label: "Pricing", href: "https://www.opsmx.com/pricing/" },
    ],
  },
  {
    // ORPHAN-RECOVERY — high-traffic pages NOT in the WP footer. Homepage juice = discovery.
    // Picked by real GSC clicks (16-mo). Keep focused; don't expand to the full 358.
    title: "Popular Resources",
    links: [
      { label: "3 Steps: GitOps for AWS ECS (Spinnaker SaaS)", href: "https://www.opsmx.com/webinars/3-easy-steps-to-implement-gitops-for-aws-ecs-using-spinnaker-saas/" },
      { label: "Argo Sandbox — Try Argo Now", href: "https://www.opsmx.com/secure-continuous-delivery/argo-sandbox/" },
      { label: "Tutorials", href: "https://www.opsmx.com/tutorials/" },
      { label: "Spinnaker as a Service", href: "https://www.opsmx.com/spinnaker-as-a-service-overview/" },
      { label: "Autopilot Overview", href: "https://www.opsmx.com/autopilot-overview/" },
      { label: "NodeJSScan Integration", href: "https://www.opsmx.com/integrations-tool/nodejsscan/" },
      { label: "AppSec Maturity Assessment", href: "https://www.opsmx.com/application-security-maturity-assessment/" },
      { label: "OpsMx Secures CerraCap Investment", href: "https://www.opsmx.com/in-the-news/opsmx-secures-strategic-investment-from-cerracap-ventures-to-enhance-devsecops/" },
    ],
  },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/opsmx" },
  { label: "X", href: "https://twitter.com/ops_mx" },
  { label: "YouTube", href: "https://www.youtube.com/c/OpsMx" },
  { label: "Slack", href: "https://ssdcommunity.slack.com" },
];

function ChevronDown({ className }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// Renders <Link> for internal new-stack routes, <a> for WordPress/external.
function FooterLink({ link }) {
  if (link.to) {
    return (
      <Link to={link.to} className="text-sm text-slate-400 hover:text-white transition-colors">
        {link.label}
      </Link>
    );
  }
  return (
    <a
      href={link.href}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-sm text-slate-400 hover:text-white transition-colors"
    >
      {link.label}
    </a>
  );
}

function FooterColumn({ title, links, open, onToggle }) {
  return (
    <div className="border-b border-white/5 lg:border-0 py-3 lg:py-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between text-left lg:pointer-events-none lg:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400/50 rounded"
      >
        <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-300">{title}</h4>
        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform lg:hidden ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Links ALWAYS in the DOM — CSS-only visibility toggle (crawlable in view-source). */}
      <ul className={`${open ? "block" : "hidden"} lg:block mt-3 lg:mt-4 space-y-2.5`}>
        {links.map((link) => (
          <li key={(link.to || link.href) + link.label}>
            <FooterLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [openCol, setOpenCol] = useState(null); // mobile accordion state only
  const toggle = (title) => setOpenCol((cur) => (cur === title ? null : title));
  const allColumns = [...productPillars, ...wpColumns]; // 4 new-stack + 4 WP = 8 blocks

  return (
    <footer className="relative bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* 8 column-blocks: 4 product pillars (new-stack) + 4 WP columns.
            Desktop: 4-wide grid -> 2 tidy rows. Mobile: stacked accordion. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0 lg:gap-y-10 mb-8">
          {allColumns.map((col) => (
            <FooterColumn
              key={col.title}
              title={col.title}
              links={col.links}
              open={openCol === col.title}
              onToggle={() => toggle(col.title)}
            />
          ))}
        </div>

        {/* Subscribe + Talk to an Expert */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8 border-t border-white/5">
          <div className="flex items-center gap-3 max-w-md w-full">
            <input
              type="email"
              placeholder="Business email"
              aria-label="Subscribe with your business email"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/40"
            />
            <button className="text-sm font-semibold px-4 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <a
            href="https://www.opsmx.com/talk-to-an-application-security-expert/"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-electric-500 text-white hover:from-cyan-400 hover:to-electric-400 transition-all whitespace-nowrap text-center"
          >
            Talk to an Expert
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-6 border-t border-white/5 text-xs text-slate-600">
          <span>SOC 2 Type II</span>
          <span>ISO 27001</span>
          <span>GDPR Ready</span>
          <span>CD Foundation</span>
          <span>CNCF</span>
          <span>Linux Foundation</span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <Link to="/" className="inline-flex items-center">
            <img
              src="/opsmx/logo/OpsMx-Logo-White.webp"
              alt="OpsMx logo"
              height="28"
              style={{ height: "28px", width: "auto" }}
            />
          </Link>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500">
            <a href="https://www.opsmx.com/privacypolicy/" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="https://www.opsmx.com/terms/" className="hover:text-slate-300 transition-colors">Terms</a>
            <a href="https://www.opsmx.com/sitemap_index.xml" className="hover:text-slate-300 transition-colors">Sitemap</a>
            {social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
                {s.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} OpsMx. Active Defense &amp; Remediation Platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
