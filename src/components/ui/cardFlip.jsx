'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './card';

const CardFlip = () => {
  const [flipped, setFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setFlipped(!flipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="flip-card w-[380px] h-full overflow-visible" onClick={handleFlip}>
      <motion.div
        className="flip-card-inner z-10"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <Card className="flip-card-front bg-softGreen border border-softGreen flex items-center justify-center rounded-md">
          Card Flip Forward
        </Card>
        <Card className="flip-card-back bg-softGreen border border-softGreen flex items-center justify-center rounded-md">
          Card Flip Backward
        </Card>
      </motion.div>
    </div>
  );
};

export default CardFlip;