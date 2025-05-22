'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './card';
import PlantCard from './plantcard';

const CardFlip = ({plant}) => {
  const [flipped, setFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setFlipped(!flipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="flip-card w-[300px] 2xl:w-[380px] h-full overflow-visible" onClick={handleFlip}>
      <motion.div
        className="flip-card-inner z-10"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="flip-card-front h-full">
            <PlantCard plant={plant}/>
        </div>
        <div className="flip-card-back h-full">
            <Card className="h-full bg-softGreen border border-softGreen flex items-center justify-center rounded-md">
                Card Flip Backward
            </Card>
        </div>
        
      </motion.div>
    </div>
  );
};

export default CardFlip;