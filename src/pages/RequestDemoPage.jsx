import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'

export default function RequestDemoPage() {
  const formContainerId = 'hubspot-form-container'
  const [formLoaded, setFormLoaded] = useState(false)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return

    const loadHubSpotForm = () => {
      scriptLoaded.current = true

      // Check if hbspt already exists (from previous page loads)
      if (window.hbspt) {
        try {
          window.hbspt.forms.create({
            portalId: '2985751',
            formId: '7faf7578-5789-462a-9078-72fc14fcd787',
            target: `#${formContainerId}`,
            region: 'na1',
            onFormReady: () => setFormLoaded(true),
          })
        } catch (error) {
          console.error('Error creating HubSpot form:', error)
          setFormLoaded(false)
        }
      } else {
        // Load the HubSpot forms script
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/embed/v2.js'
        script.charset = 'utf-8'
        script.type = 'text/javascript'
        script.async = true

        script.onload = () => {
          if (window.hbspt && window.hbspt.forms) {
            try {
              window.hbspt.forms.create({
                portalId: '2985751',
                formId: '7faf7578-5789-462a-9078-72fc14fcd787',
                target: `#${formContainerId}`,
                region: 'na1',
                onFormReady: () => setFormLoaded(true),
              })
            } catch (error) {
              console.error('Error creating HubSpot form after script load:', error)
              setFormLoaded(false)
            }
          }
        }

        script.onerror = () => {
          console.error('Failed to load HubSpot forms script')
          setFormLoaded(false)
        }

        document.body.appendChild(script)
      }
    }

    // Use setTimeout to ensure DOM is ready
    const timer = setTimeout(loadHubSpotForm, 100)
    return () => clearTimeout(timer)
  }, [])

  const capabilities = [
    'Identify vulnerabilities and misconfigurations that can reach production',
    'Prioritize risks using application, runtime, and deployment context',
    'Generate and execute fixes across code, cloud, Kubernetes, and delivery workflows',
    'Verify that remediation worked and preserve the evidence',
    'Secure AI-generated code, AI models, and LLM applications',
    'Automate compliance, governance, and software supply-chain controls',
  ]

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Seo
        route="/request-a-demo"
        title="Request an OpsMx Demo | Application Security and Remediation"
        description="See how OpsMx helps teams prioritize and remediate application risks across code, dependencies, cloud, Kubernetes, CI/CD, and AI applications."
      />
      <Navbar />

      {/* Hero Section with Two-Column Layout */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[58fr_42fr] gap-12 items-start">
            {/* Left Column: Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-4">
                  AI-Powered Application Security and Remediation
                </span>
                <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
                  Find and Fix the Application Risks That Matter Most
                </h1>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                OpsMx helps security, development, and DevOps teams prioritize and remediate risks across code, dependencies, CI/CD pipelines, Kubernetes, cloud infrastructure, and AI applications.
              </p>

              <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-xl">
                Tell us what you're trying to improve, and we'll tailor the demo to your environment and priorities.
              </p>

              {/* Proof Statement */}
              <div className="mb-12 p-6 rounded-lg border border-white/8 bg-white/[0.02]">
                <p className="text-sm font-semibold text-slate-300">
                  <span className="text-cyan-400">Prioritize</span> with context. <span className="text-cyan-400">Remediate</span> with confidence. <span className="text-cyan-400">Verify</span> every fix.
                </p>
              </div>

              {/* Capabilities Section */}
              <div className="mb-12">
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-6">
                  In your personalized demo, see how OpsMx can help you:
                </h3>
                <ul className="space-y-4">
                  {capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border border-cyan-400/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>
                      <span className="text-slate-300 leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Section */}
              <div className="border-t border-white/8 pt-8">
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">
                  Built for enterprise application environments
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Integrates with your existing source control, CI/CD, security scanners, cloud platforms, Kubernetes environments, and ticketing workflows—without requiring you to replace your current tools.
                </p>
              </div>
            </div>

            {/* Right Column: Form Card */}
            <div className="sticky top-32">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Request a Personalized Demo
                </h2>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                  Tell us what you're trying to improve. We'll focus the conversation and demonstration on those priorities.
                </p>

                {/* HubSpot Form Container */}
                <div id={formContainerId} className="hubspot-form-wrapper">
                  {!formLoaded && (
                    <div className="flex items-center justify-center py-12">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin" />
                        <p className="text-xs text-slate-400">Loading form...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Fallback message if form fails to load */}
                <noscript>
                  <p className="text-xs text-slate-400 py-8 text-center">
                    Please enable JavaScript to load the demo request form, or email us at{' '}
                    <a href="mailto:info@opsmx.com" className="text-cyan-400 hover:text-cyan-300">
                      info@opsmx.com
                    </a>
                  </p>
                </noscript>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional context section */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-white/8 bg-white/[0.02]">
              <p className="text-sm font-semibold text-slate-300 mb-2">Security Leaders</p>
              <p className="text-xs text-slate-400">See how OpsMx prioritizes risk and reduces alert fatigue with context-driven remediation.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/8 bg-white/[0.02]">
              <p className="text-sm font-semibold text-slate-300 mb-2">DevOps & Platform Teams</p>
              <p className="text-xs text-slate-400">See how OpsMx automates remediation across infrastructure, CI/CD, and Kubernetes.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/8 bg-white/[0.02]">
              <p className="text-sm font-semibold text-slate-300 mb-2">Development Teams</p>
              <p className="text-xs text-slate-400">See how OpsMx helps developers secure AI-generated code and fix vulnerabilities early.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
