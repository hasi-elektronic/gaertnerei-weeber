'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* Animierter Zähler – zählt beim Scrollen hoch */

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(count, target, {
      duration,
      ease: 'easeOut',
    });

    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, target, duration, count, rounded]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
