/**
 * Analyze Anything Mock Data
 * Support for both software artifacts and running environments
 */

export const analysisTargetTypes = {
  artifacts: [
    { id: 'github', label: 'GitHub Repository', icon: 'Code2', color: '#22d3ee', category: 'Software Artifacts' },
    { id: 'docker', label: 'Docker Image', icon: 'Package', color: '#3b82f6', category: 'Software Artifacts' },
    { id: 'binary', label: 'Binary', icon: 'Download', color: '#a78bfa', category: 'Software Artifacts' },
    { id: 'ai-model', label: 'AI Model', icon: 'Zap', color: '#ec4899', category: 'Software Artifacts' },
    { id: 'helm', label: 'Helm Chart', icon: 'Box', color: '#06b6d4', category: 'Software Artifacts' },
    { id: 'k8s', label: 'Kubernetes Manifest', icon: 'Container', color: '#34d399', category: 'Software Artifacts' },
    { id: 'terraform', label: 'Terraform', icon: 'Layers', color: '#f59e0b', category: 'Software Artifacts' },
    { id: 'sbom', label: 'SBOM', icon: 'FileText', color: '#64748b', category: 'Software Artifacts' },
    { id: 'other', label: 'Other', icon: 'FileJson', color: '#94a3b8', category: 'Software Artifacts' },
  ],
  environments: [
    { id: 'aws', label: 'AWS Account', icon: 'Cloud', color: '#f97316', category: 'Running Environments' },
    { id: 'azure', label: 'Azure Subscription', icon: 'Cloud', color: '#0ea5e9', category: 'Running Environments' },
    { id: 'gcp', label: 'Google Cloud Project', icon: 'Cloud', color: '#ef4444', category: 'Running Environments' },
    { id: 'k8s-cluster', label: 'Kubernetes Cluster', icon: 'Container', color: '#34d399', category: 'Running Environments' },
    { id: 'linux', label: 'Linux Server', icon: 'Server', color: '#fbbf24', category: 'Running Environments' },
    { id: 'windows', label: 'Windows Server', icon: 'Server', color: '#60a5fa', category: 'Running Environments' },
    { id: 'vmware', label: 'VMware', icon: 'Cpu', color: '#8b5cf6', category: 'Running Environments' },
    { id: 'datacenter', label: 'Private Data Center', icon: 'Building2', color: '#64748b', category: 'Running Environments' },
    { id: 'enterprise-app', label: 'Enterprise Application', icon: 'BarChart3', color: '#06b6d4', category: 'Running Environments' },
    { id: 'custom', label: 'Custom Environment', icon: 'Settings', color: '#94a3b8', category: 'Running Environments' },
  ],
}

