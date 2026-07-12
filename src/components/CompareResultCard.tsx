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
      <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
        {testTitle} · 궁합 비교
      </p>
      <div className="flex items-center gap-4">
        <span className="text-6xl" aria-hidden="true">
          {resultA.emoji}
        </span>
        <span className="text-2xl font-bold" style={{ color: 'rgba(255,255,255,0.7)' }}>
          ×
        </span>
        <span className="text-6xl" aria-hidden="true">
          {resultB.emoji}
        </span>
      </div>
      <p className="text-5xl font-extrabold" style={{ color: '#ffffff' }}>
        {matchPercent}%
      </p>
      <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
        일치도
      </p>
      <h1 className="text-lg font-bold leading-snug" style={{ color: '#ffffff' }}>
        {getViralTitle(resultA)} × {getViralTitle(resultB)}
      </h1>
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
        {oneLiner}
      </p>
      <p className="mt-2 text-[11px] font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.7)' }}>
        {siteConfig.name} · {siteConfig.url.replace(/^https?:\/\//, '')}
      </p>
    </div>
  )
})
