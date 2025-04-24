'use client'

import { useSearchParams } from 'next/navigation'

export default function NotFoundContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
      <p className="text-gray-400">Você buscou por: <strong>{query}</strong></p>
    </div>
  )
}
