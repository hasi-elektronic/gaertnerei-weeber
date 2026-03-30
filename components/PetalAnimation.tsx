'use client';

import { useEffect, useState } from 'react';

/* Dezente fallende Blütenblätter im Hero-Bereich
   Werden per CSS animiert (siehe globals.css) */

interface Petal {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  swayDuration: number;
  opacity: number;
}

export default function PetalAnimation() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    /* 12 Blütenblätter mit zufälligen Eigenschaften */
    const generated: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 12,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 10,
      swayDuration: 3 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s, ${petal.swayDuration}s`,
            '--petal-opacity': petal.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
