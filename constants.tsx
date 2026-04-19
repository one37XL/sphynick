
import { Project, Product, FAQItem, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '4',
    title: 'TraceAI Space',
    description: 'An innovative AI-powered platform for real-time monitoring and intelligent data tracing.',
    problem: 'Decentralized ecosystems often lack transparency and real-time observability, making it difficult for stakeholders to trace data flow accurately.',
    role: 'Lead Developer',
    tools: ['React', 'Gemini AI', 'Tailwind CSS', 'Framer Motion'],
    impact: [
      'Engineered a seamless AI-driven tracking interface that reduced data analysis time by 50%',
      'Implemented advanced data visualization for complex datasets using D3.js'
    ],
    link: 'https://www.traceai.space/',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '5',
    title: 'Yield Plus',
    description: 'A robust digital asset management and yield optimization platform for modern investors.',
    problem: 'Investors struggle to optimize returns across fragmented DeFi protocols due to complex yield calculation models.',
    role: 'Full Stack Engineer',
    tools: ['Next.js', 'Web3', 'Node.js', 'Ethers.js'],
    impact: [
      'Optimized yield calculation algorithms for real-time accuracy, increasing user confidence',
      'Developed a highly secure monitoring dashboard that successfully managed $1M+ in simulated assets'
    ],
    link: 'https://www.yieldplus.online/',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Digital Communications Hub',
    description: 'A centralized platform for managing social media assets for youth-led organizations.',
    problem: 'NGOs often lack the budget for high-end social media management tools, leading to fragmented and inefficient digital campaigns.',
    role: 'Full Stack Developer',
    tools: ['Next.js', 'Firebase', 'Canva SDK', 'Node.js'],
    impact: [
      'Automated content distribution across 3 major platforms, freeing up 15 hours/week for staff',
      'Reduced asset management time by 40% through a custom-built Canva-cloud sync feature'
    ],
    link: 'https://github.com/one37XL',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: 'AI Prompt Engineer Assistant',
    description: 'A tool to help marketers generate high-converting copy using fine-tuned LLM prompts.',
    problem: 'Creating effective AI prompts for marketing is a "black box" for most professionals, resulting in generic and poor-quality AI output.',
    role: 'AI Developer',
    tools: ['Gemini API', 'Node.js', 'React', 'OpenAI'],
    impact: [
      'Achieved 95% user satisfaction in copy quality by implementing specialized prompt tuning',
      'Increased conversion rates for user campaigns by an average of 22% through better prompt structures'
    ],
    link: 'https://github.com/one37XL',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000'
  }
];

export const METRICS = [
  { label: 'NGO Growth Supported', value: '60%+' },
  { label: 'AI Integrations Delivered', value: '12+' },
  { label: 'Reach Increase', value: '250k+' },
  { label: 'Satisfied Clients', value: '100%' },
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

export const HOODIES: Product[] = [];

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
    answer: "Simply reach out through email at sphynick@gmail.com with your project details and timeline."
  },
  {
    question: "Are your projects open source?",
    answer: "Most of my personal and community-driven projects are available on my GitHub profile for the community to learn from."
  }
];
