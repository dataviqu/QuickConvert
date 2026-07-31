import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)

  return (
    <div className="pt-14 min-h-screen flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
        <div className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-2xl p-8 shadow-sm">
          <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center mb-1.5">Welcome back</h1>
          <p className="text-xs text-neutral-500 dark:text-[#9CA3AF] text-center mb-7">
            Pro plans, credits & API keys for server conversions. Free in-browser tools need no account.
          </p>

          <div className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-neutral-200 dark:border-white/10 rounded-xl text-sm outline-none focus:border-brand-orange dark:focus:border-[#06B6D4] transition-colors placeholder:text-neutral-400 dark:text-[#6B7280]"
            />
            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password (8+ characters)"
                className="w-full px-4 py-3 border border-neutral-200 dark:border-white/10 rounded-xl text-sm outline-none focus:border-brand-orange dark:focus:border-[#06B6D4] transition-colors placeholder:text-neutral-400 dark:text-[#6B7280] pr-11"
              />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-[#6B7280] hover:text-neutral-600 dark:hover:text-[#9CA3AF]">
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button className="w-full mt-4 bg-brand-orange dark:bg-[#06B6D4] text-white py-3 rounded-xl text-sm font-semibold hover:bg-brand-orange-dark dark:hover:bg-[#0891B2] transition-colors">
            Log in
          </button>

          <p className="text-xs text-neutral-500 dark:text-[#9CA3AF] text-center mt-5">
            New here?{' '}
            <Link to="/signup" className="text-brand-orange dark:text-[#22D3EE] hover:underline font-medium">Create an account</Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
