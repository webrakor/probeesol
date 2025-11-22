import React, { ReactNode } from 'react';

interface ShinyButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({ 
  children, 
  className = "", 
  href = "#",
  onClick 
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative overflow-hidden bg-[#3b82f6] dark:bg-[#60a5fa] text-white py-2 px-4 rounded-md font-medium hover:bg-[#2563eb] dark:hover:bg-[#3b82f6] transition flex items-center gap-2 group ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine"></span>
    </a>
  );
};

export default ShinyButton;
