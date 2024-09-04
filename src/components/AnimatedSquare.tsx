import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedSquareProps {
  color: string;
  index: number;
  totalSquares: number;
}

const AnimatedSquare: React.FC<AnimatedSquareProps> = ({ color, index, totalSquares }) => {
  const position = `${index * 20}vw`;

  const variants: Variants = {
    initial: { x: '-100%' },
    animate: { x: position },
    exit: (custom: number) => ({ x: custom > index ? '100%' : `${totalSquares * 20 + 80}vw ` })
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={position}
      transition={{ duration: 0.5 }}
      style={{
        width: '20vw',
        height: '20vw',
        backgroundColor: color,
        position: 'absolute',
        left: 0,
        zIndex: totalSquares - index,
      }}
    />
  );
};

export default AnimatedSquare;