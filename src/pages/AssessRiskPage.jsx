import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Database, Link as LinkIcon, Target, AlertCircle, CheckCircle, Package, BarChart3, Zap } from 'lucide-react'
import Navbar from '../components/Navbar'
import FinalCTA from '../components/FinalCTA'

// ─── Assess Risk Capabilities ────────────────────────────────────────────────

const capabilities = [
  {
    id: 'context-engine',
    title: 'Context Engine',
    icon: Database,
    color: '#22d3ee',
    overview: 'OpsMx correlates applications, APIs, code, dependencies, cloud infrastructure, Kubernetes clusters, runtime environments, deployments, business services, and ownership across your entire software delivery chain.',
    whyItMatters: 'Without context, security findings are isolated data points. With context, each finding becomes actionable intelligence about what matters to the business.',
    inputs: [
      'Application metadata and configuration',
      'Source code repositories and commit history',
      'Dependency manifests and SBOM',
      'Cloud infrastructure and IaC templates',
      'Kubernetes manifests and cluster state',
      'Runtime behavior and execution traces',
      'Deployment pipelines and release history',
      'Team ownership and organizational structure',
    ],
    useCases: [
      'A SAST finding is correlated to the team that owns the code and the service it powers',
      'A cloud misconfiguration is linked to the business-critical database it protects',
      'A vulnerable dependency is mapped to which applications consume it and how they are deployed',
      'A runtime behavior anomaly is connected to the specific deployment and user impact',
    ],
    outcomes: [
      'Eliminate information silos between security, development, and operations',
      'Empower teams with context about their own risk',
      'Connect findings to business impact and ownership',
      'Enable precise remediation targeting',
    ],
  },
  {
    id: 'vulnerability-correlation',
    title: 'Vulnerability Correlation',
    icon: LinkIcon,
    color: '#a78bfa',
    overview: 'OpsMx correlates vulnerabilities detected by multiple tools across SAST, SCA, DAST, API security, cloud, Kubernetes, SBOM, AI-BOM, containers, and runtime monitoring to create a unified risk picture.',
    whyItMatters: 'Different tools find the same vulnerability from different angles. Correlation deduplicates findings, unifies them, and prevents alert fatigue while ensuring nothing is missed.',
    inputs: [
      'SAST findings from static code analysis',
      'SCA findings from software composition analysis',
      'DAST findings from dynamic application testing',
      'API security findings from runtime testing',
      'Cloud security findings from CSPM/CNAPP',
      'Kubernetes security findings from admission controllers',
      'Container image vulnerability findings',
      'SBOM and dependency intelligence',
      'AI-generated code and model vulnerabilities',
      'Runtime behavioral anomalies and threats',
    ],
    useCases: [
      'SAST, SCA, and DAST all report the same vulnerability in different contexts — correlated into one finding',
      'A vulnerable package is detected by both SCA and container scanning — unified into a single remediation task',
      'An API endpoint vulnerability is detected at the code level, in traffic, and in policy — prioritized with confidence',
      'A supply chain attack vector is detected through SBOM intelligence, provenance checking, and runtime monitoring',
    ],
    outcomes: [
      'Reduce alert volume by 60-80% through intelligent deduplication',
      'Increase finding confidence through multiple detection vectors',
      'Enable faster triage with unified findings',
      'Prevent dangerous findings from being missed due to tool blind spots',
    ],
  },
  {
    id: 'exploitability',
    title: 'Exploitability',
    icon: Target,
    color: '#ef4444',
    overview: 'OpsMx determines whether a vulnerability can actually be exploited in your current environment based on code paths, dependencies, configuration, runtime permissions, and attack surface.',
    whyItMatters: 'Not all vulnerabilities are exploitable. A theoretical code path may never execute. A permission requirement may block the attack. OpsMx identifies truly exploitable risk.',
    inputs: [
      'Vulnerable code and its call paths',
      'Dependency exposure and function usage',
      'Security context and permissions',
      'Authentication and authorization policies',
      'WAF and network policy rules',
      'Container and process isolation',
      'RBAC and access control',
      'Deployment configuration',
    ],
    useCases: [
      'A code vulnerability exists but the vulnerable function is never called in production — marked as non-exploitable',
      'A deserialization vulnerability requires specific input that is validated before reaching the vulnerable code — exploitability reduced',
      'A privilege escalation vulnerability requires capabilities that the container doesn\'t have — not exploitable',
      'An SQL injection vulnerability is protected by parameterized queries and input validation — not exploitable',
    ],
    outcomes: [
      'Focus remediation effort on truly exploitable risk',
      'Reduce false positives by 40-70%',
      'Accelerate triage with clear exploitability indicators',
      'Justify false positive acceptance with data',
    ],
  },
  {
    id: 'reachability',
    title: 'Reachability',
    icon: AlertCircle,
    color: '#06b6d4',
    overview: 'OpsMx determines whether vulnerable code, APIs, packages, services, or workloads are reachable through real execution paths or exposed attack surfaces.',
    whyItMatters: 'Code that is never executed or reached is not a risk. Reachability analysis focuses remediation effort on findings that matter.',
    inputs: [
      'Execution traces and call graphs',
      'API endpoint routing and exposure',
      'Network routes and connectivity',
      'Service mesh configuration',
      'Load balancer rules',
      'Container network policies',
      'Firewall rules and security groups',
      'Deployment architecture',
    ],
    useCases: [
      'A vulnerable dependency is imported but not used in any code path — marked as not reachable',
      'An API endpoint is vulnerable but only accessible internally — reachability assessment reduces risk',
      'A microservice is vulnerable but not exposed to external traffic — reachability shows true attack surface',
      'A container image has a vulnerability but the vulnerable binary is not in the execution path — marked as not reachable',
    ],
    outcomes: [
      'Eliminate findings for unreachable or internal-only vulnerabilities',
      'Focus remediation on truly exposed attack surface',
      'Reduce remediation backlog by 30-50%',
      'Accelerate security risk assessment',
    ],
  },
  {
    id: 'root-cause-diagnosis',
    title: 'Root Cause Diagnosis',
    icon: CheckCircle,
    color: '#34d399',
    overview: 'OpsMx identifies where the issue originated, which component introduced it, which owner is responsible, and what needs to change to fix it at the source.',
    whyItMatters: 'Fixing symptoms is temporary. Fixing root cause is permanent. Root cause diagnosis guides teams to fix issues at the source, not just in one place.',
    inputs: [
      'Git commit history and code archaeology',
      'Dependency version history and upgrades',
      'Configuration change history',
      'Team ownership and responsibility mapping',
      'Package and build metadata',
      'Policy definitions and deviations',
      'Infrastructure-as-code history',
    ],
    useCases: [
      'A vulnerability is traced back to a specific commit and the engineer responsible — enabling direct communication and learning',
      'A misconfiguration is found to have been introduced by Infrastructure-as-Code template — fixing the template fixes it everywhere',
      'A vulnerable dependency was introduced by a specific team member — enabling training and process improvement',
      'A supply chain issue is traced to a specific third-party vendor — enabling vendor communication and contract negotiation',
    ],
    outcomes: [
      'Enable sustainable security improvements through root cause fixes',
      'Improve team learning and process quality',
      'Reduce repeat vulnerabilities by 80%+',
      'Build accountability without blame',
    ],
  },
  {
    id: 'false-positive-reduction',
    title: 'False Positive Reduction',
    icon: Zap,
    color: '#f59e0b',
    overview: 'OpsMx removes noise using runtime context, reachability analysis, exploitability assessment, ownership mapping, deployment information, and business context to eliminate false positives.',
    whyItMatters: 'False positives erode trust in security tools and waste team time. OpsMx reduces false positives by 60-80% through intelligent context.',
    inputs: [
      'Runtime behavior and real traffic',
      'Reachability and exploitability analysis',
      'Business context and criticality',
      'Team ownership and expertise',
      'Deployment environment and configuration',
      'Historical vulnerability data',
      'Tool accuracy and reliability metrics',
    ],
    useCases: [
      'A SAST finding is marked as non-exploitable based on runtime behavior — removed from findings',
      'A SCA finding for a non-reachable dependency is deprioritized — team focuses on real risks',
      'A vulnerability requires specific configuration that is validated to not be present — false positive eliminated',
      'A finding is in development code that never reaches production — deprioritized',
    ],
    outcomes: [
      'Increase team trust in security tool findings',
      'Reduce alert fatigue by 60-80%',
      'Accelerate triage by 10x',
      'Improve security team efficiency',
    ],
  },
  {
    id: 'supply-chain-risk-assessment',
    title: 'Supply Chain Risk Assessment',
    icon: Package,
    color: '#ec4899',
    overview: 'OpsMx assesses dependency risk, open source health, provenance, vulnerable components, BOM evidence, third-party software risk, and deployed artifact security.',
    whyItMatters: 'Your supply chain is an expanded attack surface. OpsMx provides visibility and control over risk in code you don\'t write but depend on.',
    inputs: [
      'SBOM and dependency manifests',
      'AI-BOM for AI-generated and AI-trained components',
      'Package repository metadata',
      'Open source project health metrics',
      'Provenance and signing verification',
      'Binary artifact attestation',
      'Container image composition',
      'Vulnerability databases',
      'License information',
    ],
    useCases: [
      'A vulnerable dependency is tracked across all applications and environments — enabling coordinated remediation',
      'Open source project health is assessed — identifying unmaintained or risky dependencies',
      'Package provenance is verified — confirming no supply chain attacks',
      'AI-generated code is tracked with AI-BOM — monitoring third-party AI component risk',
    ],
    outcomes: [
      'Achieve continuous supply chain visibility',
      'Reduce supply chain attack impact',
      'Enable proactive dependency management',
      'Build supply chain resilience',
    ],
  },
  {
    id: 'risk-scoring',
    title: 'Risk Scoring',
    icon: BarChart3,
    color: '#60a5fa',
    overview: 'OpsMx scores risk using severity, exploitability, reachability, exposure, business criticality, compliance impact, and remediation status to provide a unified risk metric.',
    whyItMatters: 'Different tools score differently. OpsMx provides a unified risk score that teams can rely on for prioritization and governance.',
    inputs: [
      'Vulnerability severity (CVSS)',
      'Exploitability assessment',
      'Reachability analysis',
      'Business criticality',
      'Compliance requirements',
      'Exposure metrics',
      'Remediation complexity',
      'Time to exploitation',
    ],
    useCases: [
      'A high-severity but non-exploitable vulnerability scores lower than a low-severity but exploitable one',
      'A vulnerability in non-critical service scores lower than one in a customer-facing service',
      'A vulnerability with a known exploit and active attacks scores highest',
      'A vulnerability already being remediated is tracked through the remediation lifecycle',
    ],
    outcomes: [
      'Unified risk scoring across entire environment',
      'Data-driven prioritization and decision-making',
      'Improved security ROI through focused remediation',
      'Better communication with executive leadership',
    ],
  },
  {
    id: 'risk-prioritization',
    title: 'Risk Prioritization',
    icon: Zap,
    color: '#fbbf24',
    overview: 'OpsMx turns thousands of findings into a ranked remediation plan that teams can execute systematically, focusing on what matters first.',
    whyItMatters: 'Without prioritization, teams are overwhelmed. With prioritization, teams are empowered to make progress on security.',
    inputs: [
      'Risk scoring across all findings',
      'Business context and SLAs',
      'Team capacity and expertise',
      'Remediation complexity',
      'Dependency chains',
      'Compliance deadlines',
      'Remediation history',
    ],
    useCases: [
      'Thousands of findings are prioritized into a top-10 that teams should remediate this week',
      'Findings are grouped by team, component, and remediation approach',
      'Critical findings are escalated; low-risk findings are queued',
      'Teams can see exactly what to fix next, why, and how long it will take',
    ],
    outcomes: [
      'Transform overwhelming finding volume into actionable plans',
      'Improve security team velocity',
      'Enable predictable remediation progress',
      'Build team confidence and momentum',
    ],
  },
]

