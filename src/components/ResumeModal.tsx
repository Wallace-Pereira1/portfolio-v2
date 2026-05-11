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
          {/* Overlay de fundo */}
          <motion.div 
            className="absolute inset-0 bg-[#050a15]/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Container do PDF */}
          <motion.div
            className="relative h-full w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Header do Modal */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">
              <h3 className="font-semibold text-gold-500">Meu Currículo</h3>
              <div className="flex gap-4">
                <a 
                  href={resumeUrl} 
                  download 
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <Download size={18} />
                  Baixar PDF
                </a>
                <button onClick={onClose} className="text-slate-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* O PDF em si */}
            <iframe
              src={`${resumeUrl}#toolbar=0`} // #toolbar=0 esconde a barra nativa se o navegador permitir
              className="h-full w-full"
              title="Currículo"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}