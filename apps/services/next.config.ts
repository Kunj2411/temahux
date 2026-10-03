import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Keep Turbopack scoped to this app in the parent workspace. */
  turbopack: { root: process.cwd() },
};

export default nextConfig;
