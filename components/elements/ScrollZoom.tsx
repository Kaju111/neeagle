"use client";
import { useEffect, useState, ReactNode } from "react";

type ScrollZoomProps = {
  children: ReactNode;
  maxScale?: number;       // maximum zoom scale
  zoomSpeed?: number;      // scroll factor
  fade?: boolean;          // optionally fade out with scroll
};

export default function ScrollZoom({
  children,
  maxScale = 5.5,
  zoomSpeed = 0.001,
  fade = false,
}: ScrollZoomProps) {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.min(1 + scrollY * zoomSpeed, maxScale);
      setScale(newScale);

      if (fade) {
        const newOpacity = Math.max(1 - scrollY * 0.001, 0);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [zoomSpeed, maxScale, fade]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        opacity: fade ? opacity : 1,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
