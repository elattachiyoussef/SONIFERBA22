/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'soniferba.netlify.app'],
  },
}

module.exports = nextConfig 