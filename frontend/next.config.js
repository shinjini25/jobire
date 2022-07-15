/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_URL: 'http://localhost:8000',
    MAPBOXGL_ACCESS_TOKEN: "pk.eyJ1Ijoic2hpbmpvYmlyZSIsImEiOiJjbDVodjkxa3EwMjNqM2NtcTR2ZXR1ajV1In0.HEq1ZrXB1D_YEKpN-rXdEw"
  },
  swcMinify: true,
}

module.exports = nextConfig
