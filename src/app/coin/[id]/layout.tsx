export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params

  return {
    title: `${id.toUpperCase()} | Detalhes da Criptomoeda`,
  }
}

export default function CoinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
