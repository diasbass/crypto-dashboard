import Link from "next/link"
import { Suspense } from "react"
import NotFoundClient from "../components/NotFoundClient"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-gray-400 mb-6 max-w-md">
        A página que você procura não existe ou foi removida.
      </p>

      {/* ✅ Wrapping dentro de <Suspense> */}
      <Suspense fallback={null}>
        <NotFoundClient />
      </Suspense>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition"
      >
        Voltar à página inicial
      </Link>
    </div>
  )
}
