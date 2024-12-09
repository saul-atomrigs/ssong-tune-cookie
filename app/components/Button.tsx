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
  const baseStyles = 'w-full rounded-3xl py-2.5 px-5 text-sm font-semibold';
  const variantStyles = disabled
    ? 'bg-[#eee] cursor-not-allowed'
    : variant === 'primary'
    ? 'bg-[#F88D2F] text-white cursor-pointer'
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
