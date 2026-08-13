import { motion } from 'framer-motion'
import { ArrowRight, AlertTriangle, Shield, Code2, Package, Cloud, Users, CheckCircle, Clock, Lock, Eye, Zap, Target } from 'lucide-react'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'

const contextAreas = [
  {
    title: 'Code Context',
    description: 'Source structure, framework usage, vulnerable APIs, and code reachability.',
    icon: Code2,
    color: '#22d3ee',
  },
  {
    title: 'Composition Context',
    description: 'SCA, direct and transitive dependencies, SBOMs, container and artifact composition.',
    icon: Package,
    color: '#a78bfa',
  },
  {
    title: 'Delivery Context',
    description: 'Builds, registries, approvals, releases, promotion history, and rollback candidates.',
    icon: Clock,
    color: '#fbbf24',
  },
  {
    title: 'Deployment Context',
    description: 'Cloud, Kubernetes, namespaces, workloads, ingress, VPCs, network paths, and identity.',
    icon: Cloud,
    color: '#34d399',
  },
  {
    title: 'Runtime Context',
    description: 'Actual exposure, service behavior, logs, metrics, and downstream resources.',
    icon: Shield,
    color: '#60a5fa',
  },
  {
    title: 'Team Context',
    description: 'Repository owners, application owners, release owners, security owners, and responsible teams.',
    icon: Users,
    color: '#f472b6',
  },
]

const horizons = [
  {
    title: 'Past',
    description: 'Which historical builds, artifacts, product releases, deployments, and customer distributions contained the vulnerability?',
  },
  {
    title: 'Present',
    description: 'Which applications, services, workloads, and environments are affected and exposed now?',
  },
  {
    title: 'In Flight',
    description: 'Which affected artifacts are already built, approved, staged, scheduled, or available as rollback candidates?',
  },
  {
    title: 'Future',
    description: 'Which repositories, branches, frameworks, and build definitions will continue producing vulnerable software?',
  },
]

const containmentCapabilities = [
  'Create an emergency policy for the newly disclosed CVE',
  'Reevaluate artifacts that passed before the CVE was known',
  'Quarantine affected artifacts',
  'Block pending promotions and deployments',
  'Stop further distribution to environments or customers',
  'Invalidate stale approvals',
  'Prevent rollback to vulnerable versions',
  'Allow governed exceptions only when approved compensating controls exist',
]

const responsePaths = [
  {
    title: 'Patch Now',
    description: 'Apply an available and operationally safe permanent fix.',
    color: '#34d399',
  },
  {
    title: 'Compensate',
    description: 'Apply a targeted compensating control when an immediate upgrade is unsafe.',
    color: '#60a5fa',
  },
  {
    title: 'Isolate',
    description: 'Restrict, drain, disable, or shut down the affected workload when risk cannot otherwise be reduced.',
    color: '#fbbf24',
  },
  {
    title: 'Accept Temporarily',
    description: 'Create a time-bound, explicitly approved risk exception with monitoring and an expiration date.',
    color: '#f472b6',
  },
]

const deploymentStages = [
  'Tainted',
  'Quarantined',
  'Fix Proposed',
  'Fix Validated',
  'Eligible',
  'Progressively Deployed',
  'Production Verified',
  'Closed',
]

const outcomeThemes = [
  'Faster time to impact assessment',
  'Faster time to containment',
  'Fewer vulnerable releases reaching production',
  'Faster engineering mobilization',
  'More targeted remediation decisions',
  'Evidence-backed executive reporting',
  'Verified closure rather than ticket closure',
]

function ContextCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all"
    >
      <div className="p-3 rounded-lg inline-flex mb-4" style={{ background: `${item.color}18`, border: `1px solid ${item.color}28` }}>
        <item.icon className="w-6 h-6" style={{ color: item.color }} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
    </motion.div>
  )
}

