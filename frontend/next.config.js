/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'http://localhost:8000'
  },
  swcMinify: true,
}

module.exports = nextConfig