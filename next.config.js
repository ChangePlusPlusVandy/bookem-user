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
  images: {
    // include any domains used for images in the project
    domains: ['bookem-user-profile.s3.us-east-2.amazonaws.com'],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
