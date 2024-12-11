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
    ? 'bg-[#eee] cursor-not-allowed'
    : variant === 'primary'
    ? 'bg-[#F88D2F] text-white cursor-pointer'
    : variant === 'secondary'
    ? 'bg-white text-[#FF5700] border border-[#FF5700] cursor-pointer'
    : 'bg-[#F5ECE1] text-[#222027] shadow-[0px_4px_4px_0px_#FE7E35] cursor-pointer font-[GmarketSans] text-[17px] font-medium leading-[22px] decoration-skip-ink-none';

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
