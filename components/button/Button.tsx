interface ButtonProps {
  size: ButtonSizeType;
  color: ButtonColorType;
  isLoading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ size, color, isLoading, children, onClick, ...rest }: ButtonProps) {
  const sizeClass = buttonSize[size];
  const colorClass = buttonClass[color];

  return (
    <>
      <button className={`flex-center ${sizeClass} ${colorClass}`} onClick={onClick} disabled={isLoading} {...rest}>
        {children}
      </button>
    </>
  );
}
