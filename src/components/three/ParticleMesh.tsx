"use client";

import { useEffect, useRef } from "react";

export default function ParticleMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    const count = 120;
    const colors = ["#E63946", "#6366F1", "#E6394680", "#6366F180"];

    const resize = () => {
      w = canvas!.width = window.innerWidth;
      h = canvas!.height = window.innerHeight;
    };

    const init = () => {
      resize();
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: (Math.random() - 0.5) * w * 0.8,
          y: (Math.random() - 0.5) * h * 0.8,
          z: Math.random() * 3,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: 0,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    let mouseX = 0;
    let mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / w - 0.5) * 2;
      mouseY = (e.clientY / h - 0.5) * 2;
    };

    const draw = () => {
      ctx!.clearRect(0, 0, w, h);

      const cx = w / 2 + mouseX * 80;
      const cy = h / 2 + mouseY * 80;

      for (const p of particles) {
        p.x += p.vx + mouseX * 0.15 * p.z;
        p.y += p.vy + mouseY * 0.15 * p.z;
        p.z = Math.max(0.5, Math.min(3, p.z + (Math.random() - 0.5) * 0.02));

        const zFactor = 1 / p.z;
        const sx = cx + (p.x - cx) * zFactor;
        const sy = cy + (p.y - cy) * zFactor;
        const sz = p.size * zFactor;

        const alpha = Math.min(1, zFactor * 1.5);
        ctx!.beginPath();
        ctx!.arc(sx, sy, sz, 0, Math.PI * 2);
        ctx!.fillStyle = p.color.replace("80", Math.floor(alpha * 180).toString(16).padStart(2, "0"));
        ctx!.fill();

        // Connection lines for nearby particles
        for (const p2 of particles) {
          if (p === p2) continue;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.beginPath();
            ctx!.moveTo(sx, sy);
            const z2Factor = 1 / p2.z;
            const s2x = cx + (p2.x - cx) * z2Factor;
            const s2y = cy + (p2.y - cy) * z2Factor;
            ctx!.lineTo(s2x, s2y);
            ctx!.strokeStyle = `rgba(230, 57, 70, ${0.08 * (1 - dist / 120)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    init();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
