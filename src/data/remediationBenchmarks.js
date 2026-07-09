/**
 * Remediation Benchmarks Mock Data
 * Comprehensive benchmark data for AI-powered security remediation
 */

export const benchmarkCategories = [
  {
    id: 'source-code',
    name: 'Source Code Remediation',
    cases: 2847,
    score: 89.4,
    trend: '+5.2%',
    lastUpdated: '2 days ago',
    icon: 'Code2',
  },
  {
    id: 'binary',
    name: 'Binary Remediation',
    cases: 1634,
    score: 76.8,
    trend: '+3.1%',
    lastUpdated: '3 days ago',
    icon: 'Binary',
  },
  {
    id: 'docker',
    name: 'Docker & OCI Images',
    cases: 4521,
    score: 82.3,
    trend: '+6.8%',
    lastUpdated: '1 day ago',
    icon: 'Package',
  },
  {
    id: 'k8s',
    name: 'Kubernetes & Helm',
    cases: 3012,
    score: 85.7,
    trend: '+4.5%',
    lastUpdated: '2 days ago',
    icon: 'Container',
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    cases: 2156,
    score: 79.2,
    trend: '+2.3%',
    lastUpdated: '4 days ago',
    icon: 'Cloud',
  },
  {
    id: 'ai-models',
    name: 'AI Models',
    cases: 1289,
    score: 84.6,
    trend: '+7.9%',
    lastUpdated: '1 day ago',
    icon: 'Zap',
  },
  {
    id: 'ai-code',
    name: 'AI-Generated Code',
    cases: 1856,
    score: 72.1,
    trend: '+9.4%',
    lastUpdated: '12 hours ago',
    icon: 'Sparkles',
  },
  {
    id: 'supply-chain',
    name: 'Software Supply Chain',
    cases: 2445,
    score: 81.5,
    trend: '+4.1%',
    lastUpdated: '3 days ago',
    icon: 'Link',
  },
]

export const llmLeaderboard = [
  {
    rank: 1,
    model: 'Claude 3.5 Sonnet',
    verifiedFixRate: 94.2,
    buildSuccess: 97.8,
    testsPassing: 96.5,
    falseFixRate: 1.2,
    avgTimeToFix: '2.3m',
    estimatedCost: '$0.18',
    avgLatency: '1.8s',
  },
  {
    rank: 2,
    model: 'GPT-4o',
    verifiedFixRate: 91.8,
    buildSuccess: 95.2,
    testsPassing: 94.1,
    falseFixRate: 2.1,
    avgTimeToFix: '2.7m',
    estimatedCost: '$0.42',
    avgLatency: '2.3s',
  },
  {
    rank: 3,
    model: 'Gemini 2.0 Flash',
    verifiedFixRate: 88.5,
    buildSuccess: 92.1,
    testsPassing: 90.3,
    falseFixRate: 3.4,
    avgTimeToFix: '3.1m',
    estimatedCost: '$0.12',
    avgLatency: '1.5s',
  },
  {
    rank: 4,
    model: 'DeepSeek-V3',
    verifiedFixRate: 86.2,
    buildSuccess: 89.7,
    testsPassing: 87.8,
    falseFixRate: 4.2,
    avgTimeToFix: '3.5m',
    estimatedCost: '$0.08',
    avgLatency: '2.1s',
  },
  {
    rank: 5,
    model: 'Qwen 2.5 32B',
    verifiedFixRate: 82.1,
    buildSuccess: 85.3,
    testsPassing: 83.5,
    falseFixRate: 5.8,
    avgTimeToFix: '4.2m',
    estimatedCost: '$0.05',
    avgLatency: '1.9s',
  },
  {
    rank: 6,
    model: 'Llama 3.1 405B',
    verifiedFixRate: 79.4,
    buildSuccess: 82.1,
    testsPassing: 80.2,
    falseFixRate: 7.1,
    avgTimeToFix: '4.8m',
    estimatedCost: '$0.09',
    avgLatency: '2.6s',
  },
]

