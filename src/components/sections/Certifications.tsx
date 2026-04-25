import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  "Python, Advanced Python, C & C++ (A Grade)",
  "Spring Boot with Angular",
  "Cybersecurity Fundamentals",
  "NSIC Certification"
];

export const Certifications = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover-neon text-center flex flex-col items-center justify-center min-h-[160px]"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <p className="font-medium text-slate-800 dark:text-slate-200">
                {cert}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
