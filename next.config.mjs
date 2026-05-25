/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/admin",
  assetPrefix: "/admin",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edutrain.uinsgd.ac.id",
      },
    ],
  },
};

export default nextConfig;
