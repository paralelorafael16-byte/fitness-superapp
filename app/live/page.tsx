'use client'
import { Radio, Eye, Heart } from 'lucide-react'

export default function LivePage() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Radio className="w-5 h-5 text-red-500 animate-pulse" /> Transmissões Ao Vivo
        </h1>
        <span className="text-xs font-bold bg-red-500/10 text-red-400 px-2.5 py-1 rounded-full border border-red-500/20">
          AO VIVO NOW
        </span>
      </div>

      {/* Player da Live */}
      <div className="relative aspect-[9/16] w-full max-w-sm mx-auto bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 flex flex-col justify-between p-4 text-white">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold">TRINKADAS LIVE</span>
          </div>
          <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-xs">
            <Eye className="w-3.5 h-3.5 text-zinc-400" /> 284
          </span>
        </div>

        <div className="text-center text-zinc-500 text-xs italic">
          [ Stream de Vídeo WebSockets / WebRTC ]
        </div>

        <div className="flex items-center gap-2 z-10">
          <input
            type="text"
            placeholder="Enviar mensagem..."
            className="flex-1 bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
          />
          <button className="p-2 bg-pink-600 rounded-xl text-white">
            <Heart className="w-4 h-4 fill-white" />
          </button>
        </div>
      </div>
    </div>
  )
}