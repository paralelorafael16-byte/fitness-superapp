import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Home, Dumbbell, PlusCircle, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fitness SuperApp - Rede Social & Marketplace',
  description: 'Plataforma fitness completa com rede social 12h, e-commerce e treinos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen pb-20`}>
        {/* HEADER FIXO */}
        <header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">
            FITAPP
          </h1>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">
              <span className="w-2 h-2 rounded-full bg-red-500" /> LIVES
            </span>
          </div>
        </header>

        {/* CONTEÚDO DA PÁGINA */}
        <main className="max-w-md mx-auto p-4">{children}</main>

        {/* NAVEGAÇÃO INFERIOR MOBILE */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800 px-6 py-2 flex items-center justify-between max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-blue-500">
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium">Feed</span>
          </Link>
          <Link href="/projects" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-blue-500">
            <Dumbbell className="w-5 h-5" />
            <span className="text-[10px] font-medium">Treinos</span>
          </Link>
          <Link href="/create" className="flex flex-col items-center gap-1 text-blue-500">
            <PlusCircle className="w-7 h-7" />
          </Link>
          <Link href="/shop" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-blue-500">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-[10px] font-medium">Loja</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-blue-500">
            <User className="w-5 h-5" />
            <span className="text-[10px] font-medium">Perfil</span>
          </Link>
        </nav>
      </body>
    </html>
  )
}