import { useState, useMemo, useCallback, useRef } from 'react';
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
import type { Project } from '../types/project';

const FILTER_CATEGORIES = ['All', 'Product Design', 'Development'] as const;
type FilterCategory = (typeof FILTER_CATEGORIES)[number];

export function WorksPage() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [verticalOffset, setVerticalOffset] = useState(0);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category.includes(activeFilter));
  }, [activeFilter]);

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
    setHoveredProjectId(projectId);

    if (element && scrollContainerRef.current) {
      const containerRect = scrollContainerRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      // Calculate the center of the element relative to the container center
      const elementCenter = elementRect.top + elementRect.height / 2;
      const containerCenter = containerRect.top + containerRect.height / 2;
      const offset = elementCenter - containerCenter;

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
      <div className="hidden lg:grid lg:grid-cols-[64px_2fr_1fr] lg:h-screen lg:overflow-hidden">
        {/* Left Column: Vertical Navigation */}
        <VerticalNav activeTab="works" />

        {/* Middle Column: Project List - No extra padding, matches HomePage */}
        <div className="h-full overflow-hidden px-6">
          <div ref={scrollContainerRef} className="h-full overflow-y-auto">
            {/* Page Header */}
            <div className="px-6">
              <PageHeader title="PROJECTS" />
            </div>

            {/* Filter Chips */}
            <div className="flex gap-3 items-center py-4 px-6 overflow-x-auto scrollbar-hide">
              {FILTER_CATEGORIES.map((category) => (
                <FilterChip
                  key={category}
                  text={category}
                  selected={activeFilter === category}
                  onClick={() => setActiveFilter(category)}
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
                  No projects found for this category.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Preview - No border, same as HomePage */}
        <div className="h-full sticky top-0">
          <WorksPreview
            project={hoveredProject}
            parallax={parallax}
            isVisible={hoveredProjectId !== null}
            verticalOffset={verticalOffset}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Page Content */}
        <main className="flex-1 flex flex-col px-4">
          {/* Page Header */}
          <PageHeader title="PROJECTS" />

          {/* Filter Chips */}
          <div className="flex gap-3 items-center py-4 overflow-x-auto scrollbar-hide">
            {FILTER_CATEGORIES.map((category) => (
              <FilterChip
                key={category}
                text={category}
                selected={activeFilter === category}
                onClick={() => setActiveFilter(category)}
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
                No projects found for this category.
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
