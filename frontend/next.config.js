/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_URL: 'http://localhost:8000'
  },
  swcMinify: true,
}

module.exports = nextConfig
