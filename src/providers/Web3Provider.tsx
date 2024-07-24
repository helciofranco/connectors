'use client';

import { FuelWalletConnector } from '@fuels/connectors';
import { FuelProvider } from '@fuels/react';
import type { ReactNode } from 'react';

type Web3ProviderProps = {
  children: ReactNode;
};

export function Web3Provider({ children }: Web3ProviderProps) {
  return (
    <FuelProvider
      fuelConfig={{
        connectors: [new FuelWalletConnector()],
      }}
    >
      {children}
    </FuelProvider>
  );
}
