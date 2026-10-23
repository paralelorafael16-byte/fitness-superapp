export default function ReelsPage() {
  return (
    <div className="p-4 space-y-4 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 text-2xl font-bold">
        🎬
      </div>
      <h1 className="text-xl font-bold text-white">Vídeos Curtos & Reels</h1>
      <p className="text-xs text-zinc-400 max-w-xs">
        Feed de vídeos curtos em tela cheia com conteúdos dos criadores e atletas.
      </p>
    </div>
  )
}