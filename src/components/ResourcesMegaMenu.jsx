import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, FileText, Video, Calendar, Newspaper, Code, Shield, GitBranch } from 'lucide-react'

const resourcesData = {
  columns: [
    {
      id: 'resources',
      heading: 'Resources',
      color: '#a78bfa',
      desc: 'Learning materials and community',
      items: [
        { icon: Newspaper, title: 'Blogs',                 desc: 'Security insights and industry updates', href: 'https://opsmx.com/blog/' },
        { icon: Video,     title: 'Webinars',              desc: 'Live and recorded sessions',             href: 'https://www.opsmx.com/webinars/' },
        { icon: FileText,  title: 'Ebooks & Datasheets',   desc: 'Download resources',                    href: 'https://www.opsmx.com/guides-datasheets/' },
        { icon: BookOpen,  title: 'Customer Case Studies', desc: 'Real-world success stories',            href: 'https://www.opsmx.com/customer-case-study/' },
        { icon: Video,     title: 'Video Hub',             desc: 'Product demos and tutorials',           href: 'https://www.opsmx.com/videos/' },
        { icon: Calendar,  title: 'Events',                desc: 'Upcoming conferences and webinars',     href: 'https://opsmx.com/events/' },
        { icon: Code,      title: 'Docs',                  desc: 'API and integration documentation',    href: 'https://docs.opsmx.com/' },
        { icon: Newspaper, title: 'News',                  desc: 'Company announcements',                 href: 'https://www.opsmx.com/in-the-news/' },
      ],
    },
    {
      id: 'security-hub',
      heading: 'Security Hub',
      color: '#34d399',
      desc: 'Security education and knowledge',
      items: [
        { icon: Shield, title: 'What is ASPM?',                  desc: 'Application Security Posture Management', href: 'https://www.opsmx.com/what-is-application-security-posture-management/' },
        { icon: Shield, title: 'What is DevSecOps?',             desc: 'Security in the development lifecycle',   href: 'https://www.opsmx.com/what-is-devsecops/' },
        { icon: Shield, title: 'What is Application Security?',  desc: 'Fundamentals and best practices',         href: 'https://www.opsmx.com/what-is-application-security-posture-management/' },
        { icon: Shield, title: 'Secured Software Delivery',      desc: 'Safe and fast delivery practices',        href: 'https://www.opsmx.com/secured-software-delivery/' },
        { icon: Shield, title: 'Software Supply Chain Security', desc: 'Protecting your dependencies',            href: 'https://www.opsmx.com/blog/how-devsecops-ci-cd-pipeline-secures-the-software-supply-chain/' },
        { icon: Shield, title: 'SAST vs DAST vs SCA',            desc: 'Comparison and use cases',               href: 'https://www.opsmx.com/blog/differences-between-sast-dast-sca-comparing-appsec-strategies/' },
        { icon: Shield, title: 'OpsMx AppSec Community',         desc: 'Join our security community',            href: 'https://ssdcommunity.slack.com/' },
      ],
    },
    {
      id: 'devops-hub',
      heading: 'DevOps Hub',
      color: '#fbbf24',
      desc: 'DevOps and delivery learning',
      items: [
        { icon: GitBranch, title: 'What is GitOps?',              desc: 'Git-driven operations',          href: 'https://www.opsmx.com/what-is-gitops/' },
        { icon: GitBranch, title: 'What is Argo?',                desc: 'GitOps with Argo CD',            href: 'https://www.opsmx.com/what-is-argocd/' },
        { icon: GitBranch, title: 'What is Spinnaker?',           desc: 'Continuous deployment platform', href: 'https://www.opsmx.com/what-is-spinnaker/' },
        { icon: GitBranch, title: 'What is Continuous Delivery?', desc: 'Fast and reliable releases',     href: 'https://www.opsmx.com/what-is-continuous-delivery/' },
        { icon: BookOpen,  title: 'Spinnaker Course',             desc: 'Learn Spinnaker deployment',     href: 'https://www.opsmx.com/spinnaker-course/' },
        { icon: Video,     title: 'Tutorials and Podcasts',       desc: 'Video and audio learning',       href: 'https://www.opsmx.com/tutorials-and-podcasts/' },
      ],
    },
    {
      id: 'documentation',
      heading: 'Documentation',
      color: '#22d3ee',
      desc: 'Technical guides and references',
      items: [
        { icon: BookOpen,   title: 'Scanning Source Code with OpsMx Delivery Shield on Demand',    desc: 'Code security scanning',        href: 'https://www.opsmx.com/opsmx-delivery-shield-on-demand-scan-source-code/' },
        { icon: BookOpen,   title: 'Scanning Artifacts with OpsMx Delivery Shield on Demand',      desc: 'Artifact security',             href: 'https://www.opsmx.com/opsmx-delivery-shield-on-demand-scan-artifacts/' },
        { icon: BookOpen,   title: 'Securing Your Lovable Application with OpsMx Delivery Shield', desc: 'Application hardening',         href: 'https://www.opsmx.com/securing-your-lovable-application-with-opsmx-delivery-shield/' },
        { icon: BookOpen,   title: 'OpsMx Intelligent Software Delivery for Argo',                 desc: 'Argo integration guide',        href: 'https://docs.opsmx.com/opsmx-intelligent-software-delivery-isd-platform-argo/intelligent-software-delivery-isd-for-argo' },
        { icon: BookOpen,   title: 'OpsMx Intelligent Software Delivery for Spinnaker',            desc: 'Spinnaker integration guide',   href: 'https://docs.opsmx.com/overview/opsmx-intelligent-software-delivery-isd-platform-spinnaker' },
        { icon: ArrowRight, title: 'Full Docs',                                                    desc: 'Complete documentation portal', href: 'https://docs.opsmx.com/' },
      ],
    },
  ],
}

