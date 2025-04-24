"use client";

import dynamic from "next/dynamic";

const SearchQueryInfo = dynamic(() => import("../components/SearchQueryInfo"), {
  ssr: false,
  loading: () => <p className="text-gray-400">Carregando...</p>,
});

export default function NotFound() {
  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
      <p className="text-gray-400 mb-6">
        Não conseguimos encontrar a página solicitada.
      </p>
      <SearchQueryInfo />
    </div>
  );
}
