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
  return (
    <div className={`flex flex-col gap-10 w-full ${className}`}>
      <TextBlock title={textBlock.title} content={textBlock.content} />

      <MediaRenderer
        src={media.src}
        alt={media.alt}
        aspectRatio={media.aspectRatio}
        objectFit="contain"
      />
    </div>
  );
}
