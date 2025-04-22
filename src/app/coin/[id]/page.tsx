export const dynamic = 'force-dynamic'

import Image from 'next/image'
import PriceChart from '../../../components/PriceChart'
import AffiliateLinks from '../../../components/AffiliateLinks'


async function getCoinData(id: string) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Falha ao carregar dados da moeda.')
  }

  return res.json()
}

export default async function CoinDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const coin = await getCoinData(id)

  return (
    <main className="p-6 text-white bg-gray-900 min-h-screen">
      <div className="flex items-center space-x-4 mb-6">
        <Image
          src={coin.image.large}
          alt={coin.name}
          width={64}
          height={64}
          className="w-16 h-16"
        />
        <div>
          <h1 className="text-3xl font-bold">
            {coin.name} ({coin.symbol.toUpperCase()})
          </h1>
          <p className="text-gray-400 text-sm">
            {coin.market_data.current_price.usd.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        </div>
      </div>

      <p
        className="mb-4 text-gray-300 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: coin.description.en?.split('. ')[0] + '.',
        }}
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Market Cap</h2>
          <p className="text-gray-300">
            ${coin.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Volume (24h)</h2>
          <p className="text-gray-300">
            ${coin.market_data.total_volume.usd.toLocaleString()}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Rank</h2>
          <p className="text-gray-300">#{coin.market_cap_rank}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Total Supply</h2>
          <p className="text-gray-300">
            {coin.market_data.total_supply?.toLocaleString() || 'N/A'}
          </p>
        </div>
      </div>
      <AffiliateLinks name={coin.name} />
      <PriceChart coinId={coin.id} />
    </main>
  )
}
