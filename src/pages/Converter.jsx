import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import DropZone from '../components/DropZone'
import PrivacyPanel from '../components/PrivacyPanel'
import { getToolBySlug } from '../data/tools'

export default function Converter() {
  const { slug } = useParams()
  const tool = getToolBySlug(slug)

  // Unknown slug — send the person back to the tools list instead of showing a blank page.
  if (!tool) {
    return <Navigate to="/tools" replace />
  }

  const { from, to } = tool

  const faqs = [
    { q: `What's the difference between ${from} and ${to}?`, a: `${from} and ${to} serve different purposes. ${from} is widely used for its compatibility, while ${to} offers different compression and quality characteristics suited for specific use cases.` },
    { q: `Is the ${from} to ${to} converter free?`, a: 'Yes, completely free. No sign-up required, no watermarks, no limits on the number of conversions.' },
    { q: 'Are my files uploaded to a server?', a: 'No. The conversion runs entirely in your browser using WebAssembly. Your files never leave your device.' },
    { q: 'Will the quality be preserved?', a: 'QuickConvert uses the best available settings to maximize output quality for each conversion type.' },
    { q: 'Does it work on mobile?', a: 'Yes, QuickConvert works on all modern mobile browsers including Safari on iPhone and Chrome on Android.' },
  ]

  return (
    <div className="pt-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-[#6B7280] mb-8">
          <Link to="/" className="hover:text-neutral-700 dark:hover:text-[#D1D5DB]">Home</Link>
          <ChevronRight size={12} />
          <Link to="/tools" className="hover:text-neutral-700 dark:hover:text-[#D1D5DB]">All Tools</Link>
          <ChevronRight size={12} />
          <span className="text-neutral-700 dark:text-[#D1D5DB]">{from} → {to}</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3 text-center">
            {from} to {to} Converter
          </h1>
          <p className="text-sm text-neutral-500 dark:text-[#9CA3AF] text-center mb-2">
            Convert {from} files to {to} instantly and privately. QuickConvert runs entirely in your browser.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 dark:text-[#9CA3AF] mb-8">
            <span className="flex items-center gap-1">🔒 No upload</span>
            <span className="flex items-center gap-1">⚡ Instant</span>
            <span className="flex items-center gap-1">✓ Free</span>
          </div>

          <DropZone defaultFrom={from} defaultTo={to} />
          <PrivacyPanel />

          {/* Info paragraphs */}
          <div className="mt-10 prose prose-sm max-w-none text-neutral-600 dark:text-[#9CA3AF] space-y-4">
            <p>Converting {from} to {to} moves your file between formats with different characteristics. {from} is widely supported and works well for most use cases, while {to} offers specific advantages depending on your needs.</p>
            <p>QuickConvert converts your file in the browser, so it never leaves your device — no upload, no sign-up, no limit. The conversion is instant and works offline once the page has loaded.</p>
          </div>

          {/* Steps */}
          <div className="mt-10">
            <h2 className="text-base font-semibold text-neutral-800 dark:text-[#D1D5DB] mb-4">How to convert {from} → {to}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { n: '01', text: `Drop your ${from} file into the converter above — it stays on your device.` },
                { n: '02', text: `Choose ${to} as the output. QuickConvert picks the smartest settings automatically.` },
                { n: '03', text: `Click Convert and download your ${to} file instantly.` },
              ].map(s => (
                <div key={s.n} className="bg-neutral-50 dark:bg-[#050816] border border-neutral-200 dark:border-white/10 rounded-xl p-4">
                  <p className="text-xs font-bold text-brand-orange dark:text-[#22D3EE] mb-2">{s.n}</p>
                  <p className="text-sm text-neutral-600 dark:text-[#9CA3AF] leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="text-base font-semibold text-neutral-800 dark:text-[#D1D5DB] mb-4">Frequently asked questions</h2>
            <div className="space-y-1">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-neutral-200 dark:border-white/10 rounded-xl bg-white dark:bg-[#111827]">
                  <summary className="flex items-center justify-between px-4 py-3.5 text-sm font-medium text-neutral-800 dark:text-[#D1D5DB] cursor-pointer list-none">
                    {faq.q}
                    <span className="text-neutral-400 dark:text-[#6B7280] group-open:rotate-180 transition-transform text-lg leading-none">⌄</span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-neutral-500 dark:text-[#9CA3AF] leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="mt-10">
            <h2 className="text-base font-semibold text-neutral-800 dark:text-[#D1D5DB] mb-4">Related conversions</h2>
            <div className="flex flex-wrap gap-2">
              {[`${to} → ${from}`, `${from} → PDF`, `${from} → WebP`].map(r => (
                <Link key={r} to="/tools" className="px-4 py-2 bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-xl text-sm text-neutral-600 dark:text-[#9CA3AF] hover:border-brand-orange dark:hover:border-[#06B6D4] hover:text-brand-orange dark:hover:text-[#22D3EE] transition-colors">
                  {r}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
