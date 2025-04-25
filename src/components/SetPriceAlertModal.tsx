'use client';

import { useState } from 'react';

interface SetPriceAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  coinId: string;
  coinName: string;
}

export default function SetPriceAlertModal({
  isOpen,
  onClose,
  coinId,
  coinName,
}: SetPriceAlertModalProps) {
  const [alertPrice, setAlertPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!alertPrice) {
      alert('Please enter a target price.');
      return;
    }

    // Salva o alerta no localStorage
    const existingAlerts = JSON.parse(localStorage.getItem('priceAlerts') || '{}');
    existingAlerts[coinId] = {
      coinName,
      targetPrice: parseFloat(alertPrice),
    };
    localStorage.setItem('priceAlerts', JSON.stringify(existingAlerts));

    alert(`Alert set for ${coinName} at $${alertPrice}`);
    setAlertPrice('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Set Price Alert for {coinName}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            step="0.01"
            placeholder="Enter target price in USD"
            value={alertPrice}
            onChange={(e) => setAlertPrice(e.target.value)}
            className="w-full p-2 mb-4 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md"
            >
              Save Alert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
