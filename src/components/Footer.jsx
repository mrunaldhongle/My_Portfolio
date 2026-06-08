import { motion } from 'framer-motion'
import { FiArrowUp, FiMail, FiMapPin } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mrunal-dhongle/', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/mrunaldhongle', icon: FaGithub },
  { label: 'Instagram', href: 'https://www.instagram.com/mrunal_dhongle/', icon: FaInstagram },
]

const contactInfo = [
  { icon: FiMail, label: 'dhonglemrunal@gmail.com', href: 'mailto:mrunal.dhongle@example.com' },
  { icon: FiMapPin, label: 'Nagpur, India', href: 'https://www.google.com/maps' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/50 bg-[#f1f0ed] dark:border-[#553c2d] dark:bg-[#241810]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6F4E37] via-[#8e6b56] to-[#c6b59f] opacity-90" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-100">Mrunal Dhongle</h3>
            <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400 text-justify">
              I am a software developer who builds responsive web applications and AI-enhanced products. My focus is on thoughtful UI, reliable architecture, and clean engineering that supports real businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-6"
          >
            <div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-slate-900 dark:hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">Social</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:border-slate-300 hover:bg-slate-100 dark:border-[#3f2a22] dark:bg-[#362518] dark:text-slate-100"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Get in touch</h4>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.href} className="flex items-center gap-3 transition hover:text-slate-900 dark:hover:text-white">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-slate-200/50 pt-6 text-center text-sm text-slate-500 dark:border-[#553c2d] dark:text-slate-400">
          © {currentYear} Mrunal Dhongle. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
