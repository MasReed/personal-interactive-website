import { useEffect, useState } from 'react'

export default function useOnScreen(ref, rootMargin = '0px') {
  // https://usehooks.com/useOnScreen/
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const refCopy = ref
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
      observer.observe(refCopy.current)
    }

    return () => {
      observer.unobserve(refCopy.current)
    }
  }, [ref, rootMargin])

  return isIntersecting
}
