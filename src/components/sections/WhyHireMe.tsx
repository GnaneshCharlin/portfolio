import { motion } from 'framer-motion';
import { Brain, Trophy, Zap, Code, Lightbulb, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: <Brain size={28} className="text-primary" />,
    title: "Strong in AI & Computer Vision",
    desc: "Deep understanding of ML models, OpenCV, and real-time processing systems."
  },
  {
    icon: <Trophy size={28} className="text-yellow-500" />,
    title: "Multiple 1st Prize Winner",
    desc: "Proven track record of winning highly competitive hackathons like NEXUM and Aavishkar."
  },
  {
    icon: <Zap size={28} className="text-secondary" />,
    title: "Built Real-World Projects",
    desc: "Developed Assistive AI, IoT tracking systems, and AI fitness coaching platforms."
  },
  {
    icon: <Code size={28} className="text-pink-500" />,
    title: "Full-Stack Capability",
    desc: "Highly proficient across frontend React, robust Node.js/Python backends, and AI integrations."
  },
  {
    icon: <Lightbulb size={28} className="text-orange-500" />,
    title: "Fast Learner & Problem Solver",
    desc: "Highly adaptable to new technologies, always focused on optimized and scalable solutions."
  },
  {
    icon: <MessageCircle size={28} className="text-cyan-500" />,
    title: "Communication & Adaptability",
    desc: "Clearly explains complex technical concepts to any audience, while thriving in dynamic environments — quickly picking up new tools and delivering results both solo and in teams."
  }
];

export const WhyHireMe = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-gradient">Hire Me?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 glass rounded-2xl hover-neon flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-slate-200 dark:border-slate-700">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">{reason.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transition-all transform hover:-translate-y-1">
            <span className="text-xl">👉</span> Let's build something impactful together
          </a>
        </motion.div>
      </div>
    </section>
  );
};
