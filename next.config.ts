import type { NextConfig } from "next";
import tailwindcss from "tailwindcss";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  plugins: {
    '@tailwindcss/postcss': {},
  },
  trailingSlash: true,
  // assetPrefix: '.',
};


export default nextConfig;
