import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * MagneticButton - Pulls toward cursor with Framer Motion spring physics on proximity
 */
export default function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.35,
  cursorText = '',
  cursorVariant = 'hover',
  as = 'button',
  href,
  ...props
}) {
  const ref = useRef(null);

  // Position offset motion values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Organic spring physics for magnetic suction effect
  const springConfig = { damping: 16, stiffness: 180, mass: 0.2 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  // Internal content parallax spring (slightly more pronounced)
  const textX = useSpring(rawX, { damping: 14, stiffness: 220, mass: 0.15 });
  const textY = useSpring(rawY, { damping: 14, stiffness: 220, mass: 0.15 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    rawX.set(distanceX);
    rawY.set(distanceY);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const Component = as === 'a' ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href}
      data-cursor={cursorVariant}
      data-cursor-text={cursorText}
      className={`relative inline-flex items-center justify-center select-none active:scale-95 transition-shadow duration-300 ${className}`}
      {...props}
    >
      <motion.span
        style={{ x: textX, y: textY }}
        className="relative z-10 flex items-center gap-2 pointer-events-none"
      >
        {children}
      </motion.span>
    </Component>
  );
}
