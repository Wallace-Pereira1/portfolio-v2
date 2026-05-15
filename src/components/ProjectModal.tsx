import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X, Maximize2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export type Project = {
  id: string
  title: string
  descriptionLong: string
  technologies: readonly string[]
  imageUrl?: string
  links: {
    github?: string
    demo?: string
  }
}

type ProjectModalProps = {
  open: boolean
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ open, project, onClose }: ProjectModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  // Resetar o zoom quando o modal fechar ou trocar de projeto
  useEffect(() => {
    if (!open) {
      setIsZoomed(false)
    }
  }, [open, project])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false)
        } else {
          onClose()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose, isZoomed])

  return (
    <AnimatePresence>
      {open && project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          onClick={onClose}
        >
          {/* Overlay de fundo */}
          <motion.div
            className="absolute inset-0 bg-[#050a15]/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Container do Modal */}
          <motion.div
            className="relative w-full max-w-2xl glass-card p-8 md:p-10"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Seção da Imagem com Gatilho de Zoom */}
            {project.imageUrl && (
              <div 
                className="group relative mb-6 aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5 cursor-zoom-in"
                onClick={() => setIsZoomed(true)}
              >
                <img
                  src={project.imageUrl}
                  alt={`Print do projeto ${project.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay visual de hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Maximize2 className="mb-2 text-white" size={24} />
                  <span className="text-xs font-medium text-white uppercase tracking-wider">Clique para expandir</span>
                </div>
              </div>
            )}

            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-500/80">
                  Projeto
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-gold-500 leading-tight drop-shadow-[0_0_18px_rgba(225,177,44,0.22)]">
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition-all hover:bg-white/10 hover:border-white/20"
              >
                <X size={16} className="shrink-0" />
                Fechar
              </button>
            </div>

            <p className="mt-6 text-slate-200/85 leading-relaxed">
              {project.descriptionLong}
            </p>

            <div className="mt-8">
              <p className="text-xs font-extrabold tracking-[0.22em] uppercase text-slate-200/80">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition-all hover:bg-white/10 hover:border-white/20"
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <ArrowUpRight size={16} />
                GitHub
              </a>
              {project.links.github && (
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition-all hover:bg-white/10 hover:border-white/20"
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight size={16} />
                  GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-3 text-sm font-semibold text-gold-500 transition-all hover:border-gold-500/50 hover:bg-gold-500/15"
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight size={16} />
                  Ver Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* LIGHTBOX (Imagem Expandida) */}
          <AnimatePresence>
            {isZoomed && project.imageUrl && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050a15]/fb backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
                onClick={() => setIsZoomed(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="relative max-w-7xl max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={project.imageUrl}
                    className="h-auto max-h-[90vh] w-auto rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                    alt={project.title}
                  />
                  
                  {/* Botão de Fechar flutuante no Lightbox */}
                  <button 
                    className="absolute -top-12 right-0 md:-right-12 p-2 text-white/70 hover:text-white transition-colors"
                    onClick={() => setIsZoomed(false)}
                  >
                    <X size={32} />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}