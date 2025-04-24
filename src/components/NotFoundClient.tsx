'use client'

import { useSearchParams } from 'next/navigation'

export default function NotFoundClient() {
  const searchParams = useSearchParams()

  if (!searchParams || searchParams.size === 0) return null

  return (
    <p className="text-sm text-gray-500 mt-4">
      Parâmetros da URL: <code>{searchParams.toString()}</code>
    </p>
  )
}
