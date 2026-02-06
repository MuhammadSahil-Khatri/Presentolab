export interface PortfolioItem {
    id: string;
    title: string;
    imageUrl: string;
}

export interface PortfolioCategory {
    title: string;
    description: string;
    items: PortfolioItem[];
}

export const PORTFOLIO_DATA: PortfolioCategory[] = [
    {
        title: "Logo Design",
        description: "Minimalist and impactful logos that define your brand at first glance.",
        items: []
    },
    {
        title: "Branding",
        description: "Complete visual identities built for consistency and strategic impact.",
        items: [
            { id: '1', title: 'Acceronix Identity', imageUrl: '/portfolio/branding/acceronix.jpg' },
            { id: '2', title: 'Applet Branding', imageUrl: '/portfolio/branding/applet.jpg' },
            { id: '3', title: 'Farms Agri-Brand', imageUrl: '/portfolio/branding/farms.jpg' },
            { id: '4', title: 'MCG Restaurant', imageUrl: '/portfolio/branding/mcg.jpg' },
            { id: '5', title: 'Voltamix Science', imageUrl: '/portfolio/branding/voltamix.jpg' },
            { id: '6', title: '0Minute', imageUrl: '/portfolio/branding/0minute.JPG' },
            { id: '7', title: 'Midnite', imageUrl: '/portfolio/branding/midnite.JPG' },
            { id: '8', title: 'Skyward', imageUrl: '/portfolio/branding/skyward.JPG' },
            { id: '9', title: 'Soundcloud', imageUrl: '/portfolio/branding/soundcloud.JPG' },
            { id: '10', title: 'Tappio', imageUrl: '/portfolio/branding/tappio.JPG' },
            { id: '11', title: 'Ugicify', imageUrl: '/portfolio/branding/ugicify.JPG' },
            { id: '12', title: 'Vira', imageUrl: '/portfolio/branding/vira.JPG' },
        ]
    },
    {
        title: "Web/App Design",
        description: "Modern UI/UX designs crafted for clarity, usability, and growth.",
        items: []
    },
    {
        title: "Presentation Design",
        description: "Investor-ready pitch decks and corporate presentations that tell your story.",
        items: [
            { id: '1', title: 'Adaminds AI Pitch', imageUrl: '/portfolio/presentation-design/adaminds.jpg' },
            { id: '2', title: 'MedCare Corporate', imageUrl: '/portfolio/presentation-design/medcare.jpg' },
            { id: '3', title: 'NexaTrade Real Estate', imageUrl: '/portfolio/presentation-design/nexatrade.jpg' },
            { id: '4', title: 'StriveSphere Sports', imageUrl: '/portfolio/presentation-design/strivesphere.jpg' },
            { id: '5', title: 'ThriftFlex Consumer', imageUrl: '/portfolio/presentation-design/thriftflex.jpg' },
            { id: '6', title: 'Harvest Visuals', imageUrl: '/portfolio/presentation-design/harvest.jpg' },
            { id: '7', title: 'Mars Fossil AI', imageUrl: '/portfolio/presentation-design/marsfossils.jpg' },
            { id: '8', title: 'Zolta', imageUrl: '/portfolio/presentation-design/zolta.jpg' },
            { id: '9', title: 'Web 3', imageUrl: '/portfolio/presentation-design/web3.jpg' },
            { id: '10', title: 'Revoxpr', imageUrl: '/portfolio/presentation-design/revoxpr.jpg' },
            { id: '11', title: 'Revealty', imageUrl: '/portfolio/presentation-design/revealty.jpg' },
            { id: '12', title: 'Nova', imageUrl: '/portfolio/presentation-design/nova.jpg' },
            { id: '13', title: 'Kreativa', imageUrl: '/portfolio/presentation-design/kreativa.jpg' },
            { id: '14', title: 'Doordash', imageUrl: '/portfolio/presentation-design/doordash.jpg' },
            { id: '15', title: 'Dermaly ', imageUrl: '/portfolio/presentation-design/dermaly.jpg' },
        ]
    },

    {
        title: "Web/App Development",
        description: "Robust and scalable development solutions for modern digital products.",
        items: []
    },
    {
        title: "Documentation Design",
        description: "Clear, structured, and visually polished documentation for complex information.",
        items: []
    }
];
