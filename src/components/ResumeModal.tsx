import { AnimatePresence, motion } from 'framer-motion'
import { X, Download } from 'lucide-react'

type ResumeModalProps = {
  isOpen: boolean
  onClose: () => void
  resumeUrl: string
}

export function ResumeModal({ isOpen, onClose, resumeUrl }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay de fundo - Usando cor sólida para blindar Safari */}
          <motion.div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Container do PDF - Reativo ao tema */}
          <motion.div
            className="relative h-full w-full max-w-5xl overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--bg-secondary)] shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Header do Modal */}
            <div className="flex items-center justify-between border-b border-[var(--card-border)] bg-[var(--bg-primary)] px-6 py-4 transition-colors">
              <h3 className="font-bold text-gold-500 uppercase tracking-wider text-sm">Meu Currículo</h3>
              <div className="flex gap-4">
                <a 
                  href={resumeUrl} 
                  download 
                  className="flex items-center gap-2 text-sm font-bold text-[var(--text-secondary)] hover:text-gold-500 transition-colors"
                >
                  <Download size={18} />
                  <span className="hidden md:inline">Baixar PDF</span>
                </a>
                <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* O PDF em si */}
            <iframe
              src={`${resumeUrl}#toolbar=0`}
              className="h-[calc(100%-60px)] w-full"
              title="Currículo"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
