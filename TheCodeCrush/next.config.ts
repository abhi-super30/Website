import type { NextConfig } from "next";

// Explicitly set Turbopack workspace root to this app directory
const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
