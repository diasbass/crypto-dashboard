// src/app/not-found.tsx
import { Suspense } from 'react'
import NotFoundClient from '../components/NotFoundClient'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-gray-900 text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <Suspense fallback={<p className="text-gray-500">Carregando detalhes...</p>}>
        <NotFoundClient />
      </Suspense>
    </div>
  )
}
