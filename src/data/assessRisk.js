/**
 * Assess Risk Platform Data
 * Configuration for capabilities, workflow, integrations, outcomes, and FAQ
 */

export const capabilityGroups = [
  {
    id: 'context-engine',
    title: 'Context Engine',
    intro: 'Unify findings with application, runtime, ownership, deployment, and business context.',
    color: '#22d3ee',
    cards: [
      {
        id: 'context-engine-main',
        title: 'Context Engine',
        href: '/opsmx/context-engine',
        desc: 'Connect findings across code, dependencies, cloud, Kubernetes, runtime, deployments, ownership, and business services.',
      },
      {
        id: 'ownership-mapping',
        title: 'Ownership Mapping',
        href: '/opsmx/ownership-mapping',
        desc: 'Identify the right application owner, developer, platform team, or service owner for every risk.',
      },
      {
        id: 'change-impact',
        title: 'Change Impact',
        href: '/opsmx/change-impact',
        desc: 'Understand how code, dependency, infrastructure, and deployment changes affect risk posture.',
      },
    ],
  },
  {
    id: 'exploitability-reachability',
    title: 'Exploitability & Reachability',
    intro: 'Prioritize findings based on whether attackers can actually reach or exploit them.',
    color: '#60a5fa',
    cards: [
      {
        id: 'exploitability',
        title: 'Exploitability Analysis',
        href: '/opsmx/exploitability-analysis',
        desc: 'Identify whether a vulnerability is exploitable based on attack path, exposure, and runtime context.',
      },
      {
        id: 'reachability',
        title: 'Reachability Analysis',
        href: '/opsmx/reachability-analysis',
        desc: 'Determine whether vulnerable code, packages, APIs, or services are actually reachable.',
      },
      {
        id: 'package-reachability',
        title: 'Package Reachability',
        href: '/opsmx/package-reachability',
        desc: 'Determine whether vulnerable open source packages are used in reachable application paths.',
      },
      {
        id: 'false-positive-reduction',
        title: 'False Positive Reduction',
        href: '/opsmx/false-positive-reduction',
        desc: 'Reduce noise by filtering findings that are not reachable, not deployed, not exploitable, or not relevant.',
      },
    ],
  },
  {
    id: 'risk-scoring',
    title: 'Risk Scoring',
    intro: 'Convert technical findings into prioritized business risk.',
    color: '#34d399',
    cards: [
      {
        id: 'risk-scoring',
        title: 'Risk Scoring',
        href: '/opsmx/risk-scoring',
        desc: 'Rank risks using severity, exploitability, reachability, exposure, asset criticality, business impact, and SLA.',
      },
      {
        id: 'business-impact',
        title: 'Business Impact',
        href: '/opsmx/business-impact',
        desc: 'Prioritize risk based on affected services, data sensitivity, customer impact, revenue impact, and operational criticality.',
      },
      {
        id: 'blast-radius',
        title: 'Blast Radius',
        href: '/opsmx/blast-radius',
        desc: 'Identify affected applications, environments, APIs, cloud resources, users, data, and downstream systems.',
      },
    ],
  },
  {
    id: 'xbom-intelligence',
    title: 'X-BOM Intelligence',
    intro: 'Use BOM intelligence to understand software supply chain and dependency risk.',
    color: '#a78bfa',
    cards: [
      {
        id: 'xbom',
        title: 'X-BOM Intelligence',
        href: '/opsmx/xbom',
        desc: 'Correlate SBOM, AI-BOM, CBOM, QBOM, HBOM, DBOM, and Open Source BOM intelligence with security findings.',
      },
      {
        id: 'dependency-impact',
        title: 'Dependency Impact',
        href: '/opsmx/dependency-impact',
        desc: 'Understand how vulnerable dependencies affect applications, services, builds, and runtime workloads.',
      },
      {
        id: 'provenance-risk',
        title: 'Provenance Risk',
        href: '/opsmx/provenance-risk',
        desc: 'Assess package source, build origin, signing, integrity, and supply chain trust.',
      },
      {
        id: 'supply-chain-posture',
        title: 'Supply Chain Posture',
        href: '/opsmx/supply-chain-posture',
        desc: 'Measure software supply chain health across dependencies, builds, artifacts, releases, and open source communities.',
      },
    ],
  },
  {
    id: 'posture-management',
    title: 'Posture Management',
    intro: 'Continuously understand application and infrastructure security posture.',
    color: '#fbbf24',
    cards: [
      {
        id: 'posture-management',
        title: 'Posture Management',
        href: '/opsmx/posture-management',
        desc: 'Track security posture across applications, cloud, Kubernetes, containers, APIs, and runtime environments.',
      },
      {
        id: 'policy-governance',
        title: 'Policy & Governance',
        href: '/opsmx/policy-governance',
        desc: 'Apply policies, approvals, exceptions, ownership rules, release gates, and enterprise governance workflows.',
      },
    ],
  },
  {
    id: 'compliance-audit',
    title: 'Compliance & Audit',
    intro: 'Connect risk assessment to regulatory evidence and executive reporting.',
    color: '#f472b6',
    cards: [
      {
        id: 'compliance-reporting',
        title: 'Compliance Reporting',
        href: '/opsmx/compliance-reporting',
        desc: 'Map risks, controls, remediation status, and evidence to regulatory and internal compliance requirements.',
      },
      {
        id: 'audit-evidence',
        title: 'Audit Evidence',
        href: '/opsmx/audit-evidence',
        desc: 'Preserve traceable evidence for findings, decisions, approvals, remediation, verification, and reporting.',
      },
    ],
  },
]

