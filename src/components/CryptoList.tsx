'use client'

import { useEffect, useState } from 'react'
import CryptoCard from './CryptoCard'

interface Coin {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap_rank: number
  categories?: string[]
}

const FILTERS = ['Todas', 'Top 10', 'Top 50', 'Stablecoins']

interface CryptoListProps {
  coins: Coin[]
  initialFilter: string
  initialSearch: string
}

export default function CryptoList({ coins, initialFilter, initialSearch }: CryptoListProps) {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [filter, setFilter] = useState('Todas')

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300)
    return () => clearTimeout(handler)
  }, [search])

  const filteredCoins = coins
    .filter((coin) => {
      const matchSearch =
        coin.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(debouncedSearch.toLowerCase())

      const matchFilter =
        filter === 'Todas'
          ? true
          : filter === 'Top 10'
          ? coin.market_cap_rank <= 10
          : filter === 'Top 50'
          ? coin.market_cap_rank <= 50
          : filter === 'Stablecoins'
          ? coin.symbol.toLowerCase() === 'usdt' || coin.symbol.toLowerCase() === 'usdc' || coin.symbol.toLowerCase() === 'dai'
          : true

      return matchSearch && matchFilter
    })

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Buscar por nome ou símbolo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredCoins.length === 0 ? (
        <p className="text-gray-400">Nenhuma moeda encontrada.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredCoins.map((coin) => (
            <CryptoCard key={coin.id} coin={coin} />
          ))}
        </div>
      )}
    </div>
  )
}
