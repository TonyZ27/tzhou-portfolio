interface MetadataItem {
  label: string;
  content: string | string[];
}

interface MetadataRowProps {
  items: MetadataItem[];
  className?: string;
}

export function MetadataRow({ items, className = '' }: MetadataRowProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 w-full ${className}`}
    >
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="font-sans text-base-medium text-foreground">
            {item.label}
          </span>
          {Array.isArray(item.content) ? (
            <div className="flex flex-col">
              {item.content.map((line, lineIndex) => (
                <span
                  key={lineIndex}
                  className="font-sans text-base text-foreground"
                >
                  {line}
                </span>
              ))}
            </div>
          ) : (
            <span className="font-sans text-base text-foreground">
              {item.content}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
