import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow text-purple w-[177px] h-[40px] px-[24px] py-[10px] rounded-[20px] 
      font-semibold text-[14px] leading-[20px] tracking-wide shadow-md border-2 border-yellow 
      flex items-center justify-center transition duration-300 hover:bg-white hover:text-yellow"
    >
      {text}
    </button>
  );
};

export default Button;
