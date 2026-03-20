import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MediaRenderer } from './MediaRenderer';

interface MediaSplitTextProps {
  textBlock: {
    title?: string;
    subtitle?: string;
    content: string | React.ReactNode;
  };
  media: {
    src: string;
    alt?: string;
    aspectRatio?: string;
  };
  reverse?: boolean;
  className?: string;
}

export function MediaSplitText({
  textBlock,
  media,
  reverse = false,
  className = '',
}: MediaSplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  const textContent = (
    <motion.div
      className="flex flex-col gap-2 flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {textBlock.subtitle && (
        <h3 className="font-sans text-xl text-foreground leading-normal">
          {textBlock.subtitle}
        </h3>
      )}
      <h2 className="font-sans text-2xl text-foreground leading-normal">
        {textBlock.title}
      </h2>
      {typeof textBlock.content === 'string' ? (
        <p
          className="font-sans text-base text-foreground leading-normal"
          dangerouslySetInnerHTML={{ __html: textBlock.content }}
        />
      ) : (
        <div className="font-sans text-base text-foreground leading-normal">
          {textBlock.content}
        </div>
      )}
    </motion.div>
  );

  const mediaContent = (
    <motion.div
      className={`w-full lg:w-1/2 ${reverse ? '' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
    >
      <MediaRenderer
        src={media.src}
        alt={media.alt}
        aspectRatio={media.aspectRatio || '16/9'}
        objectFit="contain"
      />
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-[120px] items-start w-full ${
        reverse ? 'lg:flex-row-reverse' : ''
      } ${className}`}
    >
      {textContent}
      {mediaContent}
    </div>
  );
}
