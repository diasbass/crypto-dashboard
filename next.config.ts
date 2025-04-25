/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.coindesk.com',
      },
      {
        protocol: 'https',
        hostname: '**.cointelegraph.com',
      },
      {
        protocol: 'https',
        hostname: '**.decrypt.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jwplayer.com',
      },
    ],
  },
}

module.exports = nextConfig
