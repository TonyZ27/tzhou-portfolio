export interface LocalizedText {
  en: string;
  zh: string;
}

export interface Project {
  id: string;
  index: string;
  title: LocalizedText;
  year: string;
  description: LocalizedText;
  coverImage: string;
  tags: LocalizedText[];
  company: LocalizedText;
  type: LocalizedText;
  category: LocalizedText[];
  featured?: boolean;
  externalLink?: string;
  inactive?: boolean;
}
