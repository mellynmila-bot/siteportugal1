export type Language = 'pt' | 'en' | 'es';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  tag: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
}

export interface StudioPhoto {
  id: string;
  url: string;
  title: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
