import { useEffect, useState } from 'react';

/**
 * DefaultPoster - Swiss/Editorial design poster for the hero default state
 * Features: deep dark background, hairline crosshair grid, magazine masthead,
 * and animated "HOVER TO EXPLORE" prompt with red accent lines
 */
export function DefaultPoster() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-accent">
      {/* Background Grid - Crosshair */}
      <div className="pointer-events-none absolute inset-0">
        {/* Horizontal line */}
        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/[0.03]" />
        {/* Vertical line */}
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.03]" />
      </div>

      {/* Masthead - Top magazine header */}
      <div className="absolute top-12 left-12 right-12 flex justify-between animate-fade-in-up">
        <span className="text-xs font-normal uppercase tracking-[0.4em] text-white/50">
          PORTFOLIO VOL.1
        </span>
        <span className="text-xs font-normal uppercase tracking-[0.4em] text-white/50">
          2025 / 2026
        </span>
      </div>

      {/* Center Prompt - Red lines with text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-6 animate-pulse-slow">
          {/* Left red line - grows from center outward */}
          <span
            className="h-px w-12 bg-primary"
            style={{
              transformOrigin: 'right',
              transform: mounted ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.6s',
            }}
          />

          {/* Center text */}
          <span className="text-xs font-normal uppercase tracking-[0.4em] text-gray-400 animate-fade-in-up">
            HOVER TO EXPLORE PROJECTS
          </span>

          {/* Right red line - grows from center outward */}
          <span
            className="h-px w-12 bg-primary"
            style={{
              transformOrigin: 'left',
              transform: mounted ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.6s',
            }}
          />
        </div>
      </div>
    </div>
  );
}
