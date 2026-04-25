import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  {
    category: "Programming",
    color: "from-purple-500 to-primary",
    items: [
      { name: "Python", desc: "Used for AI, ML, backend logic and scripting" },
      { name: "Java", desc: "Object-oriented programming and system development" }
    ]
  },
  {
    category: "Web Development",
    color: "from-blue-500 to-secondary",
    items: [
      { name: "HTML", desc: "Semantic markup for accessible, structured web pages" },
      { name: "CSS", desc: "Styling, animations and responsive layouts" },
      { name: "React", desc: "Component-based frontend for dynamic UIs" }
    ]
  },
  {
    category: "Technologies",
    color: "from-pink-500 to-rose-400",
    items: [
      { name: "Machine Learning", desc: "Training and deploying predictive AI models" },
      { name: "Computer Vision", desc: "Image and video analysis for real-world AI systems" },
      { name: "IoT", desc: "Connecting hardware sensors with cloud-based platforms" }
    ]
  },
  {
    category: "Tools & Frameworks",
    color: "from-orange-500 to-yellow-400",
    items: [
      { name: "OpenCV", desc: "Real-time image processing and computer vision pipelines" },
      { name: "MediaPipe", desc: "Hand, pose and face landmark detection in real-time" },
      { name: "TensorFlow", desc: "Building and deploying deep learning neural networks" },
      { name: "PyTorch", desc: "Research-focused deep learning with dynamic computation graphs" },
      { name: "OCR", desc: "Optical Character Recognition for text extraction from images" }
    ]
  }
];

const SkillTag = ({ name, desc }: { name: string; desc: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <motion.span
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 + Math.random() * 1.5, ease: "easeInOut" }}
        className="block px-4 py-2 rounded-full text-sm font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors cursor-default select-none"
      >
        {name}
      </motion.span>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-44 text-center"
          >
            <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium px-3 py-2 rounded-lg shadow-xl">
              {desc}
            </div>
            <div className="w-2 h-2 bg-slate-900 dark:bg-white rotate-45 mx-auto -mt-1 rounded-sm"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Hover over any skill to learn more</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover-neon"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${skillGroup.color}`}></div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <SkillTag key={skill.name} name={skill.name} desc={skill.desc} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
