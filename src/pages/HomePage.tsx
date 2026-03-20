import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VerticalNav } from '../components/layout/VerticalNav';
import { MobileHeader } from '../components/layout/MobileHeader';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';
import { ProjectList } from '../components/home/ProjectList';
import { HeroPreview } from '../components/home/HeroPreview';
import { PageHeader } from '../components/layout/PageHeader';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { Footer } from '../components/home/Footer';
import type { Project } from '../types/project';

const translations = {
  en: { selectedProjects: 'SELECTED PROJECTS' },
  zh: { selectedProjects: '精选项目' },
};

export function HomePage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  // Filter to show only featured projects on the home page
  const selectedProjects = projects.filter((project) => project.featured);

  const handleProjectHover = (project: Project | null) => {
    setActiveProject(project);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout: Three-column grid */}
      <div className="hidden lg:grid lg:grid-cols-[64px_1fr_1fr] lg:h-screen lg:overflow-hidden ">
        {/* Left + Middle Column Container */}
        <div className="col-span-2 grid grid-cols-subgrid bg-background shadow-[inset_-16px_0px_16px_0px_rgba(30,33,53,0.24)]">
          {/* Left Column: Vertical Navigation */}
          <VerticalNav activeTab="home" />

          {/* Middle Column: Project List */}
          <div className="border-r border-border h-full overflow-hidden">
            <ProjectList projects={selectedProjects} onProjectHover={handleProjectHover} />
          </div>
        </div>

        {/* Right Column: Hero Preview */}
        <div className="h-full sticky top-0">
          <HeroPreview project={activeProject} tags={activeProject?.tags ?? []} />
        </div>
      </div>

      {/* Mobile Layout: Vertical card stack */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Mobile Project Cards */}
        <main className="flex-1 px-4 flex flex-col pb-24">
          <PageHeader title={t.selectedProjects} />

          <div className="flex flex-col mt-4 gap-4 flex-1">
            {selectedProjects.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className="group flex flex-col gap-2 py-4"
              >
                <span className="font-sans text-xl font-medium text-foreground">
                  {project.title[currentLanguage]}
                </span>
                <span className="font-mono text-number-sm text-muted-foreground">
                  {project.year}
                </span>
                <p className="font-sans text-base text-muted-foreground">
                  {project.description[currentLanguage]}
                </p>
              </Link>
            ))}
          </div>

          {/* Mobile Footer — px-0 lets parent px-4 handle horizontal spacing; pb-6 for tighter bottom gap */}
          <Footer className="px-0 pb-2" />
        </main>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav activeTab="home" />
      </div>
    </div>
  );
}
