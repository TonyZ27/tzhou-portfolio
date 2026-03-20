import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-2 w-full lg:w-2/3 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
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
          className="font-sans text-base text-foreground leading-normal prose-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <div className="font-sans text-base text-foreground leading-normal">
          {content}
        </div>
      )}
    </motion.div>
  );
}
