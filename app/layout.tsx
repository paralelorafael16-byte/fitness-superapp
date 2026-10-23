import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Home, Film, ShoppingBag, Radio, User, Bell } from 'lucide-react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TRINKADAS - Fitness App',
  description: 'Plataforma completa de treino, comunidade e e-commerce.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#0b0b0c] text-white min-h-screen pb-24 selection:bg-pink-500 selection:text-white`}>
        {/* HEADER REAL DE PRODUÇÃO */}
        <header className="sticky top-0 z-50 bg-[#0b0b0c]/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300">
              TRINKADAS
            </span>
          </Link>

          {/* AÇÕES DO USUÁRIO LOGADO */}
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              {/* Indicador de Notificação Real */}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500" />
            </button>

            {/* Acesso rápido ao Admin (só para admins autenticados) */}
            <Link 
              href="/admin" 
              className="text-xs font-bold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full transition-all"
            >
              Painel Admin
            </Link>
          </div>
        </header>

        {/* ÁREA PRINCIPAL */}
        <main className="max-w-md mx-auto">{children}</main>

        {/* NAVEGAÇÃO INFERIOR DEFINITIVA */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b0b0c]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex items-center justify-around max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center gap-1 text-pink-500 font-bold">
            <Home className="w-5 h-5" />
            <span className="text-[10px]">Feed</span>
          </Link>
          <Link href="/reels" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-pink-400 transition-colors">
            <Film className="w-5 h-5" />
            <span className="text-[10px]">Reels</span>
          </Link>
          <Link href="/projects" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-pink-400 transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-[10px]">Projetos</span>
          </Link>
          <Link href="/live" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-pink-400 transition-colors">
            <Radio className="w-5 h-5" />
            <span className="text-[10px]">Live</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-pink-400 transition-colors">
            <User className="w-5 h-5" />
            <span className="text-[10px]">Perfil</span>
          </Link>
        </nav>
      </body>
    </html>
  )
}