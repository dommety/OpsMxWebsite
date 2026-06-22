import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, FileText, Video, Calendar, Newspaper, Code, Shield, GitBranch } from 'lucide-react'

const resourcesData = {
  columns: [
    {
      id: 'resources',
      heading: 'Resources',
      color: '#a78bfa',
      desc: 'Learning materials and community',
      items: [
        { icon: Newspaper, title: 'Blogs', desc: 'Security insights and industry updates' },
        { icon: Video, title: 'Webinars', desc: 'Live and recorded sessions' },
        { icon: FileText, title: 'Ebooks & Datasheets', desc: 'Download resources' },
        { icon: BookOpen, title: 'Customer Case Studies', desc: 'Real-world success stories' },
        { icon: Video, title: 'Video Hub', desc: 'Product demos and tutorials' },
        { icon: Calendar, title: 'Events', desc: 'Upcoming conferences and webinars' },
        { icon: Code, title: 'Docs', desc: 'API and integration documentation' },
        { icon: Newspaper, title: 'News', desc: 'Company announcements' },
      ],
    },
    {
      id: 'security-hub',
      heading: 'Security Hub',
      color: '#34d399',
      desc: 'Security education and knowledge',
      items: [
        { icon: Shield, title: 'What is ASPM?', desc: 'Application Security Posture Management' },
        { icon: Shield, title: 'What is DevSecOps?', desc: 'Security in the development lifecycle' },
        { icon: Shield, title: 'What is Application Security?', desc: 'Fundamentals and best practices' },
        { icon: Shield, title: 'Secured Software Delivery', desc: 'Safe and fast delivery practices' },
        { icon: Shield, title: 'Software Supply Chain Security', desc: 'Protecting your dependencies' },
        { icon: Shield, title: 'SAST vs DAST vs SCA', desc: 'Comparison and use cases' },
        { icon: Shield, title: 'OpsMx AppSec Community', desc: 'Join our security community' },
      ],
    },
    {
      id: 'devops-hub',
      heading: 'DevOps Hub',
      color: '#fbbf24',
      desc: 'DevOps and delivery learning',
      items: [
        { icon: GitBranch, title: 'What is GitOps?', desc: 'Git-driven operations' },
        { icon: GitBranch, title: 'What is Argo?', desc: 'GitOps with Argo CD' },
        { icon: GitBranch, title: 'What is Spinnaker?', desc: 'Continuous deployment platform' },
        { icon: GitBranch, title: 'What is Continuous Delivery?', desc: 'Fast and reliable releases' },
        { icon: BookOpen, title: 'Spinnaker Course', desc: 'Learn Spinnaker deployment' },
        { icon: Video, title: 'Tutorials and Podcasts', desc: 'Video and audio learning' },
      ],
    },
    {
      id: 'documentation',
      heading: 'Documentation',
      color: '#22d3ee',
      desc: 'Technical guides and references',
      items: [
        { icon: BookOpen, title: 'Scanning Source Code with OpsMx Delivery Shield on Demand', desc: 'Code security scanning' },
        { icon: BookOpen, title: 'Scanning Artifacts with OpsMx Delivery Shield on Demand', desc: 'Artifact security' },
        { icon: BookOpen, title: 'Securing Your Lovable Application with OpsMx Delivery Shield', desc: 'Application hardening' },
        { icon: BookOpen, title: 'OpsMx Intelligent Software Delivery for Argo', desc: 'Argo integration guide' },
        { icon: BookOpen, title: 'OpsMx Intelligent Software Delivery for Spinnaker', desc: 'Spinnaker integration guide' },
        { icon: ArrowRight, title: 'Full Docs', desc: 'Complete documentation portal' },
      ],
    },
  ],
}

function ResourceItem({ item }) {
  const Icon = item.icon
  return (
    <motion.div whileHover={{ x: 2 }}>
      <div className="flex items-start gap-2.5 px-2 py-1.5 rounded-lg group hover:bg-white/4 transition-colors duration-150 cursor-pointer">
        <div
          className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: `${resourcesData.columns.find(col => col.items.includes(item))?.color}18`, border: `1px solid ${resourcesData.columns.find(col => col.items.includes(item))?.color}28` }}
        >
          <Icon className="w-3 h-3" style={{ color: resourcesData.columns.find(col => col.items.includes(item))?.color }} strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-bold text-white transition-colors">
            {item.title}
          </p>
          <p className="text-[11px] font-medium text-slate-300 group-hover:text-slate-100 transition-colors leading-snug mt-0.5 line-clamp-1">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function Column({ col }) {
  return (
    <div className="flex flex-col min-w-0">
      {/* Column header */}
      <div className="px-2 pb-2 mb-1 border-b border-white/6">
        <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: col.color }}>
          {col.heading}
        </p>
        <p className="text-[10px] font-medium text-slate-400 leading-snug">{col.desc}</p>
      </div>

      {/* Items */}
      <div className="flex-1 space-y-0.5 overflow-y-auto max-h-[420px] pr-1">
        {col.items.map((item, idx) => (
          <ResourceItem key={idx} item={item} />
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
        {/* Menu header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/6">
          <div>
            <p className="text-sm font-bold text-white">Resources</p>
            <p className="text-[11px] font-medium text-slate-300 mt-0.5">
              Learning materials, documentation, and community resources
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors group whitespace-nowrap"
          >
            View all resources
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 4-column grid */}
        <div className="grid p-4 gap-4" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
          {resourcesData.columns.map(col => (
            <Column key={col.id} col={col} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
