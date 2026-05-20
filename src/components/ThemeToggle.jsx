import { useContext } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-slate-700" />}
    </button>
  )
}
