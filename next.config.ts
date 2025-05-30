import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
    domains: [],
  },
  i18n: {
    locales: ["hu"],
    defaultLocale: "hu",
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
