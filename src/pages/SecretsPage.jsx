import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, GitBranch, Package, Cloud, Zap, Lock, CheckCircle2, Shield, Database } from 'lucide-react'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'

// Animation showing secrets workflow
function SecretsWorkflowAnimation() {
  const steps = [
    { label: 'Developer Commit', icon: Code2 },
    { label: 'Secret Detected', icon: Lock },
    { label: 'Credential Validated', icon: Shield },
    { label: 'Cloud Permissions Mapped', icon: Cloud },
    { label: 'Production Blast Radius', icon: Database },
    { label: 'Owner Assigned', icon: GitBranch },
    { label: 'Secret Rotated', icon: Zap },
    { label: 'Verified Fix', icon: CheckCircle2 },
  ]

  return (
    <div className="relative py-16 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50 rounded-2xl border border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Text explanation */}
          <div className="lg:w-1/3">
            <p className="text-sm font-bold text-cyan-400 mb-2">SECRETS WORKFLOW</p>
            <p className="text-2xl font-black text-white mb-4">Find. Understand. Fix. Verify.</p>
            <p className="text-slate-300 text-sm leading-relaxed">OpsMx traces every exposed secret from detection through remediation, mapping ownership, blast radius, and verification at each step.</p>
          </div>

          {/* Right: Animated workflow */}
          <div className="lg:w-2/3">
            <svg viewBox="0 0 600 400" className="w-full h-auto max-h-96">
              {/* Connection lines */}
              {steps.map((_, idx) => {
                if (idx < steps.length - 1) {
                  const startX = (idx / (steps.length - 1)) * 540 + 30
                  const endX = ((idx + 1) / (steps.length - 1)) * 540 + 30
                  return (
                    <motion.line
                      key={`line-${idx}`}
                      x1={startX}
                      y1="200"
                      x2={endX}
                      y2="200"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.3 }}
                    />
                  )
                }
                return null
              })}

              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>

              {/* Steps */}
              {steps.map((step, idx) => {
                const x = (idx / (steps.length - 1)) * 540 + 30
                const isLast = idx === steps.length - 1
                const Icon = step.icon

                return (
                  <motion.g key={step.label}>
                    {/* Animated pulse circle */}
                    <motion.circle
                      cx={x}
                      cy="200"
                      r="24"
                      fill="none"
                      stroke={isLast ? '#34d399' : '#22d3ee'}
                      strokeWidth="2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.3, duration: 0.3 }}
                    />
                    <motion.circle
                      cx={x}
                      cy="200"
                      r="24"
                      fill="none"
                      stroke={isLast ? '#34d399' : '#22d3ee'}
                      strokeWidth="2"
                      opacity="0.3"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.5 }}
                      transition={{ delay: idx * 0.3, duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                    />

                    {/* Inner circle and icon */}
                    <motion.circle
                      cx={x}
                      cy="200"
                      r="18"
                      fill={isLast ? 'rgba(52, 211, 153, 0.15)' : 'rgba(34, 211, 238, 0.15)'}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.3, duration: 0.3 }}
                    />

                    {/* Label below */}
                    <text
                      x={x}
                      y="270"
                      textAnchor="middle"
                      className="text-[11px] font-semibold fill-slate-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.3 + 0.2 }}
                    >
                      {step.label.split(' ')[0]}
                    </text>
                    <text
                      x={x}
                      y="285"
                      textAnchor="middle"
                      className="text-[10px] fill-slate-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.3 + 0.2 }}
                    >
                      {step.label.split(' ').slice(1).join(' ')}
                    </text>
                  </motion.g>
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// Problem cards
function ProblemCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-red-500/30 hover:bg-red-500/5 transition-all"
    >
      <div className="flex items-start gap-3 mb-3">
        <Icon className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-sm text-slate-300">{description}</p>
    </motion.div>
  )
}

// Coverage card
function CoverageCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-4 hover:border-cyan-500/30 transition-all"
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-cyan-400" />
        <h4 className="text-sm font-bold text-white">{title}</h4>
      </div>
      <p className="text-xs text-slate-400">{description}</p>
    </motion.div>
  )
}

