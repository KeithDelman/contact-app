import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // iba mo pang config options kung meron
  async headers() {
    return [
      {
        source: "/:path*", 
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;" },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          
          
        ],
      },
    ];
  },
};

export default nextConfig;
