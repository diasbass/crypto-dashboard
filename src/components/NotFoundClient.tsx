// src/components/NotFoundClient.tsx
'use client'

import { useSearchParams } from 'next/navigation'

export default function NotFoundClient() {
  const params = useSearchParams()
  const query = params.get('q') ?? 'desconhecido'

  return (
    <div className="text-center">
      <p className="text-gray-400">Nada encontrado para: <strong>{query}</strong></p>
    </div>
  )
}
