import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark-only' | 'text-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withImageFallback?: boolean;
}

// Official NOEWEL. logo (extracted from logo.jpg onto a transparent background)
export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  const heightConfig = {
    sm: 'h-11 sm:h-12',
    md: 'h-16',
    lg: 'h-24 sm:h-28',
    xl: 'h-32 sm:h-40',
  };

  // The source logo is 1112x559: wordmark occupies the top ~33%, emblem the bottom ~60%
  const crop = {
    full: { aspect: 'aspect-[1112/559]', position: 'object-center' },
    'text-only': { aspect: 'aspect-[1112/190]', position: 'object-top' },
    'mark-only': { aspect: 'aspect-[190/340]', position: 'object-bottom' },
  }[variant];

  return (
    <div className={`flex flex-col items-center justify-center select-none shrink-0 ${className}`}>
      <img
        src="images/noewel-logo.png"
        alt="NOEWEL. Professional Makeup & Tanning"
        className={`${heightConfig[size]} ${crop.aspect} w-auto max-w-none shrink-0 object-cover ${crop.position} drop-shadow-sm`}
        draggable={false}
      />
    </div>
  );
};
