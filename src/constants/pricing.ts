export interface PricingTier {
    name: string;
    description: string;
    basePrice: number;
    discountPercent: number;
    features: string[];
    ribbon?: string | null;
    isPopular?: boolean;
}

export interface PricingCategory {
    title: string;
    description: string;
    tiers: PricingTier[];
}

export const calculateFinalPrice = (basePrice: number, discountPercent: number) => {
    return Math.round(basePrice - (basePrice * discountPercent / 100));
};

export const PRICING_DATA: PricingCategory[] = [
    {
        title: "Logo Design",
        description: "Build a memorable brand foundation with professional logo design packages.",
        tiers: [
            {
                name: "Logo Basic Package",
                description: "Perfect for startups and small businesses.",
                basePrice: 150,
                discountPercent: 50,
                features: [
                    "3 Logo Concepts",
                    "3 Revisions",
                    "Color & Grayscale Versions",
                    "High-Resolution Files",
                    "6–24 Hours Turnaround"
                ],
                ribbon: null,
                isPopular: false
            },
            {
                name: "Logo Pro Package",
                description: "Best for growing brands needing flexibility.",
                basePrice: 300,
                discountPercent: 50,
                features: [
                    "6 Logo Concepts",
                    "Unlimited Revisions",
                    "Icon & Symbol Design",
                    "All File Formats (AI, EPS, PNG, JPG, PDF)",
                    "Brand Color Guidance"
                ],
                ribbon: "POPULAR",
                isPopular: true
            },
            {
                name: "Business Plus Package",
                description: "Complete logo solution with ownership rights.",
                basePrice: 598,
                discountPercent: 50,
                features: [
                    "Multiple Logo Variations",
                    "Unlimited Revisions",
                    "Full Source Files",
                    "Brand Usage Guidelines",
                    "100% Ownership Rights"
                ],
                ribbon: "BEST CHOICE",
                isPopular: false
            }
        ]
    },

    {
        title: "Branding",
        description: "Comprehensive brand identity systems that tell your story consistently.",
        tiers: [
            {
                name: "Starter Brand",
                description: "Essential brand identity for new businesses.",
                basePrice: 400,
                discountPercent: 20,
                features: [
                    "Logo Refinement",
                    "Color Palette",
                    "Typography System",
                    "Basic Brand Kit"
                ],
                ribbon: null,
                isPopular: false
            },
            {
                name: "Premium Brand",
                description: "Strategic branding with clear visual direction.",
                basePrice: 800,
                discountPercent: 25,
                features: [
                    "Logo Suite",
                    "Brand Guidelines",
                    "Stationery Design",
                    "Social Media Branding"
                ],
                ribbon: "RECOMMENDED",
                isPopular: true
            },
            {
                name: "Elite Identity",
                description: "Complete corporate identity system.",
                basePrice: 1500,
                discountPercent: 30,
                features: [
                    "Everything in Premium",
                    "Brand Strategy Workshop",
                    "Visual Language System",
                    "Digital & Print Assets"
                ],
                ribbon: null,
                isPopular: false
            }
        ]
    },

    {
        title: "Web/App Design",
        description: "User-focused UI/UX designs built for clarity and conversion.",
        tiers: [
            {
                name: "Landing Page UI",
                description: "Single-page design focused on conversions.",
                basePrice: 600,
                discountPercent: 15,
                features: [
                    "Modern UI Design",
                    "UX Wireframe",
                    "Mobile Responsive Layout",
                    "Figma Source File"
                ],
                ribbon: null
            },
            {
                name: "Business Website UI",
                description: "Multi-page professional web design.",
                basePrice: 1200,
                discountPercent: 20,
                features: [
                    "Up to 5 Pages UI",
                    "UX Flow & Structure",
                    "Design System",
                    "Developer Handoff"
                ],
                ribbon: "MOST POPULAR",
                isPopular: true
            },
            {
                name: "App UI/UX Design",
                description: "Complete app interface with user flows.",
                basePrice: 2500,
                discountPercent: 10,
                features: [
                    "User Research",
                    "Wireframes & Prototypes",
                    "Design System",
                    "iOS & Android Screens"
                ],
                ribbon: null
            }
        ]
    },

    {
        title: "Presentation Design",
        description: "Visually compelling presentations that communicate clearly and persuade.",
        tiers: [
            {
                name: "Basic Presentation",
                description: "Clean and professional slide design.",
                basePrice: 300,
                discountPercent: 20,
                features: [
                    "Up to 10 Slides",
                    "Clean Layouts",
                    "Brand Colors",
                    "Editable Source File"
                ],
                ribbon: null
            },
            {
                name: "Pitch Deck Pro",
                description: "Investor-ready pitch deck with strong storytelling.",
                basePrice: 800,
                discountPercent: 25,
                features: [
                    "Up to 20 Slides",
                    "Storytelling Structure",
                    "Custom Visuals & Charts",
                    "Presentation Flow Optimization"
                ],
                ribbon: "BEST VALUE",
                isPopular: true
            },
            {
                name: "Executive Deck",
                description: "High-impact decks for leadership & enterprise use.",
                basePrice: 1500,
                discountPercent: 20,
                features: [
                    "Unlimited Slides",
                    "Data Visualization",
                    "Advanced Animations",
                    "On-brand Visual System"
                ],
                ribbon: null
            }
        ]
    },



    {
        title: "Web/App Development",
        description: "Custom development solutions built for performance and scalability.",
        tiers: [
            {
                name: "Starter Website",
                description: "Simple, fast, and functional website.",
                basePrice: 700,
                discountPercent: 15,
                features: [
                    "Up to 5 Pages",
                    "Responsive Development",
                    "Basic SEO Setup",
                    "Contact Form Integration"
                ],
                ribbon: null
            },
            {
                name: "Business Web App",
                description: "Dynamic website with backend functionality.",
                basePrice: 1800,
                discountPercent: 20,
                features: [
                    "CMS Integration",
                    "Custom Components",
                    "Performance Optimization",
                    "1 Month Support"
                ],
                ribbon: "RECOMMENDED",
                isPopular: true
            },
            {
                name: "Enterprise Application",
                description: "Scalable web or mobile application.",
                basePrice: 4000,
                discountPercent: 15,
                features: [
                    "Custom Architecture",
                    "API Integrations",
                    "Security Best Practices",
                    "Ongoing Maintenance"
                ],
                ribbon: null
            }
        ]
    },

    {
        title: "Documentation Design",
        description: "Professionally designed documents that are clear, structured, and branded.",
        tiers: [
            {
                name: "Basic Document",
                description: "Clean formatting for simple documents.",
                basePrice: 200,
                discountPercent: 30,
                features: [
                    "Up to 10 Pages",
                    "Consistent Layout",
                    "Typography Styling",
                    "Editable Source File"
                ],
                ribbon: null
            },
            {
                name: "Professional Docs",
                description: "Well-structured business documentation.",
                basePrice: 600,
                discountPercent: 25,
                features: [
                    "Up to 30 Pages",
                    "Custom Layout Design",
                    "Icons & Visual Elements",
                    "Brand Consistency"
                ],
                ribbon: "BEST CHOICE",
                isPopular: true
            },
            {
                name: "Corporate Documentation",
                description: "High-end reports and proposals.",
                basePrice: 1200,
                discountPercent: 20,
                features: [
                    "Unlimited Pages",
                    "Advanced Visual Hierarchy",
                    "Charts & Infographics",
                    "Print & Digital Ready"
                ],
                ribbon: null
            }
        ]
    }
];
