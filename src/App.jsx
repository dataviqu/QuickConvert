import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import AllTools from './pages/AllTools'
import Converter from './pages/Converter'
import PdfSuite from './pages/PdfSuite'
import TextToSpeech from './pages/TextToSpeech'
import Pricing from './pages/Pricing'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Privacy from './pages/Privacy'

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col bg-white dark:bg-[#050816] transition-colors duration-200">
        {/* Site-wide dark mode backdrop */}
        <div className="fixed inset-0 -z-10 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0B1026] to-[#050816]" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>
        <ScrollToHash />
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tools" element={<AllTools />} />
              <Route path="/tools/:slug" element={<Converter />} />
              <Route path="/tools/pdf-suite" element={<PdfSuite />} />
              <Route path="/tools/merge-pdf" element={<PdfSuite />} />
              <Route path="/tools/text-to-speech" element={<TextToSpeech />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
