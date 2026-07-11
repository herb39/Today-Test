import { forwardRef } from 'react'
import type { TestResult } from '../types/test'
import { siteConfig } from '../config/site'

interface ResultCardProps {
  testTitle: string
  result: TestResult
}

export const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(function ResultCard(
  { testTitle, result },
  ref,
) {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-4 rounded-3xl px-6 py-10 text-center"
      style={{
        background: `linear-gradient(160deg, ${result.color}22, ${result.color}0a)`,
      }}
    >
      <p className="text-xs font-medium text-stone-500">{testTitle}</p>
      <span className="text-7xl" aria-hidden="true">
        {result.emoji}
      </span>
      <h1 className="text-2xl font-extrabold text-stone-900">{result.title}</h1>
      <p className="text-sm leading-relaxed text-stone-600">{result.summary}</p>
      <p className="mt-2 text-[11px] font-medium tracking-wide text-stone-400">
        {siteConfig.name} · {siteConfig.url.replace(/^https?:\/\//, '')}
      </p>
    </div>
  )
})
