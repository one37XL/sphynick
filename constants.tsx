
import { Project, Product, FAQItem, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '4',
    title: 'TraceAI Space',
    description: 'An innovative AI-powered platform designed for real-time monitoring and intelligent data tracing within decentralized ecosystems.',
    role: 'Lead Developer',
    tools: ['React', 'Gemini AI', 'Tailwind CSS'],
    outcomes: [
      'Engineered a seamless AI-driven tracking interface',
      'Implemented advanced data visualization for complex datasets'
    ],
    link: 'https://www.traceai.space/',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '5',
    title: 'Yield Plus',
    description: 'A robust digital asset management and yield optimization platform focused on maximizing returns for modern investors.',
    role: 'Full Stack Engineer',
    tools: ['Next.js', 'Web3', 'Node.js'],
    outcomes: [
      'Optimized yield calculation algorithms for real-time accuracy',
      'Developed a highly secure monitoring dashboard'
    ],
    link: 'https://www.yieldplus.online/',
    imageUrl: 'https://images.unsplash.com/photo-1611974714851-eb607737421c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Digital Communications Hub',
    description: 'A centralized platform for managing social media assets and campaign schedules for youth-led organizations.',
    role: 'Full Stack Developer',
    tools: ['Next.js', 'Firebase', 'Canva SDK'],
    outcomes: [
      'Automated content distribution across 3 platforms',
      'Reduced asset management time by 40%'
    ],
    link: 'https://github.com/one37XL',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: 'AI Prompt Engineer Assistant',
    description: 'A tool designed to help marketers generate high-converting copy using fine-tuned LLM prompts.',
    role: 'AI Developer',
    tools: ['Gemini API', 'Node.js', 'React'],
    outcomes: [
      'Achieved 95% user satisfaction in copy quality',
      'Implemented automated hashtag generation logic'
    ],
    link: 'https://github.com/one37XL',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Ikigai: The Book Review',
    description: 'My deep dive into finding purpose through the lens of a developer and tradesperson. A reflection on long-term fulfillment.',
    price: 'Free Read',
    category: 'Book Review',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600',
    link: 'https://nicholasgachuhi.blogspot.com/2024/01/ikigai-book-review.html'
  },
  {
    id: 'p2',
    name: "Kaspa's Standard",
    description: 'An upcoming exploration into the evolution of digital standards, efficiency, and the future of decentralized systems.',
    price: 'Coming Soon',
    category: 'Upcoming Publication',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600',
    link: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Nick's ability to translate complex NGO goals into simple, high-impact digital strategies is unmatched. He helped our outreach grow by 60% in just one quarter.",
    author: "Sarah J. Kamau",
    role: "Director of Communications",
    company: "Youth Forward Kenya"
  },
  {
    id: 't2',
    quote: "An exceptional developer who understands the human element. The custom AI dashboard Nick built for our team saved us countless hours of manual data entry.",
    author: "David Mensah",
    role: "Operations Manager",
    company: "Green Leaf NGO"
  },
  {
    id: 't3',
    quote: "Rarely do you find someone who is equally skilled in front-end aesthetics and technical problem-solving. Nick is our go-to for all digital transformation projects.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Digital Rights Africa"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "I offer a range of services including graphic design, web development, branding, AI automation, and digital communications strategy."
  },
  {
    question: "How do I get started on a project with you?",
    answer: "Simply reach out through email at nicknjau@nicknjau.store with your project details and timeline."
  },
  {
    question: "Are your projects open source?",
    answer: "Most of my personal and community-driven projects are available on my GitHub profile for the community to learn from."
  }
];
