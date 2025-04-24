import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SearchParamsDisplay() {
  const params = useSearchParams();
  const from = params.get("from");

  return (
    <p className="text-gray-400 text-sm mt-2">
      {from ? `Você veio de: ${from}` : "Endereço não encontrado."}
    </p>
  );
}

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-2">Página não encontrada</p>

      <Suspense fallback={<p className="text-gray-400">Carregando...</p>}>
        <SearchParamsDisplay />
      </Suspense>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
      >
        Voltar para Home
      </Link>
    </main>
  );
}
