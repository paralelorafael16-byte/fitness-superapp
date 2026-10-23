'use client'
import WaterTracker from '@/components/profile/WaterTracker'
import { Timer, Heart, MessageCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* MÓDULO DE HÁBITOS DIÁRIOS NO TOPO DO FEED */}
      <WaterTracker targetMl={3000} />

      {/* FEED DE POSTS TEMPORÁRIOS (12H) */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
          <Timer className="w-5 h-5 text-amber-500" /> Feed Temporário (12h)
        </h2>

        {/* Card de Post Exemplo */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-red-500 p-0.5">
                <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center font-bold text-xs">
                  RP
                </div>
              </div>
              <span className="font-semibold text-sm">rafael.ponticelli</span>
            </div>
            <span className="text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full font-medium border border-amber-400/20">
              Expira em 08h 15m
            </span>
          </div>

          <div className="aspect-square bg-zinc-800 flex items-center justify-center text-zinc-500">
            [ Imagem do Treino / Pós-Treino ]
          </div>

          <div className="p-3 space-y-2">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-red-500">
                <Heart className="w-5 h-5" /> 142
              </button>
              <button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-blue-500">
                <MessageCircle className="w-5 h-5" /> 18
              </button>
            </div>
            <p className="text-sm text-zinc-300">
              <span className="font-semibold text-white mr-2">rafael.ponticelli</span>
              Treino de hoje pago! Foco total na meta. 💪
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}