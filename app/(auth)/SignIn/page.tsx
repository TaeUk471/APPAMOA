"use client";

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
        className="flex flex-col gap-6 p-8 border border-gray-300 rounded-md shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">로그인</h1>
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
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
          로그인
        </button>
      </form>
    </div>
  );
}
