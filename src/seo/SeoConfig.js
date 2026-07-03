// SeoConfig.js — per-page SEO for the 19 new-stack product pages.
// Canonical points to the PRODUCTION URL (www.opsmx.com/<route>), where these
// pages live once the Worker serves them at the root domain.
// Titles kept < 60 chars; descriptions ~150-160 chars.

export const SITE_URL = 'https://www.opsmx.com'
// Default social share image (1200x630). Replace with a real OpsMx OG image URL.
export const OG_IMAGE = 'https://www.opsmx.com/wp-content/uploads/opsmx-og-1200x630.png'

export const seoByRoute = {
  // ── Homepage ───────────────────────────────────────────────
  '/': {
    title: 'OpsMx Active Defense — Active Defense & Remediation Platform',
    description: 'Continuously detect, diagnose, prioritize, remediate, verify, and govern risks across software, AI, supply chains, cloud, runtime, and operations.',
  },
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
  // ── Product hub & additional product pages ────────────────
  '/platform': {
    title: 'OpsMx Active Defense Platform Overview | OpsMx',
    description: 'The unified platform behind Active Defense — detect, diagnose, prioritize, remediate, verify, and govern risk across code, AI, supply chain, cloud, and ops.',
  },
  '/static-application-security-testing': {
    title: 'SAST That Drives Remediation | OpsMx',
    description: 'Static application security testing that goes beyond findings to fixes. OpsMx prioritizes and remediates real code vulnerabilities, not just flags them.',
  },
  '/git-security-posture': {
    title: 'Git Security Posture Management | OpsMx',
    description: 'Secure your Git posture across repos, branches, and workflows. OpsMx detects misconfigurations, exposed secrets, and access risks before they are exploited.',
  },
  '/ai-penetration-testing': {
    title: 'Continuous AI Penetration Testing | OpsMx',
    description: 'Continuously pen-test AI systems for prompt injection, jailbreaks, and unsafe behavior. OpsMx finds exploitable AI risks before attackers do.',
  },

  // ── Solution briefs ───────────────────────────────────────
  '/solution-briefs/advanced-bom-reporting': {
    title: 'Beyond SBOM: CBOM, DBOM, QBOM & HBOM | OpsMx',
    description: 'Go beyond SBOM with advanced BOM reporting — CBOM, DBOM, QBOM, and HBOM. OpsMx delivers complete, regulator-ready software supply chain transparency.',
  },
  '/solution-briefs/why-opsmx-xbom': {
    title: 'Why OpsMx X-BOM Reporting Is Different | OpsMx',
    description: 'See what sets OpsMx X-BOM apart — unified bill of materials across code, AI, containers, and cloud with deeper context than traditional SBOM tools.',
  },
  '/solution-briefs/regulatory-bom-reporting-suite': {
    title: 'Regulatory BOM Reporting Suite | OpsMx',
    description: 'Meet regulatory BOM requirements with the OpsMx reporting suite. Generate audit-ready bill-of-materials evidence across frameworks and mandates.',
  },

  // ── Hub / company / resource pages ────────────────────────
  '/solutions': {
    title: 'Solutions for Active Defense & Remediation | OpsMx',
    description: 'Explore OpsMx solutions for securing and remediating risk across software, AI, supply chains, cloud, runtime, and operations — from detection to verified fix.',
  },
  '/videos': {
    title: 'Video Hub | OpsMx',
    description: 'Watch OpsMx demos, walkthroughs, and expert sessions on application security, remediation, DevSecOps, and AI security across the software lifecycle.',
  },
  '/case-studies': {
    title: 'Customer Case Studies | OpsMx',
    description: 'See how leading enterprises use OpsMx to secure delivery, remediate risk, and accelerate DevSecOps. Real results from real customers.',
  },
  '/company': {
    title: 'About OpsMx | Active Defense & Remediation',
    description: 'Learn about OpsMx — our mission, leadership, and investors building the Active Defense and remediation platform for modern software and AI systems.',
  },
  '/contact': {
    title: 'Contact OpsMx | Talk to Our Team',
    description: 'Get in touch with OpsMx. Talk to our team about securing and remediating risk across your software, AI, supply chain, cloud, and operations.',
  },
  '/pricing': {
    title: 'Pricing | OpsMx Active Defense',
    description: 'Modular and affordable pricing for OpsMx Active Defense. Choose the capabilities you need to detect, remediate, and govern risk across the software lifecycle.',
  },
}
