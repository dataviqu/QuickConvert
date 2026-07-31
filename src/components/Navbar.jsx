import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const links = [
    { to: '/tools', label: 'All Tools' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/#how-it-works', label: 'How it works' },
    { to: '/privacy', label: 'Privacy' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-[#111827]/95 backdrop-blur-sm border-b border-neutral-200 dark:border-white/10 shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-brand-orange dark:bg-[#06B6D4] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Q</span>
          </div>
          <span className="font-semibold text-neutral-800 dark:text-[#D1D5DB] text-sm tracking-tight">QuickConvert</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-sm transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:bg-brand-orange dark:after:bg-[#06B6D4] after:transition-all after:duration-300 ${
                location.pathname === l.to
                  ? 'text-neutral-900 dark:text-white font-medium after:w-full'
                  : 'text-neutral-500 dark:text-[#9CA3AF] hover:text-neutral-900 dark:hover:text-white after:w-0 hover:after:w-full'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="hidden md:flex w-8 h-8 items-center justify-center text-neutral-500 dark:text-[#9CA3AF] hover:text-neutral-800 dark:hover:text-[#D1D5DB] hover:bg-neutral-100 dark:hover:bg-[#1F2937] hover:rotate-12 rounded-lg transition-all duration-200"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            to="/login"
            className="hidden md:inline-flex text-sm text-neutral-600 dark:text-[#9CA3AF] hover:text-neutral-900 dark:hover:text-white px-3 py-1.5 transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="inline-flex text-sm bg-neutral-900 dark:bg-[#06B6D4] text-white px-3.5 py-1.5 rounded-lg hover:bg-neutral-700 dark:hover:bg-[#0891B2] hover:scale-105 active:scale-95 transition-all duration-200 font-medium"
          >
            Sign up
          </Link>
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-neutral-600 dark:text-[#9CA3AF]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#111827] border-b border-neutral-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map(l => (
                <Link key={l.to} to={l.to} className="text-sm text-neutral-700 dark:text-[#D1D5DB] py-1">
                  {l.label}
                </Link>
              ))}
              <div className="pt-2 flex gap-2 border-t border-neutral-200 dark:border-white/10">
                <Link to="/login" className="flex-1 text-center text-sm py-2 border border-neutral-300 dark:border-white/15 rounded-lg text-neutral-700 dark:text-[#D1D5DB]">Log in</Link>
                <Link to="/signup" className="flex-1 text-center text-sm py-2 bg-neutral-900 dark:bg-[#06B6D4] text-white rounded-lg">Sign up</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
