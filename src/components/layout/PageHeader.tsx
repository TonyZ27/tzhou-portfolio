interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="inline-flex flex-col gap-1 pb-6 pt-12 self-start">
      <span className="font-sans text-base-medium lg:text-lg text-foreground">
        {title}
      </span>
      <div className="h-1 bg-primary w-1/2" />
    </div>
  );
}
