'use client'

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { useEffect, useState } from 'react'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
)

interface PriceChartProps {
  coinId: string
}

export default function PriceChart({ coinId }: PriceChartProps) {
  const [prices, setPrices] = useState<number[][]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
      )
      const data = await res.json()
      setPrices(data.prices)
    }

    fetchData()
  }, [coinId])

  if (prices.length === 0) return <p className="text-gray-400">Carregando gráfico...</p>

  const labels = prices.map(price => {
    const date = new Date(price[0])
    return `${date.getDate()}/${date.getMonth() + 1}`
  })

  const values = prices.map(price => price[1])

  const data = {
    labels,
    datasets: [
      {
        label: 'Preço (USD)',
        data: values,
        fill: true,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-8">
      <h2 className="text-lg font-semibold mb-4">Variação dos últimos 7 dias</h2>
      <Line data={data} options={options} />
    </div>
  )
}
