import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'start';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  variant = 'primary',
}) => {
  const baseStyles = 'w-full rounded-3xl py-3.5 px-5 text-sm font-semibold';
  const variantStyles = disabled
    ? 'bg-[#EBEBEB] cursor-not-allowed'
    : variant === 'primary'
    ? 'bg-[#F3643F] text-white cursor-pointer'
    : variant === 'secondary'
    ? 'bg-[#FFFBE6] text-[#F3643F] cursor-pointer'
    : 'bg-[#F3643F] text-white cursor-pointer';

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
