/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/admin",
  assetPrefix: "/admin",
  images: {
    domains: ["edutrain.uinsgd.ac.id"],
  },
};

export default nextConfig;
