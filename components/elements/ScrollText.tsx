"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

type ScrollTextProps = {
  children: ReactNode;
  distance?: number;  // slide distance in px
  duration?: string;  // transition duration
  threshold?: number; // when animation triggers
};

export default function ScrollText({
  children,
  distance = 20,
  duration = "3s",
  threshold = 0.2,
}: ScrollTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // stop observing once visible
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : `translateY(${distance}px)`,
        transition: `all ${duration} ease-out`,
      }}
    >
      {children}
    </div>
  );
}
