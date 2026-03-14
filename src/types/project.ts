export interface Project {
  id: string;
  index: string;
  title: string;
  year: string;
  description: string;
  coverImage: string;
  tags: string[];
  company: string;
  type: string;
  category: string[];
  featured?: boolean;
}
