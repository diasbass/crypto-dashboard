import Link from 'next/link'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dinamicamente importado com suspense
const SearchQueryInfo = dynamic(() => import('../components/SearchQueryInfo'), {
  ssr: false,
  loading: () => <p className="text-gray-400">Carregando...</p>,
})

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg">Página não encontrada.</p>

      <Suspense fallback={<p className="text-gray-400 mt-2">Carregando...</p>}>
        <SearchQueryInfo />
      </Suspense>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
      >
        Voltar para Home
      </Link>
    </main>
  )
}
