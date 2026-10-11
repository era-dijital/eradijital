import React from 'react';

/**
 * EraLogo — ERA Dijital Brand Vector Identity Component
 * 
 * Premium, scalable, retina-ready SVG logo mark and typography.
 * Supports light and dark modes with interactive hover transitions.
 */
export default function EraLogo({ 
  variant = 'full', 
  size = 'md', 
  showBadge = true,
  className = '' 
}) {
  // Dimensions map
  const sizeMap = {
    sm: { mark: 28, text: 'text-sm', badge: 'text-[8px] px-1.5 py-0.2' },
    md: { mark: 34, text: 'text-base', badge: 'text-[9px] px-2 py-0.5' },
    lg: { mark: 42, text: 'text-xl', badge: 'text-[10px] px-2.5 py-0.5' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-2.5 shrink-0 select-none group ${className}`}>
      
      {/* Dynamic Geometric SVG Emblem */}
      <div 
        className="relative shrink-0 transition-transform duration-200 group-hover:scale-105"
        style={{ width: currentSize.mark, height: currentSize.mark }}
      >
        <svg 
          viewBox="0 0 40 40" 
          width={currentSize.mark} 
          height={currentSize.mark} 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          <defs>
            {/* Outer obsidian gradient */}
            <linearGradient id="eraDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="50%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Signature Brand Yellow Gradient */}
            <linearGradient id="eraGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="40%" stopColor="#FFD23F" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>

            {/* Tech Cyan/Digital Highlight */}
            <linearGradient id="eraTechGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="eraGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#FFD23F" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Squircle Background Container */}
          <rect 
            x="1" 
            y="1" 
            width="38" 
            height="38" 
            rx="11" 
            fill="url(#eraDarkGrad)" 
            stroke="rgba(255, 255, 255, 0.12)" 
            strokeWidth="1.2"
          />

          {/* Inner ambient rim light */}
          <rect 
            x="2" 
            y="2" 
            width="36" 
            height="36" 
            rx="10" 
            stroke="url(#eraGoldGrad)" 
            strokeWidth="0.8" 
            strokeOpacity="0.3"
            fill="none"
          />

          {/* Abstract Forward-Stepping Monogram 'E' & Growth Trajectory */}
          {/* 1. Top Horizon Bar with 45° aerodynamic chamfer */}
          <path 
            d="M10 11.5C10 10.67 10.67 10 11.5 10H26.5C27.33 10 27.8 10.95 27.3 11.6L24.8 14.9C24.45 15.36 23.9 15.63 23.32 15.63H13.5V11.5Z" 
            fill="#FFFFFF"
            className="transition-colors group-hover:fill-slate-100"
          />

          {/* 2. Middle Dynamic Transformation Pulse (Brand Yellow + Glow) */}
          <path 
            d="M10 18.25C10 17.56 10.56 17 11.25 17H21.2C21.95 17 22.42 17.8 22.05 18.45L20.25 21.6C19.92 22.18 19.3 22.54 18.63 22.54H13.5V18.25Z" 
            fill="url(#eraGoldGrad)"
            filter="url(#eraGlow)"
          />

          {/* 3. Bottom Foundation Bar */}
          <path 
            d="M10 25C10 24.17 10.67 23.5 11.5 23.5H27C27.83 23.5 28.3 24.45 27.8 25.1L25.3 28.4C24.95 28.86 24.4 29.13 23.82 29.13H11.5C10.67 29.13 10 28.46 10 27.63V25Z" 
            fill="#FFFFFF"
            className="transition-colors group-hover:fill-slate-100"
          />

          {/* 4. Left Solid Precision Spine Connecting the Form */}
          <path 
            d="M10 11.5C10 10.67 10.67 10 11.5 10H14V29.13H11.5C10.67 29.13 10 28.46 10 27.63V11.5Z" 
            fill="#FFFFFF"
            className="transition-colors group-hover:fill-slate-100"
          />

          {/* 5. Golden Forward Growth Node (Next Step Indicator) */}
          <circle cx="28.5" cy="18.5" r="2" fill="url(#eraGoldGrad)" />
        </svg>

        {/* Ambient pulse on hover */}
        <span className="absolute -inset-0.5 rounded-xl bg-[#FFD23F]/20 opacity-0 group-hover:opacity-100 blur-xs transition-opacity -z-10" />
      </div>

      {/* Typography Wordmark */}
      {variant === 'full' && (
        <div className="flex items-center gap-2">
          <div className="flex items-baseline tracking-tight">
            <span className={`font-display font-black text-[#0F172A] dark:text-white tracking-tight ${currentSize.text}`}>
              ERA
            </span>
            <span className={`font-display font-medium text-slate-800 dark:text-slate-200 ml-0.5 ${currentSize.text}`}>
              Dijital
            </span>
          </div>

          {/* Tagline Badge */}
          {showBadge && (
            <span className={`hidden lg:inline-flex items-center gap-1 font-mono ${currentSize.badge} text-slate-600 dark:text-slate-300 font-semibold bg-slate-100 dark:bg-white/10 rounded-full border border-slate-200 dark:border-white/10 ml-0.5`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F] animate-pulse" />
              #dijitalgelişim
            </span>
          )}
        </div>
      )}

    </div>
  );
}
