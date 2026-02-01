
export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  tools: string[];
  outcomes: string[];
  link: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  link: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
}
