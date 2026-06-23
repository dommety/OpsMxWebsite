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

// ─── Column 1: Security & Compliance ─────────────────────────────────────────

export const securitySolutions = [
  {
    slug: 'x-bom-supply-chain-security',
    title: 'X-BOM & Supply Chain Security',
    icon: Package,
    color: '#a78bfa',
    desc: 'SBOM, XBOM, AI-BOM, dependency intelligence, and software supply chain risk.',
    badge: 'featured',
    href: '/x-bom',
  },
  {
    slug: 'ai-penetration-testing',
    title: 'AI Penetration Testing',
    icon: Target,
    color: '#f472b6',
    desc: 'AI-assisted attack simulation, DAST, API testing, validation, and remediation guidance.',
    badge: 'featured',
  },
  {
    slug: 'ai-code-security-remediation',
    title: 'AI Code Security & Remediation',
    icon: Code2,
    color: '#22d3ee',
    desc: 'Secure developer-written and AI-generated code with automated fix guidance.',
    badge: 'featured',
  },
  {
    slug: 'application-security-testing',
    title: 'Application Security Testing',
    icon: Shield,
    color: '#60a5fa',
    desc: 'SAST, DAST, SCA, secrets, API security, and application risk analysis.',
  },
  {
    slug: 'cloud-kubernetes-security',
    title: 'Cloud & Kubernetes Security',
    icon: Cloud,
    color: '#34d399',
    desc: 'CSPM, Kubernetes security, IaC, container risk, and cloud remediation.',
  },
  {
    slug: 'open-source-security',
    title: 'Open Source Security',
    icon: GitBranch,
    color: '#a78bfa',
    desc: 'Identify and remediate open source dependency, license, and package risk.',
  },
  {
    slug: 'container-security',
    title: 'Container Security',
    icon: Box,
    color: '#60a5fa',
    desc: 'Analyze container images, packages, runtime exposure, and artifact risk.',
  },
  {
    slug: 'api-security',
    title: 'API Security',
    icon: Globe,
    color: '#34d399',
    desc: 'Discover, test, and remediate API vulnerabilities and exposure.',
  },
  {
    slug: 'vulnerability-reachability-prioritization',
    title: 'Vulnerability Reachability & Prioritization',
    icon: BarChart3,
    color: '#fbbf24',
    desc: 'Prioritize vulnerabilities using reachability, exploitability, business impact, and ownership.',
  },
  {
    slug: 'compliance-automation',
    title: 'Compliance Automation',
    icon: FileCheck,
    color: '#fbbf24',
    desc: 'Automate evidence, policies, audit trails, and compliance reporting.',
  },
  {
    slug: 'security-policy-enforcement',
    title: 'Security Policy Enforcement',
    icon: Lock,
    color: '#f87171',
    desc: 'Enforce policy gates across code, pipelines, cloud, and deployments.',
  },
]

// ─── Column 2: Active Defense & Remediation ──────────────────────────────────

export const remediationSolutions = [
  {
    slug: 'code-vulnerability-remediation',
    title: 'Code Vulnerability Remediation',
    icon: Code2,
    color: '#22d3ee',
    desc: 'Generate code fixes, dependency upgrades, and secure pull requests.',
    badge: 'remediation',
  },
  {
    slug: 'binary-artifact-remediation',
    title: 'Binary Artifact Remediation',
    icon: Box,
    color: '#a78bfa',
    desc: 'Remediate risks in containers, packages, images, and deployed artifacts.',
  },
  {
    slug: 'cloud-remediation',
    title: 'Cloud Remediation',
    icon: Cloud,
    color: '#34d399',
    desc: 'Fix cloud misconfigurations, posture issues, exposure, and identity risks.',
  },
  {
    slug: 'kubernetes-remediation',
    title: 'Kubernetes Remediation',
    icon: GitMerge,
    color: '#60a5fa',
    desc: 'Remediate Kubernetes misconfigurations, workload risks, drift, and operational issues.',
  },
  {
    slug: 'devops-remediation',
    title: 'DevOps Remediation',
    icon: Settings,
    color: '#fbbf24',
    desc: 'Fix CI/CD, GitOps, release, deployment, and operational workflow issues.',
  },
  {
    slug: 'vulnerability-backlog-reduction',
    title: 'Vulnerability Backlog Reduction',
    icon: TrendingDown,
    color: '#f472b6',
    desc: 'Reduce critical vulnerability queues with context-aware remediation workflows.',
  },
]

// ─── Column 3: Agentic Security & Operations ─────────────────────────────────

export const operationsSolutions = [
  {
    slug: 'agentic-change-guardrails',
    title: 'Agentic Change Guardrails',
    icon: Sparkles,
    color: '#a78bfa',
    desc: 'Assess security, operational, and business impact of AI agent, code, cloud, infrastructure, and deployment changes before execution.',
    badge: 'new',
  },
  {
    slug: 'devsecops',
    title: 'DevSecOps',
    icon: Zap,
    color: '#60a5fa',
    desc: 'Integrate security throughout CI/CD pipelines with continuous scanning, policy enforcement, and automated remediation.',
  },
  {
    slug: 'devops-diagnostics',
    title: 'DevOps Diagnostics',
    icon: Microscope,
    color: '#f472b6',
    desc: 'Diagnose failed deployments, pipeline issues, Kubernetes problems, and operational failures.',
  },
  {
    slug: 'release-risk-assessment',
    title: 'Release Risk Assessment',
    icon: BarChart3,
    color: '#fbbf24',
    desc: 'Assess release risk using security, operational, dependency, and business context.',
  },
  {
    slug: 'deployment-verification',
    title: 'Deployment Verification',
    icon: CheckSquare,
    color: '#34d399',
    desc: 'Validate deployments before, during, and after release.',
  },
  {
    slug: 'gitops-governance',
    title: 'GitOps Governance',
    icon: GitBranch,
    color: '#60a5fa',
    desc: 'Govern Argo CD, GitOps workflows, deployment policies, and approvals.',
  },
  {
    slug: 'incident-diagnostics',
    title: 'Incident Diagnostics',
    icon: AlertCircle,
    color: '#f87171',
    desc: 'Determine root cause, affected services, blast radius, and remediation paths.',
  },
]

// All solutions flat list for routing
export const allSolutions = [
  ...securitySolutions,
  ...remediationSolutions,
  ...operationsSolutions,
]

// Slugs called out for the "Featured" strip on /solutions
export const FEATURED_SLUGS = [
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
    heading: 'Active Defense & Remediation',
    desc: 'Turn security and operational findings into safe, verified fixes.',
    color: '#34d399',
    items: remediationSolutions,
    ribbon: 'Automated remediation · Verified fixes · Human approvals · Audit trails',
    ribbonLabel: 'Platform capabilities',
  },
  {
    id: 'operations',
    heading: 'Agentic Security & Operations',
    desc: 'Guardrail agentic changes, releases, deployments, and operational workflows.',
    color: '#fbbf24',
    items: operationsSolutions,
  },
]
