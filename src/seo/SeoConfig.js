// SeoConfig.js — per-page SEO for the 19 new-stack product pages.
// Canonical points to the PRODUCTION URL (www.opsmx.com/<route>), where these
// pages live once the Worker serves them at the root domain.
// Titles kept < 60 chars; descriptions ~150-160 chars.

export const SITE_URL = 'https://www.opsmx.com'

export const seoByRoute = {
  // ── Code & AI ──────────────────────────────────────────────
  '/secrets': {
    title: 'Secrets Detection & Management for CI/CD | OpsMx',
    description: 'Detect, prioritize, and remediate exposed secrets across code, pipelines, and containers. OpsMx surfaces leaked credentials before they reach production.',
  },
  '/ai-security': {
    title: 'AI Security: Secure AI-Generated Code & Models | OpsMx',
    description: 'Secure AI-generated code, LLMs, and AI systems end to end. OpsMx detects and remediates risk across AI-assisted development and deployed models.',
  },
  '/api-security': {
    title: 'API Security Testing & Protection | OpsMx',
    description: 'Discover, test, and secure your APIs against vulnerabilities and misconfigurations. OpsMx delivers continuous API security across the software lifecycle.',
  },
  '/penetration-testing': {
    title: 'Automated Penetration Testing | OpsMx',
    description: 'Continuous, automated penetration testing that finds exploitable vulnerabilities before attackers do. OpsMx prioritizes real risk over noise.',
  },

  // ── Supply Chain ───────────────────────────────────────────
  '/x-bom': {
    title: 'X-BOM: Unified Software Bill of Materials | OpsMx',
    description: 'Go beyond SBOM with X-BOM — a unified bill of materials across code, AI, containers, and cloud. OpsMx delivers complete software supply chain visibility.',
  },
  '/ai-bom': {
    title: 'AI-BOM: AI Bill of Materials for ML Systems | OpsMx',
    description: 'Inventory and govern every model, dataset, and dependency in your AI systems with OpsMx AI-BOM — full transparency for AI supply chain security.',
  },
  '/dependency-intelligence': {
    title: 'Dependency Intelligence & Risk Analysis | OpsMx',
    description: 'Prioritize open-source dependency risk with reachability and exploitability context. OpsMx cuts through SCA noise to the vulnerabilities that matter.',
  },
  '/license-risk': {
    title: 'Open Source License Risk Management | OpsMx',
    description: 'Identify and manage open-source license compliance risk across your dependencies. OpsMx flags conflicting and restrictive licenses automatically.',
  },
  '/provenance': {
    title: 'Software Provenance & Build Integrity | OpsMx',
    description: 'Verify the origin and integrity of every artifact with OpsMx provenance. Prove where your software came from and detect tampering across the pipeline.',
  },
  '/audit-reporting': {
    title: 'Security & Compliance Audit Reporting | OpsMx',
    description: 'Generate audit-ready security and compliance reports on demand. OpsMx automates evidence collection across frameworks and the software lifecycle.',
  },

  // ── Cloud & Runtime ────────────────────────────────────────
  '/cluster-security': {
    title: 'Kubernetes Cluster Security | OpsMx',
    description: 'Continuously secure Kubernetes clusters against misconfigurations and threats. OpsMx assesses cluster posture and prioritizes the risk that matters.',
  },
  '/workload-security': {
    title: 'Kubernetes Workload Security | OpsMx',
    description: 'Protect running workloads with continuous scanning and runtime context. OpsMx detects and prioritizes workload risk across your Kubernetes environments.',
  },
  '/threat-correlation': {
    title: 'Threat Correlation & Runtime Risk | OpsMx',
    description: 'Correlate signals across code, cloud, and runtime to surface real, exploitable threats. OpsMx connects the dots attackers actually exploit.',
  },
  '/cloud-remediation': {
    title: 'AI-Driven Cloud Remediation | OpsMx',
    description: 'Automatically remediate cloud misconfigurations and risks with AI-guided fixes. OpsMx closes cloud security gaps faster with less manual effort.',
  },

  // ── Operations ─────────────────────────────────────────────
  '/change-risk': {
    title: 'Deployment Change Risk Analysis | OpsMx',
    description: 'Assess the risk of every release before it ships. OpsMx scores change risk using code, context, and history to prevent bad deployments.',
  },
  '/deployment-verification': {
    title: 'Continuous Deployment Verification | OpsMx',
    description: 'Automatically verify every deployment for safety and performance. OpsMx catches regressions and bad releases before they impact your users.',
  },
  '/root-cause-analysis': {
    title: 'AI Root Cause Analysis for Deployments | OpsMx',
    description: 'Pinpoint the root cause of incidents and failed deployments in minutes. OpsMx uses AI to trace issues to their source across the pipeline.',
  },
  '/incident-diagnostics': {
    title: 'AI Incident Diagnostics | OpsMx',
    description: 'Diagnose production incidents faster with AI-driven analysis across logs, metrics, and deployments. OpsMx accelerates mean time to resolution.',
  },
  '/operational-remediation': {
    title: 'Operational Remediation & Auto-Fix | OpsMx',
    description: 'Remediate operational issues with AI-guided and automated workflows. OpsMx resolves problems across deployments and infrastructure faster.',
  },
}