export const inputFormConfigs = {
  github: {
    fields: [
      { name: 'repoUrl', label: 'Repository URL', type: 'text', placeholder: 'https://github.com/username/repo' },
    ],
  },
  docker: {
    fields: [
      { name: 'imageName', label: 'Image Name', type: 'text', placeholder: 'myregistry/myimage:latest' },
    ],
  },
  binary: {
    fields: [
      { name: 'binaryFile', label: 'Upload Binary', type: 'file', accept: '*/*' },
    ],
  },
  'ai-model': {
    fields: [
      { name: 'modelUrl', label: 'Model URL', type: 'text', placeholder: 'https://huggingface.co/model/path' },
    ],
  },
  helm: {
    fields: [
      { name: 'chartName', label: 'Chart Name', type: 'text', placeholder: 'mychart' },
      { name: 'chartVersion', label: 'Chart Version', type: 'text', placeholder: '1.0.0' },
    ],
  },
  k8s: {
    fields: [
      { name: 'manifestFile', label: 'Kubernetes Manifest', type: 'file', accept: '.yaml,.yml,.json' },
    ],
  },
  terraform: {
    fields: [
      { name: 'tfFile', label: 'Terraform File', type: 'file', accept: '.tf,.tfvars' },
    ],
  },
  sbom: {
    fields: [
      { name: 'sbomFile', label: 'SBOM File', type: 'file', accept: '.json,.xml,.spdx' },
    ],
  },
  other: {
    fields: [
      { name: 'otherFile', label: 'Upload File', type: 'file' },
    ],
  },
  aws: {
    fields: [
      { name: 'accountId', label: 'AWS Account ID', type: 'text', placeholder: '123456789012' },
      { name: 'region', label: 'Region', type: 'select', options: ['us-east-1', 'us-west-2', 'eu-west-1', 'ap-southeast-1'] },
    ],
    delegate: true,
    button: 'Connect AWS',
  },
  azure: {
    fields: [
      { name: 'subscriptionId', label: 'Subscription ID', type: 'text', placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
    ],
    delegate: true,
    button: 'Connect Azure',
  },
  gcp: {
    fields: [
      { name: 'projectId', label: 'Google Cloud Project ID', type: 'text', placeholder: 'my-project-123' },
    ],
    delegate: true,
    button: 'Connect GCP',
  },
  'k8s-cluster': {
    fields: [
      { name: 'clusterName', label: 'Cluster Name', type: 'text', placeholder: 'production-cluster' },
      { name: 'kubeconfigFile', label: 'Kubeconfig File', type: 'file', accept: '.yaml,.yml,.conf' },
    ],
    delegate: true,
    button: 'Connect Cluster',
  },
  linux: {
    fields: [
      { name: 'hostname', label: 'Hostname/IP', type: 'text', placeholder: '192.168.1.100' },
      { name: 'sshKey', label: 'SSH Key', type: 'file' },
    ],
    delegate: true,
    button: 'Connect Server',
  },
  windows: {
    fields: [
      { name: 'hostname', label: 'Hostname/IP', type: 'text', placeholder: '192.168.1.100' },
      { name: 'winrmCredential', label: 'WinRM Credential', type: 'text', placeholder: 'connection string' },
    ],
    delegate: true,
    button: 'Connect Server',
  },
  vmware: {
    fields: [
      { name: 'vcenterUrl', label: 'vCenter URL', type: 'text', placeholder: 'https://vcenter.example.com' },
      { name: 'vcenterUser', label: 'vCenter Username', type: 'text' },
    ],
    delegate: true,
    button: 'Connect VMware',
  },
  datacenter: {
    fields: [
      { name: 'envName', label: 'Environment Name', type: 'text', placeholder: 'datacenter-us-east' },
      { name: 'connectionInfo', label: 'Connection Information', type: 'textarea', placeholder: 'Network details, VPN info, etc.' },
    ],
    delegate: true,
    button: 'Configure',
  },
  'enterprise-app': {
    fields: [
      { name: 'appName', label: 'Application Name', type: 'text', placeholder: 'ERP-System' },
      { name: 'connectionString', label: 'Connection Information', type: 'textarea', placeholder: 'Database, API endpoints, etc.' },
    ],
    delegate: true,
    button: 'Connect Application',
  },
  custom: {
    fields: [
      { name: 'customName', label: 'Environment Name', type: 'text', placeholder: 'My Custom Environment' },
      { name: 'customDetails', label: 'Details', type: 'textarea', placeholder: 'Describe your environment...' },
    ],
    delegate: true,
    button: 'Configure',
  },
}

export const delegateCapabilities = [
  'Connect to AWS, Azure and Google Cloud',
  'Connect to Kubernetes clusters',
  'Connect to VMware',
  'Connect to on-premises infrastructure',
  'Connect to private Git repositories',
  'Connect to internal artifact registries',
  'Connect to enterprise CI/CD platforms',
  'Connect to internal AI model registries',
]

export const environmentAnalysisResults = {
  securityScore: 72,
  complianceScore: 68,
  riskSummary: 'Medium risk. 12 critical findings, 34 high-severity misconfigurations detected.',
  assetsScanned: 247,
  criticalFindings: 12,
  misconfigurations: 34,
  summary:
    'AWS environment analysis detected multiple security gaps across EC2, S3, and IAM configurations. Recommend immediate remediation of overly permissive security groups and IAM policies.',
  remediations: [
    {
      id: 'ENV-001',
      title: 'Restrict EC2 Security Group Ingress',
      impact: 'Critical',
      complexity: 'Low',
      status: 'ready',
    },
    {
      id: 'ENV-002',
      title: 'Enable S3 Bucket Encryption',
      impact: 'High',
      complexity: 'Medium',
      status: 'ready',
    },
  ],
}
