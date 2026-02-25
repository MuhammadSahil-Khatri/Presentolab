import { Service, ProcessStep } from './types';
export const SERVICES: Service[] = [
  {
    title: "Presentation Design",
    description: "High-impact presentations designed to clearly communicate your message, engage your audience, and drive confident decisions.",
    categories: [
      "Investor Pitch Decks",
      "Film Pitch Decks",
      "FinTech Pitch Decks",
      "Gaming Presentations",
      "Medical Pitch Decks",
      "Real Estate Presentations",
      "Web3 Presentations",
      "Sales & Marketing Decks",
      "Company Profile Presentations",
      "Product Launch Presentations",
      "Training & Workshop Presentations",
      "Webinar & Virtual Event Slides",
      "Corporate Presentations",
      "Fundraising Decks",
      "Canva",
      "PowerPoint",
      "Google Slides",
      "Branded Slide Templates",
      "Master Template Design"
    ]
  },
  {
    title: "Logo Design",
    description: "Strategic and memorable logo designs crafted to build strong brand recognition and create a lasting first impression across all platforms.",
    categories: [
      "Wordmark (Logotype)",
      "Lettermark (Monogram)",
      "Pictorial Mark (Brandmark)",
      "Favicon & App Icon",
      "Abstract Logo Mark",
      "Mascot Logo",
      "Combination Mark",
      "Emblem / Badge Logo",
    ]
  },
  {
    title: "Brand Design",
    description: "Strategic brand identity systems that define your positioning, build trust, and ensure consistency across every visual and communication touchpoint.",
    categories: [
      "Brand Strategy",
      "Brand Naming",
      "Brand Architecture",
      "Visual Identity Design",
      "Typography",
      "Color Palette",
      "Imagery & Photography Direction",
      "Brand Guidelines",
      "Brand Book",
      "Stationery Design",
      "Marketing Collateral Design",
      "Digital Brand Assets"
    ]
  },
  {
    title: "Web Design & Development",
    description: "End-to-end web and app solutions designed to provide intuitive, high-performing digital experiences that help your business grow.",
    categories: [
      "Website Design",
      "Mobile App Design",
      "UI/UX Design",
      "Figma Design",
      "E-commerce Website",
      "CMS-Based Websites",
      "React/Next.js Development",
      "Wordpress Development",
      "Webflow Development",
      "Shopify Development",
      "Custom Software Development",
    ]
  },
  {
    title: "Social Media Marketing",
    description: "Comprehensive social media solutions to grow your brand, engage your audience, and drive measurable business results through creative content and targeted advertising.",
    categories: [
      "Social Media Management",
      "Account Creation",
      "Account Optimization",
      "Analytics & Reporting",
      "Content Creation",
      "Story & Reel Creation",
      "Campaign Management ",
      "Campaign Optimization",
      "Meta Ads",
      "Google Ads",
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
    text: "I used Presentolab for a high-priority project with a tight deadline, and it delivered perfectly. The platform turned rough concepts into clean, professional visuals quickly and easily. I’d definitely use Presentolab again.",
    author: "Victor Thomas",
    role: "Director, Hearst",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEXJHHHXPS8Yg/profile-displayphoto-scale_200_200/B4EZj22deoGYAc-/0/1756488128832?e=1773878400&v=beta&t=D1EYibnL4eU5Unrwef_BLLB2lL5ka7Wq1ASh93lgSHM"
  },
  {
    id: 2,
    rating: "5.0",
    text: "Presentolab turned a complex investor pitch into a clear, elegant, and compelling deck. It quickly transformed feedback into high-impact visuals, making tight deadlines easy to meet. For structured, professional, and visually strong presentations, Presentolab is the tool you need.",
    author: "Thomas P. Lah",
    role: "Founder, STI Inc",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFch6HnMXCu-g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686889318370?e=1773878400&v=beta&t=fPQh42-KR4B9nDyTHKVhv47gkqJwwjhomMuiICX_mQg"
  },
  {
    id: 3,
    rating: "5.0",
    text: "I had the pleasure of using Presentolab, and it’s an outstanding platform for design. It turned ideas into high-quality visuals with ease, handled feedback quickly, and made tight deadlines simple to meet. I highly recommend it for any project needing professional, reliable design solutions.",
    author: "Simon Dijkstra",
    role: "Director, GapYear.world",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGaAVWM7xVIMw/profile-displayphoto-scale_400_400/B4EZf5QPrJHgAg-/0/1752233475808?e=1773878400&v=beta&t=xN3-iGuYWXGpZIpyfngwN9EEY1ViR-hK294R3femJwM"
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
