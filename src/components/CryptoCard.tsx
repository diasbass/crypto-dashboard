'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Coin {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  price_change_percentage_24h: number
}

export default function CryptoCard({ coin }: { coin: Coin }) {
  const isPositive = coin.price_change_percentage_24h >= 0

  return (
    <Link href={`/coin/${coin.id}`}>
      <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-xl transition duration-200 cursor-pointer">
        <div className="flex items-center space-x-4">
          <Image
            src={coin.image}
            alt={coin.name}
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <div>
            <h2 className="text-xl font-semibold">{coin.name}</h2>
            <p className="text-sm text-gray-400 uppercase">{coin.symbol}</p>
          </div>
        </div>

        <p className="mt-4 text-lg font-medium">${coin.current_price.toFixed(2)}</p>

        <p
          className={`mt-1 text-sm font-semibold ${
            isPositive ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    </Link>
  )
}
