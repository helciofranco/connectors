/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908
    config.externals.push('pino-pretty', 'lokijs', 'encoding');

    // https://github.com/m1guelpf/nextjs13-connectkit-siwe/blob/main/next.config.js
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };

    return config;
  },
};

module.exports = nextConfig;
