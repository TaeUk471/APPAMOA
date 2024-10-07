import { Toast } from "primereact/toast";
import { useState, useRef } from "react";
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

  const validateInput = (value: string) => {
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError("유효한 이메일을 입력해주세요.");
        if (toast.current) {
          toast.current.show({
            severity: "error",
            summary: "이메일 오류",
            detail: error,
            life: 3000,
          });
        }
        return;
      }
    }
    if (type === "password") {
      if (value.length < 8) {
        setError("비밀번호는 8자 이상 입력해주세요.");
        if (toast.current) {
          toast.current.show({
            severity: "error",
            summary: "비밀번호 오류",
            detail: error,
            life: 3000,
          });
        }
        return;
      }
    }
    setError("");
  };

  // Debounce 적용
  const handleDebouncedChange = (newValue: string) => {
    setInputValue(newValue);
    const timer = setTimeout(() => {
      validateInput(newValue);
      onChange(newValue);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    handleDebouncedChange(newValue);
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="flex flex-col gap-2">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </>
  );
}
