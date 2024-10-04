import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

// 플러그인 초기화
const withVanillaExtract = createVanillaExtractPlugin();

// Next.js 설정 객체를 플러그인에 전달
export default withVanillaExtract({
  reactStrictMode: true,
  swcMinify: true,
});
