import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { toolCategories } from '../data/tools'

export default function AllTools() {
  return (
    <div className="pt-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white text-center mb-3">All conversion tools</h1>
          <p className="text-neutral-500 dark:text-[#9CA3AF] text-center text-sm mb-14 max-w-lg mx-auto">
            Free, private, and instant. Everything runs in your browser — pick a tool to get started.
          </p>

          {toolCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05 }}
              className="mb-10"
            >
              <p className="text-xs font-semibold tracking-widest text-neutral-400 dark:text-[#6B7280] uppercase mb-4">
                {cat.label} —
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {cat.tools.map(tool => (
                  <Link
                    key={tool.slug}
                    to={`/tools/${tool.slug}`}
                    className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-xl text-sm text-neutral-700 dark:text-[#D1D5DB] hover:border-brand-orange dark:hover:border-[#06B6D4] hover:text-brand-orange dark:hover:text-[#22D3EE] group transition-all"
                  >
                    <span>{tool.label}</span>
                    <ArrowRight size={13} className="text-neutral-300 dark:text-[#6B7280] group-hover:text-brand-orange dark:group-hover:text-[#22D3EE] transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
