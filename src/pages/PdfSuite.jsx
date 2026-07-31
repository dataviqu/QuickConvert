import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DropZone from '../components/DropZone'
import PrivacyPanel from '../components/PrivacyPanel'

export default function PdfSuite() {
  return (
    <div className="pt-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-3">Merge PDF Files</h1>
          <p className="text-sm text-neutral-500 dark:text-[#9CA3AF] text-center mb-2">
            Combine several PDF files into a single document, in the order you choose.
            Everything happens in your browser — your PDFs are never uploaded.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 dark:text-[#9CA3AF] mb-8">
            <span>🔒 No upload</span>
            <span>⚡ Instant</span>
            <span>✓ Free</span>
          </div>
          <DropZone defaultFrom="PDF" defaultTo="PDF" fromOptions={['PDF']} toOptions={['PDF']} />
          <PrivacyPanel />
          <div className="mt-10 text-sm text-neutral-600 dark:text-[#9CA3AF] space-y-4 leading-relaxed">
            <p>Merging PDFs combines several files into one clean document in the order you choose. Keep confidential paperwork private, removes any upload wait, and means there's no cap on how many files you combine or how large they are.</p>
            <p>Because the merge happens on your device, it's also fast: there's no round-trip to a server and back, so even a large stack of documents combines in moments.</p>
          </div>
          <div className="mt-8">
            <h2 className="text-base font-semibold text-neutral-800 dark:text-[#D1D5DB] mb-4">Related conversions</h2>
            <div className="flex flex-wrap gap-2">
              {['PDF → Word', 'PDF → JPG', 'Images → PDF'].map(r => (
                <Link key={r} to="/tools" className="px-4 py-2 bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-xl text-sm text-neutral-600 dark:text-[#9CA3AF] hover:border-brand-orange dark:hover:border-[#06B6D4] hover:text-brand-orange dark:hover:text-[#22D3EE] transition-colors">{r}</Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
