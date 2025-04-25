'use client';

import usePriceAlerts from '../hooks/usePriceAlerts';

export default function PriceAlertsClient() {
  const { alerts, removeAlert } = usePriceAlerts();

  if (alerts.length === 0) return null;

  return (
    <div className="p-4 bg-yellow-100 text-black rounded shadow-md max-w-md mx-auto mt-4">
      <h3 className="text-lg font-semibold mb-2">Active Alerts</h3>
      <ul className="space-y-1 text-sm">
        {alerts.map((alert, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>
              🔔 {alert.coinId.toUpperCase()} at ${alert.targetPrice}
            </span>
            <button
              onClick={() => removeAlert(index)}
              className="text-red-600 font-bold hover:text-red-800"
              title="Remove alert"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
