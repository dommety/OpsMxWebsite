import { motion } from 'framer-motion'

const logos = [
  'Apple', 'Cisco', 'Western Union', 'Adobe', 'Salesforce',
  'Google', 'Bosch', 'DP World', 'Cloudera', 'Goldman Sachs',
  'Apple', 'Cisco', 'Western Union', 'Adobe', 'Salesforce',
  'Google', 'Bosch', 'DP World', 'Cloudera', 'Goldman Sachs',
]

const LogoItem = ({ name }) => (
  <div className="flex items-center justify-center min-w-[140px] h-12 px-6">
    <span className="text-slate-500 font-semibold text-sm tracking-wide whitespace-nowrap hover:text-slate-300 transition-colors duration-300">
      {name}
    </span>
  </div>
)

export default function CustomerLogos() {
  return (
    <section className="relative py-16 border-y border-white/5 bg-navy-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold text-slate-600 tracking-[0.2em] uppercase"
        >
          Trusted by security and engineering teams at leading enterprises
        </motion.p>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-navy-900/90 to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-navy-900/90 to-transparent pointer-events-none" />

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {logos.map((name, i) => (
              <LogoItem key={i} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
