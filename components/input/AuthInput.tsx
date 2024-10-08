import { Toast } from "primereact/toast";
import { useState, useRef, useEffect } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

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
  const toast = useRef<Toast>(null);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (error) {
      showToast("오류", error);
    }
  }, [error]);

  const showToast = (summary: string, detail: string) => {
    if (toast.current) {
      toast.current.clear();
      toast.current.show({
        severity: "error",
        summary,
        detail,
        life: 2500,
      });
    }
  };

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
    setInputValue(newValue);
    onChange(newValue);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    validateInput(newValue);
  };

  return (
    <>
      <Toast ref={toast} position="top-center" />
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-[14px]">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
    </>
  );
}
