'use client';

import { useContext } from 'react';
import { PriceAlertsContext } from '../contexts/PriceAlertsContext';

export default function usePriceAlerts() {
  const context = useContext(PriceAlertsContext);
  if (!context) {
    throw new Error('usePriceAlerts must be used within a PriceAlertsProvider');
  }
  return context;
}
