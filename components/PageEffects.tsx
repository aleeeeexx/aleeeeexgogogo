"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

const PageEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    let animationFrameId: number

    // Laser effect
    const drawLaser = () => {
      ctx.strokeStyle = "rgba(255, 0, 0.8)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(Math.random() * canvas.width, 0)
      ctx.lineTo(Math.random() * canvas.width, canvas.height)
      ctx.stroke()
    }

    // DeepSeek code rain
    const codeRain = () => {
      ctx.fillStyle = "rgba(0, 255, 0, 0.1)"
      ctx.font = "15px Courier"

      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        ctx.fillText("DeepSeek", x, y)
      }
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (Math.random() < 0.1) drawLaser()
      codeRain()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dimensions])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
}

export default PageEffects

