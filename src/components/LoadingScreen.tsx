import React, { useEffect, useState } from 'react';
import { PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 z-50 flex items-center justify-center"
    >
      <div className="text-center relative">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <PartyPopper className="w-24 h-24 text-white/80 absolute -top-32 left-1/2 transform -translate-x-1/2" />
        </motion.div>
        <div className="relative">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-xl opacity-50"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider relative">
            {['I', 'n', 'f', 'i', 'n', 'i', 'x'].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block w-4"></span>
            {['E', 'v', 'e', 'n', 't', 's'].map((letter, i) => (
              <motion.span
                key={i + 7}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: (i + 7) * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>
        <motion.div 
          className="mt-8"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
}