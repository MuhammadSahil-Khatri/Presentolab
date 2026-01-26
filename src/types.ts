
export interface Service {
  title: string;
  description: string;
  categories?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}


export interface TeamMember {
  name: string;
  role: string;
  img: string;
  linkedin: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
