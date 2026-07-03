/**
 * AI Assistant Product Data
 * Configuration for prompts, capabilities, workflows, and content
 */

export const promptExamples = [
  'What applications are vulnerable?',
  'Which AI models are deployed in production?',
  'Show all critical Kubernetes risks.',
  'Which applications violate CRA requirements?',
  'Which vulnerabilities are reachable?',
  'Which applications use Log4j?',
  'Show all exposed secrets.',
  'Generate my SBOM.',
  'Generate AI-BOM.',
  'Generate Executive Order 14028 report.',
  'Show remediation status.',
  'Create Jira tickets.',
  'Open Pull Request.',
  'Who owns this application?',
  'Why did deployment fail?',
]

export const capabilities = [
  {
    id: 'understand-risk',
    title: 'Understand Risk',
    color: '#22d3ee',
    items: ['Vulnerabilities', 'AI', 'Cloud', 'APIs', 'Secrets', 'Supply Chain'],
  },
  {
    id: 'diagnose',
    title: 'Diagnose',
    color: '#60a5fa',
    items: ['Root Cause Analysis', 'Deployment failures', 'Runtime issues', 'Incident investigation'],
  },
  {
    id: 'remediate',
    title: 'Remediate',
    color: '#34d399',
    items: ['Recommend fixes', 'Generate pull requests', 'Upgrade dependencies', 'Fix IaC', 'Kubernetes remediation'],
  },
  {
    id: 'govern',
    title: 'Govern',
    color: '#a78bfa',
    items: ['Compliance', 'Policies', 'Exceptions', 'Approvals'],
  },
  {
    id: 'report',
    title: 'Report',
    color: '#fbbf24',
    items: ['Executive dashboards', 'Regulatory reports', 'Audit evidence'],
  },
  {
    id: 'automate',
    title: 'Automate',
    color: '#ec4899',
    items: ['Create tickets', 'Launch workflows', 'Trigger pipelines', 'Notify Slack'],
  },
]

export const knowledgeGraphNodes = [
  'Applications',
  'Repositories',
  'SBOM',
  'AI-BOM',
  'CBOM',
  'HBOM',
  'DBOM',
  'Open Source BOM',
  'Cloud',
  'Kubernetes',
  'Containers',
  'APIs',
  'Secrets',
  'Vulnerabilities',
  'Deployments',
  'Runtime',
  'Incidents',
  'Policies',
  'Compliance',
  'Tickets',
  'Ownership',
  'Business Services',
]

export const productCards = [
  { title: 'Code Security', items: ['SAST', 'DAST', 'Pen Testing'] },
  { title: 'Supply Chain', items: ['SBOM', 'AI-BOM', 'Dependency Analysis'] },
  { title: 'AI Security', items: ['Model Risk', 'Data Lineage', 'Prompt Security'] },
  { title: 'Cloud Security', items: ['CSPM', 'IaC Security', 'Kubernetes'] },
  { title: 'API Security', items: ['Inventory', 'Risk', 'Compliance'] },
  { title: 'Secrets', items: ['Detection', 'Rotation', 'Governance'] },
  { title: 'Fix Risk', items: ['Remediation', 'Verification', 'Evidence'] },
  { title: 'Release Verification', items: ['Deployments', 'Gates', 'Rollback'] },
  { title: 'DevOps', items: ['Pipelines', 'Policies', 'Automation'] },
]

export const workflowSteps = [
  { label: 'Ask', desc: 'Ask a natural language question about your software.' },
  { label: 'Understand', desc: 'AI analyzes your software, cloud, and operational data.' },
  { label: 'Diagnose', desc: 'Identifies root cause and affected systems.' },
  { label: 'Recommend', desc: 'Generates actionable remediation recommendations.' },
  { label: 'Approve', desc: 'Human review and policy-based approval.' },
  { label: 'Execute', desc: 'Automatically apply fixes and updates.' },
  { label: 'Verify', desc: 'Re-test and confirm the issue is resolved.' },
  { label: 'Report', desc: 'Generate compliance and audit evidence.' },
]

