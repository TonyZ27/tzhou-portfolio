import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface MetadataItem {
  label: string;
  content: string | string[];
}

interface MetadataRowProps {
  items: MetadataItem[];
  className?: string;
}

export function MetadataRow({ items, className = '' }: MetadataRowProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 w-full ${className}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
        >
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
        </motion.div>
      ))}
    </div>
  );
}
