interface SkillItemProps {
  title: string;
  description: string;
  colorClass: string;
}

export function SkillItem({ title, description, colorClass }: SkillItemProps) {
  return (
    <div className="flex gap-4 items-center w-full overflow-hidden pr-4">
      <div className={`${colorClass} rounded-[8px] shrink-0 size-12`} />
      <div className="flex flex-col gap-1 items-start min-w-0 flex-1">
        <div className="flex flex-col justify-center w-full">
          <p className="font-sans text-base text-foreground leading-none">
            {title}
          </p>
        </div>
        <div className="flex flex-col justify-center w-full">
          <p className="font-sans text-sm text-muted-foreground leading-none">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
