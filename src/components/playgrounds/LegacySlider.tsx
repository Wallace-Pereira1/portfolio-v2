import { useState } from 'react'
import { Monitor } from 'lucide-react'

export function LegacySlider() {
  const [sliderPos, setSliderPos] = useState(50)

  return (
    <div className="flex flex-col h-full justify-between p-4">
      <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
        <Monitor size={14} /> Slider Interativo: ASP vs Angular
      </div>
      <div className="relative flex-1 w-full rounded-lg bg-slate-950 overflow-hidden select-none min-h-[220px]">
        
        {/* Camada Moderna (Angular) */}
        <div className="w-full max-w-xs p-4 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-md shadow-2xl space-y-3">
          <div className="w-full max-w-xs p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl space-y-3">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="h-3 w-20 bg-white/30 rounded" />
            </div>
            <div className="h-4 w-3/4 bg-white/20 rounded" />
            <div className="h-3 w-1/2 bg-white/10 rounded" />
          </div>
          <span className="absolute bottom-3 right-4 text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
            SPA Angular Moderno
          </span>
        </div>

        {/* Camada Antiga (ASP 3.0) */}
        <div 
          className="absolute inset-y-0 left-0 bg-zinc-300 border-r-2 border-gold-500 z-10 overflow-hidden flex flex-col p-6 justify-center items-center text-center"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="min-w-[220px] p-4 bg-gray-100 border-2 border-gray-400 text-left font-mono text-[10px] text-zinc-800 shadow-md">
            <div className="bg-gray-300 p-1 border border-zinc-400 text-center font-bold mb-2">Microsoft ASP 3.0 Portal</div>
            <table className="w-full border-collapse border border-zinc-400 bg-white text-[10px]">
              <tbody>
                <tr>
                  <td className="border border-zinc-400 p-1 bg-gray-200 font-bold">ID:</td>
                  <td className="border border-zinc-400 p-1">0012_REQ</td>
                </tr>
                <tr>
                  <td className="border border-zinc-400 p-1 bg-gray-200 font-bold">EXEC:</td>
                  <td className="border border-zinc-400 p-1">POST_BACK</td>
                </tr>
              </tbody>
            </table>
          </div>
          <span className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600 bg-zinc-400/30 px-2 py-0.5 rounded whitespace-nowrap">
            Sistema Legado ASP
          </span>
        </div>

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
        Arrasta para o lado para alternar entre as arquiteturas
      </p>
    </div>
  )
}