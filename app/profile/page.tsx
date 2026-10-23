'use client'
import WaterTracker from '@/components/profile/WaterTracker'
import { User, Flame, Dumbbell } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      {/* CABEÇALHO DO PERFIL */}
      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-400 p-0.5 flex items-center justify-center">
          <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Rafael Ponticelli</h2>
          <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
            Foco: Hipertrofia
          </span>
        </div>
      </div>

      {/* RASTREADOR DE ÁGUA NO PERFIL */}
      <WaterTracker targetMl={2800} />

      {/* SEÇÃO ANTES & DEPOIS */}
      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl space-y-3">
        <h3 className="font-bold text-white text-sm flex items-center gap-2">
          <Flame className="w-4 h-4 text-amber-500" /> Timeline de Evolução (Antes & Depois)
        </h3>
        <p className="text-xs text-zinc-400">
          Suas fotos de evolução salvas de forma privada.
        </p>
        <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold py-2.5 rounded-xl border border-zinc-700 transition-colors">
          📷 Adicionar Foto da Semana
        </button>
      </div>
    </div>
  )
}