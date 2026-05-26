import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export function InvoiceScanner() {
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<any>(null)

  const database: Record<string, any> = {
    'doc1': {
      emitente: 'Carvalho Pereira Soluções Tech',
      cnpj: '42.312.901/0001-22',
      valor_total: 'R$ 8.450,00',
      operacao: 'Agentes Autónomos & Automações de IA',
      status: 'Processado via Gemini Vision API'
    },
    'doc2': {
      emitente: 'Logística Avançada Rio Ltda',
      cnpj: '10.543.112/0003-89',
      valor_total: 'R$ 14.200,00',
      operacao: 'Pipelines Assíncronos de Dados',
      status: 'Processado via Gemini Vision API'
    }
  }

  const runScan = (id: string) => {
    setIsScanning(true)
    setScanResult(null)
    setSelectedInvoice(id)
    setTimeout(() => {
      setIsScanning(false)
      setScanResult(database[id])
    }, 1200)
  }

  return (
    <div className="flex flex-col h-full p-4 justify-between space-y-3">
      <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
        <FileText size={14} /> Pipeline de Visão: OCR & Estruturação
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => runScan('doc1')} className={`p-2 rounded-lg text-left border text-xs font-semibold transition-all ${selectedInvoice === 'doc1' ? 'border-gold-500 bg-gold-500/10 text-gold-500' : 'border-slate-300 dark:border-white/5 bg-[var(--bg-secondary)]'}`}>
          📄 Nota_Prestacao.pdf
        </button>
        <button onClick={() => runScan('doc2')} className={`p-2 rounded-lg text-left border text-xs font-semibold transition-all ${selectedInvoice === 'doc2' ? 'border-gold-500 bg-gold-500/10 text-gold-500' : 'border-slate-300 dark:border-white/5 bg-[var(--bg-secondary)]'}`}>
          📄 Nota_Servico_Rio.png
        </button>
      </div>
      <div className="flex-1 min-h-[160px] bg-slate-950 rounded-lg relative overflow-hidden flex flex-col p-4 justify-center border border-white/5">
        {isScanning && (
          <>
            <div className="absolute inset-x-0 h-0.5 bg-gold-500 top-0 shadow-[0_0_15px_#e1b12c] animate-[bounce_1.2s_infinite]" />
            <p className="text-center text-xs font-mono text-gold-500 animate-pulse">PARSING MULTIMODAL EM EXECUÇÃO...</p>
          </>
        )}
        {!isScanning && !scanResult && <p className="text-center text-xs font-mono text-slate-500">Selecione um documento acima para simular a extração.</p>}
        {!isScanning && scanResult && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[11px] text-emerald-400 space-y-1 h-full overflow-y-auto">
            <p><span className="text-purple-400">"emitente"</span>: "{scanResult.emitente}",</p>
            <p><span className="text-purple-400">"cnpj"</span>: "{scanResult.cnpj}",</p>
            <p><span className="text-purple-400">"valor"</span>: "{scanResult.valor_total}",</p>
            <p className="text-xs text-white bg-emerald-500/20 p-1 rounded mt-2 inline-block">✓ {scanResult.status}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}