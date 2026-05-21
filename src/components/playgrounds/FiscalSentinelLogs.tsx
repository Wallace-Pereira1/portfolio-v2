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
      <div ref={containerRef} className="flex-1 min-h-[170px] bg-slate-950 rounded-lg p-3 font-mono text-[10px] space-y-1.5 overflow-y-auto border border-white/5">
        {logs.map((l, i) => (
          <p key={i} className={l.includes('💚') ? 'text-emerald-400 font-semibold' : l.includes('🚀') ? 'text-blue-400' : 'text-slate-300'}>{l}</p>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-2 rounded-xl bg-slate-100/70 dark:bg-white/5 text-center"><span className="text-[10px] text-[var(--text-secondary)] block font-bold">Uptime</span><span className="text-sm font-extrabold">24/7 Ativo</span></div>
        <div className="p-2 rounded-xl bg-emerald-500/10 text-center"><span className="text-[10px] text-emerald-500 block font-bold">Faturamento</span><span className="text-sm font-extrabold text-emerald-500">Conforme</span></div>
      </div>
    </div>
  )
}