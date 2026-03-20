import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface OutlineCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function OutlineCard({ title, children, className = '' }: OutlineCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <motion.div
      ref={ref}
      className={`w-full border border-border rounded-2xl bg-background overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
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
    </motion.div>
  );
}
