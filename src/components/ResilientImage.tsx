import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'lazy' | 'eager';
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-emerald-950/10 via-cyan-900/10 to-slate-200 text-slate-600 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-7 h-7 text-emerald-700/60 mb-2" />
        <span className="text-xs font-medium text-slate-600 max-w-[22ch]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
