'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

function spawnOnEdge(w: number, h: number): Particle {
  const side = Math.floor(Math.random() * 4)
  let x = 0, y = 0
  if (side === 0) { x = Math.random() * w; y = -10 }
  else if (side === 1) { x = w + 10; y = Math.random() * h }
  else if (side === 2) { x = Math.random() * w; y = h + 10 }
  else { x = -10; y = Math.random() * h }
  return {
    x, y,
    size: Math.random() * 2.5 + 0.8,
    speed: Math.random() * 0.35 + 0.12,
    opacity: Math.random() * 0.45 + 0.2,
  }
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const COUNT = 55
    let particles: Particle[] = Array.from({ length: COUNT }, () =>
      spawnOnEdge(canvas.width, canvas.height)
    )
    // scatter initial positions instead of all from edge
    particles = particles.map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.8,
      speed: Math.random() * 0.35 + 0.12,
      opacity: Math.random() * 0.45 + 0.2,
    }))

    let animId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cx = canvas.width / 2
      const cy = canvas.height / 2

      particles.forEach((p, i) => {
        const dx = cx - p.x
        const dy = cy - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 6) {
          particles[i] = spawnOnEdge(canvas.width, canvas.height)
          return
        }

        p.x += (dx / dist) * p.speed
        p.y += (dy / dist) * p.speed

        const fadeRatio = Math.min(1, dist / 100)
        const alpha = p.opacity * fadeRatio

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 111, 71, ${alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
