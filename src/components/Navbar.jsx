import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import resumePdf from '../assets/Mrunal-Dhongle_resume.pdf'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b transition duration-300 ${
      scrolled
        ? 'border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-xl dark:border-slate-800/80 dark:bg-[#331e14]/90'
        : 'border-transparent bg-white/70 dark:bg-[#311d13]/70'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <NavLink
          to="/"
          className="flex items-center gap-3 text-2xl font-black tracking-[0.2em] text-slate-950 dark:text-slate-100 transition hover:text-slate-700 dark:hover:text-slate-200"
          aria-label="Mrunal portfolio home"
        >
          Mrunal
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'text-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <motion.a
            href={resumePdf}
            download="Mrunal_Dhongle_Resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:border-slate-600 dark:bg-[#6F4E37] dark:hover:bg-[#7f5b45] md:inline-flex"
          >
            <FiDownload className="h-4 w-4" />
            Resume
          </motion.a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-[#3a2519] dark:text-slate-100 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={open ? 'open' : 'closed'}
        variants={{
          closed: { height: 0, opacity: 0, transition: { duration: 0.25 } },
          open: { height: 'auto', opacity: 1, transition: { duration: 0.25 } },
        }}
        className="overflow-hidden border-t border-slate-200/70 bg-white/95 dark:border-slate-800/70 dark:bg-[#2a1910]/95 md:hidden"
      >
        <div className="space-y-1 px-6 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-slate-100 text-slate-950 dark:bg-[#563b2a] dark:text-white'
                    : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-[#3b2819]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <motion.a
            href={resumePdf}
            download="Mrunal_Dhongle_Resume.pdf"
            whileHover={{ scale: 1.02 }}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:border-slate-700 dark:bg-[#6F4E37]"
          >
            <FiDownload className="h-4 w-4" />
            Resume
          </motion.a>
        </div>
      </motion.div>
    </header>
  )
}
