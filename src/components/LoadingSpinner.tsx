import { useEffect, useState } from 'react';

const LoadingSpinner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="relative">
        {/* Animated rings */}
        <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-primary/20 animate-pulse"></div>
        <div className="absolute inset-2 w-20 h-20 rounded-full border-4 border-primary/40 animate-spin"></div>
        <div className="absolute inset-4 w-16 h-16 rounded-full border-4 border-primary/60 animate-ping"></div>
        <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center animate-pulse">
          <div className="w-8 h-8 rounded-full bg-primary-foreground animate-bounce"></div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-primary font-medium animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;