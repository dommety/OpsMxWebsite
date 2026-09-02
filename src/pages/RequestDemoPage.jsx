import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import SourceToProductionPipeline from '../components/SourceToProductionPipeline'

export default function RequestDemoPage() {
  const meetingHostRef = useRef(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return
    scriptLoaded.current = true

    const script = document.createElement('script')
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    script.type = 'text/javascript'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Let HubSpot's iframe go with the container; React never tracked it
      if (meetingHostRef.current) meetingHostRef.current.innerHTML = ''
      script.remove()
    }
  }, [])

  const capabilities = [
    'Identify vulnerabilities and misconfigurations that reach production',
    'Prioritize risks using application, runtime, and deployment context',
    'Generate and execute fixes across code, cloud, Kubernetes, and delivery workflows',
    'Verify remediation and preserve compliance evidence',
  ]

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Seo
        route="/request-a-demo"
        title="Request an OpsMx Demo | Application Security and Remediation"
        description="See how OpsMx helps teams prioritize and remediate application risks across code, dependencies, cloud, Kubernetes, CI/CD, and AI applications."
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-28 lg:pt-32 pb-8 lg:pb-0 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/3 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 lg:min-h-[calc(100vh-120px)] lg:items-center">
            {/* Left Column */}
            <div className="py-8 lg:py-0">
              {/* Eyebrow */}
              <div className="mb-6 lg:mb-8">
                <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                  AI-Powered Application Security and Remediation
                </span>
              </div>
              {/* Headline */}
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-8 lg:mb-10">
                Find and Fix the Application Risks That Matter Most
              </h1>
              {/* Proof Statement - Visual Differentiator */}
              <div className="mb-10 lg:mb-12 p-6 lg:p-7 rounded-lg border border-white/10 bg-transparent">
                <p className="text-base lg:text-lg font-semibold text-white leading-relaxed">
                  <span className="text-cyan-400">Prioritize</span> with context.{' '}
                  <span className="text-cyan-400">Remediate</span> with confidence.{' '}
                  <span className="text-cyan-400">Verify</span> every fix.
                </p>
              </div>
              {/* Source-to-Production Pipeline */}
              <SourceToProductionPipeline />
              {/* Supporting Copy */}
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                OpsMx helps security, development, and DevOps teams prioritize and remediate risks across code, dependencies, CI/CD pipelines, Kubernetes, cloud infrastructure, and AI applications.
              </p>
              <p className="text-base text-slate-400 leading-relaxed mb-12 max-w-2xl">
                Pick a time that works for you, and we'll tailor the demo to your environment and priorities.
              </p>
              {/* Capabilities Section */}
              <div>
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-6">
                  In your personalized demo, you'll see how OpsMx:
                </h3>
                <ul className="space-y-3">
                  {capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-cyan-400/40 flex-shrink-0 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </span>
                      <span className="text-slate-300 leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Enterprise Trust */}
              <div className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-white/8">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">
                  Built for enterprise
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                  Integrates seamlessly with your source control, CI/CD, security scanners, cloud platforms, Kubernetes, and ticketing systems—without replacing your existing tools.
                </p>
              </div>
            </div>
            {/* Right Column: Scheduler */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-7 lg:p-8">
                {/* Scheduler Heading */}
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-1">
                  Schedule Your Demo
                </h2>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                  Book a time directly with our team. Pick a slot that suits you.
                </p>
                {/* HubSpot Meetings — isolated in a ref'd div React never renders children into */}
                <div ref={meetingHostRef} className="min-h-[620px]">
                  <div
                    className="meetings-iframe-container"
                    data-src="https://meetings.hubspot.com/shashank-srivastava2?embed=true"
                  />
                </div>
                {/* JavaScript Fallback */}
                <noscript>
                  <p className="text-sm text-slate-300 py-8 text-center">
                    Please enable JavaScript to book a time, or email{' '}
                    <a href="mailto:info@opsmx.com" className="text-cyan-400 hover:text-cyan-300 underline focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-navy-950 rounded px-1">
                      info@opsmx.com
                    </a>
                  </p>
                </noscript>
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
  )
}
