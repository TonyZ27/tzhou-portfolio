import { cn } from '../../lib/utils';

interface WorksListHeaderProps {
  className?: string;
}

export function WorksListHeader({ className }: WorksListHeaderProps) {
  return (
    <div
      className={cn(
        'font-sans text-sm text-muted-foreground gap-x-4 gap-y-4 grid grid-cols-9 pb-2 pt-4 relative w-full',
        className
      )}
    >
      {/* Project - 4 columns */}
      <div className="col-span-4 flex flex-col justify-center relative">
        <span className="leading-normal">Project</span>
      </div>
      {/* Company - 2 columns */}
      <div className="col-span-2 flex flex-col justify-center relative">
        <span className="leading-normal">Company</span>
      </div>
      {/* Type - 2 columns, hidden on mobile */}
      <div className="hidden md:flex col-span-2 flex-col justify-center relative">
        <span className="leading-normal">Type</span>
      </div>
      {/* Year - 1 column */}
      <div className="col-span-5 md:col-span-1 flex flex-col justify-center relative">
        <span className="leading-normal font-mono">Year</span>
      </div>
    </div>
  );
}
