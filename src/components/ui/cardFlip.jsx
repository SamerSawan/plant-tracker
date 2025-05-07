'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './card';
import Plant from '@/lib/models/Plant';
import PlantCard from './plantcard';

const CardFlip = () => {
  const [flipped, setFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setFlipped(!flipped);
      setIsAnimating(true);
    }
  }

  const succulent = new Plant(
    "Succulent",
    "Succulent",
    "2 weeks",
    "indirect sunlight",
    "4 inches",
    12
  )

  return (
    <div className="flip-card w-[380px] h-full overflow-visible" onClick={handleFlip}>
      <motion.div
        className="flip-card-inner z-10"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="flip-card-front h-full">
            <PlantCard plant={succulent}/>
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