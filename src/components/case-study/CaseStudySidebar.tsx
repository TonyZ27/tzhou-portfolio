import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
}

interface CaseStudySidebarProps {
  className?: string;
  tocItems?: TocItem[];
}

// Default TOC items for AI Voice Assistant page (backward compatible)
const defaultTocItems: TocItem[] = [
  { id: 'overview', label: '1-Minute Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'mental-model', label: 'Mental Model' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'solution', label: 'Solution' },
  { id: 'takeaways', label: 'Takeaways' },
];

export function CaseStudySidebar({ className, tocItems = defaultTocItems }: CaseStudySidebarProps) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Set up IntersectionObserver to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top
        threshold: 0,
      }
    );

    // Observe all sections
    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col h-screen sticky top-0 w-45 border-r border-muted-border p-12 gap-12 shrink-0 ${className || ''}`}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors duration-200"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-sans text-base">Back</span>
        </button>

        {/* Table of Contents */}
        <nav className="flex flex-col gap-4">
          {tocItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`font-sans text-sm transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile Back Bar */}
      <div className="lg:hidden flex items-center px-4 py-3 border-b border-border bg-background">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors duration-200"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-sans text-base">Back</span>
        </button>
      </div>
    </>
  );
}
