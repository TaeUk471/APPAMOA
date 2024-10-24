import { buttonColor, ButtonColorType, buttonSize, ButtonSizeType } from "types/button";

interface ButtonProps {
  size: ButtonSizeType;
  color: ButtonColorType;
  isLoading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ size, color, isLoading, children, onClick, ...rest }: ButtonProps) {
  const sizeClass = buttonSize[size];
  const colorClass = buttonColor[color];

  return (
    <>
      <button className={`flex-center ${sizeClass} ${colorClass}`} onClick={onClick} disabled={isLoading} {...rest}>
        {children}
      </button>
    </>
  );
}
