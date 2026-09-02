import {
  Package, Target, Code2, Shield, Cloud, BarChart3, TrendingDown,
  GitBranch, Bot, Box, Globe, FileCheck, Lock, Zap,
  GitMerge, Settings, AlertTriangle, CheckSquare, Microscope,
  AlertCircle, Radio, Sparkles,
} from 'lucide-react'

// Badge config
export const BADGES = {
  featured:    { label: 'Featured',    bg: 'bg-cyan-500/15',    text: 'text-cyan-400',    border: 'border-cyan-500/30' },
  popular:     { label: 'Popular',     bg: 'bg-violet-500/15',  text: 'text-violet-400',  border: 'border-violet-500/30' },
  remediation: { label: 'Remediation', bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  new:         { label: 'New',         bg: 'bg-pink-500/15',    text: 'text-pink-400',    border: 'border-pink-500/30' },
}

// NOTE:
//  - `menuHidden: true` hides an item from the Solutions MEGA-MENU only (kept in
//    allSolutions so the /solutions landing page + routing are unchanged).
//  - `menu` is the short phrase shown in the mega-menu. Full `desc` is kept for
//    the /solutions landing page. The menu no longer renders icons or full desc.

// ─── Column 1: Security & Compliance ─────────────────────────────────────────

export const securitySolutions = [
  {
    slug: 'regulatory-bom-reporting-suite',
    title: 'Regulatory BOM Reporting Suite',
    icon: FileCheck,
    color: '#22d3ee',
    desc: 'Generate every BOM, connect risk to remediation, and continuously produce audit-ready compliance evidence.',
    menu: 'Audit-ready BOM compliance',
    badge: 'featured',
    href: '/solution-briefs/regulatory-bom-reporting-suite',
  },
  {
    slug: 'x-bom',
    title: 'X-BOM',
    icon: Package,
    color: '#a78bfa',
    desc: 'Complete software supply chain visibility: SBOM, SaaS, APIs, AI, cryptography, pipelines, and infrastructure.',
    menu: 'Full supply chain visibility',
    badge: 'featured',
    href: '/x-bom',
  },
  {
    slug: 'supply-chain-security',
    title: 'Supply Chain Security',
    icon: Package,
    color: '#a78bfa',
    desc: 'Dependency intelligence, OSS risk management, and software supply chain threat detection.',
    badge: null,
    href: '/x-bom',
    menuHidden: true,
  },
  {
    slug: 'ai-penetration-testing',
    title: 'AI Penetration Testing',
    icon: Target,
    color: '#f472b6',
    desc: 'AI-assisted attack simulation, DAST, API testing, validation, and remediation guidance.',
    menu: 'AI-assisted attack simulation',
    badge: 'featured',
    href: '/ai-penetration-testing',
  },
  {
    slug: 'ai-code-security-remediation',
    title: 'AI Code Security & Remediation',
    icon: Code2,
    color: '#22d3ee',
    desc: 'Secure developer-written and AI-generated code with automated fix guidance.',
    menu: 'Secure AI-generated code',
    badge: 'featured',
    href: '/ai-security',
  },
  {
    slug: 'application-security-testing',
    title: 'Application Security Testing',
    icon: Shield,
    color: '#60a5fa',
    desc: 'SAST, DAST, SCA, secrets, API security, and application risk analysis.',
    href: '/static-application-security-testing',
    menuHidden: true,
  },
  {
    slug: 'cloud-kubernetes-security',
    title: 'Cloud & Kubernetes Security',
    icon: Cloud,
    color: '#34d399',
    desc: 'CSPM, Kubernetes security, IaC, container risk, and cloud remediation.',
    href: '/cloud-remediation',
    menuHidden: true,
  },
  {
    slug: 'open-source-security',
    title: 'Open Source Security',
    icon: GitBranch,
    color: '#a78bfa',
    desc: 'Identify and remediate open source dependency, license, and package risk.',
    href: '/dependency-intelligence',
    menuHidden: true,
  },
  {
    slug: 'git-security-posture',
    title: 'Git Security Posture',
    icon: GitBranch,
    color: '#22d3ee',
    desc: 'Secure Git repositories against vulnerabilities, secrets exposure, and misconfigurations.',
    menu: 'Harden your Git repositories',
    href: '/git-security-posture',
  },
  {
    slug: 'container-security',
    title: 'Container Security',
    icon: Box,
    color: '#60a5fa',
    desc: 'Analyze container images, packages, runtime exposure, and artifact risk.',
    href: '/workload-security',
    menuHidden: true,
  },
  {
    slug: 'api-security',
    title: 'API Security',
    icon: Globe,
    color: '#34d399',
    desc: 'Discover, test, and remediate API vulnerabilities and exposure.',
    href: '/api-security',
    menuHidden: true,
  },
  {
    slug: 'vulnerability-reachability-prioritization',
    title: 'Vulnerability Reachability & Prioritization',
    icon: BarChart3,
    color: '#fbbf24',
    desc: 'Prioritize vulnerabilities using reachability, exploitability, business impact, and ownership.',
    href: '/threat-correlation',
    menuHidden: true,
  },
  {
    slug: 'compliance-automation',
    title: 'Compliance Automation',
    icon: FileCheck,
    color: '#fbbf24',
    desc: 'Automate evidence, policies, audit trails, and compliance reporting.',
    menu: 'Automate audit evidence',
    href: '/audit-reporting',
  },
  {
    slug: 'security-policy-enforcement',
    title: 'Security Policy Enforcement',
    icon: Lock,
    color: '#f87171',
    desc: 'Enforce policy gates across code, pipelines, cloud, and deployments.',
    href: '/secrets',
    menuHidden: true,
  },
]

// ─── Column 2: Fix & Remediate ───────────────────────────────────────────────

export const remediationSolutions = [
  {
    slug: 'zero-day-containment-and-remediation',
    title: 'Zero-Day Containment & Remediation',
    icon: AlertTriangle,
    color: '#f87171',
    desc: 'Map impact radius, stop vulnerable software in motion, and coordinate verified remediation under time pressure.',
    menu: 'Contain and fix zero-days fast',
    badge: 'featured',
    href: '/solutions/zero-day-containment-and-remediation',
  },
  {
    slug: 'code-vulnerability-remediation',
    title: 'Code Vulnerability Remediation',
    icon: Code2,
    color: '#22d3ee',
    desc: 'Generate code fixes, dependency upgrades, and secure pull requests.',
    menu: 'Auto-generate code fixes',
    badge: 'remediation',
    href: '/opsmx/fix-risk#code-remediation', // unhidden + repointed off /ai-security (was a duplicate)
  },
  {
    slug: 'binary-artifact-remediation',
    title: 'Binary Artifact Remediation',
    icon: Box,
    color: '#a78bfa',
    desc: 'Remediate risks in containers, packages, images, and deployed artifacts.',
    href: '/workload-security',
    menuHidden: true,
  },
  {
    slug: 'cloud-remediation',
    title: 'Cloud Remediation',
    icon: Cloud,
    color: '#34d399',
    desc: 'Fix cloud misconfigurations, posture issues, exposure, and identity risks.',
    menu: 'Fix cloud misconfigurations',
    href: '/cloud-remediation',
  },
  {
    slug: 'kubernetes-remediation',
    title: 'Kubernetes Remediation',
    icon: GitMerge,
    color: '#60a5fa',
    desc: 'Remediate Kubernetes misconfigurations, workload risks, drift, and operational issues.',
    menu: 'Remediate Kubernetes risk',
    href: '/opsmx/fix-risk#kubernetes-remediation',
  },
  {
    slug: 'devops-remediation',
    title: 'DevOps Remediation',
    icon: Settings,
    color: '#fbbf24',
    desc: 'Fix CI/CD, GitOps, release, deployment, and operational workflow issues.',
    menu: 'Fix CI/CD and delivery issues',
    href: '/operational-remediation',
  },
  {
    slug: 'vulnerability-backlog-reduction',
    title: 'Vulnerability Backlog Reduction',
    icon: TrendingDown,
    color: '#f472b6',
    desc: 'Reduce critical vulnerability queues with context-aware remediation workflows.',
    menu: 'Clear the vulnerability queue',
    href: '/threat-correlation',
  },
]

// ─── Column 3: Ship & Operate Safely ─────────────────────────────────────────

export const operationsSolutions = [
  {
    slug: 'agentic-change-guardrails',
    title: 'Agentic Change Guardrails',
    icon: Sparkles,
    color: '#a78bfa',
    desc: 'Assess security, operational, and business impact of AI agent, code, cloud, infrastructure, and deployment changes before execution.',
    menu: 'Guardrail AI-driven changes',
    badge: 'new',
    href: '/change-risk',
  },
  {
    slug: 'devsecops',
    title: 'DevSecOps',
    icon: Zap,
    color: '#60a5fa',
    desc: 'Integrate security throughout CI/CD pipelines with continuous scanning, policy enforcement, and automated remediation.',
    menu: 'Security across CI/CD',
    href: '/platform', // PHASE 2: needs a dedicated DevSecOps solution page
  },
  {
    slug: 'devops-diagnostics',
    title: 'DevOps Diagnostics',
    icon: Microscope,
    color: '#f472b6',
    desc: 'Diagnose failed deployments, pipeline issues, Kubernetes problems, and operational failures.',
    menu: 'Diagnose failed deployments',
    href: '/root-cause-analysis',
  },
  {
    slug: 'release-risk-assessment',
    title: 'Release Risk Assessment',
    icon: BarChart3,
    color: '#fbbf24',
    desc: 'Assess release risk using security, operational, dependency, and business context.',
    href: '/deployment-verification',
    menuHidden: true,
  },
  {
    slug: 'deployment-verification',
    title: 'Deployment Verification',
    icon: CheckSquare,
    color: '#34d399',
    desc: 'Validate deployments before, during, and after release.',
    menu: 'Verify every release',
    href: '/deployment-verification',
  },
  {
    slug: 'gitops-governance',
    title: 'GitOps Governance',
    icon: GitBranch,
    color: '#60a5fa',
    desc: 'Govern Argo CD, GitOps workflows, deployment policies, and approvals.',
    menu: 'Govern Argo CD and GitOps',
    href: '/operational-remediation',
  },
  {
    slug: 'incident-diagnostics',
    title: 'Incident Diagnostics',
    icon: AlertCircle,
    color: '#f87171',
    desc: 'Determine root cause, affected services, blast radius, and remediation paths.',
    menu: 'Root cause and blast radius',
    href: '/incident-diagnostics',
  },
]

// All solutions flat list for routing (includes menuHidden items — landing page unaffected)
export const allSolutions = [
  ...securitySolutions,
  ...remediationSolutions,
  ...operationsSolutions,
]

// Slugs called out for the "Featured" strip on /solutions
export const FEATURED_SLUGS = [
  'zero-day-containment-and-remediation',
  'x-bom-supply-chain-security',
  'ai-penetration-testing',
  'ai-code-security-remediation',
  'code-vulnerability-remediation',
  'agentic-change-guardrails',
]

export const columns = [
  {
    id: 'security',
    heading: 'Security & Compliance',
    desc: 'Find, assess, and govern security and compliance risk across modern software systems.',
    color: '#60a5fa',
    items: securitySolutions,
  },
  {
    id: 'remediation',
    heading: 'Fix & Remediate',
    desc: 'Turn security and operational findings into safe, verified fixes.',
    color: '#34d399',
    items: remediationSolutions,
    ribbon: 'Automated remediation · Verified fixes · Human approvals · Audit trails',
    ribbonLabel: 'Platform capabilities',
  },
  {
    id: 'operations',
    heading: 'Ship & Operate Safely',
    desc: 'Ship releases and run operations with AI guardrails and verified fixes.',
    color: '#fbbf24',
    items: operationsSolutions,
  },
]
