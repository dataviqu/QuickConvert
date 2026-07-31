import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import astronaut from '../assets/astronaut-2.png'
import DropZone from '../components/DropZone'
import PrivacyPanel from '../components/PrivacyPanel'
import { popularConversions, toolCategories } from '../data/tools'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

const categoryColors = {
  pdf: 'bg-red-50 text-red-700 border-red-100',
  documents: 'bg-blue-50 text-blue-700 border-blue-100',
  image: 'bg-green-50 text-green-700 border-green-100',
  video: 'bg-purple-50 text-purple-700 border-purple-100',
  audio: 'bg-yellow-50 text-yellow-700 border-yellow-100',
  ai: 'bg-orange-50 text-orange-700 border-orange-100',
  archive: 'bg-neutral-100 dark:bg-[#1F2937] text-neutral-700 dark:text-[#D1D5DB] border-neutral-200 dark:border-white/10',
}

export default function Home() {
  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Full-bleed wallpaper backdrop — extends edge to edge regardless of the content column width */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FBF0DE]/60 via-white to-white dark:from-[#0B1026] dark:via-[#050816] dark:to-[#050816]">
          {/* Warm mesh blob — light mode */}
          <div className="absolute -top-24 right-0 w-[560px] h-[560px] rounded-full blur-3xl opacity-60 dark:opacity-0 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, rgba(198,131,19,0.28) 0%, transparent 70%)' }} />
          <div className="absolute top-40 left-0 w-[420px] h-[420px] rounded-full blur-3xl opacity-40 dark:opacity-0 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, rgba(198,131,19,0.16) 0%, transparent 70%)' }} />
          {/* Nebula mesh blobs — dark mode */}
          <div className="absolute -top-24 right-0 w-[560px] h-[560px] rounded-full blur-3xl opacity-0 dark:opacity-40 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }} />
          <div className="absolute top-20 left-[-80px] w-[420px] h-[420px] rounded-full blur-3xl opacity-0 dark:opacity-30 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full blur-3xl opacity-0 dark:opacity-25 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
          {/* Dark-mode starfield */}
          <div className="absolute inset-0 opacity-0 dark:opacity-30 transition-opacity duration-500 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              animate="show"
              className="relative z-10"
            >
              <motion.p variants={fade} className="text-xs font-semibold tracking-widest text-brand-orange dark:text-[#22D3EE] uppercase mb-4">
                ✦ Private · Instant · No uploads
              </motion.p>
              <motion.h1 variants={fade} className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white leading-tight mb-4">
                Convert any file.<br />
                <span className="text-brand-orange dark:text-[#22D3EE] italic font-bold" style={{ fontStyle: 'italic' }}>
                  Right in your browser.
                </span>
              </motion.h1>
              <motion.p variants={fade} className="text-base text-neutral-500 dark:text-[#9CA3AF] leading-relaxed mb-8 max-w-md">
                PDF, images, and documents — converted in seconds, on your device.
                No sign-up, no upload, no waiting. Your files never leave your computer.
              </motion.p>
              <motion.div variants={fade} className="flex flex-wrap gap-3">
                <Link
                  to="/tools"
                  className="group inline-flex items-center gap-2 bg-brand-orange dark:bg-[#06B6D4] text-white px-5 py-2.5 rounded-xl font-medium text-sm shadow-sm hover:shadow-lg hover:shadow-brand-orange/30 dark:hover:shadow-[#06B6D4]/40 hover:bg-brand-orange-dark dark:hover:bg-[#0891B2] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200"
                >
                  Browse all tools <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="#how-it-works" className="inline-flex items-center gap-2 text-neutral-600 dark:text-[#9CA3AF] px-5 py-2.5 rounded-xl font-medium text-sm border border-neutral-200 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                  How it works
                </Link>
              </motion.div>
            </motion.div>

            {/* Astronaut hero visual */}
            <motion.div
              className="relative flex justify-center lg:justify-end items-center py-6 lg:py-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Soft glow directly behind the astronaut, tying it into the backdrop */}
              <div
                className="absolute rounded-full transition-colors duration-500"
                style={{
                  width: 'min(90vw, 460px)',
                  height: 'min(90vw, 460px)',
                  background: 'radial-gradient(circle, rgba(198,131,19,0.22) 0%, rgba(198,131,19,0.08) 55%, transparent 75%)',
                }}
              />
              <div
                className="absolute rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500"
                style={{
                  width: 'min(90vw, 460px)',
                  height: 'min(90vw, 460px)',
                  background: 'radial-gradient(circle, rgba(34,211,238,0.28) 0%, rgba(168,85,247,0.12) 55%, transparent 75%)',
                }}
              />
              <motion.img
                src={astronaut}
                alt="Astronaut mascot holding DOC, PDF, JPG and MP4 file tags"
                className="relative w-64 sm:w-80 lg:w-[28rem] select-none cursor-grab active:cursor-grabbing drop-shadow-[0_25px_40px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_0_45px_rgba(34,211,238,0.25)]"
                draggable={false}
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05, rotate: -2, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>

          {/* Quick tab bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex gap-2 overflow-x-auto scrollbar-hide pb-1"
          >
            {['JPG → PNG','MP4 → MP3','Images → PDF','WebP → JPG','PDF → Excel','PNG → JPG','Text →'].map(t => (
              <Link key={t} to="/tools" className="shrink-0 px-3.5 py-1.5 bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-full text-xs text-neutral-600 dark:text-[#9CA3AF] hover:border-brand-orange dark:hover:border-[#06B6D4] hover:text-brand-orange dark:hover:text-[#22D3EE] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap">
                {t}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Drop zone section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <DropZone defaultFrom="JPG" defaultTo="PDF" />
          <PrivacyPanel />
        </motion.div>
      </section>

      {/* Popular conversions */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-semibold tracking-widest text-neutral-400 dark:text-[#6B7280] uppercase text-center mb-6">Popular conversions</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {popularConversions.map(c => (
              <Link key={c} to="/tools" className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-xl text-sm text-neutral-700 dark:text-[#D1D5DB] hover:border-brand-orange dark:hover:border-[#06B6D4] hover:text-brand-orange dark:hover:text-[#22D3EE] group transition-all">
                <span>{c}</span>
                <ArrowRight size={13} className="text-neutral-300 dark:text-[#6B7280] group-hover:text-brand-orange dark:group-hover:text-[#22D3EE] transition-colors" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/tools" className="text-sm text-brand-orange dark:text-[#22D3EE] hover:underline font-medium">
              Browse all tools →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Browse by category */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-semibold tracking-widest text-neutral-400 dark:text-[#6B7280] uppercase text-center mb-6">Browse by category</p>
          <div className="flex flex-wrap justify-center gap-2">
            {toolCategories.map(cat => (
              <Link key={cat.id} to="/tools" className={`px-4 py-2 text-sm font-medium rounded-full border transition-all hover:scale-105 ${categoryColors[cat.id]}`}>
                {cat.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-semibold tracking-widest text-neutral-400 dark:text-[#6B7280] uppercase text-center mb-10">How it works</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { num: '#1', title: 'Drop', desc: 'Add one or many files — nothing is uploaded to any server.' },
              { num: '#2', title: 'Choose', desc: 'Pick a format. We suggest the smartest settings and operations.' },
              { num: '#3', title: 'Download', desc: 'Your converted file (or .zip) is ready instantly, in your browser.' },
            ].map(step => (
              <div key={step.num} className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-brand-orange/40 dark:hover:border-[#06B6D4]/40 hover:shadow-brand-orange/10 dark:hover:shadow-[#06B6D4]/20 transition-all duration-300">
                <p className="text-xs font-bold text-brand-orange dark:text-[#22D3EE] mb-3">{step.num}</p>
                <h3 className="text-base font-semibold text-neutral-800 dark:text-[#D1D5DB] mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-[#9CA3AF] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blog teaser */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-semibold tracking-widest text-neutral-400 dark:text-[#6B7280] uppercase text-center mb-8">From the blog</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { tag: 'Privacy', title: 'How to Convert Files Without Uploading Them', excerpt: 'Most online converters upload your files to their servers. Here\'s how to convert PDFs, images, and documents entirely in your...' },
              { tag: 'Comparison', title: 'Best Free CloudConvert Alternatives (2026)', excerpt: 'Looking for a free CloudConvert alternative? Here\'s an honest comparison of the best options in 2026 — including private, in-...' },
              { tag: 'PDF', title: 'How to Compress a PDF Without Losing Quality', excerpt: 'Shrink a large PDF for email or upload while keeping it readable. Here\'s what actually makes PDFs big, what\'s behind losing quality...' },
            ].map(post => (
              <div key={post.title} className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300 cursor-pointer group">
                <span className="text-xs font-semibold text-brand-orange dark:text-[#22D3EE] uppercase tracking-wider">{post.tag}</span>
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-[#D1D5DB] mt-2 mb-2 leading-snug group-hover:text-brand-orange dark:group-hover:text-[#22D3EE] transition-colors">{post.title}</h3>
                <p className="text-xs text-neutral-500 dark:text-[#9CA3AF] leading-relaxed mb-3">{post.excerpt}</p>
                <span className="text-xs text-brand-orange dark:text-[#22D3EE] font-medium">Read guide →</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
