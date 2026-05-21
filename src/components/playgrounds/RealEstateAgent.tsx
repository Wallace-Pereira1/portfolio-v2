import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bot, Play, Square } from 'lucide-react'

export function RealEstateAgent() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!isPlaying) {
      setStep(0)
      return
    }
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= 3) {
          setIsPlaying(false)
          return 3
        }
        return prev + 1
      })
    }, 2500)
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <div className="flex flex-col h-full p-4 justify-between space-y-3">
      <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
        <Bot size={14} /> Análise por Voz: Transcrição & Score de Leads
      </div>
      <div className="p-3 rounded-xl bg-slate-950 flex items-center gap-4 border border-white/5">
        <button onClick={() => setIsPlaying(!isPlaying)} className="h-9 w-9 flex items-center justify-center rounded-full bg-gold-500 text-slate-950 hover:scale-105 transition-transform shrink-0">
          {isPlaying ? <Square size={14} fill="currentColor" /> : <Play size={14} className="ml-0.5" fill="currentColor" />}
        </button>
        <div className="flex-1 flex items-center gap-0.5 h-6">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="flex-1 bg-gold-500/80 rounded-full transition-all duration-300" style={{ height: isPlaying ? `${Math.floor(Math.random() * 80) + 20}%` : '15%' }} />
          ))}
        </div>
      </div>
      <div className="flex-1 min-h-[140px] border border-slate-200 dark:border-white/5 bg-[var(--bg-secondary)] rounded-lg p-3 flex flex-col justify-center">
        {step === 0 && !isPlaying && <p className="text-center text-xs text-[var(--text-secondary)] font-medium">Clique no botão Play para processar a gravação.</p>}
        {isPlaying && step === 0 && <p className="text-center text-xs font-mono text-amber-500 animate-pulse">🎙 [WHISPER API] Transcrevendo chamada áudio...</p>}
        {step === 1 && (
          <div className="text-xs font-mono text-[var(--text-primary)] bg-slate-900/50 p-2 rounded border border-white/5">
            <p className="text-gold-500">Transcrição gerada:</p>
            <p className="italic">"Procuro um imóvel de 3 quartos na Barra da Tijuca, teto disponível de 1.5M..."</p>
          </div>
        )}
        {step === 2 && <p className="text-center text-xs font-mono text-purple-500 animate-pulse">🧠 [LLM REASONING] Avaliando métricas e intenção...</p>}
        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1">
            <div className="flex items-center justify-between font-bold text-emerald-500"><span>✓ LEAD QUALIFICADO</span><span>SCORE: 9.8/10</span></div>
            <p className="text-[11px] text-[var(--text-secondary)]">Destino Webhook CRM: <span className="font-bold text-[var(--text-primary)]">Alta Prioridade - Barra</span></p>
          </motion.div>
        )}
      </div>
    </div>
  )
}