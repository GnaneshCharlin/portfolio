import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Activity, Brain, ArrowRight } from 'lucide-react';
import { Github } from '../ui/Icons';

const projects = [
  {
    id: 1,
    title: "Blindness Assistive Audio Vision System",
    shortDesc: "AI-based vision and voice guidance system for visually impaired users.",
    tech: ["Python", "OpenCV", "Machine Learning", "TTS"],
    github: "https://github.com/Madhavan-012004/Blindness-Assistive-Audio-Vision-System",
    problem: "Visually impaired users lack real-time environmental awareness.",
    solution: "An AI-based vision and voice guidance system.",
    features: [
      "Real-time object detection",
      "OCR text reading",
      "Voice guidance"
    ],
    impact: [
      "Real-time processing (~200–300ms latency)",
      "Improved navigation assistance and independence"
    ],
    architecture: ["Camera", "OpenCV", "ML Model", "Object Detection", "TTS Output"],
    icon: "Eye"
  },
  {
    id: 2,
    title: "Smart Athlete Performance Monitoring",
    shortDesc: "IoT-based continuous performance tracking system for athletes.",
    tech: ["IoT", "Python", "Sensors", "Cloud Storage"],
    github: "https://github.com/GnaneshCharlin/SMART-ATHLETE-PERFORMANCE-MONITORING-SYSTEM",
    problem: "Lack of real-time tracking in typical gym environments.",
    solution: "An IoT-based continuous performance monitoring solution.",
    features: [
      "Real-time sensor tracking",
      "Cloud storage integration for data persistence"
    ],
    impact: [
      "Continuous performance tracking",
      "Improved monitoring accuracy and data-driven insights"
    ],
    architecture: ["Sensors", "ESP32 / IoT Gateway", "Cloud Storage", "Data Processing", "Dashboard"],
    icon: "Activity"
  },
  {
    id: 3,
    title: "GymSense AI – Fitness Coaching System",
    shortDesc: "AI-powered personalized coaching, diet, and posture detection.",
    tech: ["React Native", "Node.js", "MongoDB", "Python", "OpenCV"],
    github: "https://github.com/GnaneshCharlin/gymsense-ai",
    problem: "Lack of personalized fitness guidance and form correction.",
    solution: "An AI-powered comprehensive fitness coaching system.",
    features: [
      "Posture detection using computer vision",
      "Personalized workout plans",
      "Personalized diet plans"
    ],
    impact: [
      "Real-time feedback system during workouts",
      "Significantly improved workout accuracy and safety"
    ],
    architecture: ["User Input", "Backend API", "AI Model", "Posture Detection", "Real-time Feedback"],
    icon: "Brain"
  }
];

const ProjectIcon = ({ iconName, size = 64 }: { iconName: string, size?: number }) => {
  switch (iconName) {
    case 'Eye':
      return (
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <Eye size={size} className="text-primary drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
        </motion.div>
      );
    case 'Activity':
      return (
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <Activity size={size} className="text-secondary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        </motion.div>
      );
    case 'Brain':
      return (
        <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
          <Brain size={size} className="text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
        </motion.div>
      );
    default:
      return <div className="text-6xl">📁</div>;
  }
};

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden flex flex-col h-full hover-neon"
            >
              <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden group flex items-center justify-center">
                <div className="z-10 group-hover:scale-110 transition-transform duration-500">
                  <ProjectIcon iconName={project.icon} size={80} />
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
                  {project.shortDesc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <button
                    onClick={() => setSelectedId(project.id)}
                    className="text-sm font-medium text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-10"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-20"
              >
                <X size={20} />
              </button>
              
              <div className="h-64 bg-slate-200 dark:bg-slate-800 relative flex items-center justify-center overflow-hidden">
                 <div className="z-10">
                   <ProjectIcon iconName={selectedProject.icon} size={120} />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <h2 className="absolute bottom-6 left-6 right-6 text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                   {selectedProject.title}
                 </h2>
              </div>
              
              <div className="p-6 md:p-8 space-y-8">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span> Problem
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span> Solution
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">{selectedProject.solution}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map(feature => (
                      <li key={feature} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                        <span className="text-primary mt-1">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">Impact</h4>
                  <ul className="space-y-2">
                    {selectedProject.impact.map(impact => (
                      <li key={impact} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                        <span className="text-secondary mt-1">✓</span> {impact}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">Project Architecture</h4>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 p-4 glass rounded-xl border border-primary/20">
                    {selectedProject.architecture?.map((step, idx) => (
                      <div key={step} className="flex items-center gap-2 md:gap-4">
                        <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700">
                          {step}
                        </div>
                        {idx < selectedProject.architecture.length - 1 && (
                          <ArrowRight className="text-primary animate-pulse" size={16} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:opacity-90 transition-opacity"
                  >
                    <Github size={20} />
                    View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
