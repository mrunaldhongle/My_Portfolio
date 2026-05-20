import { motion } from 'framer-motion'
import { FiArrowUp, FiMail, FiPhone } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'About Me', href: '/about' },
        { label: 'Gallery', href: '/gallery' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#' },
        { label: 'AI & Data Analytics', href: '#' },
        { label: 'Design & Marketing', href: '#' },
        { label: 'Consultation', href: '#' },
      ],
    },
    {
      title: 'Social Media',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshrmeshram', icon: FaLinkedin },
        { label: 'GitHub', href: 'https://github.com/harshrmeshram', icon: FaGithub },
        { label: 'Twitter', href: 'https://x.com/harshr_meshram', icon: FaTwitter },
        { label: 'Instagram', href: 'https://www.instagram.com/harshr.meshram', icon: FaInstagram },
        

      ],
    },
  ]

  const contactInfo = [
    { icon: FiMail, label: 'harshr.meshram@gmail.com', href: 'mailto:[EMAIL_ADDRESS]' },
    { icon: FiPhone, label: '+91-82754 41457', href: 'tel:+918275441457' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative mt-5 pt-0 border-t border-slate-200/20 dark:border-slate-800/50 bg-gradient-to-b from-slate-50/50 via-white/30 to-slate-100/50 dark:from-slate-950/50 dark:via-slate-900/30 dark:to-slate-950/50">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200 dark:bg-slate-800"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-16 pb-6 md:pt-20 md:pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Harsh
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
              BTech in AI & Data Science with skills in Python, full-stack development, and data analytics.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className={section.title === 'Social Media' ? 'col-span-2 md:col-span-1' : ''}
            >
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition text-sm"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition text-sm"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="line-clamp-1">{item.label}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-transparent via-slate-300/50 dark:via-slate-700/50 to-transparent my-8"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left"
        >
          {/* Empty div to balance the grid on desktop */}
          <div className="hidden md:block"></div>

          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-slate-600 dark:text-slate-400 text-center"
          >
            <span className="font-semibold">© {currentYear} harshr.meshram</span>
            {' '}All rights reserved.
          </motion.p>

          {/* Right Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-end gap-3 md:justify-self-end"
          >
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)',
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-semibold transition shadow-lg"
            >
              <FiArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>

            <p className="text-xs text-slate-500 dark:text-slate-500 font-medium tracking-wide">
              Designed by Mrunal Dhongle
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200 dark:bg-slate-800 opacity-50"></div>
    </footer>
  )
}
