'use client';

import { useEffect, useState } from 'react';
import { Bar, Radar } from 'react-chartjs-2';
import Image from 'next/image';
import {
  Chart as ChartJS,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    score: number;
  };
}

export default function TrendingRadar() {
  const [trending, setTrending] = useState<TrendingCoin[]>([]);

  const fetchTrending = async () => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
      const data = await res.json();
      setTrending(data.coins);
    } catch (error) {
      console.error('Failed to fetch trending coins:', error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const barData = {
    labels: trending.map((coin) => coin.item.name),
    datasets: [
      {
        label: 'Market Cap Rank',
        data: trending.map((coin) => coin.item.market_cap_rank),
        backgroundColor: '#facc15',
      },
    ],
  };

  const radarData = {
    labels: trending.map((coin) => coin.item.name),
    datasets: [
      {
        label: 'Trending Score',
        data: trending.map((coin) => coin.item.score + 1), // adicionando +1 para melhorar visual
        backgroundColor: 'rgba(250, 204, 21, 0.3)',
        borderColor: '#facc15',
        borderWidth: 2,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: '#000' },
      },
      y: {
        ticks: { color: '#000' },
        beginAtZero: true,
      },
    },
  };

  const radarOptions = {
    responsive: true,
    scales: {
      r: {
        angleLines: { color: '#e5e7eb' },
        grid: { color: '#e5e7eb' },
        pointLabels: { color: '#000', font: { size: 14 } },
        ticks: {
          color: '#000',
          beginAtZero: true,
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="flex flex-col gap-8 p-6">
      {/* Refresh button */}
      <div className="flex justify-center">
        <button
          onClick={fetchTrending}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded transition"
        >
          Refresh Trends
        </button>
      </div>

      {/* Trending Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trending.map((coin) => (
          <div key={coin.item.id} className="border rounded p-4 bg-white dark:bg-gray-800 shadow">
            <div className="flex items-center space-x-4">
              <Image
                src={coin.item.thumb}
                alt={coin.item.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h2 className="font-bold text-lg text-black dark:text-white">
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Market Cap Rank: #{coin.item.market_cap_rank}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Market Cap Ranking</h2>
        <Bar data={barData} options={barOptions} />
      </div>

      {/* Radar Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Trending Score</h2>
        <Radar data={radarData} options={radarOptions} />
      </div>
    </div>
  );
}
