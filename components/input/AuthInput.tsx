import { useState } from "react";

interface AuthInputProps {
  label: string;
  name: string;
  type: "email" | "password" | "text";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function AuthInput({ label, name, type, placeholder, value, onChange }: AuthInputProps) {
  const [error, setError] = useState("");

  const validateInput = (value: string) => {
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError("유효한 이메일을 입력해주세요.");
        return;
      }
    }
    if (type === "password") {
      if (value.length < 8) {
        setError("비밀번호는 8자 이상 입력해주세요.");
        return;
      }
    }

    setError("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    validateInput(newValue);
    onChange(newValue);
  };

  return (
    <>
      {error} && <div>toast 임시 보호소</div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </>
  );
}
