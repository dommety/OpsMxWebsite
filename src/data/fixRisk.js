/**
 * Fix Risk Platform Data
 * Configuration for agents, workflow, integrations, outcomes, and FAQ
 */

// Navigation configuration for Products mega menu
// Uses deep linking with hashes for better UX
// Can be updated to point to dedicated pages by changing href values
export const fixRiskNavigation = {
  title: 'Fix Risk',
  description: 'Use remediation agents and governed workflows to remediate issues and verify fixes.',
  href: '/opsmx/fix-risk',
  items: [
    {
      title: 'Code Remediation',
      href: '/opsmx/fix-risk#code-remediation',
      enabled: true,
    },
    {
      title: 'Dependency Remediation',
      href: '/opsmx/fix-risk#dependency-remediation',
      enabled: true,
    },
    {
      title: 'Cloud & IaC Remediation',
      href: '/opsmx/fix-risk#cloud-iac-remediation',
      enabled: true,
    },
    {
      title: 'Infrastructure & Network Remediation',
      href: '/opsmx/fix-risk#infrastructure-network-remediation',
      enabled: true,
    },
    {
      title: 'Kubernetes Remediation',
      href: '/opsmx/fix-risk#kubernetes-remediation',
      enabled: true,
    },
    {
      title: 'Operations & Delivery Remediation',
      href: '/opsmx/fix-risk#operations-delivery-remediation',
      enabled: true,
    },
    {
      title: 'Compliance Remediation',
      href: '/opsmx/fix-risk#compliance-remediation',
      enabled: true,
    },
  ],
}

