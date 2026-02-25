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
        description: "",
        items: [
            { id: '1', title: 'Acceronix', imageUrl: '/portfolio/logo-design/acceronix.jpg' },
            { id: '2', title: 'Costa Coral', imageUrl: '/portfolio/logo-design/costacoral.jpg' },
            { id: '3', title: 'Call Hub', imageUrl: '/portfolio/logo-design/callhub.jpg' },
            { id: '4', title: 'Voltamix', imageUrl: '/portfolio/logo-design/voltamix.jpg' },
            { id: '5', title: 'Pure Kentucky Farms', imageUrl: '/portfolio/logo-design/purekentuckyfarms.jpg' },
            { id: '6', title: '0Minute', imageUrl: '/portfolio/logo-design/0minute.jpg' },
            { id: '7', title: 'Ugicify', imageUrl: '/portfolio/logo-design/ugicify.jpg' },
            { id: '8', title: 'Wingworks', imageUrl: '/portfolio/logo-design/wingworks.jpg' },
            { id: '9', title: 'NewsLeenks', imageUrl: '/portfolio/logo-design/newsleenks.jpg' },
            { id: '10', title: 'Bulls Ring', imageUrl: '/portfolio/logo-design/bullsring.jpg' },
            { id: '11', title: 'Al Habib', imageUrl: '/portfolio/logo-design/alhabib.jpg' },
            { id: '12', title: 'Cofee', imageUrl: '/portfolio/logo-design/cofee.jpg' },
            { id: '13', title: 'Vego', imageUrl: '/portfolio/logo-design/vego.jpg' },
            { id: '14', title: 'Domer', imageUrl: '/portfolio/logo-design/domer.jpg' },
            { id: '15', title: 'Edaly', imageUrl: '/portfolio/logo-design/edaly.jpg' },
            { id: '16', title: 'Fabcare', imageUrl: '/portfolio/logo-design/fabcare.jpg' },
            { id: '17', title: 'Arqaam', imageUrl: '/portfolio/logo-design/arqaam.jpg' },
            { id: '18', title: 'Vintage', imageUrl: '/portfolio/logo-design/vintage.jpg' },


        ]
    },
    {
        title: "Brand Design",
        description: "",
        items: [
            { id: '1', title: 'Acceronix', imageUrl: '/portfolio/branding/acceronix.jpg' },
            { id: '2', title: 'Applet', imageUrl: '/portfolio/branding/applet.jpg' },
            { id: '3', title: 'Pure Kentucky Farms', imageUrl: '/portfolio/branding/farms.jpg' },
            { id: '4', title: 'MCG', imageUrl: '/portfolio/branding/mcg.jpg' },
            { id: '5', title: 'Voltamix', imageUrl: '/portfolio/branding/voltamix.jpg' },
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
        title: "Presentation Design",
        description: "",
        items: [
            { id: '1', title: 'Adaminds', imageUrl: '/portfolio/presentation-design/adaminds.jpg' },
            { id: '2', title: 'MedCare', imageUrl: '/portfolio/presentation-design/medcare.jpg' },
            { id: '3', title: 'NexaTrade', imageUrl: '/portfolio/presentation-design/nexatrade.jpg' },
            { id: '4', title: 'StriveSphere', imageUrl: '/portfolio/presentation-design/strivesphere.jpg' },
            { id: '5', title: 'ThriftFlex', imageUrl: '/portfolio/presentation-design/thriftflex.jpg' },
            { id: '6', title: 'Harvest', imageUrl: '/portfolio/presentation-design/harvest.jpg' },
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
    // {
    //     title: "Web/App Design & Development",
    //     description: "",
    //     items: []
    // },

    // {
    //     title: "Social Media Marketing",
    //     description: "",
    //     items: []
    // },
];
