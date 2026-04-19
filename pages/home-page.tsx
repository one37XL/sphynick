
import React, { useState, useEffect, useCallback } from 'react';
import { PROJECTS, PRODUCTS, FAQS, TESTIMONIALS, METRICS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUpRight, 
  CheckCircle2, 
  MessageSquare,
  Zap,
  Target,
  Users
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [nextTestimonial, isPaused]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#f5f5f0] text-[#141414] font-sans selection:bg-[#F27D26] selection:text-white"
    >
      {/* 1. HERO SECTION (Editorial/Magazine Style) */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#0a0a0a] text-white">
        {/* Subtle grid background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-[#F27D26] font-mono text-sm tracking-widest uppercase"
                >
                  <span className="w-8 h-[1px] bg-[#F27D26]" />
                  Available for selection 2026 projects
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase"
                >
                  Helping you <br />
                  <span className="text-[#F27D26]">Excel</span> in the <br />
                  Digital Age
                </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-xl font-light"
              >
                Nick Njau is an IT Specialist & Full-Stack Developer 
                building <span className="text-white font-medium italic">high-impact AI solutions</span> that bridge the gap between human needs and technical excellence. 
                Check out my work on <a href="https://github.com/one37XL" target="_blank" rel="noopener noreferrer" className="text-[#F27D26] font-bold hover:underline transition-all">GitHub</a>.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5 pt-4"
              >
                <a 
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="group bg-[#F27D26] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-[#F27D26]/20"
                >
                  Let's Build Together
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/254769504732"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center flex items-center justify-center gap-3"
                >
                  Book a Consultation
                  <Zap className="w-5 h-5 text-yellow-400" />
                </a>
              </motion.div>
            </div>

            {/* Tech Visual Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="hidden lg:block relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Orbital Rings */}
                <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-10 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Center Piece */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-[#F27D26]/20 rounded-full blur-[100px] animate-pulse" />
                  <div className="modern-glass border border-white/20 p-8 rounded-3xl backdrop-blur-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                    <div className="space-y-6 font-mono text-sm">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                        <div className="w-3 h-3 rounded-full bg-green-400/50" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-[#F27D26] font-bold tracking-widest text-[10px] uppercase">Intelligence Node</p>
                        <p className="text-white/80 leading-relaxed italic">
                          "Bridging human impact with AI precision."
                        </p>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
                        <span>VERSION 2026.4.1</span>
                        <div className="flex gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#F27D26] animate-ping" />
                          <span>LIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. METRICS / TRUST SIGNALS */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center md:text-left space-y-1"
              >
                <div className="text-4xl md:text-5xl font-black text-[#F27D26] tracking-tighter">{metric.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT ME (Story-Driven / Warm Organic) */}
      <section id="about" className="py-32 relative overflow-hidden bg-[#f9f9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-[#F27D26] uppercase tracking-[0.3em] flex items-center justify-center gap-3">
                <span className="w-10 h-[1px] bg-[#F27D26]" />
                The Story So Far
                <span className="w-10 h-[1px] bg-[#F27D26]" />
              </h2>
              <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tight uppercase">
                Bridging Design Logic & <br /> Technical Impact
              </h3>
            </div>
            
            <div className="space-y-8 text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              <p>
                My journey began in the vibrant tech landscape of <span className="text-[#141414] font-medium italic">Nairobi</span>, working alongside NGOs to scale their digital impact. I saw firsthand how technology, when applied with empathy, could transform lives.
              </p>
              <p>
                As a Full-Stack Developer, I don’t just write code; I architect systems that solve <span className="text-[#141414] font-medium italic">real-world problems</span>. Whether it's optimizing yields for decentralized investors or helping youth organizations reach their next 100k supporters through AI.
              </p>
              <p>
                I'm on a mission to democratize enterprise-grade AI for startups and community builders. My background in NGO outreach has taught me that the best tech is the one that is <span className="text-[#141414] font-medium italic">invisible, intuitive, and high-impact.</span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-10">
              <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
                <div className="bg-[#f5f5f0] p-5 rounded-3xl">
                  <Target className="w-8 h-8 text-[#F27D26]" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-gray-900">Proven Results</h4>
                  <p className="text-sm text-gray-500 mt-2">Growth-focused development for NGOs.</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
                <div className="bg-[#f5f5f0] p-5 rounded-3xl">
                  <Zap className="w-8 h-8 text-[#F27D26]" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-gray-900">AI Specialist</h4>
                  <p className="text-sm text-gray-500 mt-2">LLM fine-tuning & automation flows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDIES (Technical Dashboard / Rich Content) */}
      <section id="projects" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-sm font-bold text-[#F27D26] uppercase tracking-[0.3em]">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Case Studies of Impact</h3>
            <p className="text-xl text-gray-500 font-light">
              A deep dive into how I use modern tech to solve complex business and social problems.
            </p>
          </div>

          <div className="grid gap-24">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-16 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`space-y-10 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-6xl font-black text-gray-100 font-serif italic">0{idx + 1}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                        {project.role}
                      </span>
                    </div>
                    <h4 className="text-4xl font-black tracking-tight uppercase">{project.title}</h4>
                    
                    <div className="space-y-4">
                      <p className="text-[#F27D26] font-bold text-sm uppercase tracking-wide">The Challenge</p>
                      <p className="text-gray-600 leading-relaxed text-lg font-light italic">"{project.problem}"</p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[#F27D26] font-bold text-sm uppercase tracking-wide">The Impact</p>
                      <ul className="space-y-4">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 group">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[10px] font-mono font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-lg border border-gray-200 uppercase">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 font-bold text-lg border-b-2 border-[#F27D26] pb-1 hover:text-[#F27D26] transition-all"
                    >
                      View Full Project Details <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className={`relative group ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-[#F27D26]/10 rounded-[3rem] transform rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500" />
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-gray-100">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-white">
                        <p className="text-xs uppercase tracking-widest font-bold opacity-60">Status</p>
                        <p className="font-bold">Deployment Stable</p>
                      </div>
                      <div className="bg-[#F27D26] p-3 rounded-full text-white shadow-xl">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 PRODUCTS / PUBLICATIONS */}
      <section id="products" className="py-32 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-sm font-bold text-[#F27D26] uppercase tracking-[0.3em]">Resources & Insights</h2>
              <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">Deep Dives into <br /> Modern Systems</h3>
            </div>
            <p className="text-gray-500 max-w-sm text-lg font-light">
              Explorations through writing and research on purpose, technology, and decentralized evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {PRODUCTS.map((product) => (
              <motion.a 
                key={product.id}
                href={product.link}
                target={product.link === '#' ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-[3rem] p-4 flex flex-col sm:flex-row items-center gap-8 border border-transparent hover:border-[#F27D26]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#F27D26]/5"
              >
                <div className="w-full sm:w-40 aspect-square rounded-[2rem] overflow-hidden shrink-0 bg-gray-100">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="flex-grow space-y-2 pr-4 py-4 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#F27D26]">{product.category}</span>
                    <span className="text-[10px] font-bold text-gray-400 italic uppercase">{product.price}</span>
                  </div>
                  <h4 className="text-xl font-black uppercase leading-tight tracking-tight group-hover:text-[#F27D26] transition-colors">{product.name}</h4>
                  <p className="text-sm text-gray-500 font-light leading-snug line-clamp-2">{product.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-32 bg-[#0a0a0a] text-white relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[#F27D26]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="flex justify-center text-[#F27D26]">
                <Users className="w-16 h-16 opacity-30" />
              </div>
              <blockquote className="text-4xl md:text-5xl font-black italic leading-tight tracking-tight uppercase">
                "{TESTIMONIALS[activeTestimonial].quote}"
              </blockquote>
              <div className="space-y-2">
                <cite className="not-italic font-black text-2xl tracking-tight text-white italic uppercase">{TESTIMONIALS[activeTestimonial].author}</cite>
                <p className="text-[#F27D26] font-bold text-sm tracking-widest uppercase">
                  {TESTIMONIALS[activeTestimonial].role} at {TESTIMONIALS[activeTestimonial].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-16">
            {TESTIMONIALS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-1 transition-all duration-300 ${activeTestimonial === idx ? 'w-12 bg-[#F27D26]' : 'w-4 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ & SOCIALS SECTION */}
      <section className="py-32 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1 space-y-10">
              <div className="space-y-6">
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">Curiosity <br /> Answered</h3>
                <p className="text-gray-500 font-light">
                  Find answers to common questions about working with me, my delivery process, and technical philosophy.
                </p>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: Github, url: "https://github.com/one37XL" },
                  { icon: Linkedin, url: "#" },
                  { icon: Twitter, url: "#" },
                  { icon: Mail, url: "mailto:sphynick@gmail.com" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#141414] hover:text-white transition-all transform hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all hover:shadow-xl hover:shadow-black/5">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center transition-colors"
                  >
                    <span className="text-xl font-bold text-gray-900 tracking-tight">{faq.question}</span>
                    <div className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-transform ${activeFaq === index ? 'rotate-180 bg-[#141414] text-white' : ''}`}>
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 text-gray-500 text-lg leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION (Tech-Forward) */}
      <section id="contact" className="py-32 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#141414] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-[10s]" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920")', backgroundSize: 'cover', backgroundPosition: 'center' }} 
            />
            
            <div className="relative space-y-10">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-[#F27D26] uppercase tracking-[0.4em]">Get in touch</h2>
                <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter">Ready to <br /> Scale Up?</h3>
              </div>
              
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                Whether you're looking for enterprise AI integrations, a custom digital headquarters, or a strategist to help your NGO grow—I'm ready to build.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
                <a 
                  href="https://wa.me/254769504732"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F27D26] text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-black transition-all shadow-2xl shadow-[#F27D26]/40 flex items-center justify-center gap-3 w-full md:w-auto"
                >
                  Start a Project
                  <MessageSquare className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:sphynick@gmail.com" 
                  className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-black transition-all w-full md:w-auto flex items-center justify-center gap-3"
                >
                  Email Nick
                  <Mail className="w-6 h-6" />
                </a>
              </div>

              <div className="pt-16 border-t border-white/10 flex flex-wrap justify-center gap-12 text-white/40 font-mono text-xs uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Strategic Consulting
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Full-Stack Architecture
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  GenAI Automation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#f5f5f0] border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-2xl font-black uppercase tracking-tighter">NICK NJAU <span className="text-[#F27D26]">.</span></div>
          <p className="text-gray-400 text-xs tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} NICK NJAU PORTFOLIO. BUILT IN NAIROBI.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default HomePage;
