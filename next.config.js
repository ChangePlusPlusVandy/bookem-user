/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['bookem-shared'],
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    MONGODB_URI: process.env.MONGODB_URI,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
