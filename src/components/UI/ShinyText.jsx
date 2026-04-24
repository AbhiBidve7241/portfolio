import { useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';

const ShinyText = ({
  text,
  speed = 2,
  color = 'var(--color-text)',
  shineColor = '#ffffff',
}) => {
  const progress = useMotionValue(0);
  const elapsed = useRef(0);

  useAnimationFrame(() => {
    elapsed.current += 16;
    const p = (elapsed.current % (speed * 1000)) / (speed * 10);
    progress.set(p);
  });

  const backgroundPosition = useTransform(progress, p => `${150 - p * 2}% center`);

  return (
    <motion.span
      style={{
        backgroundImage: `linear-gradient(120deg, ${color} 0%, ${color} 40%, ${shineColor} 50%, ${color} 60%, ${color} 100%)`,
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundPosition
      }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;

