'use client';

import { useEffect } from 'react';
import usePriceAlerts from '../hooks/usePriceAlerts';
import toast from 'react-hot-toast';

export default function PriceAlertsWrapper() {
  const { alerts } = usePriceAlerts();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (alerts.length === 0) return;

      const ids = alerts.map((alert) => alert.coinId).join(',');
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
      );
      const data = await res.json();

      alerts.forEach((alert) => {
        const currentPrice = data[alert.coinId]?.usd;
        if (currentPrice !== undefined && currentPrice >= alert.targetPrice) {
          toast.success(
            `🚨 ${alert.coinId.toUpperCase()} reached $${alert.targetPrice.toLocaleString()}!`
          );
        }
      });
    }, 30000); // checar a cada 30 segundos

    return () => clearInterval(interval);
  }, [alerts]);

  return null;
}
