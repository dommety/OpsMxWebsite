import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe, MessageSquare, Users, Handshake, Headphones, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'

const contactOptions = [
  {
    icon: MessageSquare,
    title: 'Request a Demo',
    desc: 'See OpsMx in action with a personalized walkthrough',
    color: '#22d3ee',
  },
  {
    icon: Users,
    title: 'Talk to Sales',
    desc: 'Connect with our sales team about your security needs',
    color: '#a78bfa',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    desc: 'Explore partnership and integration opportunities',
    color: '#34d399',
  },
  {
    icon: Headphones,
    title: 'Support',
    desc: 'Help for existing OpsMx customers and evaluation users',
    color: '#f472b6',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder submit handler - in production, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/10 glass">
              <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Get In Touch</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5">
              Contact OpsMx
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              Talk to us about securing, governing, and remediating risks across your software delivery lifecycle.
              Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-3">How Can We Help?</h2>
            <p className="text-slate-400">Select the option that best fits your needs</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactOptions.map((option, i) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-xl border border-white/8 glass hover:border-white/16 transition-all cursor-pointer group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${option.color}18`, border: `1px solid ${option.color}35` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: option.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                    {option.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-3">Send Us a Message</h2>
            <p className="text-slate-400">Fill out the form below and our team will get back to you shortly.</p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Thank you for reaching out!</h3>
              <p className="text-slate-400">
                We've received your message and will be in touch soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0 }}
                >
                  <label className="block text-sm font-semibold text-slate-200 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:border-cyan-500 focus:bg-white/10 focus:outline-none transition-all"
                    placeholder="John"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                >
                  <label className="block text-sm font-semibold text-slate-200 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:border-cyan-500 focus:bg-white/10 focus:outline-none transition-all"
                    placeholder="Doe"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-semibold text-slate-200 mb-2">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:border-cyan-500 focus:bg-white/10 focus:outline-none transition-all"
                  placeholder="john@company.com"
                />
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-semibold text-slate-200 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:border-cyan-500 focus:bg-white/10 focus:outline-none transition-all"
                    placeholder="Acme Inc."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-slate-200 mb-2">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:border-cyan-500 focus:bg-white/10 focus:outline-none transition-all"
                    placeholder="CISO"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label className="block text-sm font-semibold text-slate-200 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:border-cyan-500 focus:bg-white/10 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your security and remediation needs..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-electric-500 hover:from-cyan-400 hover:to-electric-400 transition-all shadow-lg shadow-cyan-500/25"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-3">Other Ways to Reach Us</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.a
              href="mailto:info@opsmx.com"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-white/8 glass hover:border-white/16 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-cyan-500/15 border border-cyan-500/35">
                <Mail className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                Email
              </h3>
              <p className="text-slate-400 text-sm">info@opsmx.com</p>
            </motion.a>

            <motion.a
              href="https://www.opsmx.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-white/8 glass hover:border-white/16 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-violet-500/15 border border-violet-500/35">
                <Globe className="w-5 h-5 text-violet-400" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-white mb-1 group-hover:text-violet-400 transition-colors">
                Website
              </h3>
              <p className="text-slate-400 text-sm">www.opsmx.com</p>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}
