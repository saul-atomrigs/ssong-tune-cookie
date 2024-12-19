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
  const baseStyles =
    'w-full rounded-3xl py-3.5 px-5 text-sm font-semibold font-[Paperlogy]';
  const variantStyles = disabled
    ? 'bg-[#EBEBEB] text-[#AEAEAE] cursor-not-allowed'
    : variant === 'primary'
    ? 'bg-[#F3643F] text-white cursor-pointer shadow-[inset_0px_0px_16px_0px_#FFEEE640]'
    : variant === 'secondary'
    ? 'bg-[#FFFBE6] text-[#F3643F] cursor-pointer shadow-[inset_0px_0px_16px_0px_#FFEEE640]'
    : 'bg-[#F3643F] text-white cursor-pointer shadow-[inset_0px_0px_16px_0px_#FFEEE640]';

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
