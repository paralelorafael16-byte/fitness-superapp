export default function ShopPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-white">Loja Multicategoria</h1>
      <p className="text-sm text-zinc-400">
        Suplementos, roupas dry-fit, equipamentos e acessórios.
      </p>
      <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-center text-zinc-500 text-sm">
        Cadastre produtos pelo Super Admin (`/admin`).
      </div>
    </div>
  )
}