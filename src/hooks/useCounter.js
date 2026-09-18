import { useState, useEffect } from 'react'
import { useReveal } from './useReveal'

export function useCounter(end, duration = 800) {
  const [count, setCount] = useState(0)
  const [ref, isRevealed] = useReveal(0.5)

  useEffect(() => {
    if (!isRevealed) return

    let start = 0
    let startTimestamp = null

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      setCount(Math.floor(easeProgress * end))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [isRevealed, end, duration])

  return [ref, count]
}
