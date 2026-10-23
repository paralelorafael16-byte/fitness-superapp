export default function CreatePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-white">Criar Publicação / Live</h1>
      <p className="text-sm text-zinc-400">
        Compartilhe um post de 12h ou inicie uma transmissão ao vivo.
      </p>
      <div className="space-y-3">
        <button className="w-full bg-blue-600 hover:bg-blue-500 font-bold py-3 rounded-xl transition-colors text-sm">
          📸 Postar Foto/Vídeo (Expira em 12h)
        </button>
        <button className="w-full bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600/30 font-bold py-3 rounded-xl transition-colors text-sm">
          🔴 Iniciar Transmissão Ao Vivo
        </button>
      </div>
    </div>
  )
}