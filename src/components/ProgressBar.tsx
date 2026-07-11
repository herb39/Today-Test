interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100)
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-stone-400">
        <span>
          {current} / {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-1 h-2 w-full overflow-hidden rounded-full bg-stone-100"
      >
        <div
          className="h-full rounded-full bg-violet-500 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
