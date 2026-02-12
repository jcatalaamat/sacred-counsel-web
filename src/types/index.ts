export interface Retreat {
  id: string;
  title: string;
  slug: string;
  retreatType: 'ayahuasca' | 'homestay';
  startDate: string;
  endDate: string;
  totalSpots: number;
  spotsRemaining: number;
  basePrice: number;
  earlyBirdPrice?: number;
  earlyBirdDeadline?: string;
  depositAmount: number;
  isActive: boolean;
  includedItems: string[];
  heroImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  service: 'ayahuasca' | 'homestay' | 'integration' | 'detox';
  image?: string;
  videoUrl?: string;
  featured?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'ayahuasca' | 'homestay' | 'integration' | 'medical' | 'logistics' | 'payment';
}

export interface TeamMember {
  id: string;
  name: string;
  credentials: string;
  role: string;
  bio: string;
  photo: string;
  videoIntroUrl?: string;
  email?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  author: TeamMember;
  publishedAt: string;
  categories: string[];
  body: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export interface SiteSettings {
  announcementBar?: {
    enabled: boolean;
    message: string;
    link?: string;
  };
  whatsappNumber: string;
  email: string;
  instagramHandle: string;
  calendlyUrl: string;
  footerTagline: string;
}

export interface ApplicationFormData {
  // Step 1: Service
  service: 'ayahuasca' | 'homestay' | 'integration' | 'detox';
  retreatDate?: string;

  // Step 2: About You
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  age: number;
  howHeard: string;

  // Step 3: Experience & Health
  previousExperience: string;
  currentMedications: string;
  mentalHealthHistory: string;
  physicalHealthConsiderations: string;

  // Step 4: Intentions
  intentions: string;
  expectations: string;
  questions: string;
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
}
