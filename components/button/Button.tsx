import { buttonColor, buttonColorType, buttonSize, buttonSizeType } from "types/button";

interface ButtonProps {
  size: buttonSizeType;
  color: buttonColorType;
  isLoading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ size, color, isLoading, children, onClick, ...rest }: ButtonProps) => {
  const sizeClass = buttonSize[size];
  const colorClass = buttonColor[color];

  return (
    <button
      className={`flex-center cursor-pointer ${sizeClass} ${colorClass} ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={isLoading}
      {...rest}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
