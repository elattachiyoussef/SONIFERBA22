export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface SocialMedia {
  facebook: string;
  linkedin: string;
}

export interface Contact {
  address: Address;
  phone: string;
  email: string;
  socialMedia: SocialMedia;
}

export interface Milestone {
  year: number;
  event: string;
}

export interface History {
  founded: number;
  milestones: Milestone[];
}

export interface Specialty {
  name: string;
  description: string;
}

export interface Partner {
  name: string;
  logo: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  description: string;
  contact: Contact;
  history: History;
  specialties: Specialty[];
  partners: Partner[];
  services: Service[];
} 