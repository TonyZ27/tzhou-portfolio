import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../../types/project';
import { ProjectItem } from './ProjectItem';
import { PageHeader } from '../layout/PageHeader';
import { useLanguage } from '../../contexts/LanguageContext';
import { Footer } from './Footer';

interface ProjectListProps {
  projects: Project[];
  onProjectHover: (project: Project | null) => void;
}

const translations = {
  en: { selectedProjects: 'SELECTED PROJECTS' },
  zh: { selectedProjects: '精选项目' },
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
            onHover={() => handleHover(project)}
            onLeave={handleLeave}
            onMouseLeaveItem={handleMouseLeaveItem}
            onClick={() => handleClick(project.id)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
