'use client'

import { useSearchParams } from 'next/navigation'

export default function NotFoundClient() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <div className="text-center mt-4">
      {query ? (
        <p className="text-gray-400">Você buscou por: <strong>{query}</strong></p>
      ) : (
        <p className="text-gray-400">Página não encontrada.</p>
      )}
    </div>
  )
}
