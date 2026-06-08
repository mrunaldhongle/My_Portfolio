import { useContext } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
        theme === 'dark'
          ? 'border-[#a5815a] bg-[#6F4E37] text-[#f5e7d8] hover:bg-[#7b5f46]'
          : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-slate-700" />}
    </button>
  )
}
