import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, CheckCircle, AlertCircle, Lock, Shield, Code2, Package, Cloud, Server, Cuboid, GitMerge, Scale, Zap as ZapIcon, BarChart3, TrendingDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import FinalCTA from '../components/FinalCTA'
import {
  workflowSteps,
  governanceCards,
  integrations,
  problemCards,
  beforeAfterComparison,
  whyOpsMxCards,
  outcomes,
  faqItems,
} from '../data/fixRisk'

// ─── Remediation Items for Navigation ────────────────────────────────────

const remediationItems = [
  { id: 'code-remediation', title: 'Code Remediation' },
  { id: 'dependency-remediation', title: 'Dependency Remediation' },
  { id: 'cloud-iac-remediation', title: 'Cloud & IaC Remediation' },
  { id: 'infrastructure-network-remediation', title: 'Infrastructure & Network Remediation' },
  { id: 'kubernetes-remediation', title: 'Kubernetes Remediation' },
  { id: 'operations-delivery-remediation', title: 'Operations & Delivery Remediation' },
  { id: 'compliance-remediation', title: 'Compliance Remediation' },
]

// ─── Sticky Table of Contents ────────────────────────────────────────────

function RemediationsNav() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      for (const item of remediationItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < 200) {
            setActiveSection(item.id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-24 w-full max-w-xs p-6 rounded-xl border border-white/8 bg-white/4 h-fit"
    >
      <h3 className="text-sm font-bold text-white mb-4">Remediations</h3>
      <div className="space-y-2">
        {remediationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-xs p-2 rounded transition-colors ${
              activeSection === item.id
                ? 'bg-white/10 text-white font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Enhanced Remediation Sections with Full Details ────────────────────

const detailedRemediationSections = [
  {
    id: 'code-remediation',
    title: 'Code Remediation',
    icon: Code2,
    color: '#22d3ee',
    tagline: 'AI-Powered Application Security Fixes',
    overview: 'OpsMx Code Remediation automates the discovery, diagnosis, and fix of security vulnerabilities in application code. Using AI-assisted analysis and context from your development pipeline, OpsMx generates secure code patches, validates them with unit and regression tests, and creates pull requests ready for developer review.',
    problems: [
      'Developers spend weeks triaging and fixing code vulnerabilities manually',
      'Fix recommendations are generic and require significant code rework',
      'No automated validation that fixes don\'t introduce regressions',
      'Security findings don\'t flow naturally into developer workflows',
    ],
    capabilities: [
      'AI code fix suggestions with context from SAST, DAST, and SCA',
      'Root cause diagnosis identifying why the vulnerability exists',
      'Secure code patch generation with best-practice implementations',
      'Automatic pull request creation with detailed explanations',
      'Pull request validation checking code quality and security',
      'IDE integration for in-context remediation suggestions',
      'GitHub, GitLab, and Azure DevOps integration',
      'Automatic unit test generation and execution',
      'Regression test validation before fix submission',
      'Fix verification proving the vulnerability is resolved',
    ],
    workflow: [
      'SAST or DAST scanner detects a code vulnerability',
      'OpsMx correlates the finding with code context and ownership',
      'AI analyzes the vulnerability and generates a secure fix',
      'OpsMx creates a pull request with the fix and explanation',
      'Unit tests are generated and validated',
      'Developer reviews, approves, and merges the pull request',
      'Regression tests verify the fix doesn\'t break existing functionality',
      'Verification scan confirms the vulnerability is resolved',
    ],
    outcomes: [
      '80% reduction in MTTR for code vulnerabilities',
      '4x improvement in developer productivity',
      'Consistent, secure coding practices across teams',
      'Faster security fix cycles with automated validation',
    ],
    links: [
      { text: 'SAST', href: '/sast' },
      { text: 'Secrets Management', href: '/secrets' },
      { text: 'SCA', href: '/sca' },
    ],
  },
  {
    id: 'dependency-remediation',
    title: 'Dependency Remediation',
    icon: Package,
    color: '#a78bfa',
    tagline: 'Supply Chain Risk Automation',
    overview: 'OpsMx Dependency Remediation reduces the risk of vulnerable and outdated dependencies by automating updates, replacements, and supply chain verification. From simple package version bumps to complex container image remediation, OpsMx ensures your software supply chain stays current and secure.',
    problems: [
      'Open source dependency upgrades require extensive testing and validation',
      'License conflicts and compliance violations go undetected',
      'Supply chain attacks through compromised dependencies are difficult to detect',
      'SBOM updates and integrity tracking is manual and error-prone',
      'Container image remediation is time-consuming and complex',
    ],
    capabilities: [
      'Dependency upgrade recommendations with compatibility analysis',
      'Package replacement suggestions for deprecated or vulnerable packages',
      'Container image remediation with registry updates',
      'Binary remediation for compiled dependencies',
      'AI-driven version recommendations balancing stability and security',
      'SBOM and X-BOM automatic updates',
      'AI-BOM generation and maintenance',
      'License issue detection and remediation',
      'Supply chain integrity verification',
      'Provenance validation and tracking',
    ],
    workflow: [
      'SCA scanner identifies vulnerable or outdated dependencies',
      'OpsMx analyzes upgrade paths and compatibility',
      'AI recommends optimal version for security and stability',
      'Automated pull request created with upgrade',
      'CI/CD pipeline runs comprehensive testing',
      'SBOM is automatically updated with new dependency metadata',
      'Supply chain integrity is verified',
      'Post-deployment monitoring confirms stability',
    ],
    outcomes: [
      '60% reduction in vulnerable dependencies in production',
      '70% less effort on dependency management',
      'Continuous supply chain hygiene',
      'Reduced risk of supply chain attacks',
    ],
    links: [
      { text: 'SBOM Management', href: '/sbom' },
      { text: 'AI-BOM', href: '/ai-bom' },
      { text: 'Open Source Risk', href: '/oss-risk' },
    ],
  },
  {
    id: 'cloud-iac-remediation',
    title: 'Cloud & Infrastructure as Code Remediation',
    icon: Cloud,
    color: '#34d399',
    tagline: 'Automated Infrastructure Security',
    overview: 'OpsMx Cloud & IaC Remediation fixes misconfigurations across AWS, Azure, and Google Cloud platforms. Using infrastructure-as-code understanding, OpsMx generates corrected Terraform, CloudFormation, or ARM/Bicep templates and validates changes before deployment.',
    problems: [
      'Cloud misconfigurations are discovered in production via compliance audits',
      'Fixing infrastructure requires deep IaC knowledge and testing',
      'Security group, IAM, and networking policy changes are risky without validation',
      'Infrastructure changes require manual testing and validation',
      'Rollback of failed changes is complex and error-prone',
    ],
    capabilities: [
      'AWS misconfiguration detection and remediation',
      'Azure and Google Cloud security fixes',
      'Terraform configuration generation and validation',
      'CloudFormation template generation',
      'ARM/Bicep template generation for Azure',
      'IAM policy fixes and least-privilege enforcement',
      'Storage security configuration remediation',
      'Networking and security group updates',
      'API gateway and WAF rule generation',
      'Policy validation before deployment',
    ],
    workflow: [
      'Cloud security assessment identifies misconfiguration',
      'OpsMx analyzes the infrastructure and generates fix',
      'IaC pull request is created with corrected configuration',
      'Terraform plan is validated for safety',
      'Policy gates verify compliance requirements are met',
      'Change control approval workflow executes',
      'Infrastructure change is deployed with rollback capability',
      'Post-deployment verification confirms security posture',
    ],
    outcomes: [
      '75% faster infrastructure security remediation',
      '90% reduction in cloud misconfiguration incidents',
      'Continuous compliance with cloud security policies',
      'Safer infrastructure changes with automated validation',
    ],
    links: [
      { text: 'Cloud Security', href: '/cloud-security' },
      { text: 'IaC Security', href: '/iac-security' },
    ],
  },
  {
    id: 'infrastructure-network-remediation',
    title: 'Infrastructure & Network Remediation',
    icon: Server,
    color: '#60a5fa',
    tagline: 'Network and Perimeter Security Automation',
    overview: 'OpsMx Infrastructure & Network Remediation automates fixes across WAF, firewalls, API gateways, load balancers, and DNS systems. From security group updates to zero-trust network policy implementation, OpsMx ensures consistent network security controls.',
    problems: [
      'Network security changes require coordination across multiple teams',
      'WAF and firewall rule changes are complex and error-prone',
      'Zero-trust network policy implementation is time-consuming',
      'Network configuration drift accumulates over time',
      'Policy validation and rollback are manual processes',
    ],
    capabilities: [
      'WAF rule generation and optimization',
      'API gateway security policy updates',
      'Load balancer configuration remediation',
      'Reverse proxy and CDN configuration',
      'Firewall rule updates and optimization',
      'DNS security (DNSSEC) configuration',
      'CDN security and DDoS protection',
      'Network policy generation and updates',
      'Ingress controller configuration',
      'Zero-trust network architecture implementation',
    ],
    workflow: [
      'Network security scan identifies policy gaps',
      'OpsMx generates remediation for network components',
      'Configuration changes are created for each system',
      'Policy validation ensures compliance and safety',
      'Change management approval is requested',
      'Network changes are deployed with monitoring',
      'Rollback capability is maintained throughout',
      'Post-deployment verification confirms security',
    ],
    outcomes: [
      '80% faster network security remediation',
      'Consistent security policies across infrastructure',
      'Reduced network-based attack surface',
      'Faster zero-trust network implementation',
    ],
  },
  {
    id: 'kubernetes-remediation',
    title: 'Kubernetes Remediation',
    icon: Cuboid,
    color: '#06b6d4',
    tagline: 'Container Orchestration Security',
    overview: 'OpsMx Kubernetes Remediation fixes security and operational issues across clusters, namespaces, and workloads. From RBAC misconfiguration to pod security violations, OpsMx generates corrected manifests and helm charts ready for deployment.',
    problems: [
      'Kubernetes security misconfigurations grow with cluster scale',
      'Pod security policies and RBAC are complex to implement correctly',
      'Network policies require deep container networking knowledge',
      'Helm chart management at scale is operationally complex',
      'Service mesh configuration changes are risky without validation',
    ],
    capabilities: [
      'Cluster security posture remediation',
      'Namespace isolation and segmentation fixes',
      'Workload security hardening',
      'Kubernetes manifest generation and updates',
      'Helm chart updates and validation',
      'Admission policy configuration and enforcement',
      'Pod security standards implementation',
      'Network policy generation and validation',
      'Secrets management and encryption',
      'RBAC configuration and least-privilege enforcement',
      'Service mesh security policy generation',
      'Runtime security validation',
    ],
    workflow: [
      'Kubernetes security audit identifies compliance gaps',
      'OpsMx analyzes cluster configuration and workloads',
      'Manifest and helm chart updates are generated',
      'Policy gates validate changes against security standards',
      'GitOps workflow commits changes to repository',
      'ArgoCD or equivalent applies updates to clusters',
      'Pod security policies are enforced',
      'Runtime monitoring validates security controls',
    ],
    outcomes: [
      '70% reduction in Kubernetes security incidents',
      '85% faster security remediation in Kubernetes',
      'Consistent pod security across clusters',
      'Reduced container escape risk',
    ],
    links: [
      { text: 'Runtime Security', href: '/runtime-security' },
    ],
  },
  {
    id: 'operations-delivery-remediation',
    title: 'Operations & Delivery Remediation',
    icon: GitMerge,
    color: '#fbbf24',
    tagline: 'Release and Deployment Automation',
    overview: 'OpsMx Operations & Delivery Remediation automates diagnosis and recovery from pipeline, deployment, and operational failures. Root cause analysis, rollback recommendations, and policy gate fixes get deployed automatically with human approval and verification.',
    problems: [
      'Pipeline failures require manual investigation and recovery',
      'Deployment failures don\'t have root cause context',
      'Rollback decisions are made without complete risk analysis',
      'Policy gate violations block releases without clear remediation guidance',
      'Environment drift causes deployment inconsistencies',
    ],
    capabilities: [
      'Pipeline failure root cause analysis',
      'Deployment failure diagnosis and recovery',
      'Incident root cause identification',
      'Rollback recommendation with risk scoring',
      'Roll-forward guidance for partial deployments',
      'Policy gate failure diagnosis and fixes',
      'Environment drift detection and remediation',
      'Release verification and validation',
      'Change impact analysis',
      'CI/CD pipeline security fixes',
      'Post-deployment verification automation',
    ],
    workflow: [
      'Pipeline or deployment failure is detected',
      'OpsMx analyzes logs and metrics for root cause',
      'Root cause diagnosis is provided to operations team',
      'Remediation recommendation is generated',
      'Operations team reviews and approves recovery action',
      'Automated rollback or roll-forward is executed',
      'Post-remediation monitoring validates recovery',
      'Incident report is generated with learnings',
    ],
    outcomes: [
      '60% reduction in MTTR for deployment failures',
      '75% faster incident resolution',
      'Reduced outage duration and impact',
      'More frequent, safer releases',
    ],
    links: [
      { text: 'Operations & Delivery', href: '/operations-delivery' },
    ],
  },
  {
    id: 'compliance-remediation',
    title: 'Compliance Remediation',
    icon: Scale,
    color: '#ec4899',
    tagline: 'Regulatory and Audit Automation',
    overview: 'OpsMx Compliance Remediation automates policy violation fixes and audit evidence generation for regulatory frameworks. From CERT-In to EU CRA, OpsMx keeps your systems compliant and generates audit-ready evidence automatically.',
    problems: [
      'Policy violations accumulate faster than teams can remediate them',
      'Audit preparation requires manual evidence collection and reporting',
      'Regulatory requirements are complex and constantly changing',
      'Exception tracking and justification is manual and incomplete',
      'Compliance verification is point-in-time, not continuous',
    ],
    capabilities: [
      'Policy violation detection and remediation',
      'Evidence collection automation',
      'Control verification and testing',
      'Exception management and tracking',
      'Audit preparation and report generation',
      'Regulatory reporting (CERT-In, MeitY, Executive Order 14028)',
      'EU CRA compliance automation',
      'AI governance and policy enforcement',
      'NIST framework mapping and verification',
      'OWASP controls validation',
      'Continuous compliance monitoring',
      'Missing evidence generation',
    ],
    workflow: [
      'Compliance scan identifies policy violations',
      'OpsMx analyzes controls and generates remediation',
      'Remediation pull requests are created with evidence',
      'Compliance team reviews and approves changes',
      'Remediation is deployed with continuous validation',
      'Evidence is automatically collected and stored',
      'Audit report is generated from evidence trail',
      'Regulatory submission is prepared automatically',
    ],
    outcomes: [
      '80% reduction in audit preparation effort',
      'Continuous compliance with minimal manual effort',
      'Audit-ready evidence generated automatically',
      'Faster regulatory response and reporting',
    ],
    links: [
      { text: 'Regulatory BOM Reporting', href: '/regulatory-bom-reporting' },
    ],
  },
]

// ─── ROI/Business Outcomes Cards ──────────────────────────────────────────

const roiCards = [
  {
    metric: '80%',
    outcome: 'Faster Remediation',
    description: 'Reduce security remediation timelines from weeks to days',
  },
  {
    metric: '60%',
    outcome: 'Lower MTTR',
    description: 'Mean time to remediate drops dramatically with automation',
  },
  {
    metric: '∞',
    outcome: 'Continuous Compliance',
    description: 'Stay compliant continuously rather than point-in-time audits',
  },
  {
    metric: '4x',
    outcome: 'Developer Productivity',
    description: 'Developers focus on features while OpsMx handles security',
  },
  {
    metric: '90%',
    outcome: 'Safer Releases',
    description: 'Automated verification reduces release-related incidents',
  },
  {
    metric: '75%',
    outcome: 'Lower Operational Risk',
    description: 'Continuous remediation and monitoring reduces exposure',
  },
]

// ─── AI Assistant Example Prompts ──────────────────────────────────────────

const aiAssistantPrompts = [
  'Fix this vulnerability',
  'Generate a pull request',
  'Upgrade this dependency',
  'Fix my Terraform configuration',
  'Update Kubernetes manifests',
  'Repair this deployment failure',
  'Generate evidence for CERT-In',
  'Show remediation status',
  'Generate compliance report',
  'Analyze this policy violation',
  'Recommend rollback strategy',
  'Create incident recovery plan',
]

// ─── Workflow Visualization ───────────────────────────────────────────────

function PlatformWorkflow() {
  const steps = [
    { label: 'Detect Risk', color: '#60a5fa' },
    { label: 'Assess Risk', color: '#34d399' },
    { label: 'Diagnose', color: '#f59e0b' },
    { label: 'Remediate', color: '#22d3ee' },
    { label: 'Verify', color: '#34d399' },
    { label: 'Govern', color: '#ec4899' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fix Risk is the Execution Layer</h2>
          <p className="text-lg text-slate-400 max-w-3xl">
            Fix Risk is where OpsMx executes on findings from Detect and Assess. While earlier stages identify and prioritize risk, Fix Risk automates the diagnosis, remediation, verification, and governance of fixes across your entire environment.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
          {steps.map((step, idx) => (
            <div key={step.label} className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="px-6 py-3 rounded-lg font-bold text-white whitespace-nowrap"
                style={{ background: `${step.color}20`, border: `2px solid ${step.color}` }}
              >
                {step.label}
              </motion.div>
              {idx < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-slate-500 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Remediation Section Component ────────────────────────────────────────

function RemediationDetailSection({ section }) {
  const Icon = section.icon

  return (
    <section id={section.id} className="max-w-7xl mx-auto px-6 py-20 space-y-12 scroll-mt-24">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div
            className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${section.color}20`, border: `2px solid ${section.color}` }}
          >
            <Icon className="w-8 h-8" style={{ color: section.color }} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: section.color }}>
              {section.tagline}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">{section.title}</h2>
          </div>
        </div>
        <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
          {section.overview}
        </p>
      </div>

      {/* Problems */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">The Problem</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {section.problems.map((problem) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 p-4 rounded-lg border border-white/8 bg-white/4"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: section.color }} />
              <p className="text-slate-300">{problem}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">What OpsMx Automates</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {section.capabilities.map((capability) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-start gap-2 p-3 rounded-lg border border-white/8 bg-white/4"
            >
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: section.color }} />
              <p className="text-sm text-slate-300">{capability}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Workflow */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">Remediation Workflow</h3>
        <div className="space-y-2">
          {section.workflow.map((step, idx) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-4 p-4 rounded-lg border border-white/8 bg-white/4"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                style={{ background: section.color, color: '#000' }}
              >
                {idx + 1}
              </div>
              <p className="text-slate-300 leading-relaxed flex-1">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Business Outcomes */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">Business Outcomes</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {section.outcomes.map((outcome) => (
            <motion.div
              key={outcome}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 p-4 rounded-lg border border-white/8 bg-white/4"
            >
              <TrendingDown className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: section.color }} />
              <p className="text-slate-300">{outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Screenshot/Placeholder */}
      <div
        className="w-full h-96 rounded-lg border border-white/8 bg-white/4 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${section.color}08, transparent)` }}
      >
        <div className="text-center">
          <Icon className="w-16 h-16 mx-auto mb-4" style={{ color: section.color, opacity: 0.5 }} />
          <p className="text-slate-400">Product screenshot will display here</p>
        </div>
      </div>

      {/* Internal Links */}
      {section.links && section.links.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            {section.links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="px-4 py-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors flex items-center gap-2"
              >
                {link.text}
                <ArrowRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Ready to Automate Remediation?</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          See how {section.title} can reduce remediation effort and accelerate your security program.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.opsmx.com/talk-to-an-application-security-expert/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Request Demo
          </a>
          <button
            className="px-6 py-3 rounded-lg border border-cyan-500/50 text-cyan-300 font-bold hover:bg-cyan-500/10 transition-all"
          >
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── Governed Remediation Section ─────────────────────────────────────────

function GovernedRemediationSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Governed AI Remediation</h2>
        <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
          OpsMx never performs blind autonomous remediation. Every remediation workflow supports human approval, policy gates, risk scoring, and audit logging to ensure safe, governed security fixes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {governanceCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors space-y-4"
          >
            <Shield className="w-8 h-8" style={{ color: '#34d399' }} />
            <h3 className="text-lg font-bold text-white">{card.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── AI Assistant Section ─────────────────────────────────────────────────

function AIAssistantSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Use Natural Language to Remediate Anything</h2>
        <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
          OpsMx AI Assistant understands your infrastructure, code, and compliance requirements. Ask in plain English and get remediation recommendations, automated pull requests, and execution plans instantly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {aiAssistantPrompts.map((prompt, idx) => (
          <motion.div
            key={prompt}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="p-4 rounded-lg border border-cyan-500/30 bg-cyan-500/10 cursor-pointer hover:bg-cyan-500/20 transition-colors"
          >
            <p className="text-cyan-300 font-medium">{prompt}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-12 text-center space-y-6">
        <ZapIcon className="w-12 h-12 mx-auto text-purple-400" />
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-2">Powered by AI</p>
          <p className="text-slate-300 max-w-2xl mx-auto">
            The AI Assistant learns from your environment, understands your compliance requirements, and generates remediation plans tailored to your specific infrastructure and policies.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── ROI Section ──────────────────────────────────────────────────────────

function ROISection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">The OpsMx Remediation ROI</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Reduce remediation effort, accelerate security outcomes, and maintain continuous compliance with AI-powered automation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {roiCards.map((card, idx) => (
          <motion.div
            key={card.outcome}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="p-8 rounded-xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors space-y-4"
          >
            <div className="space-y-2">
              <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {card.metric}
              </p>
              <p className="text-lg font-bold text-white">{card.outcome}</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── Main Page Component ──────────────────────────────────────────────────

export default function FixRiskPage() {
  useEffect(() => {
    document.title = 'Fix Risk with AI-Powered Remediation | OpsMx'
  }, [])

  useEffect(() => {
    // Handle hash-based navigation
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Fix Risk with AI-Powered Remediation | OpsMx</title>
        <meta name="description" content="Automate security remediation across code, dependencies, cloud, infrastructure, Kubernetes, delivery, and compliance with OpsMx AI-powered remediation platform." />
        <meta name="keywords" content="AI remediation, security automation, code remediation, dependency remediation, cloud remediation, Kubernetes remediation, compliance remediation, DevSecOps" />

        {/* Open Graph */}
        <meta property="og:title" content="Fix Risk with AI-Powered Remediation | OpsMx" />
        <meta property="og:description" content="Automate security remediation across your entire infrastructure and comply continuously." />
        <meta property="og:type" content="website" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "OpsMx Fix Risk",
            "description": "AI-powered security remediation platform",
            "brand": {
              "@type": "Brand",
              "name": "OpsMx"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "OpsMx",
            "url": "https://opsmx.com",
            "logo": "https://opsmx.com/logo.png"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://opsmx.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://opsmx.com/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Fix Risk",
                "item": "https://opsmx.com/fix-risk"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-navy-950">
        <Navbar />

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 w-fit">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">Fix Risk Platform</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Fix Risk with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">AI-Powered Remediation</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl leading-relaxed">
              Automatically diagnose, remediate, verify, and govern fixes across code, dependencies, cloud, infrastructure, Kubernetes, software delivery, and compliance.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 pt-8">
            <motion.a
              href="https://www.opsmx.com/talk-to-an-application-security-expert/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-lg"
            >
              Request Demo
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-lg border-2 border-cyan-500/50 text-cyan-300 font-bold hover:bg-cyan-500/10 transition-all text-lg"
            >
              Watch Demo
            </motion.button>
          </div>
        </section>

        {/* Platform Workflow */}
        <PlatformWorkflow />

        {/* Remediation Sections with Sticky Nav */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div className="space-y-0 border-t border-white/5">
              {detailedRemediationSections.map((section) => (
                <section key={section.id} className="border-t border-white/5">
                  <RemediationDetailSection section={section} />
                </section>
              ))}
            </div>

            {/* Sticky Nav */}
            <div className="hidden lg:block">
              <RemediationsNav />
            </div>
          </div>
        </section>

        {/* Governed Remediation */}
        <section className="border-t border-white/5">
          <GovernedRemediationSection />
        </section>

        {/* AI Assistant */}
        <section className="border-t border-white/5">
          <AIAssistantSection />
        </section>

        {/* ROI */}
        <section className="border-t border-white/5">
          <ROISection />
        </section>

        {/* Existing sections */}
        <section className="border-t border-white/5 bg-navy-950">
          <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">The OpsMx Remediation Workflow</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {workflowSteps.map((step, idx) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold text-sm">
                        {step.step}
                      </div>
                      <h3 className="font-bold text-white">{step.label}</h3>
                    </div>
                    <p className="text-xs text-slate-300">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </section>

        <FinalCTA />
      </div>
    </>
  )
}
