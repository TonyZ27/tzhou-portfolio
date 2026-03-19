import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'ai-voice-assistant',
    index: '01/',
    title: {
      en: 'AI Voice Assistant',
      zh: 'AI 语音助手',
    },
    year: '2025',
    description: {
      en: 'design the next-generation in-car AI voice assistant that delivers intelligent, safe driving experiences for Volvo',
      zh: '为沃尔沃设计新一代车载 AI 语音助手，提供智能、安全的驾驶体验',
    },
    coverImage: 'images/ai-voice/cover.png',
    tags: [
      { en: 'ARTIFICIAL INTELLIGENCE', zh: '人工智能' },
      { en: 'CONVERSATION DESIGN', zh: '对话设计' },
      { en: 'AUTOMOTIVE', zh: '汽车' },
    ],
    company: {
      en: 'Volvo',
      zh: '沃尔沃',
    },
    type: {
      en: 'HMI Design',
      zh: 'HMI 设计',
    },
    category: [
      { en: 'Product Design', zh: '产品设计' },
    ],
    featured: true
  },
  {
    id: 'hmi-design-system',
    index: '02/',
    title: {
      en: 'HMI Design System',
      zh: 'HMI 设计系统',
    },
    year: '2025',
    description: {
      en: 'Build a unified design system to address fragmented in-vehicle experiences for Volvo and improve the delivery workflow.',
      zh: '为沃尔沃构建统一的设计系统和敏捷的交付流程，解决车载体验碎片化问题',
    },
    coverImage: 'images/hmi-design-system/cover.png',
    tags: [
      { en: 'Design System', zh: '设计系统' },
      { en: 'HMI', zh: '人机交互' },
      { en: 'Automotive', zh: '汽车' },
    ],
    company: {
      en: 'Volvo',
      zh: '沃尔沃',
    },
    type: {
      en: 'Design System',
      zh: '设计系统',
    },
    category: [
      { en: 'Product Design', zh: '产品设计' },
    ],
    featured: true
  },
  {
    id: 'my-portfolio',
    index: '03/',
    title: {
      en: 'My Portfolio',
      zh: '个人作品集',
    },
    year: '2026',
    description: {
      en: 'yes, the portfolio you are viewing was designed and developed entirely from scratch using Claude Code',
      zh: '是的，你现在浏览的这个网站是完全使用 Vibe Coding 从零设计和开发部署的',
    },
    coverImage: 'images/portfolio-cover.png',
    tags: [
      { en: 'Website', zh: '网站' },
      { en: 'Vibe Coding', zh: 'Vibe Coding' },
      { en: 'Portfolio', zh: 'Portfolio' },
    ],
    company: {
      en: 'Myself',
      zh: '个人项目',
    },
    type: {
      en: 'Custom Website',
      zh: '网页设计',
    },
    category: [
      { en: 'Product Design', zh: '产品设计' },
      { en: 'Development', zh: '开发' },
    ],
    featured: true
  },
  {
    id: 'find-in-figma',
    index: '05/',
    title: {
      en: 'Find in Figma',
      zh: 'Find in Figma',
    },
    year: '2024',
    description: {
      en: 'a Figma plugin to quickly find and navigate to specific layers and components',
      zh: '一款 Figma 插件，快速查找并导航到特定图层和组件',
    },
    coverImage: 'images/find-in-figma.jpg',
    tags: [
      { en: 'Figma', zh: 'Figma' },
      { en: 'Plugin', zh: '插件' },
      { en: 'Tool', zh: '工具' },
    ],
    company: {
      en: 'Myself',
      zh: '个人项目',
    },
    type: {
      en: 'Figma Plugin',
      zh: 'Figma 插件',
    },
    category: [
      { en: 'Development', zh: '开发' },
    ],
  inactive: true
  },
  {
    id: 'preschool-learning-app',
    index: '06/',
    title: {
      en: 'Preschool Learning App',
      zh: '学前学习应用',
    },
    year: '2022',
    description: {
      en: 'an educational mobile application for preschool children',
      zh: '一款面向学龄前儿童的教育移动应用',
    },
    coverImage: 'images/preschool-learning.jpg',
    tags: [
      { en: 'Education', zh: '教育' },
      { en: 'Mobile', zh: '移动端' },
      { en: 'Children', zh: '儿童' },
    ],
    company: {
      en: 'Yuanfudao',
      zh: '猿辅导',
    },
    type: {
      en: 'Mobile Design',
      zh: '移动设计',
    },
    category: [
      { en: 'Product Design', zh: '产品设计' },
    ],
  },
  {
    id: 'marksnap',
    index: '07/',
    title: {
      en: 'Marksnap',
      zh: 'Marksnap',
    },
    year: '2023',
    description: {
      en: 'a browser plugin for capturing and annotating web content',
      zh: '一款用于捕获和标注网页内容的浏览器插件',
    },
    coverImage: 'images/external/github.png',
    tags: [
      { en: 'Browser Extension', zh: '浏览器扩展' },
      { en: 'Tool', zh: '工具' },
      { en: 'Productivity', zh: '效率' },
    ],
    company: {
      en: 'Myself',
      zh: '个人项目',
    },
    type: {
      en: 'Website Plugin',
      zh: '网站插件',
    },
    category: [
      { en: 'Development', zh: '开发' },
    ],
    externalLink: 'https://github.com/TonyZ27/MarkSnap'

  },
  {
    id: 'font-inspector',
    index: '09/',
    title: {
      en: 'Font Inspector',
      zh: 'Font Inspector',
    },
    year: '2025',
    description: {
      en: 'a browser plugin for inspecting and identifying fonts on any webpage',
      zh: '一款用于检查和识别任意网页字体的浏览器插件',
    },
    coverImage: 'images/external/github.png',
    tags: [
      { en: 'Browser Extension', zh: '浏览器扩展' },
      { en: 'Tool', zh: '工具' },
      { en: 'Typography', zh: '字体排版' },
    ],
    company: {
      en: 'Myself',
      zh: '个人项目',
    },
    type: {
      en: 'Website Plugin',
      zh: '网站插件',
    },
    category: [
      { en: 'Development', zh: '开发' },
    ],
    externalLink: 'https://github.com/TonyZ27/FontInspector'
  },
  {
    id: 'sequence-prototyper',
    index: '10/',
    title: {
      en: 'Sequence Prototyper',
      zh: 'Sequence Prototyper',
    },
    year: '2024',
    description: {
      en: 'a Figma plugin for creating sequence diagrams and flow prototypes',
      zh: '一款用于创建序列图和流程原型的 Figma 插件',
    },
    coverImage: 'images/external/figma-community.png',
    tags: [
      { en: 'Figma', zh: 'Figma' },
      { en: 'Plugin', zh: '插件' },
      { en: 'Prototyping', zh: '原型设计' },
    ],
    company: {
      en: 'Myself',
      zh: '个人项目',
    },
    type: {
      en: 'Figma Plugin',
      zh: 'Figma 插件',
    },
    category: [
      { en: 'Development', zh: '开发' },
    ],
    externalLink: 'https://www.figma.com/community/plugin/1605529378886881954/sequence-prototyper'
  },
{
    id: 'media-infotainment',
    index: '07/',
    title: {
      en: 'Media Infotainment Apps',
      zh: '媒体信息娱乐应用',
    },
    year: '2024',
    description: {
      en: 'a next-generation in-vehicle media and infotainment experience for Volvo cars',
      zh: '为沃尔沃汽车打造的全新一代车载媒体和信息娱乐体验',
    },
    coverImage: 'images/media-infotainment.jpg',
    tags: [
      { en: 'Infotainment', zh: '信息娱乐' },
      { en: 'Media', zh: '媒体' },
      { en: 'Automotive', zh: '汽车' },
    ],
    company: {
      en: 'Volvo',
      zh: '沃尔沃',
    },
    type: {
      en: 'Product Design',
      zh: '产品设计',
    },
    category: [
      { en: 'Product Design', zh: '产品设计' },
    ],
    inactive: true
  },

  {
    id: 'design-token-exporter',
    index: '11/',
    title: {
      en: 'Design Token Exporter',
      zh: 'Design Token Exporter',
    },
    year: '2025',
    description: {
      en: 'export design tokens from Figma to various formats for developers',
      zh: '将 Figma 中的设计令牌导出为多种开发者格式',
    },
    coverImage: 'images/design-token-exporter.jpg',
    tags: [
      { en: 'Figma', zh: 'Figma' },
      { en: 'Plugin', zh: '插件' },
      { en: 'Design Tokens', zh: '设计令牌' },
    ],
    company: {
      en: 'Myself',
      zh: '个人项目',
    },
    type: {
      en: 'Figma Plugin',
      zh: 'Figma 插件',
    },
    category: [
      { en: 'Development', zh: '开发' },
    ],
    inactive: true
  },
  {
    id: 'mobile-design-library',
    index: '08/',
    title: {
      en: 'Mobile Design Library',
      zh: '移动端设计库',
    },
    year: '2022',
    description: {
      en: 'a comprehensive mobile design system and component library',
      zh: '一个全面的移动设计系统和组件库',
    },
    coverImage: 'images/mobile-design-library.jpg',
    tags: [
      { en: 'Design System', zh: '设计系统' },
      { en: 'Mobile', zh: '移动端' },
      { en: 'Components', zh: '组件' },
    ],
    company: {
      en: 'Yuanfudao',
      zh: '猿辅导',
    },
    type: {
      en: 'Design System',
      zh: '设计系统',
    },
    category: [
      { en: 'Product Design', zh: '产品设计' },
    ],
    inactive: true
  },
];
