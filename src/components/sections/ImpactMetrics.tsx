import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return <>{count}{suffix}</>;
};

const FloatCounter = ({ from = 0, to, duration = 2, decimals = 2 }: { from?: number, to: number, duration?: number, decimals?: number }) => {
  const [count, setCount] = useState(from.toFixed(decimals));

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      onUpdate(value) {
        setCount(value.toFixed(decimals));
      },
    });
    return () => controls.stop();
  }, [from, to, duration, decimals]);

  return <>{count}</>;
};

export const ImpactMetrics = () => {
  const [hasInView, setHasInView] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setHasInView(true)}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Impact <span className="text-gradient">Metrics</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center border-t-2 border-t-primary hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-shadow"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-400 mb-2">
              {hasInView ? <Counter to={250} suffix="ms" /> : "0ms"}
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">Detection Speed</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center border-t-2 border-t-secondary hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-shadow"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-secondary to-blue-400 mb-2">
              {hasInView ? <Counter to={3} suffix="+" /> : "0"}
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">Projects Built</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center border-t-2 border-t-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-shadow"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-orange-400 mb-2">
              {hasInView ? <Counter to={3} suffix="+" /> : "0"}
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">Competitions Won</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center border-t-2 border-t-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-shadow"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-emerald-400 mb-2">
              {hasInView ? <FloatCounter to={8.17} decimals={2} /> : "0.00"}
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">GPA Score</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
