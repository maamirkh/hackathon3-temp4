/**@type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
   eslint: {
        ignoreDuringBuilds: true,
      
      },
}

module.exports = nextConfig;