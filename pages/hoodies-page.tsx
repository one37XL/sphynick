
import React, { useState } from 'react';
import { HOODIES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronRight, Filter, Star, Info, Globe } from 'lucide-react';

const HoodiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800';
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4"
            >
              <ShoppingBag className="w-3 h-3" />
              Official Merchandise
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              The <span className="text-teal-500">Tech</span> Collection
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 leading-relaxed mb-6"
            >
              Premium apparel designed for developers, architects, and tech enthusiasts. 
              Featuring our signature <span className="text-gray-900 font-bold">Black & White</span> collection with black people.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-bold"
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Black People Designs Included
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                +2k
              </div>
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
              </div>
              <div className="text-gray-500 font-medium">Trusted by devs worldwide</div>
            </div>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-12">
          <div className="flex items-center gap-8">
            {['All', 'Apparel', 'Limited Edition'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm font-bold transition-all relative py-2 ${
                  selectedCategory === cat ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-gray-900 bg-gray-50 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {HOODIES.map((hoodie, index) => (
              <motion.div
                key={hoodie.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredId(hoodie.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 relative mb-6">
                  <img 
                    src={hoodie.imageUrl} 
                    alt={hoodie.name}
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Info */}
                  <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col justify-end p-8 ${hoveredId === hoodie.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {hoodie.sizes?.map(size => (
                          <span key={size} className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center text-[10px] font-bold text-white border border-white/20">
                            {size}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {hoodie.colors?.map(color => (
                          <div key={color} className="group/color relative">
                            <div className="w-4 h-4 rounded-full border border-white/50 bg-gray-800" title={color}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur px-4 py-2 rounded-2xl shadow-xl">
                      <span className="text-lg font-black text-gray-900">{hoodie.price}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{hoodie.name}</h3>
                    <p className="text-gray-500 text-sm max-w-sm">{hoodie.description}</p>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center hover:bg-teal-500 transition-all hover:scale-110 shadow-lg shadow-gray-900/10">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3rem] bg-gray-900 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.5,-0.8C84.1,14.1,78,28.2,69.2,40.4C60.4,52.6,48.9,62.9,35.7,70.1C22.5,77.3,7.6,81.4,-7.8,80.1C-23.2,78.8,-39.1,72.1,-52.3,61.9C-65.5,51.7,-76,38,-80.6,22.7C-85.2,7.4,-83.9,-9.5,-77.8,-24.8C-71.7,-40.1,-60.8,-53.8,-47.4,-61C-34,-68.2,-18.1,-68.9,-1.1,-67C15.9,-65.1,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Quality First. Always.</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Info className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Sustainable Sourcing</h4>
                    <p className="text-gray-400 text-sm">We use 100% organic cotton and recycled polyester for all our apparel.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Worldwide Shipping</h4>
                    <p className="text-gray-400 text-sm">Fast and reliable shipping to over 50 countries with real-time tracking.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Join the Waitlist</h3>
              <p className="text-gray-400 mb-8">Be the first to know when new limited edition drops are available.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                />
                <button className="bg-teal-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-teal-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HoodiesPage;
