"use client";

import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  const handleSignIn = () => {};

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-8 flex justify-center">
          <Link href="/">
            <Image src="/images/APPAMOA.png" width={150} height={150} alt="Logo Image" />
          </Link>
        </div>
        <form onSubmit={handleSignIn} className="flex flex-col gap-6">
          <label className="text-gray-700 font-medium" htmlFor="email">
            이메일
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력하세요"
          />
          <label className="text-gray-700 font-medium" htmlFor="password">
            비밀번호
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          <button
            type="submit"
            className="flex justify-center items-center w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
