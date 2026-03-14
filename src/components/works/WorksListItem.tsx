import { cn } from '../../lib/utils';
import type { Project } from '../../types/project';
import { useRef } from 'react';

interface WorksListItemProps {
  project: Project;
  isHovered: boolean;
  isBlurred: boolean;
  onHover: (element?: HTMLElement) => void;
  onLeave: () => void;
  onMouseMove?: (e: React.MouseEvent) => void;
  onClick: () => void;
}

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

  const handleMouseEnter = () => {
    if (itemRef.current) {
      onHover(itemRef.current);
    }
  };

  return (
    <div
      ref={itemRef}
      className={cn(
        'gap-x-4 gap-y-4 grid grid-cols-9 py-6 relative cursor-pointer transition-all duration-200 border-b border-muted-border last:border-0',
        isBlurred && 'blur-[6px] opacity-60',
        isHovered && 'bg-foreground/[0.02]'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMouseMove}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {/* Project Name - 4 cols */}
      <div className="col-span-4 flex flex-col justify-center relative">
        <span
          className={cn(
            'font-sans text-lg leading-normal transition-colors duration-200',
            isHovered
              ? 'text-primary font-medium'
              : isBlurred
              ? 'text-foreground font-medium'
              : 'text-foreground font-medium'
          )}
        >
          {project.title}
        </span>
      </div>

      {/* Company - 2 cols */}
      <div className="col-span-2 flex flex-col justify-center relative">
        <span
          className={cn(
            'font-sans text-base leading-normal transition-colors duration-200',
            isHovered
              ? 'text-primary'
              : isBlurred
              ? 'text-foreground'
              : 'text-foreground'
          )}
        >
          {project.company}
        </span>
      </div>

      {/* Type - 2 cols, hidden on mobile */}
      <div className="hidden md:flex col-span-2 flex-col justify-center relative">
        <span
          className={cn(
            'font-sans text-base leading-normal transition-colors duration-200',
            isHovered
              ? 'text-primary'
              : isBlurred
              ? 'text-foreground'
              : 'text-foreground'
          )}
        >
          {project.type}
        </span>
      </div>

      {/* Year - 1 col */}
      <div className="col-span-5 md:col-span-1 flex flex-col justify-center relative">
        <span
          className={cn(
            'font-mono text-base leading-normal transition-colors duration-200',
            isHovered
              ? 'text-primary'
              : isBlurred
              ? 'text-muted-foreground'
              : 'text-muted-foreground'
          )}
        >
          {project.year}
        </span>
      </div>
    </div>
  );
}
