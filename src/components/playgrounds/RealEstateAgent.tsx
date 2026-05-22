import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Bot, Play, Square } from 'lucide-react'

export function RealEstateAgent() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [step, setStep] = useState(0)
  
  // Referência para guardar a instância do áudio nativo do navegador
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Inicializa o áudio apenas uma vez ao montar o componente
  useEffect(() => {
    // Aponta para o arquivo que você salvou na pasta public
    audioRef.current = new Audio('/audio_exemplo.m4a')

    // Evento disparado automaticamente quando o áudio chega ao fim
    const handleAudioEnd = () => {
      setIsPlaying(false)
      setStep(3) // Avança direto para o estado final de Lead Qualificado
    }

    audioRef.current.addEventListener('ended', handleAudioEnd)

    // Limpeza ao desmontar o componente (evita áudio tocando fantasma)
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.removeEventListener('ended', handleAudioEnd)
      }
    }
  }, [])

  // Gerencia o fluxo de controle de reprodução do áudio
  const togglePlayback = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0 // Reseta para o início
      setIsPlaying(false)
      setStep(0)
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Erro ao reproduzir o áudio. O navegador pode exigir interação prévia do usuário.", err)
      })
      setIsPlaying(true)
      setStep(0)
    }
  }

  // Controla a linha do tempo visual com base no tempo de reprodução (7 segundos total)
  useEffect(() => {
    if (!isPlaying) return

    // Passo 1: Transcrição aparece após 1 segundo de áudio tocando
    const t1 = setTimeout(() => setStep(1), 1000)
    
    // Passo 2: Agente de IA começa a processar aos 5.5 segundos (perto do fim do áudio)
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

      {/* Player de Áudio Real */}
      <div className="p-3 rounded-xl bg-slate-950 flex items-center gap-4 border border-white/5">
        <button 
          onClick={togglePlayback} 
          className="h-9 w-9 flex items-center justify-center rounded-full bg-gold-500 text-slate-950 hover:scale-105 transition-transform shrink-0"
        >
          {isPlaying ? <Square size={14} fill="currentColor" /> : <Play size={14} className="ml-0.5" fill="currentColor" />}
        </button>

        {/* Ondas Sonoras Dinâmicas */}
        <div className="flex-1 flex items-center gap-0.5 h-6">
          {[...Array(24)].map((_, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gold-500/80 rounded-full transition-all duration-300" 
              style={{ 
                height: isPlaying ? `${Math.floor(Math.random() * 80) + 20}%` : '15%',
                // Adiciona um efeito pulse via css quando estiver tocando
                animation: isPlaying ? 'pulse 0.5s ease-in-out infinite alternate' : 'none',
                animationDelay: `${i * 0.02}s`
              }} 
            />
          ))}
        </div>
      </div>

      {/* Logs do Pipeline */}
      <div className="flex-1 min-h-[140px] border border-slate-200 dark:border-white/5 bg-[var(--bg-secondary)] rounded-lg p-3 flex flex-col justify-center">
        {step === 0 && !isPlaying && (
          <p className="text-center text-xs text-[var(--text-secondary)] font-medium">
            Clique no botão Play para escutar a ligação do Lead.
          </p>
        )}
        
        {isPlaying && step === 0 && (
          <p className="text-center text-xs font-mono text-amber-500 animate-pulse">
            🎙 [WHISPER API] Escutando e transcrevendo chamada áudio...
          </p>
        )}

        {step >= 1 && (
          <div className="text-xs font-mono text-[var(--text-primary)] bg-slate-900/50 p-2 rounded border border-white/5 space-y-1">
            <p className="text-gold-500 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> 
              Transcrição em tempo real:
            </p>
            <p className="italic">"Procuro um imóvel de 3 quartos na Barra da Tijuca, teto disponível de 1.5M..."</p>
          </div>
        )}

        {step === 2 && (
          <p className="text-center text-xs font-mono text-purple-500 animate-pulse mt-2">
            🧠 [LLM REASONING] Avaliando perfil, extraindo tags e pontuando intenção...
          </p>
        )}

        {step === 3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1 mt-2"
          >
            <div className="flex items-center justify-between font-bold text-emerald-500">
              <span>✓ LEAD QUALIFICADO AUTOMATICAMENTE</span>
              <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-[10px]">SCORE: 9.8/10</span>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)]">
              Destino Webhook CRM: <span className="font-bold text-[var(--text-primary)]">Alta Prioridade - Barra</span>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}