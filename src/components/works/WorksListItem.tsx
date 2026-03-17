import { cn } from '../../lib/utils';
import type { Project } from '../../types/project';
import { useRef } from 'react';
import { ExternalLink, Lock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface WorksListItemProps {
  project: Project;
  isHovered: boolean;
  isBlurred: boolean;
  onHover: (element?: HTMLElement) => void;
  onLeave: () => void;
  onMouseMove?: (e: React.MouseEvent) => void;
  onClick: () => void;
}

const translations = {
  en: {
    comingSoon: 'COMING SOON',
  },
  zh: {
    comingSoon: '即将上线',
  },
};

export function WorksListItem({
  project,
  isHovered,
  isBlurred,
  onHover,
  onLeave,
  onMouseMove,
  onClick,
}: WorksListItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const isInactive = project.inactive === true;
  const isExternal = !!project.externalLink;

  const handleMouseEnter = () => {
    // Inactive projects don't trigger hover interactions
    if (isInactive) return;
    if (itemRef.current) {
      onHover(itemRef.current);
    }
  };

  const handleClick = () => {
    // Inactive projects are not clickable
    if (isInactive) return;
    onClick();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Inactive projects are not focusable/interactive
    if (isInactive) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      ref={itemRef}
      className={cn(
        'gap-x-4 gap-y-4 grid grid-cols-9 py-6 relative transition-all duration-200',
        'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-muted-border',
        isInactive ? '' : 'cursor-pointer',
        'last:after:hidden',
        isBlurred && 'blur-[6px] opacity-60',
        isHovered && 'after:opacity-0'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMouseMove}
      onClick={handleClick}
      role={isInactive ? undefined : 'button'}
      tabIndex={isInactive ? -1 : 0}
      onKeyDown={handleKeyDown}
    >
      {/* Project Name - 4 cols */}
      <div className="col-span-4 flex items-center gap-2 relative">
        <span
          className={cn(
            'font-sans text-lg font-normal leading-normal transition-colors duration-200',
            isHovered && !isInactive
              ? 'text-primary font-normal'
              : isBlurred && !isInactive
              ? 'text-foreground font-normal'
              : 'text-foreground font-normal',
            isInactive && 'opacity-20'
          )}
        >
          {project.title[currentLanguage]}
        </span>
        {/* Lock icon for inactive projects */}
        {isInactive && (
          <Lock className="w-4 h-4 text-foreground opacity-20" />
        )}
        {/* External link icon for external projects */}
        {isExternal && !isInactive && (
          <ExternalLink
            className={cn(
              'w-4 h-4 transition-colors duration-200',
              isHovered ? 'text-primary' : 'text-muted-foreground'
            )}
          />
        )}
      </div>

      {/* Company - 2 cols */}
      <div className="col-span-2 flex flex-col justify-center relative">
        <span
          className={cn(
            'font-sans text-base leading-normal transition-colors duration-200',
            isHovered && !isInactive
              ? 'text-primary'
              : isBlurred && !isInactive
              ? 'text-foreground'
              : 'text-foreground',
            isInactive && 'opacity-20'
          )}
        >
          {project.company[currentLanguage]}
        </span>
      </div>

      {/* Type - 2 cols, hidden on mobile */}
      <div className="hidden md:flex col-span-2 flex-col justify-center relative">
        <span
          className={cn(
            'font-sans text-base leading-normal transition-colors duration-200',
            isHovered && !isInactive
              ? 'text-primary'
              : isBlurred && !isInactive
              ? 'text-foreground'
              : 'text-foreground'
          )}
        >
          <span className={cn(isInactive && 'opacity-20')}>
            {isInactive ? t.comingSoon : project.type[currentLanguage]}
          </span>
        </span>
      </div>

      {/* Year - 1 col */}
      {!isInactive && (
        <div className="col-span-5 md:col-span-1 flex flex-col justify-center relative">
          <span
            className={cn(
              'font-mono text-base leading-normal transition-colors duration-200',
              isHovered && !isInactive
                ? 'text-primary'
                : isBlurred && !isInactive
                ? 'text-muted-foreground'
                : 'text-muted-foreground'
            )}
          >
            {project.year}
          </span>
        </div>
      )}
    </div>
  );
}
