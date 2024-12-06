import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-lg py-2.5 px-5 text-white ${
        disabled
          ? 'bg-[#C4C4C4] cursor-not-allowed'
          : 'bg-[#FF5700] cursor-pointer'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
