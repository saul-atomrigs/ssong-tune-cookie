import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  variant = 'primary',
}) => {
  const baseStyles = 'w-full rounded-lg py-2.5 px-5 text-sm';
  const variantStyles = disabled
    ? 'bg-[#C4C4C4] text-white cursor-not-allowed'
    : variant === 'primary'
    ? 'bg-[#FF5700] text-white cursor-pointer'
    : 'bg-white text-[#FF5700] border border-[#FF5700] cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
