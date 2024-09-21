/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2mprxshmi6bx.cloudfront.net",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
