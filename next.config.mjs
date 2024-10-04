import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

export default createVanillaExtractPlugin({
  reactStrictMode: true,
  swcMinify: true,
});