export const conversations = [
  {
    id: 'spring4shell',
    userMessage: 'Which applications are affected by Spring4Shell?',
    responses: [
      'Shows applications',
      'Shows deployments',
      'Shows business owners',
      'Shows runtime exposure',
      'Ranks priority',
    ],
  },
  {
    id: 'ai-bom',
    userMessage: 'Generate AI-BOM for payment-service.',
    responses: [
      'Shows Models',
      'Shows Datasets',
      'Shows Prompts',
      'Shows Agents',
      'Shows Frameworks',
      'Shows Inference APIs',
    ],
  },
  {
    id: 'log4j-fix',
    userMessage: 'Fix vulnerable Log4j dependencies.',
    responses: [
      'Creates dependency upgrades',
      'Opens PR',
      'Runs verification',
      'Updates SBOM',
    ],
  },
  {
    id: 'cra-report',
    userMessage: 'Prepare CRA compliance report.',
    responses: [
      'Generates report',
      'Shows gaps',
      'Lists missing evidence',
    ],
  },
]

export const enterpriseCards = [
  { title: 'Role-based access', desc: 'Control who can ask what.' },
  { title: 'Approval workflows', desc: 'Require human sign-off.' },
  { title: 'Policy guardrails', desc: 'Define what AI can do.' },
  { title: 'Audit trails', desc: 'Track every interaction.' },
  { title: 'Prompt logging', desc: 'Store conversation history.' },
  { title: 'Human review', desc: 'No blind automation.' },
]

export const differentiators = [
  { title: 'Knows your software', desc: 'Understands applications, code, dependencies.' },
  { title: 'Knows your cloud', desc: 'Sees all cloud resources and misconfigurations.' },
  { title: 'Knows your deployments', desc: 'Tracks every environment and release.' },
  { title: 'Knows your AI', desc: 'Understands AI models, datasets, and prompts.' },
  { title: 'Knows your compliance', desc: 'Tracks regulatory requirements and gaps.' },
  { title: 'Knows how to fix problems', desc: 'Generates and executes real remediation.' },
]

export const outcomes = [
  'Faster investigations',
  'Lower MTTR',
  'Higher developer productivity',
  'Less dashboard switching',
  'Continuous compliance',
  'AI-assisted remediation',
  'Fewer manual reports',
]

export const faqItems = [
  {
    q: 'What can the AI Assistant do?',
    a: 'Ask questions about vulnerabilities, deployments, cloud resources, AI models, compliance status, and much more. The AI Assistant understands your entire software lifecycle.',
  },
  {
    q: 'Can it remediate issues?',
    a: 'Yes. The AI Assistant can generate pull requests, upgrade dependencies, fix infrastructure-as-code, remediate Kubernetes policies, and create remediation workflows.',
  },
  {
    q: 'Does it understand SBOM?',
    a: 'Yes, including SBOM, AI-BOM, CBOM, HBOM, DBOM, and Open Source BOM. It can generate BOMs, analyze dependencies, and track supply chain risk.',
  },
  {
    q: 'Can it generate compliance reports?',
    a: 'Yes. It can generate executive reports, regulatory compliance documents, audit evidence, and answer specific compliance questions.',
  },
  {
    q: 'Can it investigate incidents?',
    a: 'Yes. The AI can perform root cause analysis, trace impact across systems, identify affected applications, and recommend remediation.',
  },
  {
    q: 'Can it execute workflows?',
    a: 'Yes. It can create Jira tickets, open pull requests, run pipelines, trigger deployments, and send Slack notifications.',
  },
  {
    q: 'Can it integrate with Jira?',
    a: 'Yes. The AI Assistant integrates with Jira to create tickets, update status, and track remediation workflows.',
  },
  {
    q: 'Can it create pull requests?',
    a: 'Yes. The AI can generate pull requests for dependency upgrades, security fixes, infrastructure changes, and configuration updates.',
  },
  {
    q: 'Can it work with Kubernetes?',
    a: 'Yes. The AI Assistant understands Kubernetes clusters, can analyze security posture, recommend fixes, and remediate misconfigurations.',
  },
]
