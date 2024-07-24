import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { Web3Provider } from '@/providers/Web3Provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '@fuels/connectors',
  description: '@fuels/connectors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Web3Provider>{children}</Web3Provider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
