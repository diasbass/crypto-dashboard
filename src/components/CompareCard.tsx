'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

interface CompareCardProps {
  coin: {
    id: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    total_volume: number;
    price_change_percentage_24h: number;
    symbol: string;
  };
}

export default function CompareCard({ coin }: CompareCardProps) {
  const [historicalData, setHistoricalData] = useState<number[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=7`
        );
        const data = await res.json();
        const prices = data.prices.map(([_, price]: [number, number]) => price);
        setHistoricalData(prices);
      } catch (err) {
        console.error('Erro ao carregar histórico de preços:', err);
      }
    };

    fetchHistory();
  }, [coin.id]);

  return (
    <div className="border rounded-lg shadow-md p-4 w-full max-w-md bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <Image
          src={coin.image}
          alt={coin.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{coin.name} ({coin.symbol.toUpperCase()})</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ${coin.current_price.toLocaleString()}
          </p>
          <p
            className={`text-sm ${
              coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </div>

      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        <p>
          <strong>Market Cap:</strong> ${coin.market_cap.toLocaleString()}
        </p>
        <p>
          <strong>Volume (24h):</strong> ${coin.total_volume.toLocaleString()}
        </p>
      </div>

      {historicalData.length > 0 && (
        <div className="mt-4">
          <Line
            data={{
              labels: historicalData.map((_, i) => i),
              datasets: [
                {
                  label: 'Preço (7d)',
                  data: historicalData,
                  borderColor: '#facc15',
                  borderWidth: 2,
                  tension: 0.4,
                  pointRadius: 0,
                  fill: false,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
              },
              scales: {
                x: { display: false },
                y: { display: false },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}
