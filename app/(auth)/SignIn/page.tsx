"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import AuthInput from "@components/input/AuthInput";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("이메일:", email);
    console.log("비밀번호:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSignIn}
        className="flex flex-col w-[300px] h-fit gap-6 px-6 py-3 border bg-white border-gray-300 rounded-xl shadow-md">
        <Link href="/" className="flex justify-center mb-3">
          <Image src="/images/APPAMOA.png" width={220} height={220} alt="아파모아" />
        </Link>
        <AuthInput
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={setEmail}
        />
        <AuthInput
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={setPassword}
        />
        <button
          type="submit"
          className="bg-pink-500 text-white flex justify-center py-5 mt-2 mb-2 px-4 rounded-md hover:bg-pink-700 transition-colors">
          로그인
        </button>
      </form>
    </div>
  );
}
