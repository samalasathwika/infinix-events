import React from 'react';
import { Star, Heart, Music, Gift, Camera, Cake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingElements() {
  const elements = [
    { Icon: Star, delay: 0 },
    { Icon: Heart, delay: 2 },
    { Icon: Music, delay: 4 },
    { Icon: Gift, delay: 6 },
    { Icon: Camera, delay: 8 },
    { Icon: Cake, delay: 10 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-200/20"
          initial={{ y: -20, x: Math.random() * 100 + '%' }}
          animate={{ 
            y: ['0%', '100%'],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 15 + Math.random() * 10,
            delay: Element.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Element.Icon size={32} />
        </motion.div>
      ))}
    </div>
  );
}
