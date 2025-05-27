// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ desactiva ESLint en build
  },
};

export default nextConfig;