// ─── Table of Contents ───────────────────────────────────────────────────────

function TableOfContents() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      for (const cap of capabilities) {
        const element = document.getElementById(cap.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < 200) {
            setActiveSection(cap.id)
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
      <h3 className="text-sm font-bold text-white mb-4">Capabilities</h3>
      <div className="space-y-2">
        {capabilities.map((cap) => (
          <a
            key={cap.id}
            href={`#${cap.id}`}
            className={`block text-xs p-2 rounded transition-colors ${
              activeSection === cap.id
                ? 'bg-white/10 text-white font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {cap.title}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Capability Section Component ───────────────────────────────────────────

function CapabilitySection({ capability }) {
  const Icon = capability.icon

  return (
    <section
      id={capability.id}
      className="scroll-mt-24 mb-24 space-y-8"
    >
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div
            className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${capability.color}20`, border: `2px solid ${capability.color}` }}
          >
            <Icon className="w-7 h-7" style={{ color: capability.color }} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">{capability.title}</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              {capability.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Why It Matters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-bold text-white">Why It Matters</h3>
          <p className="text-slate-300 leading-relaxed">{capability.whyItMatters}</p>
        </motion.div>

        {/* Business Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-bold text-white">Business Outcomes</h3>
          <ul className="space-y-2">
            {capability.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: capability.color }} />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Inputs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-bold text-white">Inputs Used</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {capability.inputs.map((input, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg border border-white/8 bg-white/4 text-sm text-slate-300"
            >
              {input}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Use Cases */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-bold text-white">Example Use Cases</h3>
        <div className="space-y-3">
          {capability.useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-white/8 bg-white/4"
            >
              <p className="text-sm text-slate-300 leading-relaxed">{useCase}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-white/10 pt-8">
        <a
          href="/opsmx/fix-risk"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
        >
          Move to Fix Risk
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}

// ─── FAQ Section ────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: 'What is risk assessment?',
    a: 'Risk assessment is the process of identifying, analyzing, and prioritizing security risks. OpsMx automates this by correlating findings from multiple tools and providing context about which risks actually matter.',
  },
  {
    q: 'How does OpsMx differ from a vulnerability scanner?',
    a: 'Scanners find issues. OpsMx contextualizes those issues. We correlate findings, assess exploitability and reachability, identify root causes, and prioritize what matters most.',
  },
  {
    q: 'What is the difference between severity and risk?',
    a: 'Severity is how bad a vulnerability is in isolation. Risk is how bad it is in your environment. A high-severity vulnerability in non-critical code is lower risk than a low-severity vulnerability in critical code.',
  },
  {
    q: 'How does context reduce false positives?',
    a: 'False positives occur when tools report issues that don\'t actually pose risk in your environment. Context (reachability, exploitability, permissions, deployment) helps OpsMx eliminate 60-80% of false positives.',
  },
  {
    q: 'Can OpsMx work with existing security tools?',
    a: 'Yes. OpsMx ingests findings from SAST, SCA, DAST, CSPM, Kubernetes security, containers, and runtime monitoring tools, correlating them into unified insights.',
  },
  {
    q: 'How is risk scored?',
    a: 'OpsMx uses a multi-factor scoring model: severity, exploitability, reachability, exposure, business criticality, compliance impact, and remediation status.',
  },
]

function FAQSection() {
  return (
    <section className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-lg text-slate-300">Common questions about risk assessment and OpsMx Assess Risk.</p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, idx) => (
          <motion.details
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg border border-white/8 bg-white/4 cursor-pointer group hover:bg-white/6 transition-colors"
          >
            <motion.summary className="flex items-center justify-between font-semibold text-white select-none">
              {item.q}
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.summary>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">{item.a}</p>
          </motion.details>
        ))}
      </div>
    </section>
  )
}

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function AssessRiskPage() {
  useEffect(() => {
    document.title = 'Assess Risk with Context, Correlation & Prioritization | OpsMx'
  }, [])

  useEffect(() => {
    // Handle anchor navigation
    const scrollToHash = () => {
      const hash = window.location.hash
      if (hash) {
        const elementId = hash.substring(1)
        const element = document.getElementById(elementId)
        if (element) {
          // Use setTimeout to ensure DOM is ready
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' })
          }, 0)
        }
      }
    }

    // Scroll on initial load
    scrollToHash()

    // Scroll on hash change
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return (
    <>
      <Helmet>
        <title>Assess Risk with Context, Correlation & Prioritization | OpsMx</title>
        <meta name="description" content="OpsMx Assess Risk correlates vulnerabilities, exploitability, reachability, runtime context, supply chain risk, root cause diagnosis, risk scoring, and prioritization to help teams fix what matters first." />
        <meta name="keywords" content="risk assessment, vulnerability correlation, exploitability, reachability, risk scoring, false positive reduction, supply chain risk, root cause diagnosis, risk prioritization" />

        {/* Open Graph */}
        <meta property="og:title" content="Assess Risk with Context, Correlation & Prioritization | OpsMx" />
        <meta property="og:description" content="Understand what matters, why it matters, where it runs, who owns it, and what should be fixed first." />
        <meta property="og:type" content="website" />

        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "OpsMx Assess Risk",
            "description": "Risk assessment platform with context, correlation, and intelligence",
            "brand": {
              "@type": "Brand",
              "name": "OpsMx"
            }
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
                "name": "Assess Risk",
                "item": "https://opsmx.com/opsmx/assess-risk"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
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
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 w-fit">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">Assess Risk</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Assess Risk with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Context, Correlation & Intelligence</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl leading-relaxed">
              Understand what matters, why it matters, where it runs, who owns it, and what should be fixed first.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href="/opsmx/fix-risk"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-lg"
            >
              Explore Fix Risk
            </a>
            <a
              href="https://www.opsmx.com/talk-to-an-application-security-expert/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border-2 border-cyan-500/50 text-cyan-300 font-bold hover:bg-cyan-500/10 transition-all text-lg"
            >
              Request Demo
            </a>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Capabilities */}
            <div className="space-y-20">
              {capabilities.map((capability) => (
                <CapabilitySection key={capability.id} capability={capability} />
              ))}
            </div>

            {/* Sticky Table of Contents */}
            <div className="hidden lg:block">
              <TableOfContents />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
          <FAQSection />
        </section>

        <FinalCTA />
      </div>
    </>
  )
}
