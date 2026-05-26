import { useState, useEffect, useRef } from 'react'
import { Terminal } from 'lucide-react'

export function FiscalSentinelLogs() {
  const [logs, setLogs] = useState<string[]>(['🚀 [SENTINEL] Inicializando rotina de auditoria contínua...'])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = [
      '📡 [WEBHOOK] Capturando payloads de eventos de faturamento...',
      '🔍 [VALIDATION] Verificando consistência de tributação e NCM...',
      '⚡ [SUPABASE] Gravando logs de auditoria em tabela com RLS ativo...',
      '💚 [CONFORMIDADE] Validação concluída. Status: 100% em conformidade.',
      '🚀 [SENTINEL] Iniciando nova varredura assíncrona...'
    ]
    let idx = 0
    const interval = setInterval(() => {
      setLogs((prev) => {
        const n = [...prev, list[idx]]
        if (n.length > 12) n.shift()
        return n
      })
      idx = (idx + 1) % list.length
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight
  }, [logs])

  return (
    <div className="flex flex-col h-full p-4 justify-between space-y-3">
      <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
        <Terminal size={14} /> Monitor de Eventos: Auditoria em Tempo Real
      </div>
      <div 
        ref={containerRef} 
        className="flex-1 min-h-[170px] bg-[var(--playground-inner)] rounded-lg p-3 font-mono text-[10px] space-y-1.5 overflow-y-auto border border-[var(--playground-border)] transition-colors duration-300"
      >
        {logs.map((l, i) => (
          <p 
            key={i} 
            className={
              l.includes('💚') 
                ? 'text-emerald-600 dark:text-emerald-400 font-bold' 
                : l.includes('🚀') 
                  ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                  : 'text-[var(--text-secondary)]'
            }
          >
            {l}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-2 rounded-xl bg-[var(--badge-bg-mobile)] border border-[var(--btn-border-mobile)] text-center shadow-sm">
          <span className="text-[10px] text-[var(--text-secondary)] block font-bold uppercase tracking-tighter">Uptime</span>
          <span className="text-sm font-extrabold text-[var(--text-primary)]">24/7 Ativo</span>
        </div>
        <div className="p-2 rounded-xl bg-emerald-500 border border-emerald-600 text-center shadow-sm">
          <span className="text-[10px] text-white/90 block font-bold uppercase tracking-tighter">Faturamento</span>
          <span className="text-sm font-extrabold text-white">Conforme</span>
        </div>
      </div>
    </div>
  )
}
