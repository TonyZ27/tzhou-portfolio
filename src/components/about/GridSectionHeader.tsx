interface GridSectionHeaderProps {
  title: string;
}

export function GridSectionHeader({ title }: GridSectionHeaderProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-start w-full">
        <div className="flex flex-col items-start">
          <div className="flex flex-col justify-center">
            <p className="font-sans font-normal text-xl text-foreground whitespace-nowrap leading-none">
              {title}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-muted-border h-px w-full" />
    </div>
  );
}
