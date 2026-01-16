
import { Service, PortfolioItem, ProcessStep } from './types';

export const SERVICES: Service[] = [
  { 
    title: "Branding", 
    description: "Distinctive, memorable brand experiences that communicate your values and create emotional connections with your customers.",
    categories: ["Offline Branding", "Logo design", "Rebranding", "Typography", "Guidelines", "Visual identity", "Digital brand presence", "Color systems"]
  },
  { 
    title: "Web & App Design", 
    description: "Modern, responsive, and user-friendly websites and apps designed to engage users and drive conversions.",
    categories: ["Web & App UI", "iOS & Android", "Cross-Platform Design", "Animations & Microinteractions", "Prototyping & User Flows", "Design Systems & UI Kits"]
  },
  { 
    title: "Development", 
    description: "Robust, scalable, and high-performance development solutions tailored to your specific technical requirements.",
    categories: ["Frontend Dev", "Backend Systems", "CMS Integration", "E-commerce", "Performance Optimization", "API Development"]
  },
  { 
    title: "3D", 
    description: "High-quality 3D visuals and animations that bring your products and concepts to life with stunning realism.",
    categories: ["Product Rendering", "3D Animation", "Architectural Visualization", "Asset Creation", "Motion Graphics"]
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'timbr', category: 'Brand Identity', imageUrl: 'https://picsum.photos/seed/timbr/704/504' },
  { id: '2', title: 'Harvest Innovations', category: 'Pitch Deck', imageUrl: 'https://picsum.photos/seed/harvest/704/504' },
  { id: '3', title: 'MarsFossil AI', category: 'Pitch Deck', imageUrl: 'https://picsum.photos/seed/mars/704/504' },
  { id: '4', title: 'Nexus Partners', category: 'UI/UX Design', imageUrl: 'https://picsum.photos/seed/nexus/704/504' },
  { id: '5', title: 'Zolia Energy', category: 'Presentation', imageUrl: 'https://picsum.photos/seed/zolia/704/504' },
  { id: '6', title: 'Webflow X', category: 'UI/UX Design', imageUrl: 'https://picsum.photos/seed/webflow/704/504' },
  { id: '7', title: 'Kiwii Finance', category: 'Branding', imageUrl: 'https://picsum.photos/seed/kiwii/704/504' },
  { id: '8', title: 'Revealty Real Estate', category: 'Pitch Deck', imageUrl: 'https://picsum.photos/seed/revealty/704/504' },
  { id: '9', title: 'Hormone Club', category: 'UI/UX Design', imageUrl: 'https://picsum.photos/seed/hormone/704/504' },
  { id: '10', title: 'Kefron Tech', category: 'Documentation', imageUrl: 'https://picsum.photos/seed/kefron/704/504' },
  { id: '11', title: 'AquaSonic', category: 'Brand Strategy', imageUrl: 'https://picsum.photos/seed/aqua/704/504' },
  { id: '12', title: 'Myfo Analytics', category: 'Dashboard', imageUrl: 'https://picsum.photos/seed/myfo/704/504' },
];

export const PROCESS: ProcessStep[] = [
  { title: "Discover", description: "In-depth discussion on vision, goals, and core message." },
  { title: "Research", description: "Comprehensive industry analysis and competitor benchmarking." },
  { title: "Crafting", description: "Developing the story flow and initial visual concepts." },
  { title: "Discerning", description: "Refinement phase through collaborative feedback loops." },
  { title: "Your Story is Ready", description: "Delivery of the final polished and impactful visual assets." },
];

export const CLIENT_LOGOS = [
  "seesh", "ARK7", "Financio", "LADEV", "Revelry", "SoundMint", "Zolia", "TikTok", "Thrift", "LEX"
];
