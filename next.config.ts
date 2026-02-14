import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // iba mo pang config options kung meron
  async headers() {
    return [
      {
        source: '/:path*', // apply sa lahat ng routes
        headers: [
          
          
          
        ],
      },
    ];
  },
};

export default nextConfig;
