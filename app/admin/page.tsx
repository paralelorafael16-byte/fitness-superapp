'use client'
import { useState } from 'react'
import { PackagePlus, Users, ShoppingBag, ShieldCheck, DollarSign } from 'lucide-react'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'products' | 'users'>('products')

  return (
    <div className="space-y-6 p-4 pb-20">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-6 rounded-3xl text-white shadow-xl">
        <span className="flex items-center gap-1 text-[10px] font-extrabold bg-white/20 px-3 py-1 rounded-full w-fit mb-2 uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" /> Painel Geral Admin
        </span>
        <h1 className="text-2xl font-black">Gestão do App</h1>
        <p className="text-xs text-pink-100 mt-1">Gerencie produtos da loja, usuários e métricas do sistema.</p>
      </div>

      <div className="flex bg-zinc-900 p-1 rounded-2xl border border-zinc-800">
        <button
          onClick={() => setActiveTab('products')}
          className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'products' ? 'bg-pink-600 text-white' : 'text-zinc-400'
          }`}
        >
          Produtos & Loja
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'users' ? 'bg-pink-600 text-white' : 'text-zinc-400'
          }`}
        >
          Usuários
        </button>
      </div>

      {activeTab === 'products' && (
        <div className="bg-zinc-900 p-5 rounded-3xl border border-zinc-800 space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-pink-500" /> Cadastrar Produto
          </h2>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Nome do Produto</label>
              <input type="text" placeholder="Ex: Whey, Regata, Cinto LPO..." className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-pink-500" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-zinc-400 block mb-1">Preço (R$)</label>
                <input type="number" step="0.01" placeholder="89.90" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-pink-500" />
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1">Estoque</label>
                <input type="number" placeholder="50" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-pink-500" />
              </div>
            </div>
            <button type="submit" className="w-full bg-pink-600 hover:bg-pink-500 font-bold py-3 rounded-xl transition-colors text-sm text-white">
              Salvar Produto
            </button>
          </form>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-zinc-900 p-5 rounded-3xl border border-zinc-800 space-y-3">
          <h2 className="text-base font-bold text-white">Usuários & Cargos</h2>
          <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">Rafael Ponticelli</p>
              <p className="text-xs text-pink-400 font-semibold">ADMINISTRADOR</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}