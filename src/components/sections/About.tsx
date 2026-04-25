import { motion } from 'framer-motion';
import { Code, Brain, Target } from 'lucide-react';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* About Text */}
          <div className="w-full md:w-1/2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a motivated Information Technology graduate specializing in Cybersecurity, with strong expertise in Python, Machine Learning, and OpenCV. Passionate about building impactful AI solutions such as assistive systems and AI-powered fitness platforms.
            </motion.p>
            
            <motion.div variants={itemVariants} className="p-6 rounded-2xl glass hover-neon mt-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-primary" size={24} />
                What I'm Looking For
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Actively seeking entry-level roles focused on solving real-world problems and contributing to scalable intelligent systems:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Computer Vision
                </li>
                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  AI / Machine Learning
                </li>
                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Python Backend Development
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Highlights Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="p-6 rounded-2xl glass hover-neon group transition-all">
              <Code className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-bold mb-2">Core Skills</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Python, Machine Learning, OpenCV, React</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="p-6 rounded-2xl glass hover-neon group transition-all">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-lg font-bold mb-2">Achievements</h3>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li>1st Prize – NEXUM 2025 (SRM)</li>
                <li>1st Prize – Aavishkar '24 & '25</li>
                <li>IEEE Conference Presenter</li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="p-6 rounded-2xl glass hover-neon group transition-all">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
              <h3 className="text-lg font-bold mb-2">Education</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">B.Tech IT (Cybersecurity)</p>
              <p className="text-primary font-bold mt-1">GPA: 8.17</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="p-6 rounded-2xl glass hover-neon group transition-all">
              <Brain className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-bold mb-2">Focus Area</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">AI Systems, Computer Vision, Backend Development</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
