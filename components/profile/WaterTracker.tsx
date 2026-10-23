'use client'
import { useState } from 'react'
import { Droplet, Plus } from 'lucide-react'

export default function WaterTracker({ targetMl = 2500 }: { targetMl?: number }) {
  const [currentMl, setCurrentMl] = useState(1250)

  const addWater = (amount: number) => {
    setCurrentMl((prev) => Math.min(prev + amount, targetMl))
  }

  const percentage = Math.min(Math.round((currentMl / targetMl) * 100), 100)

  return (
    <div className="bg-zinc-900 p-6 rounded-3xl shadow-lg border border-zinc-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Droplet className="w-6 h-6 text-blue-500 fill-blue-500" />
          <h3 className="font-semibold text-lg text-white">Hidratação Diária</h3>
        </div>
        <span className="text-sm font-bold text-blue-400">{percentage}% da meta</span>
      </div>

      {/* Barra de Progresso */}
      <div className="w-full bg-zinc-800 h-4 rounded-full overflow-hidden mb-4">
        <div 
          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between items-center mb-6 text-sm text-zinc-400">
        <span>Consumido: <strong className="text-white">{currentMl} ml</strong></span>
        <span>Meta: <strong className="text-white">{targetMl} ml</strong></span>
      </div>

      {/* Botões de Ação rápida */}
      <div className="grid grid-cols-3 gap-2">
        <button 
          onClick={() => addWater(250)}
          className="flex items-center justify-center gap-1 py-2.5 px-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl font-medium text-sm transition-colors border border-blue-500/20"
        >
          <Plus className="w-4 h-4" /> 250ml
        </button>
        <button 
          onClick={() => addWater(500)}
          className="flex items-center justify-center gap-1 py-2.5 px-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl font-medium text-sm transition-colors border border-blue-500/20"
        >
          <Plus className="w-4 h-4" /> 500ml
        </button>
        <button 
          onClick={() => addWater(750)}
          className="flex items-center justify-center gap-1 py-2.5 px-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl font-medium text-sm transition-colors border border-blue-500/20"
        >
          <Plus className="w-4 h-4" /> 750ml
        </button>
      </div>
    </div>
  )
}