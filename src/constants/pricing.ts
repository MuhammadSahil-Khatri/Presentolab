export interface PricingTier {
    name: string;
    description: string;
    basePrice: number;
    discountPercent: number;
    features: string[];
    ribbon?: string | null;
    isPopular?: boolean;
    id: string;
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
        description: "",
        tiers: [
            {
                name: "Starter Logo Pack",
                description: "",
                basePrice: 150,
                discountPercent: 50,
                features: [
                    "3 Logo Concepts",
                    "3 Revisions",
                    "Favicon & App Icon",
                    "Color & Black-White Versions",
                    "High-Resolution Files (PNG, JPG)",
                    "Source Files (AI / EPS)",
                    "Fast Turnaround: 6–12 Hours",
                    "Social Media + Web-Ready Logos"
                ],
                ribbon: "Fast Delivery",
                isPopular: false,
                id: "logo-starter"
            },
            {
                name: "Pro Logo Pack",
                description: "",
                basePrice: 300,
                discountPercent: 50,
                features: [
                    "6 Logo Concepts",
                    "6 Revisions",
                    "Free Logo Moodboard",
                    "Favicon & App Icon",
                    "Color & Black-White Versions",
                    "High-Resolution + Source Files",
                    "Fast Turnaround: 12–24 Hours",
                    "Social Media + Web-Ready Logos"
                ],
                ribbon: null,
                isPopular: true,
                id: "logo-pro"
            },
            {
                name: "Premium Logo Pack",
                description: "",
                basePrice: 600,
                discountPercent: 50,
                features: [
                    "8 Unique Logo Concepts",
                    "8 Revisions",
                    "Free Logo Moodboard",
                    "Color & Black-White Versions",
                    "Favicon & App Icon",
                    "Free Stationery Mockups (Business Card / Letterhead)",
                    "High-Resolution + Source Files",
                    "Fast Turnaround: 12–24 Hours",
                    "Social Media + Web-Ready Logos"
                ],
                ribbon: "BEST CHOICE",
                isPopular: false,
                id: "logo-premium"
            }
        ]
    },

    {
        title: "Branding",
        description: "",
        tiers: [
            {
                name: "Starter Brand Pack",
                description: "",
                basePrice: 700,
                discountPercent: 50,
                features: [
                    "1 Stationery Design",
                    "1 Business Card + Letterhead",
                    "1 Banner Design",
                    "1 T-Shirt Design",
                    "1 Menu Card Design",
                    "Free Brand Color Palette",
                    "3 Revisions",
                    "Fast Turnaround: 6–24 Hours",
                    "High-Resolution Files (PNG, JPG)",
                    "Source Files (AI / EPS)",
                ],
                ribbon: null,
                isPopular: false,
                id: "branding-starter"
            },
            {
                name: "Pro Brand Pack",
                description: "",
                basePrice: 1050,
                discountPercent: 50,
                features: [
                    "2 Stationery Designs",
                    "2 Business Card + Letterhead",
                    "2 Banner Designs",
                    "2 T-Shirt Designs",
                    "2 Menu Card Designs",
                    "Free Flyer Design",
                    "Free Email Signature",
                    "Free Brand Color Palette",
                    "4 Revisions",
                    "Fast Turnaround: 12–24 Hours",
                    "High-Resolution Files (PNG, JPG)",
                    "Source Files (AI / EPS)",
                ],
                ribbon: "RECOMMENDED",
                isPopular: true,
                id: "branding-pro"
            },
            {
                name: "Premium Brand Pack",
                description: "",
                basePrice: 1998,
                discountPercent: 50,
                features: [
                    "4 Stationery Designs",
                    "3 Business Card + Letterhead",
                    "3 Banner Designs",
                    "3 T-Shirt Design Concepts",
                    "3 Menu Card Designs",
                    "Free Flyer Designs",
                    "Free Email Signature",
                    "Free Brand Color Palette",
                    "6 Revisions",
                    "Fast Turnaround: 24–48 Hours",
                    "High-Resolution Files (PNG, JPG)",
                    "Source Files (AI / EPS)",
                ],
                ribbon: null,
                isPopular: false,
                id: "branding-premium"
            }
        ]
    },

    {
        title: "Presentation Design",
        description: "",
        tiers: [
            {
                name: "Starter Presentation Pack",
                description: "",
                basePrice: 1600,
                discountPercent: 50,
                features: [
                    "15–20 Custom-Designed Slides",
                    "Visual Storytelling",
                    "Free Custom Infographics",
                    "Data-Driven Charts & Graphs",
                    "3 Revisions",
                    "Print & Screen Optimized",
                    "Fast Turnaround: 12–24 Hours",
                    "Fully Editable Source File",
                ],
                ribbon: null,
                id: "presentation-starter"
            },
            {
                name: "Pro Presentation Pack",
                description: "",
                basePrice: 3000,
                discountPercent: 50,
                features: [
                    "15–20 Custom-Designed Slides",
                    "Advance Visual Storytelling",
                    "Free Custom Infographics",
                    "Data-Driven Charts & Graphs",
                    "Animation and Transition",
                    "6 Revisions",
                    "Print & Screen Optimized",
                    "Fast Turnaround: 24–48 Hours",
                    "Fully Editable Source File",
                ],
                ribbon: "BEST CHOICE",
                isPopular: true,
                id: "presentation-pro"
            },
            {
                name: "Premium Deck Pack",
                description: "",
                basePrice: 5000,
                discountPercent: 50,
                features: [
                    "15–20 Custom-Designed Slides",
                    "Free 9–11 Teaser Slides",
                    "Free Onepager Design",
                    "Free Custom Infographics",
                    "Strategic Visual Storytelling",
                    "Data-Driven Charts & Graphs",
                    "Animations & Transitions",
                    "8 Revisions",
                    "Print & Screen Optimized",
                    "Turnaround: 2-3 days",
                    "Fully Editable Source File",
                ],
                ribbon: "RECOMMENDED",
                isPopular: true,
                id: "presentation-premium"
            },
            {
                name: "Executive Deck Pack",
                description: "",
                basePrice: 7000,
                discountPercent: 50,
                features: [
                    "15–20 Custom-Designed Slides",
                    "Free 9–11 Slide Teaser Deck",
                    "Free One-Pager Design",
                    "Free Custom Infographics",
                    "Strategic Visual Storytelling",
                    "Copywriting",
                    "Data-Driven Charts & Graphs",
                    "Free Business Proposal Design",
                    "9 Revisions",
                    "Animations & Transitions",
                    "Print & Screen Optimized",
                    "Turnaround: 2-3 days",
                    "Fully Editable Source Files",
                ],
                ribbon: null,
                isPopular: false,
                id: "presentation-executive"
            }
        ]
    },


    // {
    //     title: "Web Design & Development",
    //     description: "",
    //     tiers: [
    //         {
    //             name: "Landing Page UI",
    //             description: "",
    //             basePrice: 600,
    //             discountPercent: 15,
    //             features: [
    //                 "Modern UI Design",
    //                 "UX Wireframe",
    //                 "Mobile Responsive Layout",
    //                 "Figma Source File"
    //             ],
    //             ribbon: null
    //         },
    //         {
    //             name: "Business Website UI",
    //             description: "",
    //             basePrice: 1200,
    //             discountPercent: 20,
    //             features: [
    //                 "Up to 5 Pages UI",
    //                 "UX Flow & Structure",
    //                 "Design System",
    //                 "Developer Handoff"
    //             ],
    //             ribbon: "MOST POPULAR",
    //             isPopular: true
    //         },
    //         {
    //             name: "App UI/UX Design",
    //             description: "",
    //             basePrice: 2500,
    //             discountPercent: 10,
    //             features: [
    //                 "User Research",
    //                 "Wireframes & Prototypes",
    //                 "Design System",
    //                 "iOS & Android Screens"
    //             ],
    //             ribbon: null
    //         }
    //     ]
    // },

    // {
    //     title: "Social Media Marketing",
    //     description: "",
    //     tiers: [
    //         {
    //             name: "Basic Document",
    //             description: "",
    //             basePrice: 200,
    //             discountPercent: 30,
    //             features: [
    //                 "Up to 10 Pages",
    //                 "Consistent Layout",
    //                 "Typography Styling",
    //                 "Editable Source File"
    //             ],
    //             ribbon: null
    //         },
    //         {
    //             name: "Professional Docs",
    //             description: "",
    //             basePrice: 600,
    //             discountPercent: 25,
    //             features: [
    //                 "Up to 30 Pages",
    //                 "Custom Layout Design",
    //                 "Icons & Visual Elements",
    //                 "Brand Consistency"
    //             ],
    //             ribbon: "BEST ",
    //             isPopular: true
    //         },
    //         {
    //             name: "Corporate Documentation",
    //             description: "",
    //             basePrice: 1200,
    //             discountPercent: 20,
    //             features: [
    //                 "Unlimited Pages",
    //                 "Advanced Visual Hierarchy",
    //                 "Charts & Infographics",
    //                 "Print & Digital Ready"
    //             ],
    //             ribbon: null
    //         }
    //     ]
    // }
];
