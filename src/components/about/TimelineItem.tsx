interface TimelineItemProps {
  title: string;
  subtitle: string;
}

export function TimelineItem({ title, subtitle }: TimelineItemProps) {
  return (
    <div className="flex gap-4 items-center w-full overflow-hidden pr-4">
      <div className="flex flex-col gap-1 items-start min-w-0 flex-1">
        <div className="flex flex-col justify-center w-full">
          <p className="font-sans font-normal text-[15px] text-foreground leading-none">
            {title}
          </p>
        </div>
        <div className="flex flex-col justify-center w-full">
          <p className="font-sans font-normal text-[13px] text-muted-foreground leading-none">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
