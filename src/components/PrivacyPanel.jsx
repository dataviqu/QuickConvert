import { Wifi } from 'lucide-react'

export default function PrivacyPanel() {
  return (
    <div className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-2xl p-5 shadow-sm mt-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" />
          <span className="text-xs font-medium text-neutral-700 dark:text-[#D1D5DB]">Privacy, proven — live</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-[#9CA3AF]">
          <Wifi size={12} />
          Online
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { value: '↑ 0 B', label: 'Uploaded to our servers' },
          { value: '0', label: 'Requests carrying your data' },
          { value: '0', label: 'Files stored by us' },
          { value: '—', label: 'Processed on your device' },
        ].map(stat => (
          <div key={stat.label}>
            <p className="text-lg font-semibold text-neutral-800 dark:text-[#D1D5DB]">{stat.value}</p>
            <p className="text-xs text-neutral-400 dark:text-[#6B7280] leading-snug mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-neutral-400 dark:text-[#6B7280] mt-4 border-t border-neutral-100 dark:border-white/5 pt-3">
        ⚡ Conversions run entirely in your browser.{' '}
        <button className="underline hover:text-neutral-600 dark:hover:text-[#9CA3AF] transition-colors">Turn off your Wi-Fi and try it</button>{' '}
        — it still works. Nothing leaves this device.
      </p>
    </div>
  )
}
