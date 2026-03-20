import { AnimatePresence, motion } from 'motion/react';
import type { Project } from '../../types/project';
import { DefaultPoster } from './DefaultPoster';
import { HoverPoster } from './HoverPoster';

interface HeroPreviewProps {
  project: Project | null;
  tags: { en: string; zh: string }[];
}

// Custom easing curve as specified in design requirements
const EASE_CURVE = [0.22, 1, 0.36, 1] as const;

/**
 * HeroPreview - Main preview container for the hero section
 * Uses AnimatePresence with mode="wait" to handle cross-fade between
 * DefaultPoster (no hover) and HoverPoster (project hovered)
 */
export function HeroPreview({ project }: HeroPreviewProps) {
  return (
    <div className="h-full w-full relative flex items-center justify-center bg-accent overflow-visible">
      <AnimatePresence mode="wait">
        {project ? (
          <HoverPoster key={project.id} project={project} />
        ) : (
          <motion.div
            key="default"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_CURVE }}
          >
            <DefaultPoster />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
