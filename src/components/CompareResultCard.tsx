import { forwardRef } from 'react'
import type { CompatibilityInsight } from '../utils/compatibility'
import { getViralTitle } from '../utils/resultDisplay'
import { siteConfig } from '../config/site'
import { mixWithBlack } from '../utils/color'

interface CompareResultCardProps {
  testTitle: string
  insight: CompatibilityInsight
}

export const CompareResultCard = forwardRef<HTMLDivElement, CompareResultCardProps>(function CompareResultCard(
  { testTitle, insight },
  ref,
) {
  const { resultA, resultB, matchPercent, oneLiner } = insight
  const bgFrom = mixWithBlack(resultA.color, 0.25)
  const bgTo = mixWithBlack(resultB.color, 0.55)

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 rounded-3xl px-6 py-10 text-center"
      style={{ background: `linear-gradient(160deg, ${bgFrom}, ${bgTo})` }}
    >
      <p className="text-xs font-medium text-white/80">{testTitle} · 궁합 비교</p>
      <div className="flex items-center gap-4">
        <span className="text-6xl drop-shadow-sm" aria-hidden="true">
          {resultA.emoji}
        </span>
        <span className="text-2xl font-bold text-white/70">×</span>
        <span className="text-6xl drop-shadow-sm" aria-hidden="true">
          {resultB.emoji}
        </span>
      </div>
      <p className="text-5xl font-extrabold text-white drop-shadow-sm">{matchPercent}%</p>
      <p className="text-xs font-medium text-white/70">일치도</p>
      <h1 className="text-lg font-bold leading-snug text-white drop-shadow-sm">
        {getViralTitle(resultA)} × {getViralTitle(resultB)}
      </h1>
      <p className="text-sm leading-relaxed text-white/90">{oneLiner}</p>
      <p className="mt-2 text-[11px] font-medium tracking-wide text-white/70">
        {siteConfig.name} · {siteConfig.url.replace(/^https?:\/\//, '')}
      </p>
    </div>
  )
})
