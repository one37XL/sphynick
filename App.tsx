
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import { PROJECTS, PRODUCTS, FAQS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Robust scroll handler for internal links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Match the navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial, isPaused]);

  // Image error fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'; // Generic high quality office/tech fallback
  };

  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient text-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              IT Specialist helping you <span className="text-teal-300">excel</span> in your digital presence
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 leading-relaxed max-w-2xl">
              IT solutions, Web developer and AI tools expert. Experienced supporting NGOs to increase reach and engagement. 
              Check out my work on <a href="https://github.com/one37XL" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-300">GitHub</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-blue-50 transition-all text-center"
              >
                View My Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="bg-blue-800/30 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Tech Visualization Replacement */}
          <div className="hidden md:flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-700 delay-100 relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Layered Glow effects */}
              <div className="absolute w-80 h-80 bg-teal-500/30 rounded-full blur-[100px] animate-pulse"></div>
              <div className="absolute w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] animate-pulse delay-700"></div>

              {/* Tech "Hologram" / Terminal */}
              <div className="relative z-10 w-full max-w-md">
                <div className="glass border border-white/20 rounded-3xl p-6 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-auto text-[10px] text-white/40 uppercase tracking-widest font-mono">Portfolio.ts</div>
                  </div>
                  <div className="space-y-4 font-mono text-sm leading-relaxed">
                    <p className="text-teal-400 opacity-60">// Digital transformation specialist</p>
                    <p><span className="text-purple-400">import</span> {'{'} <span className="text-blue-300">AI</span>, <span className="text-blue-300">WebDev</span> {'}'} <span className="text-purple-400">from</span> <span className="text-orange-300">'@nicknjau/expertise'</span>;</p>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <p><span className="text-pink-400">async function</span> <span className="text-blue-300">maximizeImpact</span>(client) {'{'}</p>
                      <p className="ml-4 text-white/90">await <span className="text-blue-300">AI</span>.<span className="text-yellow-300">integrate</span>(client.ecosystem);</p>
                      <p className="ml-4 text-white/90">return client.<span className="text-teal-400">expandReach</span>();</p>
                      <p>{'}'}</p>
                    </div>
                    <p className="text-teal-400 opacity-60">// Ready for deployment</p>
                    <div className="flex items-center gap-2">
                      <span className="text-white">$</span>
                      <span className="text-teal-300 animate-pulse">_</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-12 -right-8 glass border border-white/30 p-5 rounded-2xl shadow-2xl animate-bounce" style={{animationDuration: '4s'}}>
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-500 p-2.5 rounded-xl">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-teal-200 font-bold uppercase tracking-wider">Capabilities</div>
                      <div className="text-sm font-bold text-white">AI Automation</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-12 glass border border-white/30 p-5 rounded-2xl shadow-2xl animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 p-2.5 rounded-xl shadow-lg shadow-blue-500/30">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-blue-200 font-bold uppercase tracking-wider">Focus</div>
                      <div className="text-sm font-bold text-white">Full Stack Dev</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-2 relative inline-block">
                About Me
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></div>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  I am a detail-oriented and highly motivated Full-Stack Web Developer with a passion for building seamless, user-centric digital experiences. As a recent graduate, I combine a strong foundation in modern front-end frameworks with a solid understanding of back-end architecture to create responsive, high-performing applications.
                </p>
                <p>
                  My approach to development is defined by a practical problem-solving edge and a commitment to clean, scalable code. I enjoy bridging the gap between sophisticated design and functional logic, ensuring that every layer of the stack is optimized for the best possible user experience.
                </p>
                <p>
                  I am eager to contribute my technical skills to a forward-thinking team while continuing to evolve alongside the latest industry standards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-3xl text-center hover:shadow-md transition-shadow">
                  <span className="block text-3xl font-bold text-blue-600 mb-1">HTML/CSS</span>
                  <span className="text-sm text-blue-800 font-medium">Structure & Style</span>
                </div>
                <div className="bg-teal-50 p-6 rounded-3xl text-center hover:shadow-md transition-shadow">
                  <span className="block text-3xl font-bold text-teal-600 mb-1">JS/React</span>
                  <span className="text-sm text-teal-800 font-medium">Dynamic UI</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-orange-50 p-6 rounded-3xl text-center hover:shadow-md transition-shadow">
                  <span className="block text-3xl font-bold text-orange-600 mb-1">AI Tools</span>
                  <span className="text-sm text-orange-800 font-medium">GenAI Expert</span>
                </div>
                <div className="bg-indigo-50 p-6 rounded-3xl text-center hover:shadow-md transition-shadow">
                  <span className="block text-3xl font-bold text-indigo-600 mb-1">Node.js</span>
                  <span className="text-sm text-indigo-800 font-medium">Back-End Arch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A selection of my recent works ranging from decentralized web tools to AI assistants.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PROJECTS.map((project) => (
              <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                    {project.role}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full bg-gray-900 text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all">
                    Visit Site <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="products" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Books</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Reflections on philosophy and my upcoming technical standards publication.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="border border-gray-100 rounded-3xl p-6 hover:border-blue-100 hover:bg-blue-50/30 transition-all flex flex-col h-full">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  onError={handleImageError}
                  className="w-full h-56 object-cover rounded-2xl mb-6 shadow-sm" 
                />
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">{product.category}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.price === 'Coming Soon' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                    {product.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{product.description}</p>
                {product.link !== '#' ? (
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                    Read Review
                  </a>
                ) : (
                  <button disabled className="block w-full text-center bg-gray-100 text-gray-400 py-3 rounded-xl font-semibold cursor-not-allowed">
                    Watch this Space
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-blue-50/50 scroll-mt-20 overflow-hidden" 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4">Client Testimonials</h2>
          <div className="relative h-96 flex items-center justify-center">
            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 z-10 p-2 text-gray-400 hover:text-blue-600 transition-colors hidden md:block"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 z-10 p-2 text-gray-400 hover:text-blue-600 transition-colors hidden md:block"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Cards */}
            {TESTIMONIALS.map((t, index) => (
              <div 
                key={t.id}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-12 ${
                  index === activeTestimonial 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                }`}
              >
                <svg className="w-16 h-16 text-teal-500/20 mb-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8H6c0 2.2 1.8 4 4 4v2c-3.3 0-6-2.7-6-6V8h6zm12 0v8h-4c0 2.2 1.8 4 4 4v2c-3.3 0-6-2.7-6-6V8h6z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed mb-8 max-w-3xl">
                  "{t.quote}"
                </blockquote>
                <div className="flex flex-col items-center">
                  <cite className="not-italic font-bold text-gray-900 text-lg">{t.author}</cite>
                  <span className="text-gray-500 text-sm">{t.role} {t.company && `at ${t.company}`}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'w-8 bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="px-6 py-4 text-gray-600 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to start a project?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Whether you need a new website, AI integration, or digital strategy, I'm here to help you succeed.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a href="mailto:nicknjau@nicknjau.store" className="bg-teal-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-300 transition-all shadow-xl shadow-teal-400/20">
              Email Me
            </a>
            <div className="flex gap-6">
              <a href="https://github.com/one37XL" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Nick Njau Portfolio. All rights reserved.</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
