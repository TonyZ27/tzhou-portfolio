import { useEffect, useRef, useState } from 'react';
import type { Project } from '../../types/project';
import { Tag } from '../ui/Tag';
import { getAssetUrl } from '../../lib/assetUrl';

interface HeroPreviewProps {
  project: Project | null;
  tags: string[];
}

export function HeroPreview({ project, tags }: HeroPreviewProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const prevProjectRef = useRef<Project | null>(null);

  useEffect(() => {
    if (project && !loadedImages.has(project.coverImage)) {
      // Preload image
      const img = new Image();
      img.src = getAssetUrl(project.coverImage);
      img.onload = () => {
        setLoadedImages((prev) => new Set([...prev, project.coverImage]));
      };
    }
    prevProjectRef.current = project;
  }, [project, loadedImages]);

  const isLoaded = project ? loadedImages.has(project.coverImage) : false;
  const displayProject = project;

  return (
    <div className="bg-accent h-full w-full relative overflow-hidden flex items-center justify-center">
      {/* Default State - Waving Hand */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          displayProject ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <span className="text-6xl">👋</span>
      </div>

      {/* Project Preview State */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          displayProject && isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {displayProject && (
          <>
            {/* Cover Image - z-0 */}
            <img
              src={getAssetUrl(displayProject.coverImage)}
              alt={displayProject.title}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Gradient Overlay - z-10 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

            {/* Text Layer - z-20 */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-12">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
