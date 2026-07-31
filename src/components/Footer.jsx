import { Link } from 'react-router-dom'

const cols = [
  {
    title: 'PDF Tools',
    links: ['Multiple PDFs → One PDF','Images → PDF','PDF → JPG','PDF → PNG','PDF → Compressed PDF','PDF → Split','PDF → Rotate','PDF → Delete Pages'],
  },
  {
    title: 'Documents',
    links: ['PDF → Word','Word → PDF','PDF → Text','Text → PDF','PDF → Excel','PDF → CSV','PowerPoint → PDF','Excel → PDF'],
  },
  {
    title: 'Image Tools',
    links: ['JPG → PDF','PNG → PDF','JPG → PNG','PNG → JPG','WebP → PNG','WebP → JPG','PNG → WebP','JPG → WebP'],
  },
  {
    title: 'AI Tools',
    links: ['Image → Text','Image → Upscaled Image','Image → Transparent PNG'],
  },
  {
    title: 'Compare',
    links: ['vs CloudConvert','vs Convertio','vs Zamzar'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-[#1F2937] border-t border-neutral-200 dark:border-white/10 mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
        {/* Link grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-10">
          {cols.map(col => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-neutral-500 dark:text-[#9CA3AF] uppercase tracking-wider mb-3">{col.title}</p>
              <ul className="space-y-1.5">
                {col.links.map(l => (
                  <li key={l}>
                    <Link to="/tools" className="text-xs text-neutral-500 dark:text-[#9CA3AF] hover:text-neutral-800 dark:hover:text-[#D1D5DB] transition-colors leading-relaxed">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-neutral-200 dark:border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-brand-orange dark:bg-[#06B6D4] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">Q</span>
            </div>
            <span className="text-xs text-neutral-500 dark:text-[#9CA3AF]">© 2026 QuickConvert. Files never leave your device.</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {['All Tools','Pricing','Blog','About','API','Sitemap','Privacy','Terms'].map(l => (
              <Link key={l} to="/" className="text-xs text-neutral-500 dark:text-[#9CA3AF] hover:text-neutral-800 dark:hover:text-[#D1D5DB] transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
