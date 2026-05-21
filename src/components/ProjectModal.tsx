import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X, ArrowLeft, Monitor, FileText, Bot, Terminal, HelpCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

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
  // Estado para o slider do projeto Legado (0 a 100%)
  const [sliderPos, setSliderPos] = useState(50)

  // Resetar estados locais ao fechar ou trocar de projeto
  useEffect(() => {
    if (!open) {
      setSliderPos(50)
    }
  }, [open, project])

  // Atalho de teclado ESC para fechar
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  // =========================================================================
  // RENDER DOS MOCKS INTERATIVOS (A Mágica de Engenharia que vamos animar)
  // =========================================================================
  const renderInteractivePreview = (id: string) => {
    switch (id) {
      case 'project-legacy-modernization': // ID do seu projeto legado
        return (
          <div className="flex flex-col h-full justify-between p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
              <Monitor size={14} /> Slider Interativo: ASP vs Angular
            </div>
            {/* Container do Slider de Imagens */}
            <div className="relative flex-1 w-full rounded-lg bg-slate-950 overflow-hidden select-none min-h-[200px]">
              {/* Lado Novo (Angular) - Fica no fundo */}
              <div className="absolute inset-0 bg-slate-900 flex flex-col p-6 justify-center items-center text-center">
                <div className="max-w-xs p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
                  <div className="w-12 h-1.5 rounded-full bg-gold-500/80 mb-3" />
                  <div className="h-4 w-3/4 bg-white/20 rounded mb-2" />
                  <div className="h-3 w-1/2 bg-white/10 rounded" />
                </div>
                <span className="absolute bottom-3 right-4 text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                  SPA Angular Moderno
                </span>
              </div>

              {/* Lado Antigo (ASP) - Fica na camada de cima cortado pela largura do slider */}
              <div 
                className="absolute inset-y-0 left-0 bg-zinc-300 border-r-2 border-gold-500 z-10 overflow-hidden flex flex-col p-6 justify-center items-center text-center"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="min-w-[240px] p-4 bg-gray-100 border-2 border-gray-400 text-left font-mono text-[11px] text-zinc-800 shadow-md">
                  <table className="w-full border-collapse border border-zinc-400 bg-white text-xs">
                    <thead>
                      <tr className="bg-gray-300">
                        <th className="border border-zinc-400 p-1">ID</th>
                        <th className="border border-zinc-400 p-1">DATA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-zinc-400 p-1">0012</td>
                        <td className="border border-zinc-400 p-1">12/04/2004</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <span className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600 bg-zinc-400/20 px-2 py-0.5 rounded whitespace-nowrap">
                  Sistema Legado ASP
                </span>
              </div>

              {/* Input Invisível para Controlar o Arraste com o Dedo/Mouse */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 opacity-0 z-20 cursor-ew-resize w-full h-full"
              />
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] text-center mt-2">
              Arrastar para os lados para ver a evolução da arquitetura
            </p>
          </div>
        )

      case 'project-ocr': // ID do seu projeto de leitura de Notas Fiscais
        return (
          <div className="flex flex-col h-full p-4 justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
              <FileText size={14} /> Pipeline Inteligente de Visão (Gemini 2.0)
            </div>
            {/* Esqueleto da simulação do OCR */}
            <div className="flex-1 border border-dashed border-slate-700 rounded-lg flex items-center justify-center p-4 bg-slate-950/30">
              <p className="text-xs text-[var(--text-secondary)] text-center">
                [Simulador de Extração de Dados em Construção]
              </p>
            </div>
          </div>
        )

      case 'project-real-estate-ai': // ID do seu projeto do agente imobiliário
        return (
          <div className="flex flex-col h-full p-4 justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
              <Bot size={14} /> Pipeline Multimodal (Whisper + LLM)
            </div>
            {/* Esqueleto da simulação do agente */}
            <div className="flex-1 border border-dashed border-slate-700 rounded-lg flex items-center justify-center p-4 bg-slate-950/30">
              <p className="text-xs text-[var(--text-secondary)] text-center">
                [Simulador de Qualificação por Áudio em Construção]
              </p>
            </div>
          </div>
        )

      case 'project-fiscal': // ID do seu projeto de Sentinela Fiscal
        return (
          <div className="flex flex-col h-full p-4 justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
              <Terminal size={14} /> Automação Assíncrona & Logs do Supabase
            </div>
            {/* Esqueleto do terminal de logs */}
            <div className="flex-1 border border-dashed border-slate-700 rounded-lg flex items-center justify-center p-4 bg-slate-950/30">
              <p className="text-xs text-[var(--text-secondary)] text-center">
                [Simulador de Logs de Auditoria Contínua em Construção]
              </p>
            </div>
          </div>
        )

      default:
        return (
          <div className="flex flex-col h-full items-center justify-center text-center p-6 bg-slate-950/10">
            <HelpCircle size={32} className="text-gold-500/40 mb-2" />
            <p className="text-xs text-[var(--text-secondary)]">
              Protótipo funcional disponível para visualização via repositório ou produção.
            </p>
          </div>
        )
    }
  }

  return (
    <AnimatePresence>
      {open && project ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center md:p-4">
          
          {/* Overlay de fundo com desfoque de vidro premium */}
          <motion.div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* CONTAINER DO MODAL RESPONSIVO: Fullpage no mobile, Caixa de Diálogo no PC */}
          <motion.div
            className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-[var(--bg-primary)] md:rounded-2xl p-6 md:p-10 shadow-2xl overflow-y-auto border-t md:border border-slate-300 dark:border-white/10 flex flex-col justify-between"
            initial={{ opacity: 0, y: window.innerWidth < 768 ? '100%' : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: window.innerWidth < 768 ? '100%' : 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Header do Painel */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
              <div className="min-w-0">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500/80">
                  Engenharia & Solução
                </p>
                <h3 className="mt-1 text-xl md:text-2xl font-extrabold text-[var(--text-primary)] truncate">
                  {project.title}
                </h3>
              </div>

              {/* Botão Dinâmico: Seta de voltar no celular, Botão de fechar no PC */}
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 bg-[var(--bg-secondary)] px-4 py-2 text-xs font-bold text-[var(--text-primary)] shadow-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              >
                <ArrowLeft size={14} className="md:hidden" />
                <X size={14} className="hidden md:block" />
                <span>{window.innerWidth < 768 ? 'Voltar' : 'Fechar'}</span>
              </button>
            </div>

            {/* Layout Split Screen: Duas colunas simétricas no PC, coluna única empilhada no celular */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch flex-1">
              
              {/* Coluna 1: Documentação Técnica (Lado Esquerdo) */}
              <div className="md:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                    {project.descriptionLong}
                  </p>

                  <div className="mt-6">
                    <p className="text-[10px] font-extrabold tracking-[0.22em] uppercase text-[var(--text-secondary)] opacity-80">
                      Arquitetura & Stacks
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-[11px] font-bold text-[var(--text-primary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links de Acesso */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.links.github && (
                    <a
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 bg-[var(--bg-secondary)] px-4 py-2.5 text-xs font-bold text-[var(--text-primary)] shadow-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
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

              {/* Coluna 2: Playground Interativo Realtime (Lado Direito) */}
              <div className="md:col-span-6 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 backdrop-blur-sm overflow-hidden min-h-[280px]">
                {renderInteractivePreview(project.id)}
              </div>

            </div>

          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}