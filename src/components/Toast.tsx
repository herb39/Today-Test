interface ToastProps {
  message: string | null
}

export function Toast({ message }: ToastProps) {
  if (!message) return null

  return (
    <div role="status" aria-live="polite" className="fixed inset-x-0 bottom-24 z-50 flex justify-center px-4">
      <div className="rounded-full bg-stone-900/90 px-4 py-2 text-sm font-medium text-white shadow-lg">
        {message}
      </div>
    </div>
  )
}
