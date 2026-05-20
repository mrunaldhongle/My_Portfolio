import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiDownload, FiUser, FiSearch } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import resumePdf from '../assets/Harsh Rahul Meshram Resume2.pdf'
import harshLogo from '../assets/harshlogo.png'

import { services, skills, galleryCards, navLinks as dataNavLinks } from '../data/portfolioData'

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'About Me', to: '/about' },
  { label: 'My Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = []

    // Search Pages
    dataNavLinks.forEach(link => {
      if (link.label.toLowerCase().includes(query)) {
        results.push({ type: 'Page', title: link.label, link: link.target === 'home' ? '/' : `/${link.target}` })
      }
    })

    // Search Services
    services.forEach(service => {
      if (service.title.toLowerCase().includes(query) || service.description.toLowerCase().includes(query)) {
        results.push({ type: 'Service', title: service.title, link: '/services' })
      }
    })

    // Search Skills
    skills.forEach(skill => {
      if (skill.toLowerCase().includes(query)) {
        results.push({ type: 'Skill', title: skill, link: '/about' })
      }
    })

    // Search Gallery
    galleryCards.forEach(category => {
      category.details.forEach(item => {
        if (item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)) {
          results.push({ type: 'Gallery', title: item.title, link: '/gallery' })
        }
      })
    })

    // Deduplicate and limit
    const uniqueResults = []
    const titles = new Set()
    for (const r of results) {
      if (!titles.has(r.title)) {
        titles.add(r.title)
        uniqueResults.push(r)
      }
    }

    setSearchResults(uniqueResults.slice(0, 5))
  }, [searchQuery])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    
    if (searchResults.length > 0) {
      navigate(searchResults[0].link)
    } else {
      navigate('/gallery')
    }
    
    setSearchQuery('')
    setSearchResults([])
    setOpen(false)
  }

  const handleResultClick = (link) => {
    navigate(link)
    setSearchQuery('')
    setSearchResults([])
    setOpen(false)
  }

  // Detect scroll and add blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location])

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 },
    },
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }),
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/60 bg-white/80 shadow-lg dark:border-slate-800/70 dark:bg-slate-950/80 backdrop-blur-2xl'
          : 'border-b border-transparent bg-white/40 dark:bg-slate-950/40 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo / Brand with hover animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <NavLink
            to="/"
            className="flex items-center gap-2 text-lg font-bold tracking-[0.15em] text-slate-900 dark:text-slate-100 transition hover:text-slate-700 dark:hover:text-slate-300"
            onClick={() => setOpen(false)}
          >
            <img src={harshLogo} alt="Harsh Logo" className="h-8 w-auto object-contain" />
            Harsh
          </NavLink>
        </motion.div>

        {/* Desktop Navigation and Search */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-slate-950 dark:text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* Active link underline animation */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-slate-900 dark:bg-slate-100 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          
          {/* Desktop Search Bar */}
          <form onSubmit={handleSearch} className="relative group">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-32 lg:w-48 focus:w-56 lg:focus:w-64 transition-all pl-9 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 text-sm outline-none focus:border-slate-300 dark:focus:border-slate-600 focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400"
            />
            {/* Desktop Search Results Dropdown */}
            {searchQuery.trim() !== '' && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-50">
                {searchResults.length > 0 ? (
                  searchResults.map((res, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleResultClick(res.link)}
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition flex flex-col border-b border-slate-100 dark:border-slate-800 last:border-0"
                    >
                      <span className="text-sm font-medium text-slate-900 dark:text-white truncate w-full">{res.title}</span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">{res.type}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-4 text-center text-sm text-slate-500">No matching results</div>
                )}
              </div>
            )}
          </form>
        </div>

        {/* Right Section - Theme Toggle, Resume Button, and Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <ThemeToggle />

          {/* Resume Download Button (Now visible on mobile) */}
          <motion.a
            href={resumePdf}
            download="Harsh_Rahul_Meshram_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 transition hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm"
          >
            <FiDownload className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Resume</span>
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className="inline-flex md:hidden items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial="closed"
        animate={open ? 'open' : 'closed'}
        variants={menuVariants}
        className="overflow-hidden border-t border-slate-200/60 dark:border-slate-800/70 md:hidden"
      >
        <div className="bg-white/95 backdrop-blur-md dark:bg-slate-950/95 px-6 py-4 space-y-2">
          {/* Mobile Search */}
          <motion.div
            variants={mobileItemVariants}
            initial="closed"
            animate={open ? 'open' : 'closed'}
            className="mb-2 pb-2"
          >
            <form onSubmit={handleSearch} className="relative w-full z-50">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 text-sm outline-none focus:border-slate-300 dark:focus:border-slate-600 focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400"
              />
              {/* Mobile Search Results Dropdown */}
              {searchQuery.trim() !== '' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-[60]">
                  {searchResults.length > 0 ? (
                    searchResults.map((res, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleResultClick(res.link)}
                        className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition flex flex-col border-b border-slate-100 dark:border-slate-800 last:border-0"
                      >
                        <span className="text-sm font-medium text-slate-900 dark:text-white truncate w-full">{res.title}</span>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">{res.type}</span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-4 text-center text-sm text-slate-500">No matching results</div>
                  )}
                </div>
              )}
            </form>
          </motion.div>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              custom={i}
              variants={mobileItemVariants}
              initial="closed"
              animate={open ? 'open' : 'closed'}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-950 dark:text-white font-semibold'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}

          {/* Mobile Contact Info Button */}
          <motion.div
            custom={navLinks.length}
            variants={mobileItemVariants}
            initial="closed"
            animate={open ? 'open' : 'closed'}
          >
            <NavLink
              to="/contact"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-center bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition"
            >
              <FiUser className="w-4 h-4" />
              Contact Info
            </NavLink>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}
