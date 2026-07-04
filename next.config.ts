/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Only proxy to localhost:8000 during local development
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8000/api/:path*',
        },
      ];
    }
    

    return [];
  },
};

module.exports = nextConfig;