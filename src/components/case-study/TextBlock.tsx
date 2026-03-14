interface TextBlockProps {
  title?: string;
  subtitle?: string;
  content: string | React.ReactNode;
  showTitle?: boolean;
  className?: string;
}

export function TextBlock({
  title,
  subtitle,
  content,
  showTitle = true,
  className = '',
}: TextBlockProps) {
  return (
    <div
      className={`flex flex-col gap-2 w-full lg:w-2/3 ${className}`}
    >
      {subtitle && (
        <h3 className="font-sans text-xl text-foreground leading-normal">
          {subtitle}
        </h3>
      )}
      {showTitle && title && (
        <h2 className="font-sans text-2xl text-foreground leading-normal">
          {title}
        </h2>
      )}
      {typeof content === 'string' ? (
        <div
          className="font-sans text-base text-foreground leading-normal"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <div className="font-sans text-base text-foreground leading-normal">
          {content}
        </div>
      )}
    </div>
  );
}
