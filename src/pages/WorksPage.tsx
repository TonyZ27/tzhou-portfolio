import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { VerticalNav } from '../components/layout/VerticalNav';
import { MobileHeader } from '../components/layout/MobileHeader';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';
import { FilterChip } from '../components/works/FilterChip';
import { WorksListHeader } from '../components/works/WorksListHeader';
import { PageHeader } from '../components/layout/PageHeader';
import { WorksListItem } from '../components/works/WorksListItem';
import { WorksPreview } from '../components/works/WorksPreview';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import type { Project, LocalizedText } from '../types/project';

const getFilterCategories = (lang: 'en' | 'zh'): { id: string; label: LocalizedText }[] => [
  { id: 'All', label: { en: 'All', zh: '全部' } },
  { id: 'Product Design', label: { en: 'Product Design', zh: '产品设计' } },
  { id: 'Development', label: { en: 'Development', zh: '开发' } },
];

const translations = {
  en: {
    projects: 'PROJECTS',
    noProjectsFound: 'No projects found for this category.',
  },
  zh: {
    projects: '项目',
    noProjectsFound: '该分类下暂无项目。',
  },
};

export function WorksPage() {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  // Filter categories with translations
  const filterCategories = useMemo(() => getFilterCategories(currentLanguage), [currentLanguage]);

  // Map category id to label (for comparison with project.category)
  const getCategoryId = (label: string) => {
    const category = filterCategories.find(c => c.label[currentLanguage] === label || c.id === label);
    return category?.id || label;
  };

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [verticalOffset, setVerticalOffset] = useState(0);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) =>
      project.category.some(cat => cat[currentLanguage] === activeFilter || cat.en === activeFilter)
    );
  }, [activeFilter, currentLanguage]);

  // Get currently hovered project
  const hoveredProject = useMemo(() => {
    if (!hoveredProjectId) return null;
    return projects.find((p) => p.id === hoveredProjectId) || null;
  }, [hoveredProjectId]);

  // Handle mouse move for parallax effect
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate relative position (-0.5 to 0.5)
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    // Apply damping (max 15px movement)
    setParallax({
      x: relX * 15,
      y: relY * 15,
    });
  }, []);

  // Handle project hover - calculate vertical offset for alignment
  const handleProjectHover = useCallback((projectId: string, element?: HTMLElement) => {
    // Find the project to check if it's inactive
    const project = projects.find((p) => p.id === projectId);
    // Inactive projects don't trigger hover interactions
    if (project?.inactive) return;

    setHoveredProjectId(projectId);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;

      // Calculate the center of the element relative to the viewport center
      const elementCenter = elementRect.top + elementRect.height / 2;
      const offset = elementCenter - viewportCenter;

      setVerticalOffset(offset);
    }
  }, []);

  // Handle project leave
  const handleProjectLeave = useCallback(() => {
    setHoveredProjectId(null);
    setParallax({ x: 0, y: 0 });
    setVerticalOffset(0);
  }, []);

  // Handle project click
  const handleProjectClick = useCallback(
    (projectId: string) => {
      const project = projects.find((p) => p.id === projectId);
      if (!project) return;

      // Inactive projects are not clickable
      if (project.inactive) {
        return;
      }

      // External projects open in new tab
      if (project.externalLink) {
        window.open(project.externalLink, '_blank', 'noopener noreferrer');
        return;
      }

      // Internal projects navigate to case study
      navigate(`/work/${projectId}`);
    },
    [navigate]
  );

  // Check if device is touch device (disable hover effects)
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout: Three-column grid - Left ~66% (incl. Nav), Right ~33% */}
      <div className="hidden lg:grid lg:grid-cols-[64px_2fr_1fr]">
        {/* Left Column: Vertical Navigation */}
        <VerticalNav activeTab="works" />

        {/* Middle Column: Project List - Global scroll, matches HomePage */}
        <div className="px-6 pb-20">
          {/* Page Header */}
          <div className="px-6">
            <PageHeader title={t.projects} />
          </div>

          {/* Filter Chips */}
          <div className="flex gap-3 items-center py-4 px-6 overflow-x-auto scrollbar-hide">
            {filterCategories.map((category) => (
              <FilterChip
                key={category.id}
                text={category.label[currentLanguage]}
                selected={activeFilter === category.id || activeFilter === category.label[currentLanguage]}
                onClick={() => setActiveFilter(category.id)}
              />
            ))}
          </div>

          {/* Project List */}
          <div className="px-6">
            {/* List Header - Desktop Only */}
            <WorksListHeader className="hidden md:grid" />

            {/* List Items */}
            {filteredProjects.map((project) => (
              <WorksListItem
                key={project.id}
                project={project}
                isHovered={hoveredProjectId === project.id}
                isBlurred={
                  !isTouchDevice &&
                  hoveredProjectId !== null &&
                  hoveredProjectId !== project.id
                }
                onHover={(element) => handleProjectHover(project.id, element)}
                onLeave={handleProjectLeave}
                onMouseMove={
                  !isTouchDevice ? handleMouseMove : undefined
                }
                onClick={() => handleProjectClick(project.id)}
              />
            ))}

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="py-12 text-center text-muted-foreground font-sans">
                {t.noProjectsFound}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Preview - Sticky positioning within grid */}
        <div className="h-full">
          <div className="sticky top-0 h-screen">
            <WorksPreview
              project={hoveredProject}
              parallax={parallax}
              isVisible={hoveredProjectId !== null}
              verticalOffset={verticalOffset}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Page Content */}
        <main className="flex-1 flex flex-col px-4">
          {/* Page Header */}
          <PageHeader title={t.projects} />

          {/* Filter Chips */}
          <div className="flex gap-3 items-center py-4 overflow-x-auto scrollbar-hide">
            {filterCategories.map((category) => (
              <FilterChip
                key={category.id}
                text={category.label[currentLanguage]}
                selected={activeFilter === category.id || activeFilter === category.label[currentLanguage]}
                onClick={() => setActiveFilter(category.id)}
              />
            ))}
          </div>

          {/* Project List */}
          <div className="flex-1 flex flex-col">
            {/* List Header - Desktop Only */}
            <WorksListHeader className="hidden md:grid" />

            {/* List Items */}
            {filteredProjects.map((project) => (
              <WorksListItem
                key={project.id}
                project={project}
                isHovered={hoveredProjectId === project.id}
                isBlurred={false}
                onHover={() => handleProjectHover(project.id, undefined)}
                onLeave={handleProjectLeave}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="py-12 text-center text-muted-foreground font-sans">
                {t.noProjectsFound}
              </div>
            )}
          </div>
        </main>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav activeTab="works" />
      </div>
    </div>
  );
}
