import { Suspense } from "react"
import Link from "next/link"
import NotFoundClient from "../../components/NotFoundClient"

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <Suspense fallback={<div className="p-6 text-center text-white">Carregando...</div>}>
        <NotFoundClient />
      </Suspense>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
      >
        Voltar para Home
      </Link>
    </main>
  )
}
