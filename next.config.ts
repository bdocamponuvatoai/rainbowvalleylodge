import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Keeps /about/ → out/about/index.html, matching the legacy URLs.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
