import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  GitBranch,
  Box,
  Cloud,
  Anchor,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Database,
  Lock,
  Eye,
  AlertCircle,
} from 'lucide-react'
import Navbar from '../components/Navbar'

// Coverage sections: Code, CI/CD, Artifacts, Cloud, Kubernetes, Production
const coverageSections = [
  {
    title: 'Code',
    icon: Code2,
    description: 'Detect hardcoded secrets before they enter the delivery path.',
    bullets: [
      'GitHub, GitLab, Bitbucket',
      'Pull requests and branches',
      'Config files and IaC',
      'Terraform, Helm, Kubernetes YAML',
      'Dockerfiles and build scripts',
    ],
    color: '#f87171',
  },
  {
    title: 'CI/CD',
    icon: GitBranch,
    description: 'Catch secrets exposed through pipelines, logs, variables, and automation.',
    bullets: [
      'Jenkins, GitHub Actions, GitLab CI',
      'Argo CD, Spinnaker',
      'Pipeline logs and build variables',
      'Deployment automation',
      'Build and release stages',
    ],
    color: '#60a5fa',
  },
  {
    title: 'Artifacts',
    icon: Box,
    description: 'Find secrets embedded in built software before they reach production.',
    bullets: [
      'Container images and layers',
      'SBOM/XBOM metadata',
      'Package manifests',
      'Deployment bundles',
      'Build artifacts and registries',
    ],
    color: '#34d399',
  },
  {
    title: 'Cloud',
    icon: Cloud,
    description: 'Connect leaked credentials to real cloud permissions and exposure.',
    bullets: [
      'AWS, Azure, GCP',
      'IAM permissions and roles',
      'Storage and database access',
      'Key usage patterns',
      'Sensitive data access paths',
    ],
    color: '#a78bfa',
  },
  {
    title: 'Kubernetes',
    icon: Anchor,
    description: 'Understand how secrets are used across clusters, workloads, and namespaces.',
    bullets: [
      'Kubernetes Secrets and ConfigMaps',
      'Environment variables',
      'Workloads and namespaces',
      'Runtime usage patterns',
      'Service discovery and mounts',
    ],
    color: '#fbbf24',
  },
  {
    title: 'Production',
    icon: TrendingUp,
    description: 'Prioritize exposed secrets based on where they run and what they impact.',
    bullets: [
      'Runtime exposure analysis',
      'Internet-facing services',
      'Service ownership and SLAs',
      'Sensitive data paths',
      'Business-critical workloads',
    ],
    color: '#fb7185',
  },
]

// Remediation workflow steps
const remediationSteps = [
  { number: '1', title: 'Detect', description: 'Exposed secret found in code, CI/CD, artifact, or runtime' },
  { number: '2', title: 'Validate', description: 'Check if the credential is actually active and usable' },
  { number: '3', title: 'Map', description: 'Link secret to service, owner, workload, and environment' },
  { number: '4', title: 'Analyze', description: 'Understand cloud permissions and sensitive data access' },
  { number: '5', title: 'Plan', description: 'Generate safe remediation path with minimal disruption' },
  { number: '6', title: 'Remediate', description: 'Rotate, revoke, move to vault, rebuild, redeploy' },
  { number: '7', title: 'Verify', description: 'Confirm old secret no longer works, record audit trail' },
]

// Prioritization factors
const prioritizationFactors = [
  'Active vs stale credential status',
  'Production deployment status',
  'Cloud/IAM permissions scope',
  'Access to PII or sensitive data',
  'Internet-facing workloads',
  'Application and service ownership',
  'Environment and business criticality',
  'Exploit path and blast radius',
]

// Outcomes
const outcomes = [
  { title: 'Fewer Noisy Findings', description: 'Stop treating every secret the same. Real prioritization means fewer alerts that matter.' },
  { title: 'Faster Owner Identification', description: 'Automatically map secrets to teams and services without manual detective work.' },
  { title: 'Better Risk Prioritization', description: 'Focus on the secrets that actually create exposure, not just any exposed credential.' },
  { title: 'Reduced Production Risk', description: 'Rotate and revoke active production credentials before attackers can exploit them.' },
  { title: 'Verified Remediation', description: 'Know that the fix worked. Confirm the old secret no longer functions.' },
  { title: 'Cleaner Audit Trail', description: 'Auditors see exactly when secrets were found, who owned them, and how they were fixed.' },
]