export const workflowSteps = [
  { step: 1, label: 'Collect Findings', desc: 'Import findings from SAST, SCA, secrets, DAST, API security, cloud, Kubernetes, containers, and runtime tools.' },
  { step: 2, label: 'Correlate Context', desc: 'Enrich findings with application, deployment, runtime, X-BOM, ownership, and business context.' },
  { step: 3, label: 'Analyze Reachability', desc: 'Identify whether vulnerable code, dependencies, APIs, or workloads are actually reachable.' },
  { step: 4, label: 'Assess Exploitability', desc: 'Determine likelihood and impact of exploitation.' },
  { step: 5, label: 'Map Ownership', desc: 'Route risk to the right team.' },
  { step: 6, label: 'Score Risk', desc: 'Combine technical, operational, and business signals.' },
  { step: 7, label: 'Prioritize Remediation', desc: 'Focus teams on the issues that matter most.' },
]

export const integrations = [
  'SAST', 'SCA', 'Secrets', 'DAST', 'API Security',
  'Cloud Security', 'Kubernetes', 'Containers', 'SBOM', 'AI-BOM',
  'CI/CD', 'GitHub', 'GitLab', 'Jenkins', 'Azure DevOps',
  'AWS', 'Azure', 'GCP', 'Jira', 'ServiceNow', 'Slack'
]

export const outcomes = [
  'Reduce alert noise',
  'Prioritize exploitable risk',
  'Improve remediation focus',
  'Shorten triage cycles',
  'Identify owners faster',
  'Improve audit readiness',
  'Reduce business exposure',
  'Increase verified risk reduction',
]

export const whyOpsMxCards = [
  {
    id: 'unified-context',
    title: 'Unified Context',
    desc: 'OpsMx connects findings across code, cloud, runtime, dependencies, deployments, ownership, and compliance.',
  },
  {
    id: 'less-noise',
    title: 'Less Noise',
    desc: 'Reduce false positives and low-value findings using reachability, exploitability, and deployment context.',
  },
  {
    id: 'business-prioritization',
    title: 'Business-Aware Prioritization',
    desc: 'Rank risk based on impact to critical applications, sensitive data, customers, and operations.',
  },
  {
    id: 'xbom-powered',
    title: 'X-BOM Powered',
    desc: 'Use SBOM, AI-BOM, CBOM, QBOM, HBOM, DBOM, and Open Source BOM intelligence to understand supply chain exposure.',
  },
  {
    id: 'remediation-ready',
    title: 'Remediation Ready',
    desc: 'Every prioritized risk can flow directly into owner assignment, remediation workflow, verification, and reporting.',
  },
  {
    id: 'audit-ready',
    title: 'Audit-Ready Evidence',
    desc: 'Preserve the context, decisions, ownership, remediation, and verification evidence needed for compliance and audits.',
  },
]

export const faqItems = [
  {
    q: 'What does Assess Risk mean in OpsMx?',
    a: 'Assess Risk is OpsMx\'s core capability to correlate security findings with context, exploitability, reachability, ownership, business impact, and compliance exposure so teams can identify which risks actually matter and need remediation.',
  },
  {
    q: 'How does OpsMx reduce false positives?',
    a: 'OpsMx filters low-value findings by analyzing reachability (is the vulnerable code actually used?), exploitability (can it realistically be exploited?), and deployment context (is it in production?). This dramatically reduces noise.',
  },
  {
    q: 'What is reachability analysis?',
    a: 'Reachability analysis determines whether vulnerable code, packages, APIs, or services are actually used in your applications. This eliminates findings in unused dependencies or code paths that pose no real risk.',
  },
  {
    q: 'What is exploitability analysis?',
    a: 'Exploitability analysis evaluates whether a vulnerability can realistically be exploited in your environment, considering attack paths, exposure, runtime context, and configuration. Not all CVEs are equally exploitable.',
  },
  {
    q: 'How does OpsMx calculate risk score?',
    a: 'OpsMx combines multiple signals: technical severity, exploitability, reachability, asset criticality, business impact, data sensitivity, customer exposure, and SLA to produce a holistic risk score that guides prioritization.',
  },
  {
    q: 'How does X-BOM intelligence improve risk assessment?',
    a: 'X-BOM (extended Bill of Materials) correlates SBOM, AI-BOM, CBOM, QBOM, HBOM, and DBOM intelligence with security findings to understand supply chain risk, dependency lineage, build provenance, and open source health.',
  },
  {
    q: 'Can OpsMx map risks to application owners?',
    a: 'Yes. OpsMx Ownership Mapping automatically identifies and routes each risk to the right team—application owners, developers, platform teams, or service owners—based on application metadata and organizational structure.',
  },
  {
    q: 'How does OpsMx support compliance reporting?',
    a: 'OpsMx connects risk assessment to regulatory requirements (SOC 2, ISO 27001, PCI DSS, etc.), preserves audit evidence throughout the remediation lifecycle, and generates compliance-ready reports for executives and auditors.',
  },
]
