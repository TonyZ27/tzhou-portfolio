import { Home, Briefcase, CircleUser } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface MobileBottomNavProps {
  activeTab?: 'home' | 'works' | 'about';
}

export function MobileBottomNav({ activeTab = 'home' }: MobileBottomNavProps) {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'works', icon: Briefcase, label: 'Works', path: '/works' },
    { id: 'about', icon: CircleUser, label: 'About', path: '/about' },
  ] as const;

  return (
    <nav className="lg:hidden fixed bottom-0 z-50 w-full bg-background border-t border-border pb-safe">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-md transition-colors duration-200 min-w-[64px]',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