function CoverageCard({ section, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all"
    >
      <div
        className="p-3 rounded-lg inline-flex mb-4"
        style={{ background: `${section.color}18`, border: `1px solid ${section.color}28` }}
      >
        <section.icon className="w-6 h-6" style={{ color: section.color }} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{section.title}</h3>
      <p className="text-sm text-slate-400 mb-4 leading-relaxed">{section.description}</p>
      <ul className="space-y-2">
        {section.bullets.map((bullet, i) => (
          <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
            <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function OutcomeCard({ outcome, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1 flex-shrink-0" />
        <h3 className="text-sm font-bold text-white">{outcome.title}</h3>
      </div>
      <p className="text-sm text-slate-400">{outcome.description}</p>
    </motion.div>
  )
}

function RemediationStep({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold">
          {step.number}
        </div>
      </div>
      <div>
        <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
        <p className="text-sm text-slate-400">{step.description}</p>
      </div>
    </motion.div>
  )
}

export default function SecretsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-semibold mb-6">
              <Lock className="w-4 h-4" /> Secrets Detection & Remediation
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Secrets Exposure Remediation{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                from Code to Cloud
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-4 leading-relaxed max-w-3xl mx-auto">
              Detect hardcoded secrets, leaked credentials, exposed tokens, and risky secret usage across code, CI/CD, containers, cloud, Kubernetes, and production — then prioritize by blast radius and remediate safely.
            </p>
            <p className="text-lg text-cyan-300 font-semibold max-w-2xl mx-auto mb-8">
              Find secrets. Understand blast radius. Fix them safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opsmx.com/talk-to-an-application-security-expert/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2"
              >
                See Secrets Blast Radius Demo <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                Explore Remediation Workflow
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Story */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4 text-center">
              AWS Key in Code. PII at Risk in Production.
            </h2>
            <p className="text-lg text-slate-300 text-center max-w-2xl mx-auto mb-12">
              Real-world secrets exposure flow: from developer commit to production blast radius.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '1', title: 'Developer commits AWS key', color: 'from-red-500 to-red-600' },
              { num: '2', title: 'OpsMx detects in pull request', color: 'from-orange-500 to-orange-600' },
              { num: '3', title: 'Secret appears in container layer', color: 'from-yellow-500 to-yellow-600' },
              { num: '4', title: 'Image deployed to Kubernetes', color: 'from-cyan-500 to-blue-600' },
              { num: '5', title: 'Key has S3 access to PII', color: 'from-purple-500 to-purple-600' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-lg border border-white/10 bg-gradient-to-br ${step.color} bg-opacity-10 p-6 text-center`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white font-bold mb-4`}
                >
                  {step.num}
                </div>
                <p className="text-sm font-semibold text-white">{step.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl border border-white/10 bg-white/5">
            <p className="text-slate-300 text-center">
              <span className="font-bold text-white">OpsMx maps the complete exposure:</span> Developer → Secret detected → Credential validated → Cloud permissions identified → Service owner found → Sensitive data at risk → Workload internet-facing → Blast radius calculated → Remediation path generated → Secret rotated → Image rebuilt → Deployment verified → Fix audited.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-4 text-center"
          >
            Secrets Coverage Across the SDLC
          </motion.h2>
          <p className="text-lg text-slate-300 text-center max-w-2xl mx-auto mb-12">
            From code to production: comprehensive detection across every stage of your delivery pipeline.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageSections.map((section, idx) => (
              <CoverageCard key={idx} section={section} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-black text-white mb-6">
                Stop Treating Every Secret Leak the Same
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Most scanners produce secret findings. OpsMx correlates each exposed secret with runtime, cloud, application, ownership, and data context so teams can focus on the secrets that create real exposure.
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-bold text-cyan-400 mb-4 uppercase">Prioritization Factors</h3>
                <div className="grid grid-cols-2 gap-3">
                  {prioritizationFactors.map((factor, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400" /> Without OpsMx
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• 3,000 secret findings</li>
                  <li>• No ownership context</li>
                  <li>• No runtime visibility</li>
                  <li>• No proof of fix</li>
                  <li>• Manual investigation required</li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" /> With OpsMx
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• 12 active production secrets</li>
                  <li>• Prioritized by blast radius</li>
                  <li>• Routed to owners automatically</li>
                  <li>• Remediated and verified</li>
                  <li>• Complete audit trail</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remediation Workflow */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-4 text-center"
          >
            From Secret Finding to Verified Fix
          </motion.h2>
          <p className="text-lg text-slate-300 text-center mb-12">
            A complete 7-step workflow that takes secrets from detection to remediation with verification.
          </p>

          <div className="space-y-6 mb-12">
            {remediationSteps.map((step, idx) => (
              <RemediationStep key={idx} step={step} index={idx} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Remediation Actions</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" /> Revoke exposed key
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" /> Rotate credential
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" /> Remove secret from repo history
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" /> Move to HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, or GCP Secret Manager
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Deployment Actions</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" /> Replace hardcoded value with secret reference
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" /> Update CI/CD variables
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" /> Rebuild clean container image
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" /> Redeploy workload
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-4 text-center"
          >
            Works Across Your Security Stack
          </motion.h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Integrates with your existing tools without replacement. OpsMx connects your entire delivery chain.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Source Control', items: ['GitHub', 'GitLab', 'Bitbucket'] },
              { title: 'CI/CD', items: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Argo CD', 'Spinnaker'] },
              { title: 'Cloud Platforms', items: ['AWS', 'Azure', 'GCP'] },
              { title: 'Container & K8s', items: ['Docker', 'Kubernetes', 'Container Registries'] },
              { title: 'Secret Stores', items: ['HashiCorp Vault', 'AWS Secrets Manager', 'Azure Key Vault', 'GCP Secret Manager'] },
              { title: 'Workflow & Ticketing', items: ['Jira', 'ServiceNow', 'Slack'] },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="text-cyan-400">•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-4 text-center"
          >
            Outcomes Security and Engineering Can Measure
          </motion.h2>
          <p className="text-lg text-slate-300 text-center mb-12">
            Real impact on risk, velocity, and operational efficiency.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, idx) => (
              <OutcomeCard key={idx} outcome={outcome} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-cyan-950/20 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Find Exposed Secrets Before Attackers Do
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              See how OpsMx connects secrets, services, cloud permissions, data access, and remediation workflows into one code-to-cloud exposure view.
            </p>
            <a
              href="https://www.opsmx.com/talk-to-an-application-security-expert/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2"
            >
              See Secrets Blast Radius Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
