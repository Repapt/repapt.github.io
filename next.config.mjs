/** @type {import('next').NextConfig} */

const nextConfig = (
  process.env.node_ENV === "development" ?
  {} : {
    output: 'export',
    basePath: '/website',
    assetPrefix: '/website',
    images: {
      unoptimized: true
    }
  }
);

export default nextConfig;
