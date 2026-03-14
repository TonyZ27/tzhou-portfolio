import { cn } from '../../lib/utils';

interface FilterChipProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

export function FilterChip({ text, selected, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-col items-center justify-center px-4 py-2 relative transition-all duration-200',
        'font-sans text-base leading-none whitespace-nowrap',
        selected
          ? 'bg-foreground text-background'
          : 'bg-transparent text-foreground border border-border hover:border-foreground/40'
      )}
      role="button"
      aria-pressed={selected}
    >
      <span className="leading-normal">{text}</span>
    </button>
  );
}
