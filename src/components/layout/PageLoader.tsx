import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show loader and let assets load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-dark"
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-24 h-24 rounded-full border-t-2 border-r-2 border-primary shadow-[0_0_20px_rgba(79,70,229,0.5)]"
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-16 h-16 rounded-full border-b-2 border-l-2 border-secondary shadow-[0_0_20px_rgba(147,51,234,0.5)]"
            />
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-lg font-bold text-gradient"
            >
              GC
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
