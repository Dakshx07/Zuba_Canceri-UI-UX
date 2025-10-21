import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: '/Users/dakshhiran/Desktop/Zuba_Canceri/kesari', // Point to your project root
};

export default nextConfig;