'use client'

import Image from 'next/image'

interface Props {
  coin: {
    name: string
    image: string
    current_price: number
    market_cap: number
    total_volume: number
    symbol: string
  }
}

export default function CompareCard({ coin }: Props) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={coin.image}
          alt={coin.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <h2 className="text-xl font-semibold">
          {coin.name} ({coin.symbol.toUpperCase()})
        </h2>
      </div>
      <p>Preço atual: ${coin.current_price.toLocaleString()}</p>
      <p>Valor de mercado: ${coin.market_cap.toLocaleString()}</p>
      <p>Volume 24h: ${coin.total_volume.toLocaleString()}</p>
    </div>
  )
}
