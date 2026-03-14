import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export function WorkPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-sans text-xl font-medium text-foreground mb-4">
            Project not found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-sans text-base">Back</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <span className="font-mono text-number-sm text-muted-foreground">
            {project.index}
          </span>
          <h1 className="font-sans text-3xl font-medium text-foreground mt-2">
            {project.title}
          </h1>
          <p className="font-mono text-number-sm text-muted-foreground mt-1">
            {project.year}
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="aspect-video bg-accent rounded-lg mb-8 flex items-center justify-center">
          <span className="text-6xl">👋</span>
        </div>

        <p className="font-sans text-lg text-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center bg-muted text-foreground text-text-sm rounded-full px-3 py-1 font-sans"
            >
              {tag}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}
