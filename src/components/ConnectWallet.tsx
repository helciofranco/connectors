'use client';

import {
  useAccounts,
  useConnect,
  useDisconnect,
  useIsConnected,
} from '@fuels/react';

export function ConnectWallet() {
  const { connect, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected } = useIsConnected();
  const { accounts } = useAccounts();

  return (
    <div>
      <span> All connected accounts: </span>
      {accounts.map((account) => (
        <span key={account}>{account}</span>
      ))}

      <br />
      <br />

      {!isConnected && (
        <button type="button" onClick={() => connect()} disabled={isConnecting}>
          Connect
        </button>
      )}

      {isConnected && (
        <button type="button" onClick={() => disconnect()}>
          Disconnect
        </button>
      )}
    </div>
  );
}
