import { ReactNode } from 'react';

interface HeadingWithUnderlineProps {
  children: ReactNode;
  className?: string;
}

const HeadingWithUnderline = ({ children, className = "" }: HeadingWithUnderlineProps) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1">
        <div className="w-full h-full gradient-primary rounded-full"></div>
        <div className="absolute -top-1 left-0 w-2 h-3 bg-primary rounded-full opacity-70"></div>
        <div className="absolute -top-1 right-0 w-2 h-3 bg-primary rounded-full opacity-70"></div>
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-primary/50 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeadingWithUnderline;