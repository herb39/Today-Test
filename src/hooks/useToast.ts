import { useCallback, useRef, useState } from 'react'

export function useToast(duration = 2000) {
  const [message, setMessage] = useState<string | null>(null)
  const timerRef = useRef<number | undefined>(undefined)

  const showToast = useCallback(
    (text: string) => {
      setMessage(text)
      window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => setMessage(null), duration)
    },
    [duration],
  )

  return { message, showToast }
}
