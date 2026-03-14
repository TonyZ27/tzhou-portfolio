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
  return (
    <div className={`flex flex-col gap-8 w-full ${className}`}>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[120px] items-start w-full">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-4 w-full lg:flex-1 lg:max-w-[400px]">
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
        </div>

        {/* Right: Media */}
        <div className="w-full lg:w-2/3">
          <MediaRenderer
            src={media.src}
            alt={media.alt}
            aspectRatio={media.aspectRatio}
            objectFit="contain"
          />
        </div>
      </div>

      {/* Multi-part Content (for Selective Engagement) */}
      {isMultiPart && additionalContent && additionalMedia && (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[120px] items-start w-full">
          {/* Left: Additional Text */}
          <div className="w-full lg:flex-1 lg:max-w-[400px]">
            <p className="font-sans text-base text-foreground leading-normal">
              {additionalContent}
            </p>
          </div>

          {/* Right: Additional Media */}
          <div className="w-full lg:w-2/3">
            <MediaRenderer
              src={additionalMedia}
              alt="Additional illustration"
              aspectRatio="600/443"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
