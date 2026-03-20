import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MediaRenderer } from './MediaRenderer';

interface SolutionSplitMediaProps {
  title: string;
  subtitle?: string;
  description: string;
  media: {
    src: string;
    alt?: string;
    aspectRatio?: string;
  };
  isMultiPart?: boolean;
  additionalContent?: string;
  additionalMedia?: string;
  className?: string;
}

export function SolutionSplitMedia({
  title,
  subtitle,
  description,
  media,
  isMultiPart = false,
  additionalContent,
  additionalMedia,
  className = '',
}: SolutionSplitMediaProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  const addRef = useRef(null);
  const addInView = useInView(addRef, { once: true, margin: '-80px 0px' });

  return (
    <div className={`flex flex-col gap-8 w-full ${className}`}>
      {/* Main Content */}
      <div ref={ref} className="flex flex-col lg:flex-row gap-8 lg:gap-[120px] items-start w-full">
        {/* Left: Text Content */}
        <motion.div
          className="flex flex-col gap-4 w-full lg:flex-1 lg:max-w-[400px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex flex-col gap-1">
            <h3 className="font-sans text-xl text-foreground">
              {title}
            </h3>
            {subtitle && (
              <span className="font-sans text-sm text-muted-foreground">
                {subtitle}
              </span>
            )}
          </div>
          <p className="font-sans text-base text-foreground leading-normal">
            {description}
          </p>
        </motion.div>

        {/* Right: Media */}
        <motion.div
          className="w-full lg:w-2/3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
        >
          <MediaRenderer
            src={media.src}
            alt={media.alt}
            aspectRatio={media.aspectRatio}
            objectFit="contain"
          />
        </motion.div>
      </div>

      {/* Multi-part Content */}
      {isMultiPart && additionalContent && additionalMedia && (
        <div ref={addRef} className="flex flex-col lg:flex-row gap-8 lg:gap-[120px] items-start w-full">
          <motion.div
            className="w-full lg:flex-1 lg:max-w-[400px]"
            initial={{ opacity: 0, y: 20 }}
            animate={addInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="font-sans text-base text-foreground leading-normal">
              {additionalContent}
            </p>
          </motion.div>

          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={addInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
          >
            <MediaRenderer
              src={additionalMedia}
              alt="Additional illustration"
              aspectRatio="600/443"
              objectFit="contain"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
