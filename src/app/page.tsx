import CryptoList from '../components/CryptoList'
import { fetchCoins } from '../utils/fetchCoins'

export const dynamic = 'force-dynamic'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}) {
  const { filter = 'Todas', query = '' } = await searchParams
  const coins = await fetchCoins(100)

  return (
    <main className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Criptomoedas</h1>
      <CryptoList coins={coins} initialFilter={filter} initialSearch={query} />
    </main>
  )
}
