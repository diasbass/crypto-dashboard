'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function NotFoundContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
      {query && <p className="text-gray-400">Você buscou por: <strong>{query}</strong></p>}
      <p className="text-gray-400 mt-4">Verifique a URL ou volte à <Link href="/" className="text-yellow-400 underline">página inicial</Link>.</p>
    </div>
  )
}
