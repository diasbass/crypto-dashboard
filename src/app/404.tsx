// app/404.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function NotFoundContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  return (
    <div>
      <h1>Página não encontrada</h1>
      {query && <p>Parâmetro de busca: {query}</p>}
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
