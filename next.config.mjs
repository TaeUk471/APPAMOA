export default {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };
    return config;
  },
};
