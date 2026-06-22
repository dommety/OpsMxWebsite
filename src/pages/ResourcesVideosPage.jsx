import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Play, ExternalLink, BookOpen, Zap, Users } from 'lucide-react'

export default function ResourcesVideosPage() {
  const videoCategories = [
    {
      icon: Play,
      title: 'Product Demos',
      desc: 'See OpsMx in action with live product walkthroughs.',
      color: '#22d3ee',
    },
    {
      icon: Users,
      title: 'Webinars',
      desc: 'Expert-led sessions on security, remediation, and best practices.',
      color: '#a78bfa',
    },
    {
      icon: BookOpen,
      title: 'Tutorials',
      desc: 'Step-by-step guides to get started with OpsMx.',
      color: '#34d399',
    },
    {
      icon: Zap,
      title: 'Case Studies',
      desc: 'Real-world stories from OpsMx customers.',
      color: '#f472b6',
    },
  ]

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-transparent to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/10 glass">
              <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Resources</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
              Videos
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Explore OpsMx product videos, demos, webinars, and educational content.
            </p>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <a
                href="https://www.opsmx.com/videos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all shadow-lg shadow-cyan-500/25 group text-lg"
              >
                <Play className="w-5 h-5" />
                Watch Videos
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-slate-500 max-w-xs">
                Opens in a new window to the OpsMx videos page
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 text-sm"
            >
              {[
                { val: '50+', label: 'Videos' },
                { val: '4', label: 'Categories' },
                { val: '100K+', label: 'Views' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <span className="font-black text-2xl text-cyan-400 block">{s.val}</span>
                  <span className="text-slate-500 text-xs">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video categories */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-violet-500/4 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-2">What You'll Find</h2>
            <p className="text-slate-400">Browse our video library by topic</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videoCategories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-5 rounded-xl border border-white/8 glass hover:border-white/16 transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}28` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{cat.title}</h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                    {cat.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Info box */}
      <section className="relative py-16 border-t border-white/5 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-white/8 glass"
          >
            <p className="text-sm text-slate-400">
              <span className="font-semibold text-white block mb-2">Access Our Video Library</span>
              Click the button above to visit the OpsMx videos page, where you can browse our complete collection of product demos, webinars, tutorials, and case studies. All videos are hosted on the official OpsMx website.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
