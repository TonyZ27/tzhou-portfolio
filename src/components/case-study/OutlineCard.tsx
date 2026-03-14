interface OutlineCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function OutlineCard({ title, children, className = '' }: OutlineCardProps) {
  return (
    <div
      className={`w-full border border-border rounded-2xl bg-background overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col gap-2 p-6 border-b border-border">
        <h3 className="font-sans text-2xl text-foreground">
          {title}
        </h3>
        <div className="bg-primary h-1 w-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="p-8">{children}</div>
    </div>
  );
}
