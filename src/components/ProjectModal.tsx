import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { useEffect } from 'react'

export type Project = {
  id: string
  title: string
  descriptionLong: string
  technologies: readonly string[]
  imageUrl?: string
  links: {
    github: string
    demo?: string
  }
}

type ProjectModalProps = {
  open: boolean
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ open, project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

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
          <motion.div
            className="absolute inset-0 bg-[#050a15]/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-2xl glass-card p-8 md:p-10"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {project.imageUrl && (
              <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img
                  src={project.imageUrl}
                  alt={`Print do projeto ${project.title}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
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
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

