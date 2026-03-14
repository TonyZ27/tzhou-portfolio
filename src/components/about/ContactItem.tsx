import { useState } from 'react';
import { FileText, Mail, Github, Linkedin, Copy, Check, Download, ArrowRight } from 'lucide-react';

export type ContactType = 'copy' | 'download' | 'link';

interface ContactItemProps {
  label: string;
  handle: string;
  type: ContactType;
  target?: string;
  icon: 'file' | 'mail' | 'github' | 'linkedin';
}

const iconMap = {
  file: FileText,
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

export function ContactItem({ label, handle, type, target, icon }: ContactItemProps) {
  const [copied, setCopied] = useState(false);
  const Icon = iconMap[icon];

  const handleClick = async () => {
    if (type === 'copy' && target) {
      try {
        await navigator.clipboard.writeText(target);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const ActionIcon = () => {
    if (type === 'copy') {
      return copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4" />
      );
    }
    if (type === 'download') {
      return <Download className="w-4 h-4" />;
    }
    return <ArrowRight className="w-4 h-4" />;
  };

  const content = (
    <>
      <div className="flex items-center justify-center w-5 h-5 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-1 items-start min-w-0 flex-1">
        <div className="flex flex-col justify-center w-full">
          <p className="font-sans font-normal text-[15px] text-foreground leading-none">
            {label}
          </p>
        </div>
        <div className="flex flex-col justify-center w-full">
          <p className="font-sans font-normal text-[13px] text-muted-foreground leading-none">
            {handle}
          </p>
        </div>
      </div>
      <div className="relative flex items-center justify-center group-hover:text-primary transition-colors w-4 h-4 shrink-0">
        <ActionIcon />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </div>
    </>
  );

  const baseClasses = "flex gap-4 items-center text-left w-full overflow-hidden pr-4 py-1 group cursor-pointer transition-colors duration-200";

  if (type === 'link' && target) {
    return (
      <a
        href={target}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses}`}
      >
        {content}
      </a>
    );
  }

  if (type === 'download' && target) {
    return (
      <a
        href={target}
        download
        className={`${baseClasses}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses}`}
    >
      {content}
    </button>
  );
}
