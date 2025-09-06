"use client"

import { useEffect, useRef } from "react"

interface ParticleBackgroundProps {
  particleCount?: number
  className?: string
}

export default function ParticleBackground({
  particleCount = 50,
  className = "absolute inset-0 h-full w-full",
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    updateCanvasSize()

    const particles: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      pulseSpeed: number
      pulsePhase: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1 // Increased size range
        this.speedX = Math.random() * 1.5 - 0.75
        this.speedY = Math.random() * 1.5 - 0.75
        this.opacity = Math.random() * 0.8 + 0.2 // Higher opacity range
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2

        // Add some color variation
        const colors = ["rgba(255, 255, 255, ", "rgba(200, 200, 255, ", "rgba(255, 200, 255, ", "rgba(200, 255, 255, "]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Add pulsing effect
        this.pulsePhase += this.pulseSpeed
      }

      draw() {
        if (!ctx) return

        // Calculate pulsing opacity
        const pulseOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.3
        const finalOpacity = Math.max(0.1, Math.min(1, pulseOpacity))

        // Add glow effect
        ctx.shadowColor = this.color + "0.8)"
        ctx.shadowBlur = this.size * 2

        ctx.fillStyle = this.color + finalOpacity + ")"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Reset shadow for next particle
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      updateCanvasSize()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [particleCount])

  return <canvas ref={canvasRef} className={className} />
}
