import { Home, Briefcase, CircleUser, Bot, Languages} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface VerticalNavProps {
  activeTab?: 'home' | 'works' | 'about';
}

export function VerticalNav({ activeTab = 'home' }: VerticalNavProps) {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'works', icon: Briefcase, label: 'Works', path: '/works' },
    { id: 'about', icon: CircleUser, label: 'About', path: '/about' },
  ] as const;

  return (
    <nav className="hidden lg:flex bg-background border-r border-border flex-col gap-6 h-full items-center py-6 w-16 shrink-0">
      {/* Logo */}
      <div className="flex h-[70px] items-center justify-center relative w-[17px]">
        <div className="flex-none rotate-90">
          <span className="font-sans font-semibold h-[17px] leading-normal relative text-sm text-foreground w-[70px] whitespace-nowrap">
            T.ZHOU
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-border h-px w-[29px]" />

      {/* Navigation Items */}
      <div className="flex flex-1 flex-col gap-2 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex flex-col gap-1 items-center justify-center w-10 h-10 rounded-md transition-colors duration-200',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2 items-start">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-md text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label="AI Assistant"
        >
          <Bot className="w-5 h-5" />
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 rounded-md text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label="Translate"
        >
          <Languages className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
