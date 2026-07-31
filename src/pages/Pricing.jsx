import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    desc: 'Everything in your browser, unlimited.',
    price: '$0',
    sub: 'forever',
    cta: 'Start converting',
    ctaLink: '/tools',
    ctaStyle: 'border border-neutral-300 dark:border-white/15 text-neutral-800 dark:text-[#D1D5DB] hover:bg-neutral-50 dark:hover:bg-[#050816]',
    features: [
      'All in-browser tools — free & unlimited',
      'No sign-up, no upload, no watermark',
      'Works offline (installable PWA)',
      '20 server credits / month',
      'Files up to 100 MB',
    ],
  },
  {
    name: 'Pro',
    desc: 'For power users & developers.',
    price: '$9',
    sub: '/month',
    cta: 'Upgrade to Pro',
    ctaLink: '/signup',
    ctaStyle: 'bg-brand-orange dark:bg-[#06B6D4] text-white hover:bg-brand-orange-dark dark:hover:bg-[#0891B2]',
    badge: 'Most popular',
    features: [
      'Everything in Free',
      '1,000 server credits / month',
      'Files up to 2 GB',
      'Developer API + signed webhooks',
      'Up to 1,000 server jobs / day',
    ],
  },
  {
    name: 'Team',
    desc: 'For teams that convert at scale.',
    price: '$29',
    sub: '/month',
    cta: 'Choose Team',
    ctaLink: '/signup',
    ctaStyle: 'border border-neutral-300 dark:border-white/15 text-neutral-800 dark:text-[#D1D5DB] hover:bg-neutral-50 dark:hover:bg-[#050816]',
    features: [
      'Everything in Pro',
      '5,000 server credits / month',
      'Files up to 5 GB',
      'Up to 5,000 server jobs / day',
      'Priority processing',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'Volume, SLAs & zero-retention.',
    price: 'Custom',
    sub: '',
    cta: 'Contact sales',
    ctaLink: '/signup',
    ctaStyle: 'border border-neutral-300 dark:border-white/15 text-neutral-800 dark:text-[#D1D5DB] hover:bg-neutral-50 dark:hover:bg-[#050816]',
    features: [
      'Everything in Team',
      'Unlimited credits & file size',
      'Zero-retention / on-prem options',
      'SSD & dedicated support',
      'Custom SLA & invoicing',
    ],
  },
]

const faqs = [
  { q: 'Is QuickConvert really free?', a: 'Yes. Every in-browser tool — PDF, image, audio/video, OCR and more — is free and unlimited, with no sign-up, because the conversion runs on your own device. Paid plans only add server-side conversions, the API, larger files, and higher limits.' },
  { q: 'What are credits?', a: 'Credits are used only for server-side conversions (e.g. PDF → Excel/PowerPoint, EPS, and AI tools that need a server). Each plan includes a monthly allowance. In-browser conversions never use credits.' },
  { q: 'Do I need a paid plan?', a: 'Only if you need server tools, the developer API, files larger than 100 MB, or higher daily limits. For everyday PDF, image, and document conversion, the free in-browser tools are all you need.' },
  { q: 'Can I cancel anytime?', a: 'Yes — plans are month-to-month with no contract. You keep access until the end of the billing period.' },
]

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('Pro')

  return (
    <div className="pt-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs font-semibold tracking-widest text-brand-orange dark:text-[#22D3EE] uppercase text-center mb-4">Pricing</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white text-center mb-4 leading-tight">
            Free forever.<br />Upgrade when you need more.
          </h1>
          <p className="text-sm text-neutral-500 dark:text-[#9CA3AF] text-center max-w-lg mx-auto mb-12">
            Every tool that runs in your browser is <strong>free and unlimited</strong> — no sign-up, no upload.
            Paid plans add server & AI conversions, the developer API, larger files, and credits.
          </p>

          {/* Plan cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {plans.map(plan => {
              const isSelected = selectedPlan === plan.name
              return (
                <div
                  key={plan.name}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedPlan(plan.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedPlan(plan.name)
                    }
                  }}
                  className={`relative cursor-pointer bg-white dark:bg-[#111827] rounded-2xl border p-6 flex flex-col transition-all duration-200 ${
                    isSelected
                      ? 'border-brand-orange dark:border-[#06B6D4] shadow-lg shadow-brand-orange/10 dark:shadow-[#06B6D4]/20 ring-1 ring-brand-orange/30 dark:ring-[#06B6D4]/30'
                      : 'border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-brand-orange dark:bg-[#06B6D4] text-white text-xs font-semibold px-3 py-1 rounded-full">{plan.badge}</span>
                    </div>
                  )}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-neutral-900 dark:text-white">{plan.name}</h3>
                      <span
                        className={`inline-flex w-4 h-4 rounded-full border items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'border-brand-orange dark:border-[#06B6D4] bg-brand-orange dark:bg-[#06B6D4]'
                            : 'border-neutral-300 dark:border-white/20'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-[#9CA3AF]">{plan.desc}</p>
                  </div>
                  <div className="mb-5">
                    <span className="text-3xl font-bold text-neutral-900 dark:text-white">{plan.price}</span>
                    {plan.sub && <span className="text-sm text-neutral-500 dark:text-[#9CA3AF] ml-1">{plan.sub}</span>}
                  </div>
                  <Link
                    to={plan.ctaLink}
                    onClick={(e) => e.stopPropagation()}
                    className={`block text-center text-sm font-medium py-2.5 px-4 rounded-xl transition-colors mb-6 ${plan.ctaStyle}`}
                  >
                    {plan.cta}
                  </Link>
                  <ul className="space-y-2 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-[#9CA3AF]">
                        <Check size={12} className="text-green-600 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <p className="text-xs text-neutral-400 dark:text-[#6B7280] text-center mb-16">
            Prices in USD. Credits are only spent on server-side conversions; in-browser tools never use them.
          </p>

          {/* FAQ */}
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white text-center mb-8">Pricing questions</h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-2xl p-5">
                <p className="text-sm font-semibold text-neutral-800 dark:text-[#D1D5DB] mb-2">{faq.q}</p>
                <p className="text-sm text-neutral-500 dark:text-[#9CA3AF] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
