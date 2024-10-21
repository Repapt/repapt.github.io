/** @type {import('next').NextConfig} */

const nextConfig = (
  process.env.node_ENV === "development" ?
  {} : {
    output: 'export',
    basePath: '',
    assetPrefix: '',
    images: {
      unoptimized: true
    }
  }
);

export default nextConfig;
