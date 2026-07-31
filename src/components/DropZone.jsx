import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, File, X, Download, CheckCircle, ArrowRight } from 'lucide-react'
import { commonFormats } from '../data/tools'

export default function DropZone({
  defaultFrom = 'JPG',
  defaultTo = 'PDF',
  fromOptions = commonFormats,
  toOptions = commonFormats,
}) {
  const [files, setFiles] = useState([])
  const [converted, setConverted] = useState(false)
  const [converting, setConverting] = useState(false)
  const [from, setFrom] = useState(defaultFrom)
  const [to, setTo] = useState(defaultTo)

  const onDrop = useCallback((accepted) => {
    setFiles(prev => [...prev, ...accepted])
    setConverted(false)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  })

  const removeFile = (i) => setFiles(files.filter((_, idx) => idx !== i))

  const canConvert = files.length > 0 && !converting && from !== to

  const handleConvert = () => {
    if (!canConvert) return
    setConverting(true)
    setTimeout(() => {
      setConverting(false)
      setConverted(true)
    }, 1800)
  }

  return (
    <div className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-white/10 rounded-2xl p-6 shadow-sm">
      {/* Drop area */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all duration-200 ${
          isDragActive
            ? 'border-brand-orange dark:border-[#06B6D4] bg-brand-orange-light dark:bg-[#06B6D4]/10 scale-[1.01]'
            : 'border-neutral-200 dark:border-white/10 hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-[#050816]'
        }`}
      >
        <input {...getInputProps()} />
        <motion.div
          animate={{ y: isDragActive ? -4 : 0 }}
          className="flex flex-col items-center gap-3"
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isDragActive ? 'bg-brand-orange dark:bg-[#06B6D4]/10' : 'bg-neutral-100 dark:bg-[#1F2937]'}`}>
            <Upload size={20} className={isDragActive ? 'text-brand-orange dark:text-[#22D3EE]' : 'text-neutral-400 dark:text-[#6B7280]'} />
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-700 dark:text-[#D1D5DB]">Drop files to begin</p>
            <p className="text-xs text-neutral-400 dark:text-[#6B7280] mt-0.5">or click to browse — multiple files, up to 50MB each</p>
          </div>
        </motion.div>
      </div>

      {/* File list */}
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 space-y-2"
          >
            {files.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex items-center gap-3 p-2.5 bg-neutral-50 dark:bg-[#050816] rounded-lg border border-neutral-100 dark:border-white/5"
              >
                <File size={15} className="text-neutral-400 dark:text-[#6B7280] shrink-0" />
                <span className="text-xs text-neutral-600 dark:text-[#9CA3AF] truncate flex-1">{f.name}</span>
                <span className="text-xs text-neutral-400 dark:text-[#6B7280]">{(f.size / 1024).toFixed(0)} KB</span>
                <button onClick={() => removeFile(i)} className="text-neutral-400 dark:text-[#6B7280] hover:text-red-500 transition-colors">
                  <X size={13} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-xs text-neutral-500 dark:text-[#9CA3AF] font-medium shrink-0">Convert</span>

          {/* From */}
          <div className="relative shrink-0">
            <select
              value={from}
              onChange={(e) => { setFrom(e.target.value); setConverted(false) }}
              className="appearance-none pl-2.5 pr-6 py-1 bg-neutral-100 dark:bg-[#1F2937] rounded text-xs font-medium text-neutral-700 dark:text-[#D1D5DB] cursor-pointer border border-transparent outline-none hover:-translate-y-0.5 hover:shadow-md hover:border-neutral-300 dark:hover:border-white/20 focus:border-brand-orange dark:focus:border-[#06B6D4] transition-all duration-200"
            >
              {fromOptions.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
            <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px] text-neutral-400 dark:text-[#6B7280]">▾</span>
          </div>

          <ArrowRight size={12} className="text-neutral-400 dark:text-[#6B7280] shrink-0" />

          {/* To */}
          <div className="relative shrink-0">
            <select
              value={to}
              onChange={(e) => { setTo(e.target.value); setConverted(false) }}
              className="appearance-none pl-2.5 pr-6 py-1 bg-neutral-100 dark:bg-[#1F2937] rounded text-xs font-medium text-neutral-700 dark:text-[#D1D5DB] cursor-pointer border border-transparent outline-none hover:-translate-y-0.5 hover:shadow-md hover:border-neutral-300 dark:hover:border-white/20 focus:border-brand-orange dark:focus:border-[#06B6D4] transition-all duration-200"
            >
              {toOptions.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
            <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px] text-neutral-400 dark:text-[#6B7280]">▾</span>
          </div>

          {from === to && (
            <span className="text-[11px] text-amber-600 dark:text-amber-400 whitespace-nowrap">pick different formats</span>
          )}
        </div>

        <motion.button
          onClick={handleConvert}
          disabled={!canConvert}
          whileHover={canConvert ? { scale: 1.05, y: -2 } : {}}
          whileTap={canConvert ? { scale: 0.96 } : {}}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
            !canConvert
              ? 'bg-neutral-100 dark:bg-[#1F2937] text-neutral-400 dark:text-[#6B7280] cursor-not-allowed'
              : converted
              ? 'bg-green-600 text-white hover:shadow-lg hover:shadow-green-600/30'
              : 'bg-neutral-900 dark:bg-[#06B6D4] text-white hover:bg-neutral-700 dark:hover:bg-[#0891B2] hover:shadow-lg hover:shadow-neutral-900/20 dark:hover:shadow-[#06B6D4]/40'
          }`}
        >
          {converting ? (
            <><span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Converting…</>
          ) : converted ? (
            <><CheckCircle size={13} /> Download</>
          ) : (
            <><Download size={13} /> Convert</>
          )}
        </motion.button>
      </div>
    </div>
  )
}
