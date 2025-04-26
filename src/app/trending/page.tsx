'use client';

import TrendingRadar from '../../components/TrendingRadar';

export default function TrendingPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Trending Cryptos</h1>
      <TrendingRadar />
    </div>
  );
}
