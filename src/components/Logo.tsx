import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark-only' | 'text-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withImageFallback?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  const sizeConfig = {
    sm: { text: 'text-xl tracking-[0.25em]', oval: 'w-6 h-9', icon: 'w-4 h-6' },
    md: { text: 'text-2xl tracking-[0.3em]', oval: 'w-8 h-12', icon: 'w-5 h-8' },
    lg: { text: 'text-3xl sm:text-4xl tracking-[0.35em]', oval: 'w-10 h-16', icon: 'w-6 h-10' },
    xl: { text: 'text-4xl sm:text-5xl tracking-[0.4em]', oval: 'w-12 h-20', icon: 'w-8 h-14' },
  };

  const current = sizeConfig[size];

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Text Brand */}
      {variant !== 'mark-only' && (
        <div className="flex items-center justify-center font-display-luxury font-bold text-[#A87D38]">
          <span className={`inline-flex items-center ${current.text} drop-shadow-sm`}>
            N
            {/* O with central sparkle star */}
            <span className="relative inline-flex items-center justify-center mx-[0.04em]">
              O
              <span className="absolute inset-0 flex items-center justify-center text-[0.45em] text-[#C69A4C] font-normal transform -translate-y-[0.02em]">
                ✦
              </span>
            </span>
            EWEL.
          </span>
        </div>
      )}

      {/* Emblem: Vertical Oval with Botanical Branch */}
      {variant !== 'text-only' && (
        <div className={`relative mt-1 flex items-center justify-center rounded-full border border-[#C69A4C]/80 ${current.oval} bg-[#FAF7F2]/40 backdrop-blur-[1px] shadow-sm`}>
          <svg
            viewBox="0 0 24 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${current.icon} text-[#B5893E]`}
          >
            {/* Central Stem */}
            <line x1="12" y1="6" x2="12" y2="33" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            
            {/* Top Leaf */}
            <path
              d="M12 6 C10 10, 10 13, 12 15 C14 13, 14 10, 12 6 Z"
              fill="currentColor"
            />
            
            {/* Upper Leaves Pair */}
            <path
              d="M12 15 C8 15, 6 18, 7 21 C9 21, 11 19, 12 18 Z"
              fill="currentColor"
            />
            <path
              d="M12 15 C16 15, 18 18, 17 21 C15 21, 13 19, 12 18 Z"
              fill="currentColor"
            />
            
            {/* Lower Leaves Pair */}
            <path
              d="M12 21 C8 21, 6 24, 7 27 C9 27, 11 25, 12 24 Z"
              fill="currentColor"
            />
            <path
              d="M12 21 C16 21, 18 24, 17 27 C15 27, 13 25, 12 24 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
    </div>
  );
};


