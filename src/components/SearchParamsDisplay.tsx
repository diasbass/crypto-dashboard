"use client";

import { useSearchParams } from "next/navigation";

export default function SearchParamsDisplay() {
  const params = useSearchParams();
  const from = params.get("from");

  return (
    <p className="text-gray-400 text-sm mt-2">
      {from ? `Você veio de: ${from}` : "Endereço não encontrado."}
    </p>
  );
}