// Workflow step
function WorkflowStep({ number, label, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex gap-4"
    >
      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
        <span className="text-sm font-bold text-cyan-400">{number}</span>
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-white mb-1">{label}</h4>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
    </motion.div>
  )
}

// Why OpsMx card
function WhyOpsMxCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-cyan-500/30 transition-all"
    >
      <Icon className="w-6 h-6 text-cyan-400 mb-3" />
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-300 leading-snug">{description}</p>
    </motion.div>
  )
}

const coverageItems = [
  { icon: Code2, title: 'Code', description: 'Git repos, commits, pull requests' },
  { icon: GitBranch, title: 'CI/CD', description: 'Build logs, scripts, configurations' },
  { icon: Package, title: 'Artifacts', description: 'Container images, layer history' },
  { icon: Cloud, title: 'Cloud', description: 'AWS, Azure, GCP credential exposure' },
  { icon: Lock, title: 'Kubernetes', description: 'Secrets resources, environment variables' },
  { icon: Zap, title: 'Production', description: 'Runtime processes and logs' },
]

const workflowSteps = [
  { label: 'Detect', description: 'Exposed secret found in code, CI/CD, artifact, or runtime' },
  { label: 'Validate', description: 'Check if the credential is active and usable' },
  { label: 'Map', description: 'Link secret to service, owner, workload, and environment' },
  { label: 'Analyze', description: 'Understand cloud permissions and sensitive data access' },
  { label: 'Plan', description: 'Generate safe remediation path with minimal disruption' },
  { label: 'Remediate', description: 'Rotate, revoke, vault, rebuild, and redeploy' },
  { label: 'Verify', description: 'Confirm old secret no longer works and record audit evidence' },
]

const outcomes = [
  'Fewer noisy findings',
  'Faster owner identification',
  'Better risk prioritization',
  'Reduced production risk',
  'Verified remediation',
  'Cleaner audit trail',
]

const integrations = [
  'GitHub', 'GitLab', 'Bitbucket', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Argo CD', 'Spinnaker',
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Container Registries',
  'HashiCorp Vault', 'AWS Secrets Manager', 'Azure Key Vault', 'GCP Secret Manager',
  'Jira', 'ServiceNow', 'Slack',
]

const whyOpsMx = [
  {
    icon: GitBranch,
    title: 'Code-to-Cloud Context',
    description: 'OpsMx connects secrets across source code, CI/CD, containers, cloud, Kubernetes, and runtime.',
  },
  {
    icon: Database,
    title: 'Blast Radius Prioritization',
    description: 'OpsMx prioritizes active secrets by permissions, exposure, sensitive data access, production use, and business impact.',
  },
  {
    icon: Zap,
    title: 'Remediation Workflow',
    description: 'OpsMx routes secrets to the right owners and coordinates revocation, rotation, vaulting, rebuilds, redeployments, and verification.',
  },
  {
    icon: CheckCircle2,
    title: 'Verified Fixes',
    description: 'OpsMx confirms that exposed credentials no longer work and preserves audit evidence.',
  },
  {
    icon: Shield,
    title: 'Built for Enterprise',
    description: 'OpsMx integrates with existing DevSecOps tools, cloud platforms, ticketing systems, and secret managers.',
  },
]

