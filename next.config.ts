const LOADER = require.resolve("./src/visual-edits/component-tagger-loader.js");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    root: __dirname,
    rules: {
      "*.jsx": {
        loaders: [LOADER],
      },
      "*.tsx": {
        loaders: [LOADER],
      },
    },
  },
};

export default nextConfig;
