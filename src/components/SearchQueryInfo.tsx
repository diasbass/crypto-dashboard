'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchQueryInfo() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <p className="text-sm text-gray-400 mt-2">
      {query ? `Você buscou por: "${query}"` : 'Nenhuma busca recente encontrada.'}
    </p>
  )
}
