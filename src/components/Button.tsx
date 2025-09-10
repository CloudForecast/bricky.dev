import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  onClick,
  className = '',
  href
}) => {
  const baseClasses = 'px-6 py-3 rounded-full font-medium transition-all duration-300 text-white relative overflow-hidden group';
  const primaryClasses = 'bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] hover:shadow-lg hover:shadow-[#ce5732]/20 hover:translate-y-[-2px]';
  const secondaryClasses = 'border border-[#ff8a3b] hover:bg-[#ff8a3b]/10 hover:shadow-lg hover:shadow-[#ff8a3b]/10';
  const buttonClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;
  if (href) {
    return <a href={href} className={buttonClasses}>
        <span className="relative z-10">{children}</span>
        {primary && <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff8a3b] to-[#ce5732] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>}
      </a>;
  }
  return <button onClick={onClick} className={buttonClasses}>
      <span className="relative z-10">{children}</span>
      {primary && <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff8a3b] to-[#ce5732] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>}
    </button>;
};