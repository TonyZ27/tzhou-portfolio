import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function Divider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' });

  return (
    <motion.div
      ref={ref}
      className="w-full h-px bg-muted-border"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    />
  );
}
