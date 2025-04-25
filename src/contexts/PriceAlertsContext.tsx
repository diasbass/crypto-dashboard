'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';

type Alert = {
  coinId: string;
  targetPrice: number;
};

type PriceAlertsContextType = {
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
  removeAlert: (index: number) => void;
};

export const PriceAlertsContext = createContext<PriceAlertsContextType | undefined>(undefined);

export function PriceAlertsProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  // Carrega do localStorage ao iniciar
  useEffect(() => {
    const stored = localStorage.getItem('price-alerts');
    if (stored) {
      try {
        setAlerts(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse alerts from localStorage:', e);
      }
    }
  }, []);

  // Salva no localStorage sempre que alterar
  useEffect(() => {
    localStorage.setItem('price-alerts', JSON.stringify(alerts));
  }, [alerts]);

  const addAlert = (alert: Alert) => {
    setAlerts((prev) => [...prev, alert]);
  };

  const removeAlert = (index: number) => {
    setAlerts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <PriceAlertsContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </PriceAlertsContext.Provider>
  );
}
