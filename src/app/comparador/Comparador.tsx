'use client'

import { useState, useEffect } from 'react'
import CompareCard from '../../components/CompareCard'

interface Coin {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  market_cap: number
  total_volume: number
}

export default function Comparador() {
  const [coins, setCoins] = useState<Coin[]>([])
  const [coinA, setCoinA] = useState<string>('')
  const [coinB, setCoinB] = useState<string>('')

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(res => res.json())
      .then(data => setCoins(data))
  }, [])

  const selectedA = coins.find(c => c.id === coinA)
  const selectedB = coins.find(c => c.id === coinB)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <select
          className="flex-1 p-2 rounded bg-gray-800 text-white"
          value={coinA}
          onChange={e => setCoinA(e.target.value)}
        >
          <option value="">Escolha a primeira moeda</option>
          {coins.map(coin => (
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol.toUpperCase()})
            </option>
          ))}
        </select>

        <select
          className="flex-1 p-2 rounded bg-gray-800 text-white"
          value={coinB}
          onChange={e => setCoinB(e.target.value)}
        >
          <option value="">Escolha a segunda moeda</option>
          {coins.map(coin => (
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol.toUpperCase()})
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedA && <CompareCard coin={selectedA} />}
        {selectedB && <CompareCard coin={selectedB} />}
      </div>
    </div>
  )
}
