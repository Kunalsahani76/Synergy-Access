import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Note: Redirects don't work with static export
  // These URLs will be handled by 404 page and client-side routing
};

export default nextConfig;