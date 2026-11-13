import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF is ~30-50% smaller than WebP; browsers without AVIF still get WebP
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        // Send www.hindcool.com to the main domain so Google sees one site
        source: "/:path*",
        has: [{ type: "host", value: "www.hindcool.com" }],
        destination: "https://hindcool.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
