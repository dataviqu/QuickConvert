import { motion } from 'framer-motion'

const sections = [
  { title: 'The short version', body: "QuickConvert is built so your files don't have to leave your device. The vast majority of conversions run entirely in your web browser — your file is read, converted, and saved locally, and is never uploaded to us. A live panel on every tool page shows the actual upload count (0 bytes for in-browser tools); you can even turn off your Wi-Fi and the in-browser tools still work." },
  { title: 'In-browser conversions (most tools)', body: 'For in-browser tools — PDF, images, audio/video, OCR, text-to-speech, archives, and more — your file is processed on your own device using your browser and WebAssembly. There is no upload, and nothing about the file\'s contents reaches our servers.' },
  { title: 'Server conversions (clearly labeled)', body: 'A small number of advanced conversions (for example PDF → Excel/PowerPoint, Office → PDF, and EPS) require software that can\'t run in a browser. These tools are clearly labeled as server-based. For them, your file is uploaded over an encrypted (HTTPS) connection, converted, made available for you to download, and then deleted automatically after a short retention window. We do not use the contents of your files for any purpose other than performing the conversion you requested.' },
  { title: 'Information we collect', body: 'Anonymous use of the in-browser tools requires no account and collects no personal information about you. If you create an account (needed only for paid plans, the API, or server features) we store your email address and a securely hashed password. If you subscribe, payments are processed by our payment providers (Stripe and/or PayPal) — we never see or store your full card details. For server jobs and API usage we keep minimal operational metadata (timestamps, job status, file size, the conversion type, and rate-limit counters) to run the service, prevent abuse, and meter usage. We do not retain the file contents.' },
  { title: 'Analytics & cookies', body: 'Analytics are privacy-respecting and only run if configured for the deployment; they collect aggregate usage (e.g. page views) and are not used to build advertising profiles. We do not sell your data and do not use third-party advertising cookies. We use local browser storage and first-party cookies for essential functions only: remembering your theme, your selected language, and (if you sign in) your login session.' },
  { title: 'How we share information', body: 'We do not sell your personal information. We share data only with the service providers needed to operate QuickConvert — our hosting/CDN provider and our payment processors (Stripe/PayPal) — and only as required to provide the service, or where required by law.' },
  { title: 'Data retention & your rights', body: 'Files sent to server tools are deleted shortly after conversion. Account and billing records are kept while your account is active and as required for legal/accounting purposes. Depending on where you live (e.g. under GDPR or CCPA), you may have the right to access, correct, export, or delete your personal data, and to object to or restrict processing. To exercise any of these, contact us at privacy@file-converts.com and we\'ll respond within the timeframe the law requires.' },
  { title: 'Security', body: 'Connections are encrypted with HTTPS, passwords are hashed, and server-processed files are short-lived. The strongest protection, however, is structural: for in-browser tools your file never leaves your device in the first place.' },
  { title: 'Children', body: 'QuickConvert is not directed to children under 13 (or the minimum age in your jurisdiction), and we do not knowingly collect their personal information.' },
  { title: 'Changes to this policy', body: 'We may update this policy as the service evolves. We\'ll change the "last updated" date above and, for material changes, provide a more prominent notice.' },
  { title: 'Contact', body: 'Questions about privacy? Email privacy@file-converts.com. (Legal entity name and registered address to be added before launch.)' },
]

export default function Privacy() {
  return (
    <div className="pt-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-1.5">Privacy Policy</h1>
          <p className="text-xs text-neutral-400 dark:text-[#6B7280] mb-10">Last updated: June 7, 2026</p>
          <div className="space-y-8">
            {sections.map(s => (
              <div key={s.title}>
                <h2 className="text-base font-semibold text-neutral-800 dark:text-[#D1D5DB] mb-2">{s.title}</h2>
                <p className="text-sm text-neutral-600 dark:text-[#9CA3AF] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
