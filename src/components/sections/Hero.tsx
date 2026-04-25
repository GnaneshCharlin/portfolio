import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParticlesBackground } from '../ui/ParticlesBackground';
import { ThreeDModel } from '../ui/ThreeDModel';

export const Hero = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const triggerEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 3000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticlesBackground />
      <ThreeDModel />
      
      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col md:flex-row items-center max-w-7xl">
        <div className="w-full md:w-2/3 flex flex-col items-start text-left">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full glass border-primary/30 text-primary font-medium tracking-wider text-sm"
            >
              Welcome to GC's World
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Open to Opportunities
            </motion.div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Gnanesh <span className="text-gradient">Charlin A</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400 mb-6"
          >
            Aspiring Software Engineer & <br className="hidden md:block" />
            Computer Vision Engineer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            "Building intelligent AI systems that solve real-world problems using Computer Vision and scalable backend technologies."
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_rgba(79,70,229,0.7)]"
            >
              View Resume
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="px-8 py-3 rounded-full glass font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border-primary/30"
            >
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full glass font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        
        {/* Profile Image placeholder area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/3 mt-16 md:mt-0 flex justify-center hidden md:flex relative"
        >
          <div 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-primary to-secondary shadow-[0_0_30px_rgba(147,51,234,0.3)] cursor-pointer group"
            onClick={triggerEasterEgg}
          >
            <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden relative transform transition-transform duration-500 group-hover:scale-[0.98]">
              {/* Replace with actual image later */}
              <img src="/profile.jpg" alt="Gnanesh Charlin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

          {/* Easter Egg Toast */}
          <AnimatePresence>
            {showEasterEgg && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                className="absolute top-0 right-0 md:-right-10 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-xl shadow-xl font-bold border border-primary/30 z-20 whitespace-nowrap"
              >
                🚀 Always building something exciting!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
