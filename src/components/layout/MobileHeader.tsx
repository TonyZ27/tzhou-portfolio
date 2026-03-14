import { Bot, Languages } from 'lucide-react';

export function MobileHeader() {
  return (
    <header className="lg:hidden sticky top-0 z-50 bg-background border-b border-border px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span className="font-sans font-semibold text-base">T.ZHOU</span>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
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
      </div>
    </header>
  );
}
