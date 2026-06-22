// Case studies data
// Organized by category with links to external OpsMx.com case study pages

export const caseStudies = [
  // ─── Security & Compliance ──────────────────────────────────────────────────
  {
    id: 'financial-services-siem',
    name: 'Global Financial Services Leader',
    title: 'Unified SIEM and Threat Detection Across 500+ Applications',
    category: 'Security & Compliance',
    logo: 'FS', // Initials as fallback
    color: '#22d3ee',
    url: 'https://www.opsmx.com/case-studies/financial-services-siem/',
    desc: 'Implemented OpsMx Active Defense to achieve real-time threat detection and compliance automation across enterprise infrastructure.',
  },
  {
    id: 'healthcare-compliance',
    name: 'Healthcare Provider Network',
    title: 'HIPAA Compliance Automation and Risk Remediation',
    category: 'Security & Compliance',
    logo: 'HC',
    color: '#a78bfa',
    url: 'https://www.opsmx.com/case-studies/healthcare-compliance/',
    desc: 'Automated security policy enforcement and remediation to maintain HIPAA compliance across cloud and on-premises environments.',
  },
  {
    id: 'tech-saas-supply-chain',
    name: 'Enterprise SaaS Platform',
    title: 'Software Supply Chain Security & SBOM Management',
    category: 'Security & Compliance',
    logo: 'ES',
    color: '#34d399',
    url: 'https://www.opsmx.com/case-studies/tech-saas-supply-chain/',
    desc: 'Continuous SBOM evaluation and dependency vulnerability management to secure AI-generated and developer code.',
  },
  {
    id: 'retail-pci-dss',
    name: 'Global Retail Corporation',
    title: 'PCI-DSS Compliance at Scale with Continuous Validation',
    category: 'Security & Compliance',
    logo: 'GR',
    color: '#f472b6',
    url: 'https://www.opsmx.com/case-studies/retail-pci-dss/',
    desc: 'Achieved PCI-DSS compliance across 200+ retail locations with automated evidence generation and audit trail management.',
  },
  {
    id: 'insurance-risk-governance',
    name: 'Insurance & Risk Management',
    title: 'Enterprise Risk Governance and Policy Enforcement',
    category: 'Security & Compliance',
    logo: 'IR',
    color: '#fbbf24',
    url: 'https://www.opsmx.com/case-studies/insurance-risk-governance/',
    desc: 'Implemented governance controls across development, deployment, and runtime to manage regulatory risk.',
  },

  // ─── DevOps ────────────────────────────────────────────────────────────────
  {
    id: 'fintech-deployment-safety',
    name: 'FinTech Unicorn',
    title: 'Safe Deployment Verification and Release Risk Assessment',
    category: 'DevOps',
    logo: 'FU',
    color: '#22d3ee',
    url: 'https://www.opsmx.com/case-studies/fintech-deployment-safety/',
    desc: 'Reduced deployment incidents by 85% using OpsMx deployment verification and change risk analysis before production release.',
  },
  {
    id: 'microservices-gitops',
    name: 'Cloud-Native Startup',
    title: 'GitOps Governance and Kubernetes Security at Scale',
    category: 'DevOps',
    logo: 'CS',
    color: '#a78bfa',
    url: 'https://www.opsmx.com/case-studies/microservices-gitops/',
    desc: 'Automated GitOps governance with policy enforcement across Argo CD and Kubernetes workloads managing 500+ microservices.',
  },
  {
    id: 'ci-cd-pipeline-optimization',
    name: 'Media and Entertainment Conglomerate',
    title: 'CI/CD Pipeline Security and Delivery Velocity',
    category: 'DevOps',
    logo: 'ME',
    color: '#34d399',
    url: 'https://www.opsmx.com/case-studies/ci-cd-pipeline-optimization/',
    desc: 'Accelerated software delivery by 40% while maintaining security with OpsMx pipeline remediation and diagnostics.',
  },
  {
    id: 'kubernetes-incident-diagnostics',
    name: 'Ride-Sharing Platform',
    title: 'Kubernetes Incident Root Cause Analysis and Remediation',
    category: 'DevOps',
    logo: 'RP',
    color: '#f472b6',
    url: 'https://www.opsmx.com/case-studies/kubernetes-incident-diagnostics/',
    desc: 'Cut incident resolution time from 4 hours to 15 minutes using OpsMx diagnostics and automated remediation.',
  },
  {
    id: 'devops-diagnostics-platform',
    name: 'Social Media Platform',
    title: 'DevOps Diagnostics for High-Velocity Deployments',
    category: 'DevOps',
    logo: 'SP',
    color: '#fbbf24',
    url: 'https://www.opsmx.com/case-studies/devops-diagnostics-platform/',
    desc: 'Maintained deployment velocity while adding security checks with OpsMx DevOps diagnostics and pipeline automation.',
  },
  {
    id: 'multi-cloud-operations',
    name: 'Enterprise Cloud Migration',
    title: 'Multi-Cloud Operations and Governance',
    category: 'DevOps',
    logo: 'EC',
    color: '#60a5fa',
    url: 'https://www.opsmx.com/case-studies/multi-cloud-operations/',
    desc: 'Unified operations and governance across AWS, Azure, and GCP with OpsMx context engine and remediation agents.',
  },
]

// Organize by category
export const caseStudiesByCategory = {
  'Security & Compliance': caseStudies.filter(cs => cs.category === 'Security & Compliance'),
  'DevOps': caseStudies.filter(cs => cs.category === 'DevOps'),
}

export const categories = [
  'Security & Compliance',
  'DevOps',
]