export const languageBenchmarks = [
  {
    language: 'Java',
    avgScore: 88.3,
    remediationRate: 91.2,
    buildSuccess: 94.1,
    commonVulns: 'Injection, XXE, Deserialization',
  },
  {
    language: 'Go',
    avgScore: 86.7,
    remediationRate: 89.5,
    buildSuccess: 96.3,
    commonVulns: 'Buffer Overflow, Race Conditions, Path Traversal',
  },
  {
    language: 'Python',
    avgScore: 84.2,
    remediationRate: 87.3,
    buildSuccess: 91.2,
    commonVulns: 'Injection, Type Confusion, Unsafe Pickle',
  },
  {
    language: 'JavaScript',
    avgScore: 81.5,
    remediationRate: 84.1,
    buildSuccess: 88.7,
    commonVulns: 'XSS, CSRF, Prototype Pollution, Dependency Issues',
  },
  {
    language: 'TypeScript',
    avgScore: 83.8,
    remediationRate: 86.7,
    buildSuccess: 90.2,
    commonVulns: 'Type Bypass, Unsafe Any, Dependency Issues',
  },
  {
    language: 'C#',
    avgScore: 85.1,
    remediationRate: 88.2,
    buildSuccess: 93.4,
    commonVulns: 'Deserialization, SQL Injection, Format String',
  },
  {
    language: 'C++',
    avgScore: 79.2,
    remediationRate: 81.3,
    buildSuccess: 86.1,
    commonVulns: 'Buffer Overflow, Use After Free, Integer Overflow',
  },
  {
    language: 'Rust',
    avgScore: 92.1,
    remediationRate: 95.2,
    buildSuccess: 98.5,
    commonVulns: 'Unsafe Code, Panic Unwrap, Dependency Issues',
  },
]

export const artifactBenchmarks = [
  {
    type: 'GitHub Repositories',
    analyzed: 45823,
    avgScore: 82.4,
    criticalFindings: 12547,
    remediationRate: 86.3,
    trend: '+3.2%',
  },
  {
    type: 'Docker Images',
    analyzed: 78234,
    avgScore: 80.1,
    criticalFindings: 18923,
    remediationRate: 83.7,
    trend: '+5.1%',
  },
  {
    type: 'AI Models',
    analyzed: 3456,
    avgScore: 74.2,
    criticalFindings: 892,
    remediationRate: 79.1,
    trend: '+8.9%',
  },
  {
    type: 'Helm Charts',
    analyzed: 12847,
    avgScore: 85.3,
    criticalFindings: 2134,
    remediationRate: 88.2,
    trend: '+4.3%',
  },
  {
    type: 'Terraform',
    analyzed: 6234,
    avgScore: 83.1,
    criticalFindings: 1456,
    remediationRate: 85.9,
    trend: '+2.1%',
  },
  {
    type: 'Binaries',
    analyzed: 8923,
    avgScore: 76.8,
    criticalFindings: 2847,
    remediationRate: 78.3,
    trend: '+1.8%',
  },
]

export const weeklyBenchmarkKPIs = [
  { label: 'Repositories Scanned', value: 12847, trend: '+2345' },
  { label: 'Artifacts Indexed', value: 345892, trend: '+47392' },
  { label: 'Vulnerabilities Detected', value: 89234, trend: '+12847' },
  { label: 'Remediations Generated', value: 45829, trend: '+8234' },
  { label: 'Pull Requests Submitted', value: 12847, trend: '+1823' },
  { label: 'Accepted Pull Requests', value: 11247, trend: '+1534' },
  { label: 'Avg Security Improvement', value: '8.4%', trend: '+0.9%' },
  { label: 'Avg Time to Remediation', value: '2.3m', trend: '-0.4m' },
]

