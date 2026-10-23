'use client'
import { useState } from 'react'
import { Flame, CheckCircle2, ArrowRight, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react'
import WaterTracker from '@/components/profile/WaterTracker'

export default function HomePage() {
  const [showWater, setShowWater] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(142)

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1)
      setLiked(false)
    } else {
      setLikesCount(prev => prev + 1)
      setLiked(true)
    }
  }

  return (
    <div className="space-y-4 pt-3 pb-24 bg-[#0b0b0c] text-white min-h-screen">
      
      {/* 1. CARROSSEL DE STORIES / LIVES NO TOPO */}
      <div className="flex items-center gap-4 px-4 overflow-x-auto no-scrollbar py-1">
        
        {/* Story Normal */}
        <div className="flex flex-col items-center gap-1 min-w-[64px] cursor-pointer">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" 
              alt="mari.marques_" 
              className="w-full h-full object-cover rounded-full border-2 border-[#0b0b0c]"
            />
          </div>
          <span className="text-[10px] text-zinc-300 font-medium truncate w-16 text-center">
            mari.marqu...
          </span>
        </div>

        {/* Story AO VIVO (Com Tag Red LIVE) */}
        <div className="flex flex-col items-center gap-1 min-w-[64px] relative cursor-pointer">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-pink-600 to-purple-600 relative">
            <img 
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150" 
              alt="TRINKADAS" 
              className="w-full h-full object-cover rounded-full border-2 border-[#0b0b0c]"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded uppercase tracking-wider shadow-md">
              LIVE
            </span>
          </div>
          <span className="text-[10px] text-zinc-300 font-medium truncate w-16 text-center mt-1">
            TRINKADAS...
          </span>
        </div>

        {/* Story Resultados */}
        <div className="flex flex-col items-center gap-1 min-w-[64px] cursor-pointer">
          <div className="w-16 h-16 rounded-full p-[2px] bg-zinc-700">
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=150" 
              alt="Resultados" 
              className="w-full h-full object-cover rounded-full border-2 border-[#0b0b0c]"
            />
          </div>
          <span className="text-[10px] text-zinc-300 font-medium truncate w-16 text-center">
            Resultados
          </span>
        </div>

        {/* Story Hidratação / Botão do Rastreio */}
        <div 
          onClick={() => setShowWater(!showWater)}
          className="flex flex-col items-center gap-1 min-w-[64px] cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full p-[2px] bg-blue-500/30 border border-blue-500/50 flex items-center justify-center bg-zinc-900 text-blue-400">
            <span className="text-xl">💧</span>
          </div>
          <span className="text-[10px] text-blue-400 font-bold truncate w-16 text-center">
            Água
          </span>
        </div>

      </div>

      {/* RASTREADOR DE ÁGUA (EXPANSÍVEL AO CLICAR NO STORY ÁGUA) */}
      {showWater && (
        <div className="px-4 transition-all animate-in fade-in slide-in-from-top-2 duration-300">
          <WaterTracker targetMl={3000} />
        </div>
      )}

      {/* 2. CARD BANNER DESTAQUE (PROJETO / DESAFIO) */}
      <div className="mx-4 bg-gradient-to-r from-[#210914] to-[#120810] border border-pink-900/40 rounded-2xl p-4 flex items-center justify-between shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-pink-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
            <span>DESAFIO 15 DIAS</span>
          </div>
          <h2 className="text-lg font-black text-white leading-tight">
            Projeto TRINKADAS
          </h2>
          <p className="text-[11px] text-pink-300/70 font-medium">
            Apenas 14 vagas restantes!
          </p>
        </div>

        <button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md shadow-pink-600/30 transition-all shrink-0">
          <span>Ver Projeto</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. POST DO FEED COM FOTO REAL E INTERAÇÕES */}
      <div className="space-y-3 pt-2">
        {/* Cabeçalho do Post */}
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2.5">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" 
              alt="marimarques_" 
              className="w-9 h-9 rounded-full object-cover border border-pink-500/40"
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm text-white">marimarques_</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 fill-pink-500/20" />
              </div>
              <p className="text-[11px] text-zinc-400 leading-none">Atleta & Criadora</p>
            </div>
          </div>
          <span className="text-xs text-zinc-500 font-medium">3 horas atrás</span>
        </div>

        {/* Mídia do Post (Foto Real) */}
        <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800" 
            alt="Treino" 
            className="w-full h-full object-cover"
          />
          {/* Badge do carrossel */}
          <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10">
            1/2
          </span>
        </div>

        {/* Ações e Interações do Post */}
        <div className="px-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                  liked ? 'text-pink-500' : 'text-zinc-300 hover:text-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-pink-500 text-pink-500' : ''}`} />
                <span>{likesCount}</span>
              </button>
              <button className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>18</span>
              </button>
              <button className="text-zinc-300 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            <button className="text-zinc-300 hover:text-white transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed">
            <span className="font-bold text-white mr-2">marimarques_</span>
            Treino pesado de superiores concluído com sucesso! Quem aí já pagou o treino hoje? 💪🔥
          </p>
        </div>
      </div>

    </div>
  )
}