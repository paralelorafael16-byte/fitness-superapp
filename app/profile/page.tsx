'use client'
import { useState } from 'react'
import { CheckCircle2, Link as LinkIcon, Grid, Film, Bookmark, Settings, Plus, Camera } from 'lucide-react'
import WaterTracker from '@/components/profile/WaterTracker'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'grid' | 'reels' | 'saved' | 'water'>('grid')

  return (
    <div className="space-y-4 pt-3 pb-24 bg-[#0b0b0c] text-white min-h-screen">
      {/* 1. CABEÇALHO DO PERFIL */}
      <div className="px-4 space-y-4">
        <div className="flex items-center gap-4">
          {/* Avatar com Borda Gradiente de Destaque */}
          <div className="relative w-20 h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
              alt="Avatar do Utilizador"
              className="w-full h-full object-cover rounded-full border-2 border-[#0b0b0c]"
            />
            <button className="absolute bottom-0 right-0 p-1.5 bg-pink-600 rounded-full text-white border-2 border-[#0b0b0c]">
              <Camera className="w-3 h-3" />
            </button>
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg font-bold">rafael.ponticelli</h1>
                <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500/20" />
              </div>
              <button className="p-1.5 text-zinc-400 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>

            {/* Botões de Ação do Perfil Proprio */}
            <div className="flex gap-2">
              <button className="flex-1 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 font-semibold text-xs py-2 rounded-xl transition-colors">
                Editar Perfil
              </button>
              <button className="flex-1 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 font-semibold text-xs py-2 rounded-xl transition-colors">
                Partilhar Perfil
              </button>
            </div>
          </div>
        </div>

        {/* Biografia e Detalhes */}
        <div className="space-y-1 text-xs">
          <p className="font-bold text-sm text-zinc-100">Rafael Ponticelli</p>
          <p className="text-zinc-300 leading-relaxed">
            Foco total em alta performance, hipertrofia e estilo de vida saudável 🔥 💪
          </p>
          <p className="text-zinc-400">📍 Curitiba &gt; Brasil | Atleta &amp; Desenvolvedor 🏋️‍♂️</p>
          <a
            href="#"
            className="flex items-center gap-1 text-pink-400 font-medium hover:underline pt-1"
          >
            <LinkIcon className="w-3 h-3" /> linktr.ee/rafaelponticelli
          </a>
        </div>

        {/* 2. DESTAQUES FIXOS (HIGHLIGHTS) */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {/* Adicionar Novo Destaque */}
          <div className="flex flex-col items-center gap-1 min-w-[60px]">
            <div className="w-14 h-14 rounded-full border border-dashed border-zinc-700 flex items-center justify-center bg-zinc-900 text-zinc-400">
              <Plus className="w-5 h-5" />
            </div>
            <span className="text-[10px] text-zinc-400 font-medium truncate w-14 text-center">
              Novo
            </span>
          </div>

          {[
            { title: 'Treinos', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=150' },
            { title: 'Evolução', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=150' },
            { title: 'Dieta 🥗', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=150' },
            { title: 'Suplementos', img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=150' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 min-w-[60px]">
              <div className="w-14 h-14 rounded-full p-[1.5px] bg-zinc-800 border border-zinc-700/60">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-[10px] text-zinc-400 font-medium truncate w-14 text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* 3. MÉTRICAS */}
        <div className="flex justify-around py-2 border-y border-zinc-800/80 text-center">
          <div>
            <p className="font-bold text-sm text-white">12,4 mil</p>
            <p className="text-[10px] text-zinc-400 uppercase tracking-wider">seguidores</p>
          </div>
          <div>
            <p className="font-bold text-sm text-white">428</p>
            <p className="text-[10px] text-zinc-400 uppercase tracking-wider">a seguir</p>
          </div>
          <div>
            <p className="font-bold text-sm text-white">15</p>
            <p className="text-[10px] text-zinc-400 uppercase tracking-wider">publicações</p>
          </div>
        </div>
      </div>

      {/* 4. SEPARADORES DE NAVEGAÇÃO DO PERFIL */}
      <div className="flex border-b border-zinc-800">
        <button
          onClick={() => setActiveTab('grid')}
          className={`flex-1 py-3 flex justify-center border-b-2 transition-colors ${
            activeTab === 'grid' ? 'border-pink-500 text-pink-500' : 'border-transparent text-zinc-500'
          }`}
        >
          <Grid className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActiveTab('reels')}
          className={`flex-1 py-3 flex justify-center border-b-2 transition-colors ${
            activeTab === 'reels' ? 'border-pink-500 text-pink-500' : 'border-transparent text-zinc-500'
          }`}
        >
          <Film className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActiveTab('saved')}
          className={`flex-1 py-3 flex justify-center border-b-2 transition-colors ${
            activeTab === 'saved' ? 'border-pink-500 text-pink-500' : 'border-transparent text-zinc-500'
          }`}
        >
          <Bookmark className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActiveTab('water')}
          className={`flex-1 py-3 flex justify-center text-xs font-bold border-b-2 transition-colors ${
            activeTab === 'water' ? 'border-blue-500 text-blue-400' : 'border-transparent text-zinc-500'
          }`}
        >
          💧 Água
        </button>
      </div>

      {/* 5. CONTEÚDO DAS ABAS */}
      {activeTab === 'grid' && (
        <div className="grid grid-cols-3 gap-0.5">
          {[
            'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400',
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
            'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400',
            'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400',
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
          ].map((url, i) => (
            <div key={i} className="aspect-square bg-zinc-900 relative group overflow-hidden">
              <img src={url} alt="Post" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'water' && (
        <div className="px-4 pt-2">
          <WaterTracker targetMl={3000} />
        </div>
      )}
    </div>
  )
}