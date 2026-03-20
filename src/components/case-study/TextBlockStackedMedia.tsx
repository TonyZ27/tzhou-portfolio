import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TextBlock } from './TextBlock';
import { MediaRenderer } from './MediaRenderer';

interface TextBlockStackedMediaProps {
  textBlock: {
    title: string;
    content: string;
  };
  media: {
    src: string;
    alt?: string;
    aspectRatio?: string;
  };
  className?: string;
}

export function TextBlockStackedMedia({
  textBlock,
  media,
  className = '',
}: TextBlockStackedMediaProps) {
  const mediaRef = useRef(null);
  const mediaInView = useInView(mediaRef, { once: true, margin: '-80px 0px' });

  return (
    <div className={`flex flex-col gap-10 w-full ${className}`}>
      <TextBlock title={textBlock.title} content={textBlock.content} />

      <motion.div
        ref={mediaRef}
        initial={{ opacity: 0, y: 20 }}
        animate={mediaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <MediaRenderer
          src={media.src}
          alt={media.alt}
          aspectRatio={media.aspectRatio}
          objectFit="contain"
        />
      </motion.div>
    </div>
  );
}
