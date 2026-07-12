import { forwardRef } from 'react'
import type { TestResult } from '../types/test'
import { siteConfig } from '../config/site'
import { mixWithBlack } from '../utils/color'
import { getViralTitle } from '../utils/resultDisplay'

interface ResultCardProps {
  testTitle: string
  result: TestResult
}

export const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(function ResultCard(
  { testTitle, result },
  ref,
) {
  const bgFrom = mixWithBlack(result.color, 0.2)
  const bgTo = mixWithBlack(result.color, 0.55)

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-4 rounded-3xl px-6 py-10 text-center"
      style={{
        background: `linear-gradient(160deg, ${bgFrom}, ${bgTo})`,
      }}
    >
      <p className="text-xs font-medium text-white/80">{testTitle}</p>
      <span className="text-7xl drop-shadow-sm" aria-hidden="true">
        {result.emoji}
      </span>
      <h1 className="text-2xl font-extrabold text-white drop-shadow-sm">{getViralTitle(result)}</h1>
      <p className="text-sm leading-relaxed text-white/90">{result.summary}</p>
      <p className="mt-2 text-[11px] font-medium tracking-wide text-white/70">
        {siteConfig.name} · {siteConfig.url.replace(/^https?:\/\//, '')}
      </p>
    </div>
  )
})
