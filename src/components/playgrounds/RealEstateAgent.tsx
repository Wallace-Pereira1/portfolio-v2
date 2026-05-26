import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Bot, Play, Square } from 'lucide-react'

export function RealEstateAgent() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [step, setStep] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/audio_exemplo.m4a')

    const handleAudioEnd = () => {
      setIsPlaying(false)
      setStep(3)
    }

    audioRef.current.addEventListener('ended', handleAudioEnd)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.removeEventListener('ended', handleAudioEnd)
      }
    }
  }, [])

  const togglePlayback = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
      setStep(0)
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Erro ao reproduzir o áudio.", err)
      })
      setIsPlaying(true)
      setStep(0)
    }
  }

  useEffect(() => {
    if (!isPlaying) return
    const t1 = setTimeout(() => setStep(1), 1000)
    const t2 = setTimeout(() => setStep(2), 5500)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [isPlaying])

  return (
    <div className="flex flex-col h-full p-4 justify-between space-y-3">
      <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
        <Bot size={14} /> Análise por Voz: Transcrição & Score de Leads
      </div>

      <div className="p-3 rounded-xl bg-[var(--playground-inner)] flex items-center gap-4 border border-[var(--playground-border)] transition-colors">
        <button 
          onClick={togglePlayback} 
          className="h-9 w-9 flex items-center justify-center rounded-full bg-gold-500 text-slate-950 hover:scale-105 transition-transform shrink-0 shadow-sm"
        >
          {isPlaying ? <Square size={14} fill="currentColor" /> : <Play size={14} className="ml-0.5" fill="currentColor" />}
        </button>

        <div className="flex-1 flex items-center gap-0.5 h-6">
          {[...Array(24)].map((_, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gold-500 rounded-full transition-all duration-300" 
              style={{ 
                height: isPlaying ? `${Math.floor(Math.random() * 80) + 20}%` : '15%',
                animation: isPlaying ? 'pulse 0.5s ease-in-out infinite alternate' : 'none',
                animationDelay: `${i * 0.02}s`
              }} 
            />
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-[140px] border border-[var(--playground-border)] bg-[var(--playground-inner)] rounded-lg p-3 flex flex-col justify-center transition-colors">
        {step === 0 && !isPlaying && (
          <p className="text-center text-xs text-[var(--text-secondary)] font-medium">
            Clique no botão Play para escutar a ligação do Lead.
          </p>
        )}
        
        {isPlaying && step === 0 && (
          <p className="text-center text-xs font-mono text-amber-600 dark:text-amber-500 animate-pulse uppercase">
            🎙 [Whisper API] Transcrevendo chamada...
          </p>
        )}

        {step >= 1 && (
          <div className="text-xs font-mono text-[var(--text-primary)] bg-[var(--bg-primary)] rounded p-2 border border-[var(--playground-border)] space-y-1 shadow-sm">
            <p className="text-gold-600 dark:text-gold-500 font-bold flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> 
              Transcrição:
            </p>
            <p className="italic text-[var(--text-primary)]">"Procuro um imóvel de 3 quartos na Barra da Tijuca, teto disponível de 1.5M..."</p>
          </div>
        )}

        {step === 2 && (
          <p className="text-center text-xs font-mono text-purple-600 dark:text-purple-400 animate-pulse mt-2 uppercase">
            🧠 [LLM] Avaliando perfil e intenção...
          </p>
        )}

        {step === 3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="p-2.5 rounded bg-emerald-500 border border-emerald-600 text-white shadow-md text-xs space-y-1 mt-2"
          >
            <div className="flex items-center justify-between font-bold">
              <span>✓ LEAD QUALIFICADO</span>
              <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">SCORE: 9.8/10</span>
            </div>
            <p className="text-[11px] opacity-90">
              Destino: <span className="font-bold">Alta Prioridade - Barra</span>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
