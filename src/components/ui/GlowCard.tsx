"use client";

import { useState, useCallback } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export default function GlowCard({ children, className = "", as: Tag = "div" }: GlowCardProps) {
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: "50%", y: "50%" });
  }, []);

  return (
    <Tag
      className={`glow-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--mouse-x": mousePos.x,
        "--mouse-y": mousePos.y,
      } as React.CSSProperties}
    >
      <div className="glow-highlight" />
      <div className="relative z-[1]">{children}</div>
    </Tag>
  );
}