export const remediationAgents = [
  {
    id: 'code-remediation',
    title: 'Code Remediation Agent',
    subtitle: 'Fix vulnerable application code with AI-assisted guidance and developer workflows.',
    color: '#22d3ee',
    capabilities: [
      'AI Code Fix Suggestions',
      'PR & Patch Automation',
      'Secure coding recommendations',
      'Root cause analysis',
      'Fix Verification',
    ],
    outcomes: [
      'Reduce developer investigation time',
      'Accelerate secure code fixes',
      'Improve developer productivity',
      'Verify remediation before release',
    ],
  },
  {
    id: 'binary-artifact',
    title: 'Binary Artifact Agent',
    subtitle: 'Remediate risk in dependencies, packages, containers, images, and software artifacts.',
    color: '#a78bfa',
    capabilities: [
      'Dependency Upgrade Fixes',
      'Dependency Update Agent',
      'Container Remediation',
      'SBOM / X-BOM Updates',
      'Integrity Verification',
    ],
    outcomes: [
      'Fix vulnerable dependencies faster',
      'Keep SBOM/X-BOM evidence current',
      'Reduce container and artifact exposure',
      'Improve software supply chain trust',
    ],
  },
  {
    id: 'cloud-remediation',
    title: 'Cloud Remediation Agent',
    subtitle: 'Fix cloud, Kubernetes, IaC, and infrastructure misconfigurations with governed remediation.',
    color: '#34d399',
    capabilities: [
      'Kubernetes Agent',
      'IaC Remediation',
      'Misconfiguration Fixes',
      'Cloud posture remediation',
      'Continuous Verification',
    ],
    outcomes: [
      'Reduce cloud exposure',
      'Fix Kubernetes misconfigurations',
      'Apply infrastructure-as-code remediation',
      'Verify posture continuously',
    ],
  },
  {
    id: 'devops-sre',
    title: 'DevOps & SRE Agent',
    subtitle: 'Remediate pipeline, release, policy, and operational risks across software delivery.',
    color: '#fbbf24',
    capabilities: [
      'Pipeline Security Fixes',
      'Policy-as-Code Updates',
      'Release guardrails',
      'Deployment verification',
      'Automated Rollback',
    ],
    outcomes: [
      'Improve release safety',
      'Reduce failed deployments',
      'Strengthen policy enforcement',
      'Accelerate operational recovery',
    ],
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes Agent',
    subtitle: 'Fix Kubernetes misconfigurations, policy violations, and workload security issues.',
    color: '#06b6d4',
    capabilities: [
      'Pod Security Policy Fixes',
      'RBAC Misconfiguration Remediation',
      'Network Policy Updates',
      'Resource Quota Enforcement',
      'Security Context Hardening',
    ],
    outcomes: [
      'Reduce Kubernetes attack surface',
      'Enforce security policies automatically',
      'Improve workload isolation',
      'Strengthen cluster security posture',
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance Agent',
    subtitle: 'Remediate compliance violations and generate audit evidence for regulatory requirements.',
    color: '#ec4899',
    capabilities: [
      'Policy Violation Remediation',
      'Audit Evidence Generation',
      'Compliance Control Mapping',
      'Exception Tracking & Justification',
      'Regulatory Report Generation',
    ],
    outcomes: [
      'Improve compliance posture',
      'Reduce audit findings',
      'Generate audit-ready evidence',
      'Streamline compliance reporting',
    ],
  },
]

export const workflowSteps = [
  { step: 1, label: 'Detect', desc: 'Import findings from scanners, SBOMs, cloud tools, pipelines, APIs, and runtime systems.' },
  { step: 2, label: 'Diagnose', desc: 'Identify root cause, affected assets, deployment context, and ownership.' },
  { step: 3, label: 'Prioritize', desc: 'Focus on exploitable, reachable, deployed, and business-critical risks.' },
  { step: 4, label: 'Recommend', desc: 'Generate AI-assisted remediation guidance, patches, configuration changes, or workflow actions.' },
  { step: 5, label: 'Approve', desc: 'Apply human review, policy guardrails, and change controls before remediation.' },
  { step: 6, label: 'Remediate', desc: 'Execute or coordinate fixes through agents, tickets, pull requests, pipelines, or cloud controls.' },
  { step: 7, label: 'Verify', desc: 'Retest and validate that the issue is resolved.' },
  { step: 8, label: 'Govern', desc: 'Preserve audit evidence, approvals, exceptions, and compliance reports.' },
]

export const governanceCards = [
  {
    id: 'human-approval',
    title: 'Human Approval',
    desc: 'Require review before code, infrastructure, or policy changes are applied.',
  },
  {
    id: 'policy-guardrails',
    title: 'Policy Guardrails',
    desc: 'Enforce what can be automatically fixed and what requires escalation.',
  },
  {
    id: 'change-controls',
    title: 'Change Controls',
    desc: 'Integrate remediation with CI/CD, ticketing, deployment, and release workflows.',
  },
  {
    id: 'exceptions',
    title: 'Exceptions',
    desc: 'Track risk acceptance, business justification, expiration, and revalidation.',
  },
  {
    id: 'audit-evidence',
    title: 'Audit Evidence',
    desc: 'Preserve who approved, what changed, when it changed, and how it was verified.',
  },
  {
    id: 'rollback-safety',
    title: 'Rollback Safety',
    desc: 'Support rollback and recovery when remediation impacts stability.',
  },
]

export const integrations = [
  'GitHub', 'GitLab', 'Bitbucket', 'Azure DevOps', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Argo CD', 'Spinnaker',
  'Jira', 'ServiceNow', 'Slack', 'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Helm',
  'SBOM tools', 'SAST', 'SCA', 'DAST', 'CSPM', 'CNAPP', 'SIEM',
]

export const problemCards = [
  {
    title: 'Too Many Findings',
    desc: 'Security teams are overwhelmed by alerts without enough remediation context.',
  },
  {
    title: 'Manual Fix Coordination',
    desc: 'Fixing risk requires developers, platform teams, DevOps, security, and approvals.',
  },
  {
    title: 'No Proof of Closure',
    desc: 'Closing a ticket does not prove the vulnerability, misconfiguration, or policy violation is actually fixed.',
  },
]

export const beforeAfterComparison = {
  before: [
    'Scanner finding',
    'Manual triage',
    'Unclear owner',
    'Generic recommendation',
    'Ticket closed manually',
    'No proof risk is gone',
  ],
  after: [
    'Root cause identified',
    'Owner mapped',
    'Agent recommends fix',
    'Human approves',
    'Patch/config change applied',
    'Retest verifies closure',
    'Audit evidence preserved',
  ],
}

export const whyOpsMxCards = [
  {
    id: 'remediation-first',
    title: 'Remediation-First Platform',
    desc: 'OpsMx is designed to move from detection to verified fixes.',
  },
  {
    id: 'agentic-remediation',
    title: 'Agentic Remediation',
    desc: 'Specialized agents help fix code, dependencies, containers, cloud, Kubernetes, and DevOps risks.',
  },
  {
    id: 'context',
    title: 'Code-to-Cloud Context',
    desc: 'Correlate findings with applications, deployments, runtime, ownership, and business impact.',
  },
  {
    id: 'governance',
    title: 'Human + AI Governance',
    desc: 'Combine AI recommendations with approvals, policies, evidence, and guardrails.',
  },
  {
    id: 'verification',
    title: 'Continuous Verification',
    desc: 'Validate fixes after remediation and detect regression.',
  },
  {
    id: 'compliance',
    title: 'Compliance Evidence',
    desc: 'Generate audit-ready evidence for regulatory and internal governance.',
  },
]

export const outcomes = [
  'Reduce remediation backlog',
  'Shorten mean time to remediate',
  'Improve developer productivity',
  'Reduce manual triage',
  'Increase verified fixes',
  'Strengthen audit readiness',
  'Improve release confidence',
  'Reduce production exposure',
]

export const faqItems = [
  {
    q: 'What is security remediation?',
    a: 'Security remediation is the process of fixing security vulnerabilities, misconfigurations, policy violations, and other risks. OpsMx automates and governs remediation from finding to verified fix.',
  },
  {
    q: 'What are remediation agents?',
    a: 'Remediation agents are AI-powered, domain-specific specialists that generate fix recommendations and execute or coordinate remediation for code, dependencies, containers, cloud, Kubernetes, and DevOps risks.',
  },
  {
    q: 'How does OpsMx verify fixes?',
    a: 'OpsMx re-tests and re-validates remediation using the same scanners, cloud tools, and runtime systems that detected the original risk. Verification generates audit evidence that the issue is resolved.',
  },
  {
    q: 'Does OpsMx automatically apply fixes?',
    a: 'OpsMx can recommend, propose, or auto-remediate depending on configuration. All fixes are governed by policy guardrails, human approvals, change controls, and audit trails.',
  },
  {
    q: 'Can remediation require human approval?',
    a: 'Yes. OpsMx supports human review gates, policy-based escalation, and change controls. Teams can choose what auto-remediates and what requires explicit approval.',
  },
  {
    q: 'What risks can OpsMx remediate?',
    a: 'OpsMx remediation agents cover code vulnerabilities, open source dependencies, containers, cloud misconfigurations, Kubernetes policy violations, IaC drift, policy violations, and operational risks.',
  },
  {
    q: 'How does OpsMx integrate with DevSecOps tools?',
    a: 'OpsMx integrates with CI/CD (GitHub, GitLab, Jenkins), ticketing (Jira, ServiceNow), cloud (AWS, Azure, GCP), Kubernetes, IaC (Terraform, Helm), and security tools (SAST, SCA, DAST, CSPM).',
  },
  {
    q: 'How is OpsMx different from a scanner?',
    a: 'Scanners find risk. OpsMx moves risk to verified closure. OpsMx adds remediation agents, AI recommendations, governance workflows, approvals, verification, and audit evidence.',
  },
]
