export interface HeroData {
  greeting: string;
  name: string;
  introParagraphs: string[];
}

export interface SkillItemData {
  title: string;
  description: string;
  colorClass: string;
}

export interface TimelineItemData {
  title: string;
  subtitle: string;
}

export type ContactType = 'copy' | 'download' | 'link';

export interface ContactItemData {
  label: string;
  handle: string;
  type: ContactType;
  target?: string;
  icon: 'file' | 'mail' | 'github' | 'linkedin';
}

export interface AboutData {
  hero: HeroData;
  skills: SkillItemData[];
  timeline: TimelineItemData[];
  contacts: ContactItemData[];
}

export const aboutData: AboutData = {
  hero: {
    greeting: "hey, i'm",
    name: "Tony",
    introParagraphs: [
      "A product designer based in Shanghai, focusing on the intersection of scalable design systems and multi-modal experiences.",
      "Currently, I lead design for the design system and AI Cockpit experience at Volvo.",
      "I'm also a big advocate for AI-augmented design—I build custom plugins and scripts to streamline the repetitive parts of my workflow."
    ]
  },
  skills: [
    {
      title: "System Design Thinking",
      description: "engineering scalable foundations and frictionless workflows",
      colorClass: "bg-[#a259ff]"
    },
    {
      title: "AI-First Interaction Design",
      description: "translating AI capabilities into context-aware experiences",
      colorClass: "bg-[#597dff]"
    },
    {
      title: "Strategic Design",
      description: "aligning design solutions with business goals",
      colorClass: "bg-[#ff8559]"
    }
  ],
  timeline: [
    {
      title: "Volvo Asia",
      subtitle: "Product Designer — Now"
    },
    {
      title: "Yuanfudao",
      subtitle: "Product Designer — 2023"
    },
    {
      title: "Cornell University",
      subtitle: "Master in Information Science - 2021"
    },
    {
      title: "UIUC",
      subtitle: "B.S in Psychology - 2019"
    }
  ],
  contacts: [
    {
      label: "Resume",
      handle: "@Tony",
      type: "download",
      target: "/resume.pdf",
      icon: "file"
    },
    {
      label: "Email",
      handle: "tonyz2726@outlook.com",
      type: "copy",
      target: "tonyz2726@outlook.com",
      icon: "mail"
    },
    {
      label: "Github",
      handle: "@TonyZ27",
      type: "link",
      target: "https://github.com/TonyZ27",
      icon: "github"
    },
    {
      label: "Linkedin",
      handle: "@Tony Zhou",
      type: "link",
      target: "https://linkedin.com/in/tonyzhou",
      icon: "linkedin"
    }
  ]
};
