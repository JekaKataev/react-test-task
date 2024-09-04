import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import AnimatedSquare from './AnimatedSquare';
import { RootState } from '../store/store';

const SquareContainer: React.FC = () => {
  const squares = useSelector((state: RootState) => state.squares.squares);
  
  return (
    <div style={{
      position: 'relative',
      height: '20vw',
      width: '100%',
      overflowX: 'auto',
      overflowY: 'hidden'
    }}>
      <AnimatePresence initial={false}>
        {squares.map((square, index) => (
          <AnimatedSquare 
            key={square.id} 
            color={square.color} 
            index={index}
            totalSquares={squares.length}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SquareContainer;