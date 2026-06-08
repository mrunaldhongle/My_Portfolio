import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#e6e4df] text-slate-950 transition-colors duration-300 dark:bg-[#2f1f16] dark:text-slate-100">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pt-0"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}
