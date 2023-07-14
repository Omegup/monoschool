import { useRef, useEffect } from "react"

export function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const element = ref.current
    if (element == null) {
      return
    }

    const onClick = (e: MouseEvent) => {
      if (!element.contains(e.target as Node)) {
        console.log("click outside")
        callback()
      }
    }

    // delay it to avoid treating trigger click as click outside
    window.setTimeout(() => document.addEventListener("click", onClick), 0)
    return () => {
      window.setTimeout(
        () => document.removeEventListener("click", onClick),
        0
      )
    }
  }, [])
  return ref
}