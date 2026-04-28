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
    text: "Presentolab turned a complex investor pitch into a clear, elegant, and compelling deck. It quickly transformed feedback into high-impact visuals, making tight deadlines easy to meet. For structured, professional, and visually strong presentations, Presentolab is the tool you need.",
    author: "Thomas P. Lah",
    role: "Founder, STI Inc",
    image: "/Testimonial_Images/thomas.jpg"
  },
  {
    id: 2,
    rating: "5.0",
    text: "I had the pleasure of using Presentolab, and it’s an outstanding platform for design. It turned ideas into high-quality visuals with ease, handled feedback quickly, and made tight deadlines simple to meet. I highly recommend it for any project needing professional, reliable design solutions.",
    author: "Simon Dijkstra",
    role: "Director, GapYear.world",
    image: "/Testimonial_Images/simon.jpg"
  },
  {
    id: 3,
    rating: "5.0",
    text: "I used Presentolab for a high-priority project with a tight deadline, and it delivered perfectly. The platform turned rough concepts into clean, professional visuals quickly and easily. I’d definitely use Presentolab again.",
    author: "Victor Thomas",
    role: "Director, Hearst",
    image: "/Testimonial_Images/victor.jpg"
  },
  {
    id: 4,
    rating: "4.9",
    text: "PresentoLab exceeded our expectations in every way. The speed of delivery, combined with the premium quality of the designs, made this one of the best agency experiences we've ever had. Our sales deck is now our most powerful asset.",
    author: "Emily Chen",
    role: "Marketing Director, Solaris",
    image: "/Testimonial_Images/emily.jpg"
  },
  {
    id: 5,
    rating: "4.9",
    text: "Truly exceptional work. They managed to simplify our complex technical infrastructure into a visually stunning and easy-to-understand presentation. The feedback from our board meeting was overwhelmingly positive.",
    author: "Marcus Johnson",
    role: "CTO, NexusTech",
    image: "/Testimonial_Images/johnson.jpg"
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

export const PRIVACY_POLICY = [
  {
    title: "1. Information We Collect",
    content: "We collect information to provide better services to our clients. This includes:\n* Personal Information: Name, email address, phone number, and company website provided through our contact forms.\n* SMS Data: Phone numbers and consent records provided specifically for text-based communications."
  },
  {
    title: "2. How We Use Your Information",
    content: "Your information is used to:\n* Deliver and manage our design and strategy services\n* Respond to your inquiries and provide support\n* Send service-related SMS updates (if you have opted in), such as project milestones, consultation follow-ups, and onboarding details"
  },
  {
    title: "3. Data Retention",
    content: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, or resolve disputes."
  },
  {
    title: "4. Information Sharing",
    content: "We do not sell, rent, or trade your personal information. Your data is used strictly for business operations.\n* Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.\n* Information sharing with subcontractors in support services, such as customer service, is permitted.\n* All other use case categories excluding text messaging originator opt-in data and consent will not be shared with any third parties."
  },
  {
    title: "5. SMS Consent & Opt-Out",
    content: "SMS consent is obtained through a clear, non-mandatory checkbox on our forms. Providing your phone number alone does not constitute consent.\n* You can opt out of SMS communications at any time by replying STOP to any message.\n* For support, reply HELP or contact us at info@presentolab.com.\n* Consent to receive SMS is not a condition of any purchase."
  },
  {
    title: "6. Data Security",
    content: "We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure."
  },
  {
    title: "7. Your Rights",
    content: "You have the right to access, correct, or delete your personal data. Contact us to exercise these rights."
  },
  {
    title: "8. Contact Information",
    content: "For questions regarding this policy, contact us at:\nPresentoLab\n+1 281 256 5434\ninfo@presentolab.com\n5900 Balcones Drive #15684, Austin, TX 78731, United States"
  }
];

export const TERMS_AND_CONDITIONS = [
  {
    title: "1. Use of Services",
    content: "By using PresentoLab’s services, you agree to use them only for lawful purposes. You may not misuse, disrupt, or attempt to interfere with the functionality of our website, systems, or services.\nWe reserve the right to refuse service to anyone who violates these terms."
  },
  {
    title: "2. Services Overview",
    content: "PresentoLab provides design and presentation-related services including, but not limited to, pitch decks, branding assets, and visual communication materials.\nAll deliverables are provided based on agreed project scope and client requirements."
  },
  {
    title: "3. Payments",
    content: "All payments must be completed as agreed upon before or during the project timeline unless otherwise stated in writing.\nFailure to make timely payments may result in suspension or termination of services."
  },
  {
    title: "4. Intellectual Property",
    content: "All custom designs and deliverables remain the property of PresentoLab until full payment is received.\nUpon full payment, ownership rights for final approved deliverables are transferred to the client, unless otherwise agreed in writing.\nWe reserve the right to showcase completed work in our portfolio unless explicitly restricted by a written agreement."
  },
  {
    title: "5. Revisions",
    content: "Revisions are provided based on the agreed project scope. Any additional revisions outside the agreed scope may incur additional charges."
  },
  {
    title: "6. Limitation of Liability",
    content: "PresentoLab is not responsible for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.\nWe do not guarantee specific business outcomes, as results may vary based on multiple external factors."
  },
  {
    title: "7. Third-Party Services",
    content: "We may use third-party tools or platforms to deliver certain aspects of our services. We are not responsible for issues arising from third-party services beyond our control."
  },
  {
    title: "8. SMS Communication Terms",
    content: "By opting into SMS communications, you agree to receive text messages from PresentoLab regarding project updates, consultation follow-ups, and service notifications.\n* Message frequency may vary based on your project status.\n* Standard message and data rates may apply.\n* You can opt out at any time by replying STOP to any message.\n* For support, reply HELP or contact us at info@presentolab.com.\n* Carriers are not liable for delayed or undelivered messages.\n* Consent is not a condition of purchase."
  },
  {
    title: "9. Termination",
    content: "We reserve the right to suspend or terminate access to our services at any time if we believe a user has violated these Terms & Conditions."
  },
  {
    title: "10. Changes to Terms",
    content: "We may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated effective date."
  },
  {
    title: "11. Contact Information",
    content: "If you have any questions about these Terms & Conditions, you can contact us at:\nPresentoLab\n +1 281 256 5434\n info@presentolab.com\n 5900 Balcones Drive #15684, Austin, TX 78731, United States"
  }
];

