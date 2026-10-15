import React, { useRef, useEffect, useState, Suspense } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Lazy-load Spline to ensure fast initial page load and fault tolerance
const Spline = React.lazy(() => import('@splinetool/react-spline'));

/**
 * Procedural 3D Canvas Fallback:
 * A gourmet 3D Strawberry Glazed Donut & Macaron rendered in real-time
 * with physics-based mouse tracking, specular lighting, and interactive sprinkles.
 */
function ProceduralPastryCanvas({ mousePos }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let angle = 0;

    // High-DPI canvas setup
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Render loop
    const render = () => {
      angle += 0.015;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Mouse influence on 3D tilt
      const targetTiltX = (mousePos.current.y / window.innerHeight - 0.5) * 0.7;
      const targetTiltY = (mousePos.current.x / window.innerWidth - 0.5) * 0.9;
      
      const floatY = Math.sin(angle) * 14;
      const currentCenterY = centerY + floatY;

      ctx.save();
      ctx.translate(centerX, currentCenterY);

      // Draw subtle shadow on ground
      const shadowScale = 1 - Math.sin(angle) * 0.08;
      ctx.beginPath();
      ctx.ellipse(0, 160 - floatY * 0.5, 120 * shadowScale, 24 * shadowScale, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(45, 35, 30, 0.07)';
      ctx.filter = 'blur(10px)';
      ctx.fill();
      ctx.filter = 'none';

      // 3D Donut / Macaron Geometry via layered slices
      const layers = 36;
      const radiusX = 130;
      const radiusY = 70;
      const depth = 65;

      // Base dough (warm golden brioche)
      for (let i = layers; i >= 0; i--) {
        const progress = i / layers;
        const layerY = (progress - 0.5) * depth + targetTiltX * 40;
        const scale = Math.sin(progress * Math.PI) * 0.2 + 0.9;

        ctx.beginPath();
        ctx.ellipse(
          targetTiltY * 25,
          layerY,
          radiusX * scale,
          radiusY * scale,
          targetTiltY * 0.2,
          0,
          Math.PI * 2
        );

        // Dough gradient
        if (progress > 0.45 && progress < 0.6) {
          // Rose syrup / Strawberry cream filling
          ctx.fillStyle = '#FF9B9B';
        } else if (progress > 0.6) {
          // Top glaze
          const glazeGrad = ctx.createRadialGradient(
            targetTiltY * 30 - 20,
            layerY - 20,
            10,
            targetTiltY * 30,
            layerY,
            radiusX * scale
          );
          glazeGrad.addColorStop(0, '#FFB2B2');
          glazeGrad.addColorStop(0.5, '#FF8080');
          glazeGrad.addColorStop(1, '#E88B92');
          ctx.fillStyle = glazeGrad;
        } else {
          // Golden baked crust
          ctx.fillStyle = `rgb(${245 - progress * 20}, ${205 - progress * 30}, ${150 - progress * 30})`;
        }
        ctx.fill();
      }

      // Center donut hole
      for (let i = 0; i < 15; i++) {
        const progress = i / 15;
        ctx.beginPath();
        ctx.ellipse(
          targetTiltY * 25,
          (progress - 0.5) * 40 + targetTiltX * 40,
          38,
          22,
          targetTiltY * 0.2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = '#FFFDF9'; // Match vanilla background
        ctx.fill();
      }

      // Specular Strawberry Glaze Shine
      ctx.beginPath();
      ctx.ellipse(
        targetTiltY * 20 - 45,
        -18 + targetTiltX * 35,
        45,
        14,
        -0.3 + targetTiltY * 0.2,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.filter = 'blur(4px)';
      ctx.fill();
      ctx.filter = 'none';

      // Artisanal Mint & Gold Sprinkles
      const sprinkles = [
        { x: -50, y: -25, color: '#88D8B0', rot: 0.4 },
        { x: 35, y: -20, color: '#F9D56E', rot: -0.8 },
        { x: -10, y: -38, color: '#FFFDF9', rot: 0.2 },
        { x: 60, y: -8, color: '#88D8B0', rot: 1.1 },
        { x: -70, y: -5, color: '#F9D56E', rot: -0.3 },
        { x: 10, y: -15, color: '#C3AED6', rot: 0.7 },
        { x: -30, y: -12, color: '#FFFDF9', rot: -0.5 },
        { x: 45, y: -32, color: '#88D8B0', rot: 0.9 },
      ];

      sprinkles.forEach((s) => {
        ctx.save();
        ctx.translate(s.x + targetTiltY * 25, s.y + targetTiltX * 35);
        ctx.rotate(s.rot + targetTiltY * 0.3);
        ctx.beginPath();
        ctx.roundRect(-7, -2.5, 14, 5, 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = 'rgba(45, 35, 30, 0.15)';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-contain pointer-events-auto"
      style={{ touchAction: 'none' }}
    />
  );
}

/**
 * SplinePastry - Showstopper 3D Centerpiece
 * Integrates Spline 3D with procedural Canvas fallback for instant 60fps responsiveness.
 */
export default function SplinePastry() {
  const [useSpline, setUseSpline] = useState(false);
  const [splineError, setSplineError] = useState(false);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] flex items-center justify-center select-none">
      {/* Soft Ambient Pastel Halo */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-macaron-pink/20 via-macaron-rose/20 to-macaron-mint/25 blur-3xl -z-10 animate-pulse-glow pointer-events-none" />

      {/* Floating Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-5">
        <div className="w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-macaron-rose/25 animate-spin-slow" />
        <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-macaron-mint/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '28s' }} />
      </div>

      {/* 3D Asset Presentation */}
      <div className="relative w-full h-full flex items-center justify-center">
        {useSpline && !splineError ? (
          <Suspense fallback={<ProceduralPastryCanvas mousePos={mousePos} />}>
            <div className="w-full h-full">
              <Spline
                scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                onError={() => setSplineError(true)}
              />
            </div>
          </Suspense>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ProceduralPastryCanvas mousePos={mousePos} />
          </div>
        )}
      </div>

      {/* Interactive Micro Badge / Mode Switcher */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-chocolate-800/10 shadow-sm text-xs font-mono text-chocolate-700">
        <span className="w-2 h-2 rounded-full bg-macaron-mint animate-ping" />
        <span className="font-medium">3D Confection: Mouse-Reactive</span>
        <button
          onClick={() => setUseSpline(!useSpline)}
          data-cursor="pointer"
          data-cursor-text={useSpline ? 'Procedural' : 'Spline'}
          className="ml-1 text-[10px] text-macaron-strawberry font-bold uppercase tracking-wider hover:underline"
        >
          {useSpline ? 'Switch to Procedural' : 'Try Spline 3D'}
        </button>
      </div>
    </div>
  );
}
