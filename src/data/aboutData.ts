import type { LocalizedText } from '../types/project';

export interface HeroData {
  greeting: LocalizedText;
  name: LocalizedText;
  introParagraphs: LocalizedText[];
}

export interface SkillItemData {
  title: LocalizedText;
  description: LocalizedText;
  colorClass: string;
}

export interface TimelineItemData {
  title: LocalizedText;
  subtitle: LocalizedText;
}

export type ContactType = 'copy' | 'download' | 'link';

export interface ContactItemData {
  label: LocalizedText;
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
    greeting: {
      en: "hey, i'm",
      zh: "嗨，我是",
    },
    name: {
      en: "Tony",
      zh: "Tony",
    },
    introParagraphs: [
      {
        en: "A product designer based in Shanghai, focusing on the intersection of scalable design systems and multi-modal experiences.",
        zh: "一位常驻上海的产品设计师，专注于可扩展设计系统与多模态体验的交叉领域。",
      },
      {
        en: "Currently, I lead design for the design system and AI Cockpit experience at Volvo.",
        zh: "目前，我在沃尔沃主导设计系统和 AI 座舱体验的设计工作。",
      },
      {
        en: "I'm also a big advocate for AI-augmented design—I build custom plugins and scripts to streamline the repetitive parts of my workflow.",
        zh: "我也是 AI 增强设计的坚定倡导者——我构建自定义插件和脚本，以简化工作流程中的重复环节。",
      }
    ]
  },
  skills: [
    {
      title: {
        en: "System Design Thinking",
        zh: "系统化设计思维",
      },
      description: {
        en: "engineering scalable foundations and frictionless workflows",
        zh: "构建可扩展的基础架构与无缝的工作流程",
      },
      colorClass: "bg-[#a259ff]"
    },
    {
      title: {
        en: "AI-First Interaction Design",
        zh: "AI 优先的交互设计",
      },
      description: {
        en: "translating AI capabilities into context-aware experiences",
        zh: "将 AI 能力转化为情境感知的体验",
      },
      colorClass: "bg-[#597dff]"
    },
    {
      title: {
        en: "Strategic Design",
        zh: "战略性设计",
      },
      description: {
        en: "aligning design solutions with business goals",
        zh: "让设计方案与商业目标对齐",
      },
      colorClass: "bg-[#ff8559]"
    }
  ],
  timeline: [
    {
      title: {
        en: "Volvo Asia",
        zh: "沃尔沃亚太",
      },
      subtitle: {
        en: "Product Designer — Now",
        zh: "产品设计师 — 至今",
      }
    },
    {
      title: {
        en: "Yuanfudao",
        zh: "猿辅导",
      },
      subtitle: {
        en: "Product Designer — 2023",
        zh: "产品设计师 — 2023",
      }
    },
    {
      title: {
        en: "Cornell University",
        zh: "康奈尔大学",
      },
      subtitle: {
        en: "Master in Information Science - 2021",
        zh: "信息科学硕士 - 2021",
      }
    },
    {
      title: {
        en: "UIUC",
        zh: "伊利诺伊大学厄巴纳-香槟分校",
      },
      subtitle: {
        en: "B.S in Psychology - 2019",
        zh: "心理学学士 - 2019",
      }
    }
  ],
  contacts: [
    {
      label: {
        en: "Resume",
        zh: "简历",
      },
      handle: "@Tony",
      type: "download",
      target: "/resume.pdf",
      icon: "file"
    },
    {
      label: {
        en: "Email",
        zh: "邮箱",
      },
      handle: "tonyz2726@outlook.com",
      type: "copy",
      target: "tonyz2726@outlook.com",
      icon: "mail"
    },
    {
      label: {
        en: "Github",
        zh: "Github",
      },
      handle: "@TonyZ27",
      type: "link",
      target: "https://github.com/TonyZ27",
      icon: "github"
    },
    {
      label: {
        en: "Linkedin",
        zh: "领英",
      },
      handle: "@Tony Zhou",
      type: "link",
      target: "https://linkedin.com/in/tonyzhou",
      icon: "linkedin"
    }
  ]
};
