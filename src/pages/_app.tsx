import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

// Only working when importing with SSR disabled
const Web3Provider = dynamic(
  () => import('@/providers/Web3Provider').then((mod) => mod.Web3Provider),
  { ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </ReactQueryProvider>
  );
}
