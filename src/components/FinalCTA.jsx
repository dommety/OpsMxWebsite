import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'
import Logo from './Logo'

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-navy-950">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/8 via-electric-500/4 to-transparent" />

      {/* Animated rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[200, 350, 500, 650].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-cyan-500/10"
            style={{
              width: size,
              height: size,
              top: -size / 2,
              left: -size / 2,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-electric-500 flex items-center justify-center shadow-2xl shadow-cyan-500/30">
              <Shield className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(34,211,238,0.3)',
                  '0 0 50px rgba(34,211,238,0.6)',
                  '0 0 20px rgba(34,211,238,0.3)',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight"
        >
          Stop Managing Alerts.
          <br />
          <span className="text-gradient-full">Start Resolving Problems.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          OpsMx Active Defense helps enterprises continuously detect, diagnose, remediate, verify,
          and govern risk across the software lifecycle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all duration-200 shadow-2xl shadow-cyan-500/30 text-lg">
            Request a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-xl font-semibold text-slate-300 glass border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200 text-lg">
            View Documentation
          </button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-600"
        >
          {['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'Enterprise SLA', 'Human-in-the-Loop Governance'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-slate-700" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" href="/" />
          <p className="text-xs text-slate-700">© 2026 OpsMx. Active Defense & Remediation Platform. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-slate-700">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  )
}
