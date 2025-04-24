'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function NotFoundContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
      {query && <p>Você buscou por: <strong>{query}</strong></p>}
      <p className="text-gray-400 mt-2">Verifique se a URL está correta ou volte para a <Link href="/" className="text-yellow-400 underline">página inicial</Link>.</p>
    </div>
  )
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div className="p-6 text-white">Carregando página...</div>}>
      <NotFoundContent />
    </Suspense>
  )
}
