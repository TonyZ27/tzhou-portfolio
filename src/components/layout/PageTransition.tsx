import { motion, useReducedMotion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Wraps a route page with entrance/exit animations (fade + subtle vertical slide).
 * Respects the user's prefers-reduced-motion setting.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        duration: shouldReduceMotion ? 0.1 : 0.25,
      }}
      style={{ width: '100%', minHeight: '100%' }}
    >
      {children}
    </motion.div>
  );
}
