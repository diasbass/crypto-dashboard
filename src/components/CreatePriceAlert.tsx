'use client';

import { useState } from 'react';
import usePriceAlerts from '../hooks/usePriceAlerts'; // usando o contexto

export default function CreatePriceAlert() {
  const [coinId, setCoinId] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const { addAlert } = usePriceAlerts(); // função para adicionar alerta

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (coinId.trim() && targetPrice.trim()) {
      addAlert({
        coinId,
        targetPrice: parseFloat(targetPrice),
      });
      setCoinId('');
      setTargetPrice('');
      alert('Price alert created successfully!');
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-4 rounded shadow-md flex flex-col gap-4 w-full max-w-md"
    >
      <h2 className="text-xl font-semibold text-center">Create Price Alert</h2>

      <input
        type="text"
        placeholder="Coin ID (e.g., bitcoin)"
        value={coinId}
        onChange={(e) => setCoinId(e.target.value)}
        className="border p-2 rounded text-black dark:text-black"
      />

      <input
        type="number"
        placeholder="Target Price (USD)"
        value={targetPrice}
        onChange={(e) => setTargetPrice(e.target.value)}
        className="border p-2 rounded text-black dark:text-black"
      />

      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition"
      >
        Create Alert
      </button>
    </form>
  );
}
