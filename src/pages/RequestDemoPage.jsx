import { useEffect, useRef, useState } from 'react'

import Navbar from '../components/Navbar'

import Seo from '../components/Seo'

import SourceToProductionPipeline from '../components/SourceToProductionPipeline'

export default function RequestDemoPage() {
  const formContainerId = 'hubspot-form-container'

  const [formLoaded, setFormLoaded] = useState(false)

  const scriptLoaded = useRef(false)

  const formHostRef = useRef(null)

  useEffect(() => {
    if (scriptLoaded.current) return

    const loadHubSpotForm = () => {
      scriptLoaded.current = true

      const createForm = () => {
        // Only create if the container exists and is empty (avoid double-injection)
        if (window.hbspt && window.hbspt.forms && formHostRef.current) {
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
        }
      }

      if (window.hbspt) {
        createForm()
      } else {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/embed/v2.js'
        script.charset = 'utf-8'
        script.type = 'text/javascript'
        script.async = true
        script.onload = createForm
        script.onerror = () => {
          console.error('Failed to load HubSpot forms script')
          setFormLoaded(false)
        }
        document.body.appendChild(script)
      }
    }

    const timer = setTimeout(loadHubSpotForm, 100)

    return () => {
      clearTimeout(timer)
      // Let HubSpot's own nodes go with the container; React never tracked them
      if (formHostRef.current) formHostRef.current.innerHTML = ''
    }
  }, [])

  return (
    <>
      <Navbar />
      <Seo />

      <div>
        <section>
          <div>
            <div>
              <div>
                <p className="text-base text-slate-400 leading-relaxed mb-12 max-w-2xl">
                  OpsMx helps security, development, and DevOps teams prioritize and remediate risks across code, dependencies, CI/CD pipelines, Kubernetes, cloud infrastructure, and AI applications.
                </p>

                <p className="text-base text-slate-400 leading-relaxed mb-12 max-w-2xl">
                  Tell us what you're trying to improve, and we'll tailor the demo to your environment and priorities.
                </p>

                {/* Capabilities Section */}
                <div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-7 lg:p-8">

                  {/* Form Heading */}
                  <h2 className="text-xl lg:text-2xl font-bold text-white mb-1">
                    Request a Demo
                  </h2>

                  <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                    Tell us your priorities. We'll focus the demo accordingly.
                  </p>

                  {/* HubSpot Form Container — spinner is a SIBLING overlay, never a child of the mount */}
                  <div className="relative min-h-[180px]">
                    {!formLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center py-16 pointer-events-none">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-8 h-8 border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin motion-safe:animate-spin motion-reduce:animate-none" />
                          <p className="text-xs text-slate-400">Loading form...</p>
                        </div>
                      </div>
                    )}

                    {/* HubSpot's exclusive DOM — React renders NO children here */}
                    <div
                      id={formContainerId}
                      ref={formHostRef}
                      className="hubspot-form-wrapper"
                    />

                    {/* JavaScript Fallback */}
                    <noscript>
                      <p className="text-sm text-slate-300 py-8 text-center">
                        Please enable JavaScript, or email{' '}
                        <a
                          href="mailto:info@opsmx.com"
                          className="text-cyan-400 hover:text-cyan-300 underline focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-navy-950 rounded px-1"
                        >
                          info@opsmx.com
                        </a>
                      </p>
                    </noscript>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="relative py-16 lg:py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg border border-white/8">
                <p className="text-sm font-semibold text-slate-200 mb-2">Security Leaders</p>
                <p className="text-xs text-slate-400 leading-relaxed">Prioritize high-impact risks and eliminate alert fatigue with context-driven detection and remediation.</p>
              </div>

              <div className="p-5 rounded-lg border border-white/8">
                <p className="text-sm font-semibold text-slate-200 mb-2">DevOps & Platform Teams</p>
                <p className="text-xs text-slate-400 leading-relaxed">Automate remediation across infrastructure, CI/CD pipelines, and Kubernetes without manual intervention.</p>
              </div>

              <div className="p-5 rounded-lg border border-white/8">
                <p className="text-sm font-semibold text-slate-200 mb-2">Development Teams</p>
                <p className="text-xs text-slate-400 leading-relaxed">Catch and fix vulnerabilities in code and dependencies early, including AI-generated code.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
