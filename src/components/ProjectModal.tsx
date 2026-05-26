import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X, ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

// Importações dos componentes de simulação isolados
import { LegacySlider } from './playgrounds/LegacySlider'
import { InvoiceScanner } from './playgrounds/InvoiceScanner'
import { RealEstateAgent } from './playgrounds/RealEstateAgent'
import { FiscalSentinelLogs } from './playgrounds/FiscalSentinelLogs'

export type Project = {
  id: string
  title: string
  descriptionLong: string
  technologies: readonly string[]
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
  
  // Atalho de teclado ESC para fechar
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open || !project) return null

  // Função que mapeia os IDs reais para renderizar os componentes de simulação
  const renderPlayground = (id: string) => {
    const normalizedId = id.toLowerCase().trim().replace('project-', '')

    switch (normalizedId) {
      case 'legacy-modernization':
      case 'legacy-modernization-project':
      case 'legacy':
      case 'sistema-legado':
      case 'projeto-legado': 
        return <LegacySlider />

      case 'ocr':
      case 'ocr-reader':
      case 'invoice-scanner':
      case 'invoice-reader':
      case 'ai-invoice-reader':
      case 'invoice-ocr-ia': 
        return <InvoiceScanner />

      case 'real-estate-ai':
      case 'real-estate-ai-agent':
      case 'real-estate':
        return <RealEstateAgent />

      case 'fiscal':
      case 'fiscal-sentinel':
      case 'sentinela-fiscal':
      case 'fiscal-sentinel-logs':
        return <FiscalSentinelLogs />

      case 'partner-management-hub':
      case 'solargrid':
        return (
          <div className="flex h-full flex-col items-center justify-center text-center p-6 bg-slate-950/10 space-y-4">
            <div className="p-3 rounded-full bg-gold-500/10 text-gold-500 animate-pulse">
              <ArrowUpRight size={32} />
            </div>
            <div className="max-w-xs space-y-1">
              <p className="text-sm font-bold text-[var(--text-primary)]">
                Aplicação SaaS Disponível
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Este projeto possui um ambiente de produção completo na Vercel com banco de dados Supabase ativo.
              </p>
            </div>
            <p className="text-[11px] text-gold-500 font-semibold bg-gold-500/10 px-3 py-1 rounded-full">
              Clique em "Acessar Aplicação" para testar
            </p>
          </div>
        )

      default:
        return (
          <div className="flex h-full flex-col items-center justify-center text-center p-6 bg-slate-950/10">
            <p className="text-xs text-[var(--text-secondary)] font-medium">
              ID não interceptado: <span className="font-mono bg-slate-200 dark:bg-white/10 px-1.5 py-0.5 rounded text-[var(--text-primary)]">{id}</span>
            </p>
            <p className="text-[11px] text-[var(--text-secondary)] mt-1">
              Adicione este caso ou ajuste a constante do projeto.
            </p>
          </div>
        )
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center md:p-4">
        
        <motion.div
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-[var(--bg-primary)] md:rounded-2xl p-6 md:p-10 shadow-2xl overflow-y-auto border-t md:border border-slate-300 dark:border-white/10 flex flex-col justify-between"
          initial={{ opacity: 0, y: window.innerWidth < 768 ? '100%' : 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: window.innerWidth < 768 ? '100%' : 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Cabeçalho */}
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
            <div className="min-w-0">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500/80">
                Engenharia de Software
              </p>
              <h3 className="mt-1 text-xl md:text-2xl font-extrabold text-[var(--text-primary)] truncate">
                {project.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 bg-[var(--bg-secondary)] px-4 py-2 text-xs font-bold text-[var(--text-primary)] shadow-sm hover:bg-slate-200 dark:hover:bg-white/20 transition-all shrink-0"
            >
              <ArrowLeft size={14} className="md:hidden" />
              <X size={14} className="hidden md:block" />
              <span>{window.innerWidth < 768 ? 'Voltar' : 'Fechar'}</span>
            </button>
          </div>

          {/* Grid Layout */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch flex-1">
            
            {/* Coluna Esquerda */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                  {project.descriptionLong}
                </p>

                <div className="mt-6">
                  <p className="text-[10px] font-extrabold tracking-[0.22em] uppercase text-[var(--text-secondary)] opacity-80">
                    Arquitetura do Ecossistema
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-300 dark:border-white/10 bg-[var(--badge-bg-mobile)] px-3 py-1 text-xs font-semibold text-[var(--text-primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-4">
                {project.links.github && (
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 bg-[var(--btn-bg-mobile)] px-4 py-2.5 text-xs font-bold text-[var(--text-primary)] shadow-sm hover:bg-slate-200 dark:hover:bg-white/20 transition-all"
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowUpRight size={14} />
                    Código Fonte
                  </a>
                )}
                {project.links.demo && (
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gold-500 text-slate-950 px-4 py-2.5 text-xs font-bold shadow-md hover:bg-gold-500/90 transition-all"
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowUpRight size={14} />
                    Acessar Aplicação
                  </a>
                )}
              </div>
            </div>

            {/* Coluna Direita (Playground) - Reativa ao Tema */}
            <div className="md:col-span-6 rounded-xl border border-[var(--playground-border)] bg-[var(--playground-bg)] overflow-hidden min-h-[300px] transition-colors duration-300">
              {renderPlayground(project.id)}
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  )
}