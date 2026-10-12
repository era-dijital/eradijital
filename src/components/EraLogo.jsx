import React from 'react';

/**
 * EraLogo — Official ERA Dijital Brand Logo Component
 * 
 * Uses the official high-resolution transparent vector-clean brand logo.
 * Seamlessly transitions between Light and Dark mode.
 */
export default function EraLogo({ 
  size = 'md', 
  className = '',
  alt = 'ERA Dijital - Dijital Gelişim ve Dönüşüm Ajansı'
}) {
  // Height classes map
  const heightClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-9',
    header: 'h-[50px] sm:h-[68px]', // 25% larger than 54px (54px * 1.25 = 67.5px)
    lg: 'h-10 sm:h-12',
    xl: 'h-14 sm:h-16'
  };

  const currentHeight = heightClasses[size] || heightClasses.md;

  return (
    <div className={`flex items-center shrink-0 select-none group transition-transform duration-200 hover:scale-[1.02] ${className}`}>
      {/* Light Theme Logo */}
      <img
        src="/resimler/era-logo.png"
        alt={alt}
        className={`dark:hidden ${currentHeight} w-auto object-contain drop-shadow-xs`}
        loading="eager"
        fetchPriority="high"
      />

      {/* Dark Theme Logo */}
      <img
        src="/resimler/era-logo-dark.png"
        alt={alt}
        className={`hidden dark:block ${currentHeight} w-auto object-contain drop-shadow-xs`}
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
