import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // iba mo pang config options kung meron
  async headers() {
    return [
      {
        source: '/:path*',
      headers: [
        { key: 'x-dummy-header', value: 'test' }
          
          
        ],
      },
    ];
  },
};

export default nextConfig;
