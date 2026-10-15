import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor - The "Syrup Drop" Effect
 * High-precision Framer Motion cursor with primary dot and trailing liquid syrup drop.
 * Reacts with spring physics to clickable elements (buttons, links, project cards).
 */
export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse coordinate motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Primary dot spring physics (crisp, near-instantaneous)
  const dotSpringX = useMotionValue(-100);
  const dotSpringY = useMotionValue(-100);

  // Trailing "drop of syrup" spring physics (organic, viscous lag)
  const syrupSpringConfig = {
    damping: 24,
    stiffness: 220,
    mass: 0.55,
  };
  const syrupX = useSpring(mouseX, syrupSpringConfig);
  const syrupY = useSpring(mouseY, syrupSpringConfig);

  useEffect(() => {
    // Detect touch-only devices to avoid rendering cursor overlay
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
      dotSpringX.set(clientX);
      dotSpringY.set(clientY);

      if (!isVisible) setIsVisible(true);

      // Check what element is currently under the cursor
      const target = document.elementFromPoint(clientX, clientY);
      if (!target) return;

      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor], .interactive-card, .interactive-target');
      
      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute('data-cursor-text') || '';
        const customVariant = interactiveEl.getAttribute('data-cursor') || 'hover';
        setHoverText(customText);
        setCursorVariant(customVariant);
      } else {
        setIsHovered(false);
        setHoverText('');
        setCursorVariant('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY, dotSpringX, dotSpringY]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  // Determine dynamic colors based on cursor variant
  const getSyrupColor = () => {
    if (cursorVariant === 'mint') return 'rgba(136, 216, 176, 0.45)';
    if (cursorVariant === 'rose') return 'rgba(232, 180, 184, 0.55)';
    if (isHovered) return 'rgba(255, 155, 155, 0.45)'; // Strawberry Macaron pink
    return 'rgba(232, 180, 184, 0.35)'; // Rose syrup default
  };

  const getBorderColor = () => {
    if (cursorVariant === 'mint') return 'rgba(136, 216, 176, 0.8)';
    if (isHovered) return 'rgba(255, 155, 155, 0.85)';
    return 'rgba(232, 180, 184, 0.6)';
  };

  const getGlowShadow = () => {
    if (cursorVariant === 'mint') return '0 0 25px rgba(136, 216, 176, 0.6)';
    if (isHovered) return '0 0 28px rgba(255, 155, 155, 0.55)';
    return '0 0 12px rgba(232, 180, 184, 0.3)';
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Trailing "Syrup Drop" Outer Ring / Aura */}
      <motion.div
        style={{
          x: syrupX,
          y: syrupY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (hoverText ? 84 : 58) : 34,
          height: isHovered ? (hoverText ? 84 : 58) : 34,
          scale: isClicking ? 0.85 : 1,
          backgroundColor: getSyrupColor(),
          borderColor: getBorderColor(),
          boxShadow: getGlowShadow(),
          backdropFilter: isHovered ? 'blur(4px)' : 'blur(1px)',
        }}
        transition={{
          type: 'spring',
          mass: 0.3,
          stiffness: 300,
          damping: 20,
        }}
        className="rounded-full border border-dashed border-opacity-70 flex items-center justify-center transition-colors duration-300"
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[10px] font-bold tracking-wider uppercase text-chocolate-900 select-none text-center px-1"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Primary Dot (The Main Cursor Core) */}
      <motion.div
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovered ? 0 : 1,
          opacity: isHovered && hoverText ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 800,
          damping: 35,
        }}
        className="w-2.5 h-2.5 rounded-full bg-chocolate-800 shadow-sm"
      />
    </div>
  );
}
