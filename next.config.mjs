/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  basePath: "/wordCard"
  // distDir: "build"
  // distDir: "out"
};

export default nextConfig;