function HorizonCard({ horizon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
    >
      <h3 className="text-xl font-black text-white mb-3" style={{ color: '#22d3ee' }}>
        {horizon.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">{horizon.description}</p>
    </motion.div>
  )
}

function ResponsePathCard({ path, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-xl border-l-4 border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition-all"
      style={{ borderLeftColor: path.color }}
    >
      <h3 className="text-lg font-bold text-white mb-2" style={{ color: path.color }}>
        {path.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">{path.description}</p>
    </motion.div>
  )
}

function OutcomeCard({ theme, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
        <p className="text-sm font-semibold text-white">{theme}</p>
      </div>
    </motion.div>
  )
}

function StrategicFlowCard({ icon: Icon, title, description, number, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-white/10 bg-white/5 p-8 hover:border-white/20 hover:bg-white/8 transition-all relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: `radial-gradient(circle, ${color}, transparent)` }} />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg" style={{ background: `${color}18`, border: `1px solid ${color}28` }}>
            <Icon className="w-6 h-6" style={{ color }} />
          </div>
          <div className="text-4xl font-black opacity-10" style={{ color }}>
            {number}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

function TimelineNode({ horizon, index, total }) {
  const isLast = index === total - 1
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex gap-6"
    >
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-2 border-cyan-400 bg-navy-950 z-10 relative" />
        {!isLast && (
          <div className="w-0.5 h-24 bg-gradient-to-b from-cyan-400 to-transparent mt-3" />
        )}
      </div>
      {/* Content */}
      <div className="pb-12 flex-1 pt-1">
        <h3 className="text-xl font-black text-cyan-400 mb-3">{horizon.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{horizon.description}</p>
      </div>
    </motion.div>
  )
}

function ResponseStep({ step, index, total }) {
  const isLast = index === total - 1
  return (
    <div className="flex gap-4 mb-6 md:mb-0">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm z-10 relative flex-shrink-0"
        >
          {index + 1}
        </motion.div>
        {!isLast && (
          <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-slate-700 mt-2 hidden md:block" />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="pt-1.5 pb-8 md:pb-0"
      >
        <h4 className="font-bold text-white text-sm mb-1">{step}</h4>
        <div className="h-0.5 w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
      </motion.div>
    </div>
  )
}

export default function ZeroDayContainmentPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Seo route="/solutions/zero-day-containment-and-remediation" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold mb-6">
              <AlertTriangle className="w-4 h-4" /> Zero-Day Response
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Contain Zero-Days{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-red-400">
                Before the Impact Expands
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
              Understand the complete impact radius across code, software composition, artifacts, delivery pipelines, deployments, runtime environments, and engineering ownership. Stop vulnerable software already in motion, accelerate remediation, and verify that the risk is gone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                Request a Zero-Day Demo <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                See the Response Workflow
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Flow Section */}
      <section className="py-20 px-6 border-b border-white/5 bg-gradient-to-b from-white/2 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">OpsMx Zero-Day Response Strategy</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Three connected capabilities that together turn awareness into action</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <StrategicFlowCard
              icon={Eye}
              number="1"
              title="Identify Impact Radius"
              description="Map the complete zero-day impact across code, dependencies, artifacts, pipelines, deployments, and teams—in minutes, not days."
              color="#22d3ee"
            />
            <StrategicFlowCard
              icon={Zap}
              number="2"
              title="Prevent Radius Growth"
              description="Stop vulnerable software already in motion. Block deployments, quarantine artifacts, enforce policies, and activate compensating controls."
              color="#fbbf24"
            />
            <StrategicFlowCard
              icon={Target}
              number="3"
              title="Drive Down Through Remediation"
              description="Coordinate verified fixes, validate security and functional correctness, deploy clean builds, and verify that all exposure is gone."
              color="#34d399"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-12">
              A Zero-Day Is a Race Against an Expanding Impact Radius
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <p className="text-slate-300"><span className="font-semibold">Vulnerable software may already be running.</span> When a CVE is disclosed, your production environments may contain the affected component.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <p className="text-slate-300"><span className="font-semibold">Historical releases may have exposed customers for years.</span> Previous product versions in customer hands may contain the same vulnerability.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <p className="text-slate-300"><span className="font-semibold">Previously approved artifacts may be moving toward production.</span> Deployments already staged or in rollout pipelines may be vulnerable.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <p className="text-slate-300"><span className="font-semibold">Source branches may continue producing vulnerable artifacts.</span> New builds will perpetuate the vulnerability until the source fix lands.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <p className="text-slate-300"><span className="font-semibold">Some applications cannot safely apply the vendor upgrade immediately.</span> Operational or compatibility constraints may prevent direct patching.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <p className="text-slate-300"><span className="font-semibold">Security teams must coordinate many engineering and platform owners.</span> Response requires alignment across dozens of teams under extreme time pressure.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
              <p className="text-lg text-white leading-relaxed">
                <span className="font-bold">Finding the vulnerability is not enough.</span> Organizations must stop its spread, choose the safest response, and prove that the response worked.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Radius Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              See the Complete Zero-Day Impact Radius
            </h2>
            <p className="text-lg text-slate-400 mb-12">
              Six connected context areas. <span className="text-white font-semibold">OpsMx connects these contexts and puts them to work.</span>
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contextAreas.map((item, idx) => (
                <ContextCard key={idx} item={item} index={idx} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lifecycle Horizons Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Vulnerability Lifecycle: Past to Future
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl">
              OpsMx tracks where the vulnerability has been, where it exists now, what's already in motion, and what will continue producing vulnerable software.
            </p>

            {/* Timeline Visualization */}
            <div className="bg-white/3 border border-white/10 rounded-xl p-10 mb-8">
              <div className="max-w-3xl">
                {horizons.map((horizon, idx) => (
                  <TimelineNode key={idx} horizon={horizon} index={idx} total={horizons.length} />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
              <p className="text-white">
                <span className="font-bold">Understanding all four horizons is critical.</span> A zero-day response that fails to address any one of these creates unmitigated exposure.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Containment Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Prevent the Impact Radius from Growing
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-3xl">
              The <span className="font-semibold text-white">OpsMx Deployment Firewall</span> creates an emergency control point.
            </p>
            <div className="space-y-3 mb-10">
              {containmentCapabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-start gap-3 p-3 rounded-lg border border-white/8 bg-white/3"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{cap}</span>
                </motion.div>
              ))}
            </div>
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
              <p className="text-lg text-white">
                <span className="font-bold">Other tools can inform a deployment decision.</span> OpsMx can govern and enforce it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Response Paths Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Choose the Safest Response for Every Affected Application
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl">
              OpsMx uses application, code, deployment, and runtime context to recommend controls appropriate to the actual architecture.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {responsePaths.map((path, idx) => (
                <ResponsePathCard key={idx} path={path} index={idx} />
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Compensating Control Examples</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'WAF or API gateway rule',
                  'Kubernetes NetworkPolicy',
                  'Security-group restriction',
                  'IAM or service-account reduction',
                  'Redis ACL or configuration change',
                  'Disablement of an affected endpoint, command, or feature',
                  'Runtime monitoring or isolation',
                ].map((example, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{example}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-6 pt-6 border-t border-white/10">
                Context-specific recommendations subject to approval and verification.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Response Workflow Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              The Complete Zero-Day Response Workflow
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl">
              From impact assessment through verified deployment closure, OpsMx orchestrates every step.
            </p>

            {/* Workflow Timeline */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
                {[
                  'Assess Impact',
                  'Contain Expansion',
                  'Select Response',
                  'Remediate',
                  'Validate',
                  'Deploy',
                  'Verify',
                  'Report',
                ].map((step, idx) => (
                  <ResponseStep key={idx} step={step} index={idx} total={8} />
                ))}
              </div>
            </div>

            {/* Workflow Description */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-cyan-400 mb-3">Detection & Assessment</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Impact assessment, affected component identification, and reachability analysis across all seven context areas.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-yellow-400 mb-3">Containment & Remediation</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Policy enforcement, artifact quarantine, compensating controls, and coordinated fix development with engineering teams.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-emerald-400 mb-3">Validation & Closure</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Security and functional validation, safe deployment, runtime verification, and executive reporting on closure status.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6 mt-8">
              <p className="text-white">
                <span className="font-bold">Each step depends on the previous one.</span> OpsMx ensures no gaps exist—no vulnerable software escapes containment, no fix deploys without validation, and no response claims closure without evidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Mobilization Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Turn Impact Analysis Into Coordinated Engineering Action
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-cyan-400">OpsMx Identifies and Activates</h3>
                <ul className="space-y-3">
                  {[
                    'Responsible teams and owners',
                    'Generate context-rich Jira tickets and alerts',
                    'Show the affected dependency path, reachable code, artifacts, deployments, and priority',
                    'Generate or assist with source-code remediation',
                    'Create a pull request for engineering review',
                    'Track the fix from PR through build, artifact, deployment, and production replacement',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6 h-fit">
                <p className="text-white leading-relaxed">
                  <span className="font-bold">AI helps generate and reason about the fix.</span> OpsMx supplies the context, governance, delivery orchestration, and verification.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fix Validation Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-12">
              Validate the Security Fix—Then Use Your Existing Tests to Prove Application Health
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-5">Security-Fix Validation</h3>
                <ul className="space-y-3">
                  {[
                    'Rebuild the artifact',
                    'Regenerate the SBOM',
                    'Rescan with SCA',
                    'Confirm that the targeted vulnerable component or reachable path is removed',
                    'Check for newly introduced detectable security risks',
                    'Validate artifact signature and provenance where configured',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-5">Functional Validation</h3>
                <ul className="space-y-3">
                  {[
                    'Identify modified code paths',
                    'Evaluate relevant existing test coverage',
                    'Generate or recommend targeted unit tests',
                    'Integrate with your existing CI, unit, integration, regression, and coverage systems',
                    'Use staging, canary, and observability evidence where connected',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 mt-8">
              <p className="text-slate-300 leading-relaxed">
                <span className="font-bold text-white">AI analyzes likely breaking changes and helps generate targeted tests.</span> Customer testing and runtime evidence validate broader functional correctness. OpsMx does not guarantee that no functionality can break—your testing environment and monitoring provide that assurance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verified Deployment Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-12">
              Deploy the Clean Artifact and Prove the Vulnerable Estate Is Gone
            </h2>
            <div className="flex overflow-x-auto pb-4 mb-8 gap-3">
              {deploymentStages.map((stage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex-shrink-0 px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-center"
                >
                  <div className="text-xs font-bold text-cyan-400">{i + 1}</div>
                  <div className="text-sm font-semibold text-white whitespace-nowrap">{stage}</div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                <span className="font-bold text-white">The rebuilt artifact is reevaluated by the Deployment Firewall.</span> A clean and compliant artifact becomes eligible for deployment.
              </p>
              <p>
                <span className="font-bold text-white">The customer's existing delivery process performs the deployment.</span> OpsMx can coordinate progressive rollout and observe connected health signals.
              </p>
              <p>
                <span className="font-bold text-white">Closure requires confirmation</span> that vulnerable production instances and unsafe rollback references have been replaced or controlled.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CISO Command View Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-8">
              Give Leadership a Live, Evidence-Backed Status
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8">
              <p className="text-cyan-400 font-mono text-sm mb-6 font-semibold">Query example:</p>
              <p className="text-white text-lg font-semibold mb-8">
                "Give me the executive status of CVE-XXXX."
              </p>
              <div className="space-y-3">
                {[
                  'Impact-radius status',
                  'Remaining production exposure',
                  'Artifacts blocked',
                  'Compensating controls active',
                  'Tickets, owners, PRs, and blockers',
                  'Clean artifacts deployed',
                  'Historical releases requiring PSIRT review',
                  'Evidence still needed before closure',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-12">What Zero-Day Readiness Looks Like</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {outcomeThemes.map((theme, idx) => (
                <OutcomeCard key={idx} theme={theme} index={idx} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-cyan-950/20 to-navy-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Be Ready Before the Next Zero-Day Is Announced
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              See how OpsMx can map the impact, stop vulnerable software in motion, coordinate remediation, and verify recovery across one focused zero-day scenario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2">
                Request a Zero-Day Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://www.opsmx.com/talk-to-an-application-security-expert/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200 inline-flex items-center justify-center gap-2">
                Talk to an Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
