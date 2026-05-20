import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Button({ children, href = '#', to = '#', variant = 'primary', type = 'button', onClick, as = 'a' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300/70'
  const styles =
    variant === 'primary'
      ? 'bg-slate-950 text-white shadow-soft hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400'
      : 'border border-slate-200 bg-white text-slate-950 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800'

  if (as === 'button') {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`${base} ${styles}`}
      >
        {children}
      </motion.button>
    )
  }

  if (as === 'link') {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
        <Link to={to} className={`${base} ${styles}`}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  )
}
