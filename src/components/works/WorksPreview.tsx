import { cn } from '../../lib/utils';
import type { Project } from '../../types/project';

interface WorksPreviewProps {
  project: Project | null;
  parallax: { x: number; y: number };
  isVisible: boolean;
  verticalOffset?: number; // Offset to align with hovered item
}

// Pure black placeholder image for testing parallax
const BLACK_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23000000"/%3E%3C/svg%3E';

export function WorksPreview({ project, parallax, isVisible, verticalOffset = 0 }: WorksPreviewProps) {
  return (
    <div
      className={cn(
        'hidden lg:flex h-full items-center justify-center p-10 relative w-full transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      {/* Project Cover Image with Parallax - Aligned to hovered item */}
      <img
        src={project?.coverImage || BLACK_PLACEHOLDER}
        alt={project?.title || 'Project preview'}
        className="w-[80%] max-w-[320px] object-contain shadow-2xl"
        style={{
          transform: `translate(${parallax.x}px, ${parallax.y + verticalOffset}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      />
    </div>
  );
}
