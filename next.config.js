/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["https://www.readinbrief.com"],
  },
};

module.exports = nextConfig;