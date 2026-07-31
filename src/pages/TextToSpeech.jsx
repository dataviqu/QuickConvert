import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Upload } from 'lucide-react'
import PrivacyPanel from '../components/PrivacyPanel'

const voices = [
  { id: 'heart-female-en', label: 'Heart — Female, American English' },
  { id: 'nova-female-en', label: 'Nova — Female, British English' },
  { id: 'atlas-male-en', label: 'Atlas — Male, American English' },
  { id: 'oak-male-en', label: 'Oak — Male, British English' },
]

export default function TextToSpeech() {
  const [text, setText] = useState('')
  const [voice, setVoice] = useState(voices[0].id)
  const [format, setFormat] = useState('MP3')
  const [converting, setConverting] = useState(false)
  const [done, setDone] = useState(false)

  const handleConvert = () => {
    if (!text.trim()) return
    setConverting(true)
    setTimeout(() => { setConverting(false); setDone(true) }, 2000)
  }

  return (
    <div className="pt-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-3">Text to Speech</h1>
          <p className="text-sm text-neutral-500 dark:text-[#9CA3AF] text-center mb-2">
            Type or paste text, choose a voice, and download natural-sounding speech as MP3 or WAV.
            The neural voice runs entirely on your device, so your text is never uploaded.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 dark:text-[#9CA3AF] mb-8">
            <span>🔒 No upload</span>
            <span>⚡ Instant</span>
            <span>✓ Free</span>
          </div>

          {/* TTS UI */}
          <div className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-2xl p-6 shadow-sm">
            <textarea
              value={text}
              onChange={e => { setText(e.target.value); setDone(false) }}
              placeholder="Paste or type the text you want to turn into speech..."
              className="w-full h-36 resize-none text-sm text-neutral-700 dark:text-[#D1D5DB] placeholder:text-neutral-400 dark:text-[#6B7280] outline-none leading-relaxed"
            />
            <div className="flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-white/5">
              <span className="text-xs text-neutral-400 dark:text-[#6B7280]">{text.length} chars</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button className="flex items-center gap-2 text-xs text-neutral-600 dark:text-[#9CA3AF] hover:text-neutral-900 dark:hover:text-white transition-colors">
                <Upload size={13} /> Upload a document
              </button>
              <span className="text-xs text-neutral-400 dark:text-[#6B7280]">or drop a TXT / MD file onto the box</span>
            </div>

            {/* Voice + format controls */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-xs text-neutral-400 dark:text-[#6B7280]">01</span>
              <select
                value={voice}
                onChange={e => setVoice(e.target.value)}
                className="flex-1 min-w-0 text-xs bg-neutral-50 dark:bg-[#050816] border border-neutral-200 dark:border-white/10 rounded-lg px-3 py-2 outline-none text-neutral-700 dark:text-[#D1D5DB]"
              >
                {voices.map(v => <option key={v.id} value={v.id}>{v.label}</option>)}
              </select>
              {['MP3', 'WAV'].map(f => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${format === f ? 'bg-neutral-900 dark:bg-[#06B6D4] text-white' : 'bg-neutral-100 dark:bg-[#1F2937] text-neutral-600 dark:text-[#9CA3AF] hover:bg-neutral-200'}`}
                >
                  {f}
                </button>
              ))}
              <button
                onClick={handleConvert}
                disabled={!text.trim() || converting}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${!text.trim() ? 'bg-neutral-100 dark:bg-[#1F2937] text-neutral-400 dark:text-[#6B7280] cursor-not-allowed' : done ? 'bg-green-600 text-white' : 'bg-brand-orange dark:bg-[#06B6D4] text-white hover:bg-brand-orange-dark dark:hover:bg-[#0891B2]'}`}
              >
                {converting ? <><span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Converting…</> : done ? <><Download size={13} /> Download {format}</> : <><Download size={13} /> Convert to {format}</>}
              </button>
            </div>

            <p className="text-xs text-neutral-400 dark:text-[#6B7280] mt-4 leading-relaxed">
              🔒 Speech is generated on your device — your text is never uploaded. The voice model (60–160MB, depending on your hardware) downloads once on first use.
            </p>
          </div>

          <PrivacyPanel />

          <div className="mt-8 text-sm text-neutral-600 dark:text-[#9CA3AF] leading-relaxed space-y-4">
            <p>QuickConvert's text-to-speech uses Kokoro, an 82-million-parameter neural voice model that runs in your browser through WebAssembly. Unlike cloud TTS services that send your text to a server, QuickConvert synthesizes speech locally — the model downloads once on first use, then works privately and offline.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