function ResourceItem({ item, colColor }) {
  const Icon = item.icon
  return (
    <motion.div whileHover={{ x: 2 }}>
      
        href={item.href}
        className="flex items-start gap-2.5 px-2 py-1.5 rounded-lg group hover:bg-white/4 transition-colors duration-150 no-underline"
      >
        <div
          className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: `${colColor}18`, border: `1px solid ${colColor}28` }}
        >
          <Icon className="w-3 h-3" style={{ color: colColor }} strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-bold text-white transition-colors">
            {item.title}
          </p>
          <p className="text-[11px] font-medium text-slate-300 group-hover:text-slate-100 transition-colors leading-snug mt-0.5 line-clamp-1">
            {item.desc}
          </p>
        </div>
      </a>
    </motion.div>
  )
}

function Column({ col }) {
  return (
    <div className="flex flex-col min-w-0">
      <div className="px-2 pb-2 mb-1 border-b border-white/6">
        <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: col.color }}>
          {col.heading}
        </p>
        <p className="text-[10px] font-medium text-slate-400 leading-snug">{col.desc}</p>
      </div>
      <div className="flex-1 space-y-0.5 overflow-y-auto max-h-[420px] pr-1">
        {col.items.map((item, idx) => (
          <ResourceItem key={idx} item={item} colColor={col.color} />
        ))}
      </div>
    </div>
  )
}

export default function ResourcesMegaMenu({ onClose, onMouseEnter, onMouseLeave }) {
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="fixed top-16 left-0 right-0 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="mx-4 lg:mx-8 xl:mx-auto xl:max-w-6xl rounded-2xl border border-white/8 overflow-hidden"
        style={{
          background: 'rgba(5, 7, 18, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/6">
          <div>
            <p className="text-sm font-bold text-white">Resources</p>
            <p className="text-[11px] font-medium text-slate-300 mt-0.5">
              Learning materials, documentation, and community resources
            </p>
          </div>
          
            href="https://www.opsmx.com/guides-datasheets/"
            className="flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors group whitespace-nowrap no-underline"
            onClick={onClose}
          >
            View all resources
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid p-4 gap-4" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
          {resourcesData.columns.map(col => (
            <Column key={col.id} col={col} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
