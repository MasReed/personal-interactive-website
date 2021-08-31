import { useEffect, useState } from 'react'

export default function useOnScreen(ref, rootMargin = '0px') {
  // https://usehooks.com/useOnScreen/  
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // state updates when observer callback fires
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, rootMargin])

  return isIntersecting
}
