"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number; y: number; r: number
  vx: number; vy: number
  life: number; decay: number
  hue: number; sat: number; lig: number
}

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const isAmbient = reduced || isTouch

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let dots: Dot[] = []
    let lastX = window.innerWidth / 2
    let lastY = window.innerHeight / 2
    let rafId: number
    let ambientSpawnTimer = 0

    const ctx2 = ctx!
    function resize() {
      const cvs = canvas!
      cvs.width = window.innerWidth * dpr
      cvs.height = window.innerHeight * dpr
      cvs.style.width = `${window.innerWidth}px`
      cvs.style.height = `${window.innerHeight}px`
      ctx2.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    function spawnAmbient() {
      const side = Math.floor(Math.random() * 4)
      let x: number, y: number
      const w = window.innerWidth
      const h = window.innerHeight
      if (side === 0) { x = -10; y = Math.random() * h }
      else if (side === 1) { x = w + 10; y = Math.random() * h }
      else if (side === 2) { x = Math.random() * w; y = -10 }
      else { x = Math.random() * w; y = h + 10 }
      const angle = Math.random() * Math.PI * 2
      const speed = 0.15 + Math.random() * 0.35
      dots.push({
        x, y, r: 1.5 + Math.random() * 3,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.003 + Math.random() * 0.005,
        hue: 345 + Math.random() * 20,
        sat: 60 + Math.random() * 30,
        lig: 45 + Math.random() * 20,
      })
    }

    function onMove(e: MouseEvent) {
      if (isAmbient) return
      lastX = e.clientX
      lastY = e.clientY
      const count = 2 + Math.floor(Math.random() * 2)
      for (let i = 0; i < count; i++) {
        dots.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          r: 0.8 + Math.random() * 2.2,
          vx: 0, vy: 0,
          life: 1,
          decay: 0.012 + Math.random() * 0.022,
          hue: (355 + (Math.random() * 16 - 8) + 360) % 360,
          sat: 70 + Math.random() * 20,
          lig: 48 + Math.random() * 14,
        })
      }
      if (dots.length > 600) dots.splice(0, dots.length - 600)
    }
    window.addEventListener('mousemove', onMove)

    function tick() {
      ctx2.clearRect(0, 0, canvas!.width, canvas!.height)

      if (isAmbient) {
        ambientSpawnTimer++
        if (ambientSpawnTimer % 20 === 0 && dots.length < 80) spawnAmbient()
      }

      for (let i = dots.length - 1; i >= 0; i--) {
        const d = dots[i]
        d.life -= d.decay
        if (d.life <= 0) { dots.splice(i, 1); continue }
        d.x += d.vx
        d.y += d.vy
        const alpha = d.life * (isAmbient ? 0.35 : 0.55)
        ctx2.fillStyle = `hsla(${d.hue}, ${d.sat}%, ${d.lig}%, ${alpha})`
        ctx2.beginPath()
        ctx2.arc(d.x, d.y, d.r * Math.max(0.2, d.life), 0, Math.PI * 2)
        ctx2.fill()
      }

      if (!isAmbient) {
        ctx2.fillStyle = 'rgba(230, 57, 70, 0.85)'
        ctx2.beginPath()
        ctx2.arc(lastX, lastY, 2, 0, Math.PI * 2)
        ctx2.fill()
      }

      rafId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}
    />
  )
}
