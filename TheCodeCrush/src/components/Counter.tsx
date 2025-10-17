"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  target: number;
  durationMs?: number; // default 1300ms
  suffix?: string;
  className?: string;
};

export default function Counter({ target, durationMs = 1300, suffix = "", className }: CounterProps) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const animate = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return <span className={className}>{value}{suffix}</span>;
}


