/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['bookem-shared'],
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};

module.exports = nextConfig;
