import { motion } from 'motion/react';
import type { Project } from '../../types/project';
import { getAssetUrl } from '../../lib/assetUrl';
import { useLanguage } from '../../contexts/LanguageContext';

interface HoverPosterProps {
  project: Project;
}

// Animation configuration - custom easing curve as specified
const EASE_CURVE = [0.22, 1, 0.36, 1] as const;

// Root container variants with staggerChildren for orchestration
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

// Child element variants for fade-up animation
const childVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: EASE_CURVE,
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: EASE_CURVE,
    },
  },
};

// Image clip-path reveal animation - specialized variant
const imageRevealVariants = {
  hidden: {
    clipPath: 'inset(100% 0 0 0)',
    scale: 1.05,
  },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    scale: 1,
    transition: {
      duration: 1.2,
      ease: EASE_CURVE,
    },
  },
  exit: {
    clipPath: 'inset(0 0 100% 0)',
    scale: 1.02,
    transition: {
      duration: 0.5,
      ease: EASE_CURVE,
    },
  },
};

/**
 * Calculate estimated reading time in minutes
 * Average reading speed: 200 words per minute
 */
function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * HoverPoster - Project details display for hover state in the hero preview panel
 * Features: Framer Motion animations with staggered children, clip-path image reveal,
 * serif index at bottom-right, and structured specs layout
 */
export function HoverPoster({ project }: HoverPosterProps) {
  const { currentLanguage } = useLanguage();

  const readingTime = project.readingTime ?? calculateReadingTime(project.description[currentLanguage]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col w-full h-full px-12 py-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Top Specs - Featured + Type + Year */}
      <motion.div
        className="flex items-center gap-4 py-6 text-sm font-mono uppercase tracking-wider text-muted-primary-foreground z-10"
        variants={childVariants}
      >
        <span>{project.type[currentLanguage]}</span>
        <span className="text-muted-primary-foreground">•</span>
        <span>{project.year}</span>
      </motion.div>

      {/* Project Image with Clip-Path Reveal Animation */}
      <div className="flex-1 min-h-0 w-full relative overflow-hidden z-10">
        <motion.img
          src={getAssetUrl(project.coverImage)}
          alt={project.title[currentLanguage]}
          className="w-full h-full object-cover"
          variants={imageRevealVariants}
        />
      </div>

      {/* Bottom Specs - ROLE / FOCUS / Reading Time */}
      <motion.div className="flex items-end gap-16 my-6 z-10" variants={childVariants}>
        {/* ROLE */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-muted-primary-foreground uppercase tracking-wider">ROLE</span>
          <span className="text-sm text-primary-foreground">
            {project.role?.[currentLanguage] ?? '—'}
          </span>
        </div>
        {/* FOCUS (= tags joined) */}
        <div className="flex flex-col gap-2 flex-1">
          <span className="text-xs text-muted-primary-foreground uppercase tracking-wider">FOCUS</span>
          <span className="text-sm text-primary-foreground">
            {project.tags.slice(0, 2).map(t => t[currentLanguage]).join(', ')}
          </span>
        </div>
        {/* Reading Time */}
        <div className="flex flex-col gap-2 shrink-0">
          <span className="text-sm text-muted-primary-foreground uppercase">
            {readingTime}min Read
          </span>
        </div>
      </motion.div>

      {/* Bottom-Right Index with Serif Font - partially overflows right boundary */}
      <motion.div
        className="absolute -top-20 right-0 translate-x-1/2 font-serif text-[300px] text-white/[0.05] leading-none pointer-events-none select-none z-[1]"
        variants={childVariants}
      >
        {project.index.replace('/', '')}
      </motion.div>
    </motion.div>
  );
}
