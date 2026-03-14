interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center border border-muted-primary-foreground rounded-full px-[9px] py-[5px] text-xs uppercase font-sans text-primary-foreground">
      {children}
    </span>
  );
}
