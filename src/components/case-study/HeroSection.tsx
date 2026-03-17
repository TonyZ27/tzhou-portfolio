import { Tag } from '../ui/Tag';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../../lib/assetUrl';

interface MetadataItem {
  label: string;
  value: string | string[];
}

interface RelatedProject {
  name: string;
  description: string;
  iconUrl?: string;
  href?: string;
}

interface HeroSectionProps {
  heroImage: string;
  title: string;
  logoImage?: string;
  tags?: string[];
  metadata?: MetadataItem[];
  description: string;
  annotation?: string;
  relatedProjects?: RelatedProject[];
  className?: string;
}

export function HeroSection({
  heroImage,
  title,
  logoImage,
  tags,
  metadata,
  description,
  annotation,
  relatedProjects,
  className = '',
}: HeroSectionProps) {
  return (
    <div className={`flex flex-col gap-8 w-full ${className}`}>
      {/* Hero Image */}
      <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden">
        <img
          src={getAssetUrl(heroImage)}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Row */}
      <div className="flex flex-col gap-4 pb-4 border-b border-muted-border">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        )}

        {/* Title & Logo */}
        <div className="flex items-center justify-between">
          <h1 className="font-sans text-4xl text-foreground">
            {title}
          </h1>
          {logoImage && (
            <div className="w-12 h-12">
              <img
                src={getAssetUrl(logoImage)}
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Detail Section: Metadata + Overview */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left Column: Metadata */}
        {metadata && metadata.length > 0 && (
          <div className="flex flex-col gap-4 min-w-80 shrink-0">
            {metadata.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <span className="text-xs uppercase text-muted-foreground w-12 shrink-0">
                  {item.label}
                </span>
                <span className="text-base text-foreground">
                  {Array.isArray(item.value) ? item.value.join(' · ') : item.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Right Column: Overview + Annotation */}
        <div className="flex flex-col gap-5 flex-1 min-w-0">
          {/* Description */}
          <div
            className="font-sans text-base text-foreground leading-normal"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* Annotation */}
          {annotation && (
            <div className="w-full bg-muted rounded-lg p-4">
              <p className="font-sans text-sm text-foreground leading-[1.5]">
                {annotation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects && relatedProjects.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-6">
          {relatedProjects.map((project, index) => (
            <a
              key={index}
              href={project.href || '#'}
              className="flex-1 flex items-center gap-4 bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#d9d9d9] rounded-lg shrink-0 overflow-hidden">
                {project.iconUrl && (
                  <img
                    src={getAssetUrl(project.iconUrl)}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <span className="font-sans font-medium text-base text-foreground">
                  {project.name}
                </span>
                <span className="font-sans text-base text-foreground/60">
                  {project.description}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
