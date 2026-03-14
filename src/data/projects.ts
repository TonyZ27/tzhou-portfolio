import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'ai-voice-assistant',
    index: '01/',
    title: 'AI Voice Assistant',
    year: '2025',
    description: 'design the next-generation in-car AI voice assistant that delivers intelligent, safe driving experiences for Volvo',
    coverImage: '/public/images/ai-voice/cover.png',
    tags: [ 'ARTIFICIAL INTELLIGENCE', 'CONVERSATION DESIGN', 'AUTOMOTIVE'],
    company: 'Volvo',
    type: 'HMI Design',
    category: ['Product Design'],
    featured: true
  },
  {
    id: 'hmi-design-system',
    index: '02/',
    title: 'HMI Design System',
    year: '2025',
    description: 'build a unified design system that addresses fragmented in-vehicle experiences for volvo',
    coverImage: '/public/images/hmi-design-system/cover.png',
    tags: ['Design System', 'HMI', 'Automotive'],
    company: 'Volvo',
    type: 'Design System',
    category: ['Product Design'],
    featured: true
  },
  {
    id: 'my-portfolio',
    index: '03/',
    title: 'My Portfolio',
    year: '2026',
    description: 'yes, the portfolio you are viewing was designed and developed entirely from scratch using Claude Code',
    coverImage: '/public/images/portfolio.jpg',
    tags: ['Website', 'Portfolio', 'Design'],
    company: 'Myself',
    type: 'Custom Website',
    category: ['Product Design', 'Development'],
    featured: true
  },
  {
    id: 'find-in-figma',
    index: '05/',
    title: 'Find in Figma',
    year: '2024',
    description: 'a Figma plugin to quickly find and navigate to specific layers and components',
    coverImage: '/public/images/find-in-figma.jpg',
    tags: ['Figma', 'Plugin', 'Tool'],
    company: 'Myself',
    type: 'Figma Plugin',
    category: ['Development']
  },
  {
    id: 'media-infotainment',
    index: '06/',
    title: 'Media Infotainment Apps',
    year: '2024',
    description: 'a next-generation in-vehicle media and infotainment experience for Volvo cars',
    coverImage: '/public/images/media-infotainment.jpg',
    tags: ['Infotainment', 'Media', 'Automotive'],
    company: 'Volvo',
    type: 'Product Design',
    category: ['Product Design']
  },
  {
    id: 'preschool-learning-app',
    index: '04/',
    title: 'Preschool Learning App',
    year: '2022',
    description: 'an educational mobile application for preschool children',
    coverImage: '/public/images/preschool-learning.jpg',
    tags: ['Education', 'Mobile', 'Children'],
    company: 'Yuanfudao',
    type: 'Mobile Design',
    category: ['Product Design'],
    featured: true
  },
  {
    id: 'marksnap',
    index: '07/',
    title: 'Marksnap',
    year: '2023',
    description: 'a browser plugin for capturing and annotating web content',
    coverImage: '/public/images/marksnap.jpg',
    tags: ['Browser Extension', 'Tool', 'Productivity'],
    company: 'Myself',
    type: 'Website Plugin',
    category: ['Development']
  },
  {
    id: 'mobile-design-library',
    index: '08/',
    title: 'Mobile Design Library',
    year: '2022',
    description: 'a comprehensive mobile design system and component library',
    coverImage: '/public/images/mobile-design-library.jpg',
    tags: ['Design System', 'Mobile', 'Components'],
    company: 'Yuanfudao',
    type: 'Design System',
    category: ['Product Design']
  },
  
  {
    id: 'font-inspector',
    index: '09/',
    title: 'Font Inspector',
    year: '2023',
    description: 'a browser plugin for inspecting and identifying fonts on any webpage',
    coverImage: '/public/images/font-inspector.jpg',
    tags: ['Browser Extension', 'Tool', 'Typography'],
    company: 'Myself',
    type: 'Website Plugin',
    category: ['Development']
  },
  {
    id: 'sequence-prototyper',
    index: '10/',
    title: 'Sequence Prototyper',
    year: '2024',
    description: 'a Figma plugin for creating sequence diagrams and flow prototypes',
    coverImage: '/public/images/sequence-prototyper.jpg',
    tags: ['Figma', 'Plugin', 'Prototyping'],
    company: 'Myself',
    type: 'Figma Plugin',
    category: ['Development']
  }
];
