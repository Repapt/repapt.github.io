/** @type {import('next').NextConfig} */

const nextConfig = (
  process.env.node_ENV === "development" ?
  {} : {
    output: 'export',
    basePath: '/Personal-Site',
    assetPrefix: '/Personal-Site',
    images: {
      unoptimized: true
    }
  }
);

export default nextConfig;
