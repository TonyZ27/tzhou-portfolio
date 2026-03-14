import { VerticalNav } from '../layout/VerticalNav';
import { CaseStudySidebar, type TocItem } from './CaseStudySidebar';
import { MobileHeader } from '../layout/MobileHeader';
import { MobileBottomNav } from '../layout/MobileBottomNav';

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  activeTab?: 'home' | 'works' | 'about';
  tocItems?: TocItem[];
}

export function CaseStudyLayout({ children, activeTab = 'works', tocItems }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:h-screen lg:overflow-hidden">
        {/* Left Column: Global Vertical Navigation */}
        <VerticalNav activeTab={activeTab} />

        {/* Right Area: Centered Content Wrapper */}
        <div className="flex-1 flex justify-center h-full overflow-auto">
          {/* Inner Container: Sidebar + Main Content */}
          <div className="flex w-full h-max justify-center">
            {/* Local Sidebar */}
            <CaseStudySidebar tocItems={tocItems} />

            {/* Main Content Area */}
            <main className="flex-1 px-12 pt-12 pb-24 max-w-[1024px]">
              {children}
            </main>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Back Button Bar (from CaseStudySidebar mobile view) */}
        <CaseStudySidebar tocItems={tocItems} />

        {/* Main Content */}
        <main className="flex-1 px-4 py-6 pb-24">
          {children}
        </main>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav activeTab={activeTab} />
      </div>
    </div>
  );
}