export default function SecretsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Seo route="/secrets" />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Secrets Detection & Remediation <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">from Code to Cloud</span>
            </h1>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Detect hardcoded secrets, leaked credentials, exposed tokens, and risky secret usage across code, CI/CD, containers, cloud, Kubernetes, and production — then prioritize by blast radius, remediate safely, and verify the fix.
            </p>
            <p className="text-lg text-slate-400 mb-8 font-semibold">Find secrets. Understand blast radius. Fix them safely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/request-a-demo" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold hover:from-red-400 hover:to-red-500 transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2">
                See Secrets Blast Radius Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all">
                Explore Remediation Workflow
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secrets Workflow Animation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SecretsWorkflowAnimation />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">Secret Leaks Are Not Equal</h2>
            <p className="text-lg text-slate-300">Some are noise. Some are production risk.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <ProblemCard
              icon={Package}
              title="Too Many Findings"
              description="Secret scanners generate large volumes of findings without explaining which credentials are active, deployed, or dangerous."
            />
            <ProblemCard
              icon={Cloud}
              title="No Blast Radius"
              description="Teams need to know what the credential can access, where it runs, and whether sensitive data is exposed."
            />
            <ProblemCard
              icon={Lock}
              title="Hard to Fix Safely"
              description="Rotating secrets requires owners, cloud permissions, CI/CD changes, rebuilds, redeployments, and verification."
            />
          </div>
        </div>
      </section>

      {/* Demo Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-black text-white mb-4">AWS Key in Code. PII at Risk in Production.</h2>
          </motion.div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-4">
            {[
              { step: 1, text: 'Developer commits AWS key accidentally' },
              { step: 2, text: 'OpsMx detects it in pull request' },
              { step: 3, text: 'Secret persists in container layer' },
              { step: 4, text: 'Image is deployed to Kubernetes cluster' },
              { step: 5, text: 'Key has S3 access to customer PII' },
              { step: 6, text: 'OpsMx maps owner, blast radius, remediation, and verification' },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: item.step * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-red-400">{item.step}</span>
                </div>
                <span className="text-slate-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 p-4 rounded-lg border border-cyan-500/30 bg-cyan-500/5"
          >
            <p className="text-sm text-cyan-300">
              <span className="font-bold">OpsMx maps the complete exposure path</span> from developer to production and drives the workflow to verified remediation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Secrets Coverage Across the SDLC
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coverageItems.map((item) => (
              <CoverageCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-6 text-center"
          >
            Stop Treating Every Secret Leak the Same
          </motion.h2>
          <p className="text-center text-slate-300 mb-12 max-w-3xl mx-auto">
            Most tools identify exposed secrets. OpsMx correlates each secret with runtime, cloud, application, ownership, and data context so teams can focus on the credentials that create real exposure.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-red-500/30 bg-red-500/5 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Without OpsMx</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-1">•</span>
                  <span>Thousands of secret findings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-1">•</span>
                  <span>No ownership context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-1">•</span>
                  <span>No runtime visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-1">•</span>
                  <span>No cloud permission mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-1">•</span>
                  <span>No proof of fix</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-1">•</span>
                  <span>Manual investigation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">With OpsMx</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span>Active production secrets identified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span>Prioritized by blast radius</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span>Routed to owners automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span>Remediation guidance generated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span>Fixes verified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-1">✓</span>
                  <span>Complete audit trail</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remediation Workflow Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            From Secret Finding to Verified Fix
          </motion.h2>
          <div className="space-y-4">
            {workflowSteps.map((step, idx) => (
              <WorkflowStep
                key={idx}
                number={idx + 1}
                label={step.label}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Remediation Actions Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Remediation Actions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Secret Actions</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {['Revoke exposed key', 'Rotate credential', 'Remove secret from repo history', 'Move to HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, or GCP Secret Manager'].map((action) => (
                  <li key={action} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Deployment Actions</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {['Replace hardcoded value with secret reference', 'Update CI/CD variables', 'Rebuild clean container image', 'Redeploy workload', 'Verify old credential no longer works'].map((action) => (
                  <li key={action} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Works Across Your Security Stack
          </motion.h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {integrations.map((integration) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-slate-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
              >
                {integration}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Outcomes Security and Engineering Can Measure
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OpsMx Section */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Why OpsMx for Secrets?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyOpsMx.map((item, idx) => (
              <WhyOpsMxCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-red-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">Find Exposed Secrets Before Attackers Do</h2>
            <p className="text-lg text-slate-300 mb-8">
              See how OpsMx connects secrets, services, cloud permissions, data access, and remediation workflows into one code-to-cloud exposure view.
            </p>
            <a href="/request-a-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold hover:from-red-400 hover:to-red-500 transition-all shadow-lg shadow-red-500/20">
              See Secrets Blast Radius Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
