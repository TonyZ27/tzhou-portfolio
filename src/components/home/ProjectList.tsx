import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../../types/project';
import { ProjectItem } from './ProjectItem';
import { PageHeader } from '../layout/PageHeader';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectListProps {
  projects: Project[];
  onProjectHover: (project: Project | null) => void;
}

const translations = {
  en: {
    selectedProjects: 'SELECTED PROJECTS',
    productDesigner: 'Product Designer @2026',
    scrollForMore: 'Scroll for more works',
  },
  zh: {
    selectedProjects: '精选项目',
    productDesigner: '产品设计师 @2026',
    scrollForMore: '滚动查看更多作品',
  },
};

export function ProjectList({ projects, onProjectHover }: ProjectListProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const handleHover = useCallback((project: Project) => {
    setHoveredId(project.id);
    onProjectHover(project);
  }, [onProjectHover]);

  const handleLeave = useCallback(() => {
    // This is called when moving between items
    // We don't reset here to prevent flickering
  }, []);

  const handleMouseLeaveItem = useCallback(() => {
    // Reset immediately when mouse leaves any item
    setHoveredId(null);
    onProjectHover(null);
  }, [onProjectHover]);

  const handleContainerLeave = useCallback(() => {
    setHoveredId(null);
    onProjectHover(null);
  }, [onProjectHover]);

  const handleClick = useCallback((projectId: string) => {
    navigate(`/work/${projectId}`);
  }, [navigate]);

  return (
    <div className="flex flex-col h-full px-6">
      {/* Header Section */}
      <div className="px-6 shrink-0">
        <PageHeader title={t.selectedProjects} />
      </div>

      {/* Project List - px-2 py-6 */}
      <div
        className="flex-1 flex flex-col overflow-y-auto px-2 py-6 gap-4"
        onMouseLeave={handleContainerLeave}
      >
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            isHovered={hoveredId === project.id}
            isBlurred={hoveredId !== null && hoveredId !== project.id}
            onHover={() => handleHover(project)}
            onLeave={handleLeave}
            onMouseLeaveItem={handleMouseLeaveItem}
            onClick={() => handleClick(project.id)}
          />
        ))}
      </div>

      {/* Footer - p-6 (24px), gap-3 (12px) */}
      <div className="flex flex-col gap-3 items-start p-6 shrink-0">
        {/* Avatar and Title - gap-4 (16px), items-end */}
        <div className="flex gap-4 items-end">
          {/* Avatar - 40x40px, bg-primary */}
          <div className="w-10 h-10 bg-primary shrink-0" />
          <div className="flex flex-col items-start">
            <span className="font-mono text-xs text-muted-foreground tracking-[0.22px] uppercase">
              {t.productDesigner}
            </span>
          </div>
        </div>

        {/* Scroll Indicator - gap-4 (16px), items-center */}
        <div className="flex gap-4 items-center w-full">
          {/* Horizontal Divider - bg-muted-border, flex-1 */}
          <div className="flex-1 h-px bg-border min-h-px min-w-px" />
          <div className="flex gap-2 items-center">
            <span className="font-mono text-xs text-muted-foreground uppercase whitespace-nowrap">
              {t.scrollForMore}
            </span>
            {/* Scroll bar indicator - 2px width, 16px height */}
            <div className="h-4 w-0.5 bg-muted-foreground overflow-hidden relative">
              <div className="absolute bg-primary bottom-0 h-[7px] left-0 right-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
