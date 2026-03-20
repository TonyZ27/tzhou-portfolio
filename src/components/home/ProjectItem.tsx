import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { Project } from '../../types/project';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectItemProps {
  project: Project;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onMouseLeaveItem: () => void;
  onClick: () => void;
}

export function ProjectItem({
  project,
  isHovered,
  onHover,
  onLeave,
  onMouseLeaveItem,
  onClick,
}: ProjectItemProps) {
  const { currentLanguage } = useLanguage();

  return (
    <div
      className={cn(
        'flex flex-col gap-2 items-start justify-center relative w-full cursor-pointer transition-all duration-200',
        isHovered
          ? 'bg-[rgba(31,31,31,0.04)] pl-6 pr-3 py-4'
          : 'p-4'
      )}
      onMouseEnter={onHover}
      onMouseLeave={() => {
        onLeave();
        onMouseLeaveItem();
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {/* Order Number */}
      <div className="flex items-center justify-center py-1 relative shrink-0">
        <span
          className={cn(
            'font-mono text-xl leading-none whitespace-nowrap transition-colors duration-200',
            isHovered ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {project.index}
        </span>
      </div>

      {/* Project Info */}
      <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
        {/* Title Row */}
        <div className="flex gap-6 items-center relative shrink-0 w-full">
          <span
            className={cn(
              'font-sans text-2xl leading-normal whitespace-nowrap transition-colors duration-200',
              isHovered
                ? 'text-primary font-medium'
                : 'text-foreground font-medium'
            )}
          >
            {project.title[currentLanguage]}
          </span>

          {/* Stroke/Divider */}
          <div className="flex-1 h-0 min-h-px min-w-px relative">
            {isHovered ? (
              <div className="absolute inset-0 border-t border-primary/30" />
            ) : (
              <div className="absolute inset-0 border-t border-border" />
            )}
          </div>

          {/* Year or Arrow */}
          {isHovered ? (
            <div className="flex items-center justify-center relative shrink-0">
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </div>
          ) : (
            <span className="font-mono text-number-sm text-muted-foreground text-right whitespace-nowrap">
              {project.year}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className={cn(
            'font-sans text-base leading-normal max-w-[560px] relative shrink-0 w-full transition-colors duration-200',
            isHovered ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {project.description[currentLanguage]}
        </p>
      </div>
    </div>
  );
}
