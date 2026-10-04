import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/LePeanutButter',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
