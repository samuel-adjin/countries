import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                pathname: '/**', // Match all paths
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '/**', // Match all paths
            },
        ],
    },
};

export default nextConfig;
