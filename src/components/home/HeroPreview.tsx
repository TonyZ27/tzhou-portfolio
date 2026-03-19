import { useEffect, useRef, useState } from 'react';
import type { Project } from '../../types/project';
import { Tag } from '../ui/Tag';
import { getAssetUrl } from '../../lib/assetUrl';
import { useLanguage } from '../../contexts/LanguageContext';

interface HeroPreviewProps {
  project: Project | null;
  tags: { en: string; zh: string }[];
}

export function HeroPreview({ project, tags }: HeroPreviewProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const prevProjectRef = useRef<Project | null>(null);
  const { currentLanguage } = useLanguage();

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
          <div className="flex flex-col w-full h-full p-8 gap-6">
            {/* Cover Image - 按宽度填充，高度自适应 */}
            <div className="flex-1 min-h-0 w-full relative overflow-hidden">
              <img
                src={getAssetUrl(displayProject.coverImage)}
                alt={displayProject.title[currentLanguage]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tags - 位于图片下方，左对齐 */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Tag key={index}>{tag[currentLanguage]}</Tag>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
