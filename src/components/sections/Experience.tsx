import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

export const Experience = () => {
  const timeline = [
    {
      id: 1,
      type: 'education',
      title: 'B.Tech IT (Cybersecurity)',
      organization: 'Vel Tech Engineering College',
      period: 'Expected 2026',
      details: 'GPA: 8.17',
      icon: <GraduationCap size={20} />
    },
    {
      id: 2,
      type: 'experience',
      title: 'Internship: Mobile App Development',
      organization: 'NSIC Certified',
      period: 'Past',
      details: 'Hands-on experience in mobile app development methodologies and practical implementations.',
      icon: <Briefcase size={20} />
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 -translate-x-1/2 md:hidden"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-start relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full glass border-2 border-primary flex items-center justify-center text-primary z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(79,70,229,0.3)] bg-white dark:bg-slate-900">
                  {item.icon}
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="glass p-6 rounded-2xl hover-neon transition-all relative group">
                    {/* Arrow pointer for desktop */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-slate-900 border-t border-r border-slate-200 dark:border-slate-800 rotate-45 transform transition-colors group-hover:border-primary/50 ${
                      index % 2 === 0 ? '-right-2 border-t-primary/0 border-r-primary/0' : '-left-2 border-l-primary/0 border-b-primary/0'
                    }`}></div>
                    
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1 text-slate-800 dark:text-slate-200">
                      {item.title}
                    </h3>
                    <h4 className="text-md font-medium text-slate-600 dark:text-slate-400 mb-3">
                      {item.organization}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
