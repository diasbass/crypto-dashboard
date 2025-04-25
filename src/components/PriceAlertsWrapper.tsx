'use client';

import usePriceAlerts from '../hooks/usePriceAlerts'; // contexto de alertas
import { useEffect } from 'react';

export default function PriceAlertsWrapper() {
  const { alerts } = usePriceAlerts(); // agora pegando todos os alerts do contexto

  useEffect(() => {
    if (!alerts.length) return;

    const interval = setInterval(async () => {
      try {
        const responses = await Promise.all(
          alerts.map((alert) =>
            fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${alert.coinId}&vs_currencies=usd`)
              .then((res) => res.json())
          )
        );

        responses.forEach((data, idx) => {
          const coinId = alerts[idx].coinId;
          const currentPrice = data[coinId]?.usd;
          const targetPrice = alerts[idx].targetPrice;

          if (currentPrice !== undefined && currentPrice >= targetPrice) {
            if (Notification.permission === 'granted') {
              new Notification('Price Alert!', {
                body: `${coinId.toUpperCase()} reached $${currentPrice.toFixed(2)}!`,
              });
            } else if (Notification.permission !== 'denied') {
              Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                  new Notification('Price Alert!', {
                    body: `${coinId.toUpperCase()} reached $${currentPrice.toFixed(2)}!`,
                  });
                }
              });
            }
          }
        });
      } catch (error) {
        console.error('Error fetching price alerts:', error);
      }
    }, 60 * 1000); // checar a cada minuto

    return () => clearInterval(interval);
  }, [alerts]);

  return null; // esse componente é apenas para "rodar" o monitoramento
}
