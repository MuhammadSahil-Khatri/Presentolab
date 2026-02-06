import { Service, ProcessStep } from './types';
export const SERVICES: Service[] = [
  {
    title: "Pitch Deck & Presentation Design",
    description: "High-impact pitch decks and presentations designed to clearly communicate your message, persuade stakeholders, and drive decisions.",
    categories: [
      "Startup Pitch Decks",
      "Investor Presentations",
      "Sales Decks",
      "Corporate Presentations",
      "Fundraising Decks",
      "Business Storytelling",
      "Data Visualization",
      "Branded Slide Templates"
    ]
  },
  {
    title: "Web & App Design",
    description: "User-focused UI/UX design for websites and applications that delivers intuitive experiences and measurable results.",
    categories: [
      "Website UI Design",
      "Mobile App UI",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "User Journeys",
      "Design Systems",
      "Microinteractions"
    ]
  },
  {
    title: "Brand Identity",
    description: "Strategic brand identities that define your positioning, build trust, and ensure consistency across all visual touchpoints.",
    categories: [
      "Logo Design",
      "Brand Strategy",
      "Rebranding",
      "Typography Systems",
      "Color Palettes",
      "Brand Guidelines",
      "Visual Identity",
      "Digital Brand Assets"
    ]
  },
  {
    title: "Documentation Design",
    description: "Clear, structured, and visually polished documentation that transforms complex information into easy-to-understand content.",
    categories: [
      "Company Documents",
      "Technical Documentation",
      "Process Documentation",
      "Reports & Whitepapers",
      "Training Manuals",
      "Internal Documents",
      "Branded Documentation"
    ]
  },
  {
    title: "Web & App Development",
    description: "Reliable and scalable web and app development solutions built to support performance, usability, and business growth.",
    categories: [
      "Frontend Development",
      "Backend Development",
      "CMS Integration",
      "E-commerce Development",
      "Web Applications",
      "Performance Optimization",
      "API Integration"
    ]
  }
];


import step1 from './assets/Process_Icons/step-1.svg';
import step2 from './assets/Process_Icons/step-2.svg';
import step3 from './assets/Process_Icons/step-3.svg';
import step4 from './assets/Process_Icons/step-4.svg';
import step5 from './assets/Process_Icons/step-5.svg';

export const PROCESS: ProcessStep[] = [
  {
    title: "Discovering your vision",
    description: "We begin with a detailed discussion to understand your goals, audience, challenges, and expectations. This helps us define the project scope clearly before moving forward.",
    icon: step1
  },
  {
    title: "Research that builds Direction",
    description: "We research your industry, competitors, and audience to propose the best solutions, structure, and enhancements that align perfectly with your objectives.",
    icon: step2
  },
  {
    title: "Crafting your Story & Structure",
    description: "We develop the first version of your presentation or pitch deck with clear content flow, visual structure, and your core story, tailored to meet your needs.",
    icon: step3
  },
  {
    title: "Design Refinement Through Feedback",
    description: "You review the draft, share your feedback, and we refine the content and design until it aligns perfectly with your vision and goals.",
    icon: step4
  },
  {
    title: "Your Story is ready to present",
    description: "We prepare the final, polished version of your deck and deliver all required files, fully ready to present, share, or pitch to investors and stakeholders.",
    icon: step5
  },
];

export const CLIENT_LOGOS = [
  '/Partners_Logo/ark.png',
  '/Partners_Logo/finance.png',
  '/Partners_Logo/ladev.png',
  '/Partners_Logo/real_estate.png',
  '/Partners_Logo/sesh.png',
  '/Partners_Logo/soundmint.png',
  '/Partners_Logo/thriftflex.png',
  '/Partners_Logo/tiktok.png',
  '/Partners_Logo/zolta.png'
];

export const TESTIMONIALS = [
  {
    id: 1,
    rating: "5.0",
    text: "The team at PresentoLab didn't just design slides; they understood our vision and translated it into a narrative that investors could finally grasp. Their excellence in communication and attention to detail gave our brand the credibility it needed to secure our seed round.",
    author: "Sarah Jenkins",
    role: "Product Lead, Webflow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    rating: "5.0",
    text: "We gained immense clarity on our core value proposition thanks to their significant knowledge in UI/UX and visual storytelling. The vendor has provided valuable feedback by always being readily available. They transformed our communication challenges into a massive growth driver.",
    author: "Atif Hussain",
    role: "Co-Founder at Kinetic",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    rating: "5.0",
    text: "Working with them was a turning point for our brand identity. The client is proud of Halo Lab's work, which their customers have praised. They lead a communicative process that ensures the final result doesn't just look good, but delivers real-world success.",
    author: "Dmitri Lubaschevski",
    role: "CEO, DATA Services",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 4,
    rating: "5.0",
    text: "PresentoLab exceeded our expectations in every way. The speed of delivery, combined with the premium quality of the designs, made this one of the best agency experiences we've ever had. Our sales deck is now our most powerful asset.",
    author: "Emily Chen",
    role: "Marketing Director, Solaris",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 5,
    rating: "5.0",
    text: "Truly exceptional work. They managed to simplify our complex technical infrastructure into a visually stunning and easy-to-understand presentation. The feedback from our board meeting was overwhelmingly positive.",
    author: "Marcus Johnson",
    role: "CTO, NexusTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Khizar",
    role: "Creative Lead",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Khubaib",
    role: "Strategist",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Hasan",
    role: "UI Expert",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sahil",
    role: "Narrative Designer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  }
];
