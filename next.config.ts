import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
};

export default nextConfig;