export const researchArticles = [
  {
    id: 1,
    title: 'State of Open Source Security 2024',
    author: 'Security Research Team',
    publishedDate: 'Dec 15, 2024',
    readingTime: '12 min',
    coverImage: '🔐',
    category: 'Research',
  },
  {
    id: 2,
    title: 'Enterprise Actions Benchmark Report',
    author: 'OpsMx Research',
    publishedDate: 'Dec 10, 2024',
    readingTime: '18 min',
    coverImage: '📊',
    category: 'Benchmark',
  },
  {
    id: 3,
    title: 'Top Docker Security Report 2024',
    author: 'Container Security Team',
    publishedDate: 'Dec 5, 2024',
    readingTime: '15 min',
    coverImage: '🐳',
    category: 'Container',
  },
  {
    id: 4,
    title: 'AI Model Security Landscape',
    author: 'AI Safety Research',
    publishedDate: 'Nov 28, 2024',
    readingTime: '16 min',
    coverImage: '🤖',
    category: 'AI',
  },
  {
    id: 5,
    title: 'Container Security Trends Q4 2024',
    author: 'Platform Security',
    publishedDate: 'Nov 20, 2024',
    readingTime: '11 min',
    coverImage: '📦',
    category: 'Container',
  },
  {
    id: 6,
    title: 'Remediation Success Report 2024',
    author: 'Engineering Analytics',
    publishedDate: 'Nov 15, 2024',
    readingTime: '14 min',
    coverImage: '✅',
    category: 'Success',
  },
]

export const benchmarkMethodology = [
  {
    step: 1,
    title: 'Dataset',
    description:
      'We maintain a continuously curated dataset of real-world vulnerabilities from enterprise customers, open source projects, and academic security research. Every benchmark case is sourced from production environments.',
  },
  {
    step: 2,
    title: 'Benchmark Harness',
    description:
      'Our proprietary testing framework automates vulnerability injection, remediation execution, and validation across all artifact types.',
  },
  {
    step: 3,
    title: 'Verification Process',
    description:
      'Every remediation is verified through: static analysis, build execution, test execution, and security scanning.',
  },
  {
    step: 4,
    title: 'Build Validation',
    description:
      'We measure build success rates to ensure fixes are syntactically correct and compilable.',
  },
  {
    step: 5,
    title: 'Regression Testing',
    description:
      'All passing tests are validated to ensure the fix did not introduce new failures.',
  },
  {
    step: 6,
    title: 'Human Validation',
    description:
      'Security engineers manually review a randomized sample of all fixes for quality assurance.',
  },
  {
    step: 7,
    title: 'Acceptance Criteria',
    description:
      'A fix is only counted as "verified remediation" if it: resolves the vulnerability, compiles, passes all tests, and passes human review.',
  },
  {
    step: 8,
    title: 'Continuous Updates',
    description:
      'Benchmarks update automatically as new vulnerabilities emerge and new remediation capabilities are deployed.',
  },
]

export const securityScoreDistribution = [
  { range: '90-100', count: 23847, percentage: 32.1 },
  { range: '80-89', count: 28934, percentage: 39.1 },
  { range: '70-79', count: 14582, percentage: 19.7 },
  { range: '60-69', count: 4923, percentage: 6.6 },
  { range: '<60', count: 1824, percentage: 2.5 },
]

export const remediationSuccessRates = [
  { category: 'Source Code', rate: 89.4 },
  { category: 'Binary', rate: 76.8 },
  { category: 'Docker', rate: 82.3 },
  { category: 'Kubernetes', rate: 85.7 },
  { category: 'Cloud', rate: 79.2 },
  { category: 'AI Models', rate: 84.6 },
  { category: 'AI Code', rate: 72.1 },
  { category: 'Supply Chain', rate: 81.5 },
]

export const benchmarkTrendData = [
  { week: 'Week 1', score: 78.2 },
  { week: 'Week 2', score: 79.1 },
  { week: 'Week 3', score: 80.4 },
  { week: 'Week 4', score: 81.8 },
  { week: 'Week 5', score: 82.3 },
  { week: 'Week 6', score: 83.1 },
  { week: 'Week 7', score: 84.2 },
  { week: 'Week 8', score: 85.1 },
]

export const prAcceptanceData = [
  { category: 'Automerge', rate: 92.3 },
  { category: 'Human Approved', rate: 87.1 },
  { category: 'Needs Review', rate: 8.2 },
  { category: 'Rejected', rate: 2.4 },
]

export const languageComparisonData = [
  { language: 'Rust', score: 92.1 },
  { language: 'Go', score: 86.7 },
  { language: 'Java', score: 88.3 },
  { language: 'TypeScript', score: 83.8 },
  { language: 'C#', score: 85.1 },
  { language: 'Python', score: 84.2 },
  { language: 'JavaScript', score: 81.5 },
  { language: 'C++', score: 79.2 },
]
