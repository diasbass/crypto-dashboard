import { Suspense } from 'react'
import Link from 'next/link'
import NotFoundClient from '../components/NotFoundClient'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg mb-4">Página não encontrada</p>

      <Suspense fallback={<p className="text-gray-500">Carregando detalhes...</p>}>
        <NotFoundClient />
      </Suspense>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
      >
        Voltar para a Home
      </Link>
    </main>
  )
}
